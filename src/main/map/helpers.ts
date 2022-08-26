import * as sphinx from "sphinx-bridge-kevkevinpal";
import { Lsat } from "lsat-js";
import { startLinks, startNodes } from './fakeData'

export interface Node {
    id: string,
    name: string,
    type: string,
    node_type: string,
    text?: string,
    label?: string,
    colors?: string[],
    details?: Moment,
    image_url?: string,
    scale?: number,
    weight: number,
    boost?: number
}

export interface Cluster {
    id: number,
    label: string,
    type: string,
    nodes?: Node[]
}

export interface Link {
    source: string,
    target: string
}

export interface Moment {
    episode_title: string,
    link: string,
    show_title: string,
    timestamp: string,
    topics: string[],
    guests: string[],
    text: string,
    type: string,
    node_type: string,
    image_url?: string,
    weight: number,
    ref_id: string,
    boost: number,
    keyword?: boolean,
    children?: string[],

}

export interface NodesAndLinks {
    nodes: Node[],
    links: Link[]
}

const sphinxPubkey = '023d8eb306f0027b902fbdc81d33b49b6558b3434d374626f8c324979c92d47c21'

async function boostAgainstBudget(amount: number) {
    let err: any = null
    // @ts-ignore
    let res: any = await sphinx.enable(true);

    if (!res) {
        console.log('Sphinx enable failed, means no pubkey and no budget (including budget of 0)')
    }
    // @ts-ignore
    res = await sphinx.keysend(sphinxPubkey, amount)

    if (!res) {
        // rejected, ask for topup
        // @ts-ignore
        res = await sphinx.topup()
        if (!res || !res.budget || (res?.budget < amount)) {
            // topup failed
            err = new Error('Topup failed')
        } else {
            // retry keysend
            // @ts-ignore
            res = await sphinx.keysend(sphinxPubkey, amount)
            if (!res) err = new Error('Keysend failed after topup')
        }
    }

    return err
}

const boostContent = async (refId: String, amount: number) => {

    try {
        // take away sats
        // @ts-ignore

        const err = await boostAgainstBudget(amount)

        if (err) {
            throw new Error(err)
        }

        const body = {
            ref: refId,
            amount: amount
        }

        // record the boost
        const res = await fetch('https://knowledge-graph.sphinx.chat/boost',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })

        console.log('res', res);

        return [res, null]
    } catch (e) {
        console.log(e);
        return [null, e]
    }
};

const getLsat = async () => {
    // @ts-ignore
    // await sphinx.enable(true);

    try {
        const resp = await fetch("https://knowledge-graph.sphinx.chat/searching");

        const header = resp.headers.get("www-authenticate");

        let data = await resp.json();
        const lsat = Lsat.fromHeader(data.headers);

        // @ts-ignore
        const LSATRes = await sphinx.saveLsat(
            lsat.invoice,
            lsat.baseMacaroon,
            "knowledge-graph.sphinx.chat"
        );

        if (LSATRes.success == false) {
            // @ts-ignore
            await sphinx.topup()
        }

        lsat.setPreimage(LSATRes.lsat.split(":")[1]);

        const token = lsat.toToken()
        return [token, null]
    } catch (e) {
        console.log(e);
        return [null, e]
    }
};


async function getGraphData(searchterm: string) {

    console.log('searchterm', searchterm)

    try {

        let data: Moment[]
        const origin = window.location.origin

        const isDev = (origin === 'http://localhost:3000' || origin === 'http://localhost:3001' || origin === 'https://sphinx-jarvis-david.sphinx1.repl.co') ? true : false
        if (isDev) {
            console.log('is dev', origin)
            let devUrl = `https://knowledge-graph.sphinx.chat/mock_data`
            const res = await fetch(devUrl)
            data = await res.json()
        } else {
            const [lsatToken, err]: any = await getLsat()

            if (err) {
                throw new Error(err)
            }

            let apiRes = await fetch(
                `https://knowledge-graph.sphinx.chat/search?word=${searchterm}`,
                {
                    // @ts-ignore
                    headers: {
                        Authorization: lsatToken || '',
                    },
                }
            );

            data = await apiRes.json();
        }

        const _nodes: Node[] = []
        const _links: Link[] = []

        if (data.length) {
            const topicMap: any = {}
            const guestMap: any = {}

            console.log('data', data)
            // Populating nodes array with podcasts and constructing a topic map
            data.forEach(async (moment) => {

                const { children, topics, guests, boost, show_title } = moment
                // @ts-ignore

                children && children.forEach((childRefId: string) => {
                    const link: Link = {
                        source: childRefId,
                        target: moment.ref_id
                    }
                    _links.push(link)
                })

                let nodeColors: any = []

                topics && topics.forEach((topic: string) => {
                    console.log('show_title',show_title)
                    if (!topicMap[topic]) topicMap[topic] = [show_title]
                    else topicMap[topic].push(show_title)
                })

                if (moment.node_type === 'episode') {
                    guests && guests.forEach((g: string) => {
                        if (!guestMap[g]) guestMap[g] = [moment.ref_id]
                        else guestMap[g].push(moment.ref_id)
                    })
                }

                let smallImage: any = moment.image_url

                if (smallImage) {
                    smallImage = smallImage.replace('.jpg', '_s.jpg')
                }

                _nodes.push({
                    weight: moment.weight,
                    id: moment.ref_id,
                    name: moment.show_title + ":" + moment.episode_title + ":" + moment.timestamp,
                    label: moment.show_title,
                    type: moment.type,
                    node_type: moment.node_type,
                    text: moment.text,
                    details: moment,
                    image_url: smallImage,
                    colors: nodeColors,
                    boost: boost
                })


                // index++
            })



            let index = 0

            // // Adds topic nodes
            Object.keys(topicMap)
                .forEach(topic => {
                    // dont create topic node for search term (otherwise everything will be linked to it)
                    if (topic === searchterm) return

                    const topicChildren = topicMap[topic]
                    const scale = topicMap[topic].length * 2
                    const topicNodeId = 'topicnode_' + index

                    // make links to children
                    topicChildren.forEach((showTitle: string) => {
                        const show = data.find(f => f.show_title === showTitle && f.node_type === 'episode')
                        const showRefId = show?.ref_id||''
                        const link: Link = {
                                    source: showRefId,
                                    target: topicNodeId
                                    }
                        _links.push(link)
                    })

                    const topicNode: Node = {
                        id: topicNodeId,
                        name: topic,
                        weight: 0,
                        label: topic,
                        type: 'topic',
                        node_type: 'topic',
                        text: topic,
                        scale: scale,
                        colors: ['#000']
                    }

                    _nodes.push(topicNode)
                    index++
                })

            // Adds guest nodes
            Object.keys(guestMap)
                .forEach(guest => {

                    const guestChildren = guestMap[guest]
                    const scale = guestMap[guest].length * 2
                    const guestNodeId = 'guestnode_' + index

                    // make links to children
                    guestChildren.forEach((childRefId: string) => {
                        const link: Link = {
                            source: childRefId,
                            target: guestNodeId
                        }
                        _links.push(link)
                    })

                    const guestNode: Node = {
                        id: guestNodeId,
                        name: guest,
                        weight: 0,
                        label: guest,
                        type: 'guest',
                        node_type: 'guest',
                        text: guest,
                        scale: scale,
                        colors: ['#000']
                    }

                    _nodes.push(guestNode)
                    index++
                })
        }

        // create clean fake data
        // const n_ = _nodes.map((a: any) => {
        //     return { ...a }
        // })
        // const l_ = _links.map((a: any) => {
        //     return { ...a }
        // })

        // console.log('n_', n_)
        // console.log('l_', l_)

        _nodes.sort((a, b) => b.weight - a.weight)

        return { nodes: _nodes, links: _links }
    }
    catch (e) {
        console.error(e)
        return { nodes: [], links: [] }
    }
}

function getFakeGraphData() {

    let data: any = {
        nodes: [],
        links: []
    }

    for (let i = 0; i < 100; i++) {
        data.nodes.push({
            color: "#a6cee3",
            id: i,
            index: i,
            name: "Search for something",
            text: "Search the universe",
            type: "podcast",
        })
    }

    data.nodes.forEach((n: any, i: number) => {
        if (n > 0) {
            data.links.push({
                source: i - 1,
                target: i
            })
        }
    })

    return data
}

function convertFromISOtoSeconds(value: string) {
    let val: number = 0

    try {
        let splitValue = value.split(':')
        const h = parseInt(splitValue[0])
        const m = parseInt(splitValue[1])
        const s = parseInt(splitValue[2])
        val = (h * 3600) + (m * 60) + s
    } catch (e) {
        console.log(e)
    }

    return val
}

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export { boostContent, getFakeGraphData, getSampleData, getGraphData, convertFromISOtoSeconds, sleep }

function getSampleData() {
    return {
        nodes: startNodes,
        links: startLinks
    }
}
