import * as sphinx from "sphinx-bridge-kevkevinpal";
import { Lsat } from "lsat-js";


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
    guest: string[],
    text: string,
    type: string,
    node_type:string,
    image_url?: string,
    weight: number,
    ref_id: string,
    boosts: number,
    keyword?: boolean,
    children?: string[],
      
  }
  
  export interface NodesAndLinks{
    nodes: Node[],
    links: Link[]
  }

const sphinxPubkey = '023d8eb306f0027b902fbdc81d33b49b6558b3434d374626f8c324979c92d47c21'

async function boostAgainstBudget(amount:number) {
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
        
        console.log('res',res);
        
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

	if(LSATRes.success == false){
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
            let devUrl = `https://knowledge-graph.sphinx.chat/searching?word=${searchterm}&free=true`
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
                
                const { children, topics, guest } = moment
                // @ts-ignore

                children && children.forEach((childRefId: string) => {
                    const link: Link = {
                        source: moment.ref_id,
                        target: childRefId
                    }
                    _links.push(link)
                })

                let nodeColors: any = []
                topics && topics.forEach((topic: string) => {
                    if (!topicMap[topic]) topicMap[topic] = [moment.ref_id]
                    else topicMap[topic].push(moment.ref_id)
                })

                guest && guest.forEach((g: string) => {
                    if (!guestMap[g]) guestMap[g] = [moment.ref_id]
                    else guestMap[g].push(moment.ref_id)
                })

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
                    colors: nodeColors
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
                    // topicChildren.forEach((childRefId: string) => {
                    //     const link: Link = {
                    //                 source: childRefId,
                    //                 target: topicNodeId
                    //                 }
                    //     _links.push(link)
                    // })
                
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

        _nodes.sort((a, b) => b.weight - a.weight)
      
      return { nodes: _nodes, links: _links }
    }
      catch (e) {
        console.error(e)
        return {nodes: [], links: []}    
      }
  }

function getFakeGraphData() {

    let data:any = {
        nodes: [],
        links:[]
    }
    
    for (let i = 0; i < 100; i++){
        data.nodes.push({
            color: "#a6cee3",
            id: i,
            index: i,
            name: "Search for something",
            text: "Search the universe",
            type: "podcast",
        })
    }

    data.nodes.forEach((n:any,i:number)=> {
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
        val = (h*3600) + (m*60) + s    
    } catch (e) {
        console.log(e)
    }
    
    return val
}
  
const sleep = (ms:number) => new Promise(r => setTimeout(r, ms));

export { boostContent, getFakeGraphData, getSampleData, getGraphData, convertFromISOtoSeconds, sleep }

function getSampleData() {
    return {
        nodes:startNodes,
        links:startLinks
    }
}

// results of taproot 8/12/2022
const startNodes = [
    {
        "weight": 1.6199,
        "id": "da61205f-ca0c-4220-864f-f0abbe5568e4",
        "name": "Bitcoin Audible:Read 464 - Poolin s Initiative to Activate Taproot  Aaron Van Wirdum :00:05:57-00:06:28",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "by former Bitmain and more specifically, BTC.com employees, was the first Bitcoin mining pool to publicly indicate support for the Taproot upgrade. By including a custom string of data in all of the blocks that they mine, Tap Root will unlock a new range of possibilities for Bitcoin, improving privacy and expanding smart contract possibilities, de la Torre said. We think the Tap Root upgrade will benefit Bitcoin and therefore also benefit Bitcoin miners. Tap ",
        "details": {
            "boost": 0,
            "date": 1605762000,
            "description": "[[Taproot]] Effect on [[Bitcoin]]",
            "episode_title": "Read 464 - Poolin s Initiative to Activate Taproot  Aaron Van Wirdum ",
            "guest": [
                "Aaron Van Wirdum"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/0b9229a4-8cef-441c-8fc1-8e622616a44a.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN8083365362.mp3?updated=1627961540",
            "node_type": "clip",
            "ref_id": "da61205f-ca0c-4220-864f-f0abbe5568e4",
            "show_title": "Bitcoin Audible",
            "text": "by former Bitmain and more specifically, BTC.com employees, was the first Bitcoin mining pool to publicly indicate support for the Taproot upgrade. By including a custom string of data in all of the blocks that they mine, Tap Root will unlock a new range of possibilities for Bitcoin, improving privacy and expanding smart contract possibilities, de la Torre said. We think the Tap Root upgrade will benefit Bitcoin and therefore also benefit Bitcoin miners. Tap ",
            "timestamp": "00:05:57-00:06:28",
            "topics": [
                "taproot",
                "bitcoin",
                "taproot",
                "taproot",
                "bitcoin"
            ],
            "type": "podcast",
            "weight": 1.6199
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/0b9229a4-8cef-441c-8fc1-8e622616a44a_s.jpg",
        "colors": []
    },
    {
        "weight": 1.6032,
        "id": "4970df9b-f365-452d-8ea5-dd52c25e920b",
        "name": "Bitcoin Audible:Guy s Take  34 - TAPROOT IS MERGED  :00:18:48-00:25:47",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "where I really think Taproot shines. So just kind of laying the groundwork there with Lightning Network is why I think tap route is massively valuable. And one of the big things that it's going to enable is that we won't be able to see what is a Lightning Channel and what is not anymore. We will not be able to just point at the bitcoin chain and be like, this is a Lightning Channel. This is a Lightning channel. Opening, opening, opening, closing, closing, closing. This is how big the Lightning Network is. That is the Lightning Network is going to get harder and harder to tell what the hell is going on because Taproot enables obscuring all of the signature and script data. So I talked about earlier that if you have a single from address and a to address and I just have one key signing it, that's one signature. Well, if I have a one address to from address to a two address and I have a two of three multi SIG, it shows all three of the signatures that need to be met and has a little script that says if two, then you're good to go. This is valid if two of three and then signatures underneath it is met. So that's a lot of data. Tap, root and snore signatures. This is essentially what makes Taproot possible. It's a new signature scheme. Makes it possible to have all of that be a single signature. And whether or not two people signed it, whether or not one person signed it, whether or not 50 people signed it, it is still a single signature, and it looks identical to any other Taproot transaction. So if it's a multi signature, two of two with a Lightning channel, doesn't look any different than a regular transaction. If it's a five of seven vault transaction with a standard five or seven multi SIG and then a time lock clause that if it's not met after 100 days. You can unlock it with this two of three signature. All of that wrapped up into a single. Like what would be normally a really long. Incredibly data heavy signature and script looks like any other transaction. Just a single script and whatever inputs to whatever outputs would look just as if one person signed it. And now some people say, oh, goody scaling. We can fit a couple more transactions in per block. I don't care about that. I mean, it's cool. Great. Cheaper transactions, also very good. This is a decent improvement. We want to be as efficient as possible with how much data we have to put on chain. But the two places where this really shines are validation time, the amount of computation it takes to prove that the signature has been met. I mean, think about it. If you've got a five of seven, you have to validate five things if it's signed properly and then run through the whole script, whatever it is, Taproot not only is the signature itself faster to validate, but it's only one signature. So if you've ever done a full sync of a bitcoin node, you know that the first 200,000 blocks fly. Like, just fly. Why? Because they're mostly empty. They're just barely a handful of transactions. You know, it's only like block I don't know, what was it? Shit, I'm not going to know. When the Genesis transaction was made, when the very first transaction was made to how. And I'm very upset. I have failed as Guy Swan. I have fallen from the throne. I'm going to have to go to my own calendar on the crypto economy.com calendar, alright? And command F transaction. There you are. Genesis transaction day, block 170. All this for just a random side point. Block 170 was the very first transaction that happened where Satoshi sent to halfini ten bitcoin. So this and the incredibly light, almost nonexistent use of bitcoin for the first 200,000 or so blocks, they just fly in the sync process because there's so little data to validate. And it's just easy. The computer just zips right through it. But then you start getting into like blocks 300,000 and stuff, and you're starting to see blocks all consistently have transactions and some big transactions like start to come in. And then you'll notice when you're in 4000 and 5000, it's slowing to a crawl. That's because you have to validate it all. You have to validate all the signatures, you have to run through all the scripts and all this stuff. And of course, the blocks got bigger too. So this was one of the things about SegWit that was actually kind of contentious, was that it does add a lot more data to validate, and this threatens Bitcoin's decentralization. It threatens the network resilience to recover. If a bug happens or something, bunch of nodes go down, or if there's a great firewall of China lockdown on being able to send Bitcoin information like et cetera, et cetera. We want to be able to bring up brand new nodes in the case that something goes wrong, or in the case that we add 20 million users. You don't want them to be dependent on the same. You want subsequently a ton more nodes when there are a ton more users on the network. Otherwise it's increasingly getting centralized to just bitcoin maximalists validating the network. And we don't want that. We want everyone to be validating. The network, all services, all businesses, everybody who has a substantial amount of savings. We want as many nodes as possible, so that's continuing to get harder and continuing to require more and more computational power is not a good thing. This is where Tap root ",
        "details": {
            "boost": 0,
            "date": 1602820800,
            "description": "Why [[Taproot]] is Massive Valuable?",
            "episode_title": "Guy s Take  34 - TAPROOT IS MERGED  ",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/6377c14f-551c-44e2-b0d9-564cd519503a.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN3029808295.mp3?updated=1627960381",
            "node_type": "clip",
            "ref_id": "4970df9b-f365-452d-8ea5-dd52c25e920b",
            "show_title": "Bitcoin Audible",
            "text": "where I really think Taproot shines. So just kind of laying the groundwork there with Lightning Network is why I think tap route is massively valuable. And one of the big things that it's going to enable is that we won't be able to see what is a Lightning Channel and what is not anymore. We will not be able to just point at the bitcoin chain and be like, this is a Lightning Channel. This is a Lightning channel. Opening, opening, opening, closing, closing, closing. This is how big the Lightning Network is. That is the Lightning Network is going to get harder and harder to tell what the hell is going on because Taproot enables obscuring all of the signature and script data. So I talked about earlier that if you have a single from address and a to address and I just have one key signing it, that's one signature. Well, if I have a one address to from address to a two address and I have a two of three multi SIG, it shows all three of the signatures that need to be met and has a little script that says if two, then you're good to go. This is valid if two of three and then signatures underneath it is met. So that's a lot of data. Tap, root and snore signatures. This is essentially what makes Taproot possible. It's a new signature scheme. Makes it possible to have all of that be a single signature. And whether or not two people signed it, whether or not one person signed it, whether or not 50 people signed it, it is still a single signature, and it looks identical to any other Taproot transaction. So if it's a multi signature, two of two with a Lightning channel, doesn't look any different than a regular transaction. If it's a five of seven vault transaction with a standard five or seven multi SIG and then a time lock clause that if it's not met after 100 days. You can unlock it with this two of three signature. All of that wrapped up into a single. Like what would be normally a really long. Incredibly data heavy signature and script looks like any other transaction. Just a single script and whatever inputs to whatever outputs would look just as if one person signed it. And now some people say, oh, goody scaling. We can fit a couple more transactions in per block. I don't care about that. I mean, it's cool. Great. Cheaper transactions, also very good. This is a decent improvement. We want to be as efficient as possible with how much data we have to put on chain. But the two places where this really shines are validation time, the amount of computation it takes to prove that the signature has been met. I mean, think about it. If you've got a five of seven, you have to validate five things if it's signed properly and then run through the whole script, whatever it is, Taproot not only is the signature itself faster to validate, but it's only one signature. So if you've ever done a full sync of a bitcoin node, you know that the first 200,000 blocks fly. Like, just fly. Why? Because they're mostly empty. They're just barely a handful of transactions. You know, it's only like block I don't know, what was it? Shit, I'm not going to know. When the Genesis transaction was made, when the very first transaction was made to how. And I'm very upset. I have failed as Guy Swan. I have fallen from the throne. I'm going to have to go to my own calendar on the crypto economy.com calendar, alright? And command F transaction. There you are. Genesis transaction day, block 170. All this for just a random side point. Block 170 was the very first transaction that happened where Satoshi sent to halfini ten bitcoin. So this and the incredibly light, almost nonexistent use of bitcoin for the first 200,000 or so blocks, they just fly in the sync process because there's so little data to validate. And it's just easy. The computer just zips right through it. But then you start getting into like blocks 300,000 and stuff, and you're starting to see blocks all consistently have transactions and some big transactions like start to come in. And then you'll notice when you're in 4000 and 5000, it's slowing to a crawl. That's because you have to validate it all. You have to validate all the signatures, you have to run through all the scripts and all this stuff. And of course, the blocks got bigger too. So this was one of the things about SegWit that was actually kind of contentious, was that it does add a lot more data to validate, and this threatens Bitcoin's decentralization. It threatens the network resilience to recover. If a bug happens or something, bunch of nodes go down, or if there's a great firewall of China lockdown on being able to send Bitcoin information like et cetera, et cetera. We want to be able to bring up brand new nodes in the case that something goes wrong, or in the case that we add 20 million users. You don't want them to be dependent on the same. You want subsequently a ton more nodes when there are a ton more users on the network. Otherwise it's increasingly getting centralized to just bitcoin maximalists validating the network. And we don't want that. We want everyone to be validating. The network, all services, all businesses, everybody who has a substantial amount of savings. We want as many nodes as possible, so that's continuing to get harder and continuing to require more and more computational power is not a good thing. This is where Tap root ",
            "timestamp": "00:18:48-00:25:47",
            "topics": [
                "taproot",
                "taproot",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.6032
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/6377c14f-551c-44e2-b0d9-564cd519503a_s.jpg",
        "colors": []
    },
    {
        "weight": 1.5803,
        "id": "346e5c8a-3eb5-489f-9443-8f5a09520cfe",
        "name": "The Anita Posch Show  A Bitcoin Only Podcast:Last Week in Bitcoin  Don t Mess with Bitcoin:00:10:03-00:11:39",
        "label": "The Anita Posch Show  A Bitcoin Only Podcast",
        "type": "podcast",
        "node_type": "clip",
        "text": "activation. What is Taproot? In short, it's a softwork to the Bitcoin network, a software change that will improve the scripting capabilities and most importantly, the privacy of Bitcoin and Lightning by making channels look like regular Bitcoin transactions. And with tab root, even the most complex smart contracts would, on the blockchain, typically be indistinguishable from regular transactions. Since Bitcoin is the best chance to secure our financial privacy in the future, it's very important that Tap route is activated. To start the activation process, 90% of the mine blocks have to signal the deployment by their mining pools. The signaling method is called Speedy Trial, and it works in periods of 2016 blocks, meaning that within a 2016 block period, 90% or 1815 of the 2016 blocks have to signal for readiness. It's not necessarily over if one period does not succeed to reach 90%, it just means that we will have to wait until the next period. The speedy trial ends in August. After this, no speedy trial deployments are possible anymore, and a new software deployment method has to be developed. But if 90% of the blocks signal readiness within a period, the Taproot software will be activated in November on a website called Taprut Watch, you can watch the current state of the signaling. Old man yelling ",
        "details": {
            "boost": 0,
            "date": 1620360000,
            "description": "[[Anita Posch]] The [[Taproot]] activation",
            "episode_title": "Last Week in Bitcoin  Don t Mess with Bitcoin",
            "guest": [
                "Anita Posch"
            ],
            "image_url": "",
            "keyword": true,
            "link": "https://bitcoinundco.com/en/podlove/file/1858/s/feed/c/mp3/112-en.mp3",
            "node_type": "clip",
            "ref_id": "346e5c8a-3eb5-489f-9443-8f5a09520cfe",
            "show_title": "The Anita Posch Show  A Bitcoin Only Podcast",
            "text": "activation. What is Taproot? In short, it's a softwork to the Bitcoin network, a software change that will improve the scripting capabilities and most importantly, the privacy of Bitcoin and Lightning by making channels look like regular Bitcoin transactions. And with tab root, even the most complex smart contracts would, on the blockchain, typically be indistinguishable from regular transactions. Since Bitcoin is the best chance to secure our financial privacy in the future, it's very important that Tap route is activated. To start the activation process, 90% of the mine blocks have to signal the deployment by their mining pools. The signaling method is called Speedy Trial, and it works in periods of 2016 blocks, meaning that within a 2016 block period, 90% or 1815 of the 2016 blocks have to signal for readiness. It's not necessarily over if one period does not succeed to reach 90%, it just means that we will have to wait until the next period. The speedy trial ends in August. After this, no speedy trial deployments are possible anymore, and a new software deployment method has to be developed. But if 90% of the blocks signal readiness within a period, the Taproot software will be activated in November on a website called Taprut Watch, you can watch the current state of the signaling. Old man yelling ",
            "timestamp": "00:10:03-00:11:39",
            "topics": [
                "anita posch",
                "taproot",
                "taproot",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.5803
        },
        "image_url": "",
        "colors": []
    },
    {
        "weight": 1.5735999999999999,
        "id": "21fa7758-8c64-4498-af23-473137bb62d5",
        "name": "The Anita Posch Show  A Bitcoin Only Podcast:Bitcoin on the Moon - Last Week in Bitcoin:00:01:07-00:02:08",
        "label": "The Anita Posch Show  A Bitcoin Only Podcast",
        "type": "podcast",
        "node_type": "clip",
        "text": "Tap root lockin may be successful soon. Last week I was explaining the advantages of a technical improvement of the bitcoin software called Taproot which improves scalability privacy and sets up foundational scaffolding for future improvements. All decisions in bitcoin to adapt the software have to be community based. Any user can decide freely which software version to run. In the last week, the miners had the possibility to signal if they will adapt tabloid or not. Now, 97% of all miners are sending positive signals in their blocks, which means that in about ten days, Taproot will be automatically locked in and the soft fork will be deployed in November. This is great news and a huge step forward in strengthening bitcoin's privacy, neutrality and permissionlessness, which makes it unique in the whole cryptocurrency space. ",
        "details": {
            "boost": 0,
            "date": 1622779200,
            "description": "[[Anita Posch]] [[Taproot]] on the way",
            "episode_title": "Bitcoin on the Moon - Last Week in Bitcoin",
            "guest": [
                "Anita Posch"
            ],
            "image_url": "",
            "keyword": true,
            "link": "https://bitcoinundco.com/en/podlove/file/1933/s/feed/c/mp3/120-en.mp3",
            "node_type": "clip",
            "ref_id": "21fa7758-8c64-4498-af23-473137bb62d5",
            "show_title": "The Anita Posch Show  A Bitcoin Only Podcast",
            "text": "Tap root lockin may be successful soon. Last week I was explaining the advantages of a technical improvement of the bitcoin software called Taproot which improves scalability privacy and sets up foundational scaffolding for future improvements. All decisions in bitcoin to adapt the software have to be community based. Any user can decide freely which software version to run. In the last week, the miners had the possibility to signal if they will adapt tabloid or not. Now, 97% of all miners are sending positive signals in their blocks, which means that in about ten days, Taproot will be automatically locked in and the soft fork will be deployed in November. This is great news and a huge step forward in strengthening bitcoin's privacy, neutrality and permissionlessness, which makes it unique in the whole cryptocurrency space. ",
            "timestamp": "00:01:07-00:02:08",
            "topics": [
                "anita posch",
                "taproot",
                "taproot",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.5735999999999999
        },
        "image_url": "",
        "colors": []
    },
    {
        "weight": 1.568,
        "id": "4717996c-fe96-4356-8bdd-89e6bae75491",
        "name": "Bitcoin Audible:Guy s Take  34 - TAPROOT IS MERGED  :00:26:49-00:28:30",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "big thing that Taproot is bringing to the base chain that's really difficult to achieve. And luckily all the economics of all of this are aligned properly. To make this happen is privacy. I can have a five or seven multi SIG vault with time lock, with a backup contract, with a three of five in case of something goes wrong, with a lawyer, with multiple people in my family of like separate keys, all of this written into a script in Taproot, and nobody will be able to look at the blockchain and know that any of it is there. I will be able to open a Lightning network channel and no one will have a clue that I have opened up a Lightning network channel. If I want to keep that private. My channel will not respond to requests on the gossip network. I will not route, but I will be able to spend onion routed transactions on the Lightning network without anyone knowing I'm connected to it and I can close it without anyone knowing that I was on it. Coin Joins Batching Transactions now there is something called Cross Input Signature Aggregation that is not in this version, but basically we are one step closer. This is the signature scheme needed in order to then write that code. So this is step one of that process doing so and what that ",
        "details": {
            "boost": 0,
            "date": 1602820800,
            "description": "[[Privacy]] Of [[Taproot]]",
            "episode_title": "Guy s Take  34 - TAPROOT IS MERGED  ",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/6377c14f-551c-44e2-b0d9-564cd519503a.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN3029808295.mp3?updated=1627960381",
            "node_type": "clip",
            "ref_id": "4717996c-fe96-4356-8bdd-89e6bae75491",
            "show_title": "Bitcoin Audible",
            "text": "big thing that Taproot is bringing to the base chain that's really difficult to achieve. And luckily all the economics of all of this are aligned properly. To make this happen is privacy. I can have a five or seven multi SIG vault with time lock, with a backup contract, with a three of five in case of something goes wrong, with a lawyer, with multiple people in my family of like separate keys, all of this written into a script in Taproot, and nobody will be able to look at the blockchain and know that any of it is there. I will be able to open a Lightning network channel and no one will have a clue that I have opened up a Lightning network channel. If I want to keep that private. My channel will not respond to requests on the gossip network. I will not route, but I will be able to spend onion routed transactions on the Lightning network without anyone knowing I'm connected to it and I can close it without anyone knowing that I was on it. Coin Joins Batching Transactions now there is something called Cross Input Signature Aggregation that is not in this version, but basically we are one step closer. This is the signature scheme needed in order to then write that code. So this is step one of that process doing so and what that ",
            "timestamp": "00:26:49-00:28:30",
            "topics": [
                "privacy",
                "taproot",
                "taproot",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.568
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/6377c14f-551c-44e2-b0d9-564cd519503a_s.jpg",
        "colors": []
    },
    {
        "weight": 1.5331000000000001,
        "id": "e6b57553-28bc-4d37-9166-9d441fc360bd",
        "name": "Bitcoin Audible:Read 584 - Yes  Bitcoin is a Smart Contract Platform  Shinobi :00:50:29-00:55:29",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "changes this. Tap root is a huge improvement and basically checks off the last piece of the box for the desirable smart contract platform. Tap Root essentially turns all of the arrangements, the different branches and all of the participants in a multi SIG contract in any smart contract, no matter how complex, and basically boils it all down to just a public key. So all of the specific participants and possible outcomes of the contract are invisible. And the only time that anything is exposed, even during all the cooperative arrangements or the cooperative exits and exchanges of any sort of Taproot based contract, you don't see anything. You still just see the public key. None of the details are ever exposed. It is only in the case that you have to use a branch of it in contesting the contract to enforce it. In the case of a non cooperative exit, it's kind of like a Lightning channel, right? You don't have to use there's this branch where you have to enforce your ownership if the other party cheats you. But if you don't have to use that, you both just sign with the latest state and withdraw your coins from the channel. Taproot is kind of like that. As long as the parties that need to sign agree on the outcome of the contract, well, everybody can just sign and it's just a public key. But if someone needs to enforce their branch because the parties disappeared or they have a backup clause because somebody lost their keys, someone needs to go to a lawyer who is part of this multi SIG and they need to sign to enforce some arrangement because they didn't deliver on their 1 million glass iPhone covers, whatever the hell it is. Well then that one branch needs to be exposed in order to enforce it. But all the other potential branches, all the other lawyers that may have had keys involved in this, all the other backup clauses for all of the other participants, none of that needs to be revealed, just the branch that was needed in order to produce a mathematically valid signature. So it's going to be really interesting to see what gets built with this and it's awesome to kind of see that last check box, right? Like we need privacy in the smart contracts. And Nick Zabo laid out what the hope was for a way to issue these things. And Bitcoin is a profound innovation when it comes to the idea of an arbiter for a smart contract in money, for a monetary contract and to see something, to have something written back in, I think it was 1996, and see where we are today in the ability to see it come to fruition. It's really just kind of amazing. What an incredible what an incredible thing to watch all of these ideas of the cypherpunks become a reality, but then also at the same time watch crypto so badly crucify the basic idea in this hype machine of absurd, confusing marketing. It just feels like quantum networks and blockchains. It's all god, it's just all obnoxious sometimes. But if you really want to know, it's funny. This whole article goes into a lot of detail, right? But for the simplest, like, no bullshit answer, shinobi sums it all up in the last phrase, the very last line, to answer the question of what is a smart contract, literally everything occurring on a blockchain. So if anybody asks you that again and does Bitcoin have smart contracts, that's what you can say. Yes, bitcoin is nothing but a smart contract platform. All right, that'll do it. I think I've blabbed enough at this point. A huge thank you. Thanks to Shinobi for writing this. And I need to do I think he had another one, actually, that's about if I'm not mistaken, I'll have to go back through all my potential reads list, but I've been meaning to get back on and really jump into the differences between Tap root versus the script that Bitcoin has had, because we haven't touched on that in a really long time. And it's certainly worth taking another look at and seeing just how expansive Tap route is in the context of taking the puzzle pieces that are already there and allowing us to make far larger and more complex arrangements within essentially the same sort of framework. But anyway, ",
        "details": {
            "boost": 0,
            "date": 1638939600,
            "description": "The analogy  of [[Taproot]] with [[Bitcoin's script]]",
            "episode_title": "Read 584 - Yes  Bitcoin is a Smart Contract Platform  Shinobi ",
            "guest": [
                "Shinobi"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN7361076806.mp3?updated=1639069388",
            "node_type": "clip",
            "ref_id": "e6b57553-28bc-4d37-9166-9d441fc360bd",
            "show_title": "Bitcoin Audible",
            "text": "changes this. Tap root is a huge improvement and basically checks off the last piece of the box for the desirable smart contract platform. Tap Root essentially turns all of the arrangements, the different branches and all of the participants in a multi SIG contract in any smart contract, no matter how complex, and basically boils it all down to just a public key. So all of the specific participants and possible outcomes of the contract are invisible. And the only time that anything is exposed, even during all the cooperative arrangements or the cooperative exits and exchanges of any sort of Taproot based contract, you don't see anything. You still just see the public key. None of the details are ever exposed. It is only in the case that you have to use a branch of it in contesting the contract to enforce it. In the case of a non cooperative exit, it's kind of like a Lightning channel, right? You don't have to use there's this branch where you have to enforce your ownership if the other party cheats you. But if you don't have to use that, you both just sign with the latest state and withdraw your coins from the channel. Taproot is kind of like that. As long as the parties that need to sign agree on the outcome of the contract, well, everybody can just sign and it's just a public key. But if someone needs to enforce their branch because the parties disappeared or they have a backup clause because somebody lost their keys, someone needs to go to a lawyer who is part of this multi SIG and they need to sign to enforce some arrangement because they didn't deliver on their 1 million glass iPhone covers, whatever the hell it is. Well then that one branch needs to be exposed in order to enforce it. But all the other potential branches, all the other lawyers that may have had keys involved in this, all the other backup clauses for all of the other participants, none of that needs to be revealed, just the branch that was needed in order to produce a mathematically valid signature. So it's going to be really interesting to see what gets built with this and it's awesome to kind of see that last check box, right? Like we need privacy in the smart contracts. And Nick Zabo laid out what the hope was for a way to issue these things. And Bitcoin is a profound innovation when it comes to the idea of an arbiter for a smart contract in money, for a monetary contract and to see something, to have something written back in, I think it was 1996, and see where we are today in the ability to see it come to fruition. It's really just kind of amazing. What an incredible what an incredible thing to watch all of these ideas of the cypherpunks become a reality, but then also at the same time watch crypto so badly crucify the basic idea in this hype machine of absurd, confusing marketing. It just feels like quantum networks and blockchains. It's all god, it's just all obnoxious sometimes. But if you really want to know, it's funny. This whole article goes into a lot of detail, right? But for the simplest, like, no bullshit answer, shinobi sums it all up in the last phrase, the very last line, to answer the question of what is a smart contract, literally everything occurring on a blockchain. So if anybody asks you that again and does Bitcoin have smart contracts, that's what you can say. Yes, bitcoin is nothing but a smart contract platform. All right, that'll do it. I think I've blabbed enough at this point. A huge thank you. Thanks to Shinobi for writing this. And I need to do I think he had another one, actually, that's about if I'm not mistaken, I'll have to go back through all my potential reads list, but I've been meaning to get back on and really jump into the differences between Tap root versus the script that Bitcoin has had, because we haven't touched on that in a really long time. And it's certainly worth taking another look at and seeing just how expansive Tap route is in the context of taking the puzzle pieces that are already there and allowing us to make far larger and more complex arrangements within essentially the same sort of framework. But anyway, ",
            "timestamp": "00:50:29-00:55:29",
            "topics": [
                "taproot",
                "bitcoin's script",
                "taproot",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.5331000000000001
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "weight": 1.5274999999999999,
        "id": "fd743028-4776-4f63-aad8-5f6b9bbce7fe",
        "name": "BTC Sessions:NEWS ROUNDUP  BTC Price Spikes With Inflation  Taproot Activation Imminent ep214:00:21:59-00:25:31",
        "label": "BTC Sessions",
        "type": "podcast",
        "node_type": "clip",
        "text": "and that will lock in and activate and allow you to utilize Taproot transactions. Now what do those do? Let's just read a little bit here. This from Bitcoin magazine. In short, at the highest level of abstraction possible, the Bitcoin Tap Root soft fork will optimize scalability, Privacy and smart contract functionality. It will bring about a new address type, allowing Bitcoin spending to look similar regardless of whether the sender is making a simple payment, a complex multi signature payment, or using the Lightning network. Moreover, Tap Root addresses will allow users to save on transaction fees. The more complex the spending conditions, the more the user will save compared to previous address types. By reducing the transaction size and making nearly any transaction appear like a simple single signature one, Tap Root will also enable larger and more complex operations to be deployed on Bitcoin that were previously unfeasible or almost impossible. So it's a pretty big deal. Most people the average Bitcoin that's maybe not like super deep into this thing. And for sure, mainstream coverage of Bitcoin. Is not going to cover this, but it is a massive improvement. It actually makes aggregated transactions and coin join and things like that down the line. It effectively makes it cheaper to do. These complex things than to just do. A regular transaction or make it on. Par with doing some stuff like that. So in something like a coin join. Where a whole bunch of people are. Signing eventually with Schnor signatures, you can. Get signature aggregation, which means taking the. Signatures of a whole bunch of different people all at once and compacting them. Down into a single signature, which uses a lot less space, which is much. More efficient using the Bitcoin blockchain, which cuts down on fees for basically everybody. Because again, we're optimizing the base layer. And this is what I love about. Bitcoin protocol development is everybody is so focused on optimizing the base layer, so we get the most bang for our buck. So that decades out when the entire planet is using Bitcoin in various ways, using Lightning and using side chains and using other things. All of a sudden you have this incredibly efficient base layer where people are thoughtful about how they use it. And yes, we will have full block. Still, we'll have high fees on the base layer, but those high fees will basically be, I don't want to say socialize. It's a bad word, but basically it. Kind of divvies up those fees amongst. Everybody that is using the base layer in a way where if you're using Lightning or something like that, maybe you. Create a channel alongside, I don't know, a thousand other people at the same. Time, and you all kind of split on the transaction fee to make that. Happen because it's all aggregated into one and it's very optimized in terms of block space usage. So sorry, I've been rambling a little bit, but this is a big deal. It's important. It makes Bitcoin much, much better. It improves upon it and a lot. Of people are sleeping on it. So exciting stuff. Let's keep moving here. Apple ",
        "details": {
            "boost": 0,
            "date": 1636693200,
            "description": "Why Should You Care About [[Taproot]], the Next Major [[Bitcoin Upgrade]]",
            "episode_title": "NEWS ROUNDUP  BTC Price Spikes With Inflation  Taproot Activation Imminent ep214",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b8a8edf8-bbe7-45c7-9fb9-5673acb4d1bd.jpg",
            "keyword": true,
            "link": "https://anchor.fm/s/11e95d20/podcast/play/43217075/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-10-12%2F81681f8e-4931-7ed9-6dc1-424b1a764d1b.mp3",
            "node_type": "clip",
            "ref_id": "fd743028-4776-4f63-aad8-5f6b9bbce7fe",
            "show_title": "BTC Sessions",
            "text": "and that will lock in and activate and allow you to utilize Taproot transactions. Now what do those do? Let's just read a little bit here. This from Bitcoin magazine. In short, at the highest level of abstraction possible, the Bitcoin Tap Root soft fork will optimize scalability, Privacy and smart contract functionality. It will bring about a new address type, allowing Bitcoin spending to look similar regardless of whether the sender is making a simple payment, a complex multi signature payment, or using the Lightning network. Moreover, Tap Root addresses will allow users to save on transaction fees. The more complex the spending conditions, the more the user will save compared to previous address types. By reducing the transaction size and making nearly any transaction appear like a simple single signature one, Tap Root will also enable larger and more complex operations to be deployed on Bitcoin that were previously unfeasible or almost impossible. So it's a pretty big deal. Most people the average Bitcoin that's maybe not like super deep into this thing. And for sure, mainstream coverage of Bitcoin. Is not going to cover this, but it is a massive improvement. It actually makes aggregated transactions and coin join and things like that down the line. It effectively makes it cheaper to do. These complex things than to just do. A regular transaction or make it on. Par with doing some stuff like that. So in something like a coin join. Where a whole bunch of people are. Signing eventually with Schnor signatures, you can. Get signature aggregation, which means taking the. Signatures of a whole bunch of different people all at once and compacting them. Down into a single signature, which uses a lot less space, which is much. More efficient using the Bitcoin blockchain, which cuts down on fees for basically everybody. Because again, we're optimizing the base layer. And this is what I love about. Bitcoin protocol development is everybody is so focused on optimizing the base layer, so we get the most bang for our buck. So that decades out when the entire planet is using Bitcoin in various ways, using Lightning and using side chains and using other things. All of a sudden you have this incredibly efficient base layer where people are thoughtful about how they use it. And yes, we will have full block. Still, we'll have high fees on the base layer, but those high fees will basically be, I don't want to say socialize. It's a bad word, but basically it. Kind of divvies up those fees amongst. Everybody that is using the base layer in a way where if you're using Lightning or something like that, maybe you. Create a channel alongside, I don't know, a thousand other people at the same. Time, and you all kind of split on the transaction fee to make that. Happen because it's all aggregated into one and it's very optimized in terms of block space usage. So sorry, I've been rambling a little bit, but this is a big deal. It's important. It makes Bitcoin much, much better. It improves upon it and a lot. Of people are sleeping on it. So exciting stuff. Let's keep moving here. Apple ",
            "timestamp": "00:21:59-00:25:31",
            "topics": [
                "taproot",
                "bitcoin upgrade",
                "taproot",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.5274999999999999
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b8a8edf8-bbe7-45c7-9fb9-5673acb4d1bd_s.jpg",
        "colors": []
    },
    {
        "weight": 1.5258,
        "id": "00d21ae6-f66c-4eb3-9ee2-fe78f2f3aea4",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Payment Pools and Taproot - NADO 6:00:20:11-00:21:14",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "different ways to actually accomplish this. Yeah. And maybe this is also a good time to bring the bad news. There really isn't any working system out there yet that does this partially because we still need Taproot because it just makes it otherwise it's not terribly useful. Yeah. It's built on Taproot That's where the benefits of the private updates come from. Am I saying that right? Yeah, I think so. Like the collaborative updates of the state of the pool. So whatever the pool is can update without revealing the update, especially if everybody agrees. Then it's very nice, this tapworth feature that uses shore, where you can combine signatures and make it look like one signature, because otherwise if you have three participants, you could make a pool without Taproot. But every time you do something at the pool, it's completely obvious how many people there are in the pool and what they're doing. Yeah. So basically there are three different designs. Yeah, I say. So let's start with the first one or ",
        "details": {
            "boost": 0,
            "date": 1601006400,
            "description": "The drawback to [[Taproot]]",
            "episode_title": "Payment Pools and Taproot - NADO 6",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": true,
            "link": "https://traffic.libsyn.com/secure/nadobtc/NADO_-_Episode_6_v2.mp3?dest-id=2366201",
            "node_type": "clip",
            "ref_id": "00d21ae6-f66c-4eb3-9ee2-fe78f2f3aea4",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "different ways to actually accomplish this. Yeah. And maybe this is also a good time to bring the bad news. There really isn't any working system out there yet that does this partially because we still need Taproot because it just makes it otherwise it's not terribly useful. Yeah. It's built on Taproot That's where the benefits of the private updates come from. Am I saying that right? Yeah, I think so. Like the collaborative updates of the state of the pool. So whatever the pool is can update without revealing the update, especially if everybody agrees. Then it's very nice, this tapworth feature that uses shore, where you can combine signatures and make it look like one signature, because otherwise if you have three participants, you could make a pool without Taproot. But every time you do something at the pool, it's completely obvious how many people there are in the pool and what they're doing. Yeah. So basically there are three different designs. Yeah, I say. So let's start with the first one or ",
            "timestamp": "00:20:11-00:21:14",
            "topics": [
                "taproot",
                "taproot",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.5258
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 1.5199,
        "id": "16574814-fb92-474c-8145-2a604633f43f",
        "name": "Bitcoin Audible:Chat 44 - 2 Bitcoiners Talking Bitcoin with Citizen Bitcoin:01:02:57-01:11:44",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "some Taproot man. Like, you've got the hashtag in your Twitter handle now, hashtag Taproot 2020. So I did the same and want to try to spread that idea around. We need to get this thing going. Right. So why is tapper so important to get out sooner than later? I genuinely think that I still want a lot of new development and new features to come to the Bitcoin chain, like on chain, that obviously would require softworks. But as far as authentication of the code goes, I think if we got Taproot I would be okay with Ossifying after that if we couldn't get anything else in. Because I think what's increasingly going to happen is that contracts and signatures and the scripts that are involved in these things and the encumbrances of attaching a public key or signing with a hash of some other data or some other secret or the output of some other program or something into the signature of a transaction. I think those things are going to become so widespread that it's important that we make those as efficient. Private. And capable as possible. Absolutely. And right now, you basically have to tell the Bitcoin chain all of the possible scripts. You have to write this huge tree, and you have to publish this whole tree to the Bitcoin blockchain, which means it costs a fortune. It's a massive data hog. And more importantly, not only is it a data hog that's expensive for the person issuing the transaction, but it's also a huge burden on the computation of validating the chain. Yes. After you get to multi SIG and like Lightning network and all of these transactions. While you're syncing up a node. All the empty blocks up to block 200,000 or something like that go in like an hour. They like it just plows through all of them. And then it starts to slow down for another 200,000 when blocks are kind of full and you're getting full like 1 MB blocks and stuff. And we're kind of getting to that period where transactions are really heavy, but then you kind of get into the complex transactions and those last blocks, just your computer has to churn. It really slows down as time goes on because transactions are getting more and more complex. Cap root is both a huge boost to the validation. It's a huge efficiency and cost savings to the chain in not having to publish all of that scripting data, not having to tell the chain all of the crap that you're doing behind it. And it's a huge benefit to privacy because you're not showing all of that, all of those explicit paths in the transaction or the Multi SIG or the Lightning channel or whatever the hell it is you're doing to the transparent public blockchain. You're using it for the very thing that it's supposed to be used for securing the monetary policy period and securing the monetary policy and the ownership of the coins. And you don't have to show who's owning it or who has the signature power or who has the backup and the insurance clause in that signature power. You don't need any of that. And Tap root turns all of that into a single public key and a single signature. It hides all of it with Mast, with the mercalized abstract syntax trees, blah blah, where you create this off of the transaction, off of the chain, everything. You create this tree of possible paths that you have of the multi signal contracts in the Lightning case, you have the cooperative close potential, the insurance closed potential, and the punishment clause, you have these three different branches. Well, you put all that together and you give the root hash of all of that and mix that with the signatures and produce one public key and one signature, and it looks identical to any other one to one transaction on the chain period. You see none of it, and therefore, also you have to validate none of it. You. Just check the hash, you just boom it. Validation becomes so freaking cheap. And the ability, the things that you can do with that are you just open up a whole new world and you can really start to breaking down like one UTXO into ownership of many different parties. You really simplify, splicing in and splicing out of all the Lightning Channel opening, closing, splicing looping, all of that shit becomes so much easier, more private, more private. Lightning Network goes completely dark. You can't even use a Lightning Network Explorer anymore. You can't look at the chain and know what's Lightning and what's not, which kind of sucks, but it's awesome. And what's funny is that it actually doesn't come with the usual trade offs. Usually you get one benefit at the cost of something else, or it takes a little bit longer to validate, but you get all these great features in the transaction, or you get all these awesome features, but it costs a little bit more in data. Usually there's always something that is the negative side of it, and Taproot has managed to almost have no negative. I think the only thing is that to do a certain type of transaction or to differentiate it, it takes like one bit, like literally one bit or one bite. I can't remember what it was. And they had to decide where and how exactly to put in that bite to kind of mitigate that one thing. And that was actually contentious, believe it or not, to figure out how to manage that one tiny little difference. Love it. But it's just good across the board, better for efficiency, better for the block space, and better for privacy. And if we can get that into the bitcoin code base. I think what we can do with that opens up enough possibility that bitcoin could work almost indefinitely with a layer two and layer three protocols and be incredibly secure. Not open us up to all these new risks and still be pretty damn feature rich and get back enough privacy at the base layer to enable privacy for the normal retail payment system. For a global payment system. Yeah. So awesome, man. I mean, can you give us a couple of examples of proposals that are reliant on the Top Group software? Well, I'm not sure if signature aggregation, because it's more signatures, is kind of the base of Tap root. So it's like VIP 391-4141 I can't remember. I can't remember what the numbers are, but it's like three of them in one sats root, and then the verification and then Snore signatures and Mast, I. Think, is in there too. Yeah. Really? All the proposals that are wait a second. Is the vault actually a consequence of do you know the callback function? Like the vault? Is that from a different opcode? Is that from oh, God, I should have read about this again recently. It's been a long time since I since I read mastering bitcoin that's been taken many years. So I put most of that information aside, the details of the opcodes and everything. Yeah, ",
        "details": {
            "boost": 0,
            "date": 1596513600,
            "description": "Thought on [[Taproot]]",
            "episode_title": "Chat 44 - 2 Bitcoiners Talking Bitcoin with Citizen Bitcoin",
            "guest": [
                "Brady of Citizen Bitcoin "
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN6254051243.mp3?updated=1627958944",
            "node_type": "clip",
            "ref_id": "16574814-fb92-474c-8145-2a604633f43f",
            "show_title": "Bitcoin Audible",
            "text": "some Taproot man. Like, you've got the hashtag in your Twitter handle now, hashtag Taproot 2020. So I did the same and want to try to spread that idea around. We need to get this thing going. Right. So why is tapper so important to get out sooner than later? I genuinely think that I still want a lot of new development and new features to come to the Bitcoin chain, like on chain, that obviously would require softworks. But as far as authentication of the code goes, I think if we got Taproot I would be okay with Ossifying after that if we couldn't get anything else in. Because I think what's increasingly going to happen is that contracts and signatures and the scripts that are involved in these things and the encumbrances of attaching a public key or signing with a hash of some other data or some other secret or the output of some other program or something into the signature of a transaction. I think those things are going to become so widespread that it's important that we make those as efficient. Private. And capable as possible. Absolutely. And right now, you basically have to tell the Bitcoin chain all of the possible scripts. You have to write this huge tree, and you have to publish this whole tree to the Bitcoin blockchain, which means it costs a fortune. It's a massive data hog. And more importantly, not only is it a data hog that's expensive for the person issuing the transaction, but it's also a huge burden on the computation of validating the chain. Yes. After you get to multi SIG and like Lightning network and all of these transactions. While you're syncing up a node. All the empty blocks up to block 200,000 or something like that go in like an hour. They like it just plows through all of them. And then it starts to slow down for another 200,000 when blocks are kind of full and you're getting full like 1 MB blocks and stuff. And we're kind of getting to that period where transactions are really heavy, but then you kind of get into the complex transactions and those last blocks, just your computer has to churn. It really slows down as time goes on because transactions are getting more and more complex. Cap root is both a huge boost to the validation. It's a huge efficiency and cost savings to the chain in not having to publish all of that scripting data, not having to tell the chain all of the crap that you're doing behind it. And it's a huge benefit to privacy because you're not showing all of that, all of those explicit paths in the transaction or the Multi SIG or the Lightning channel or whatever the hell it is you're doing to the transparent public blockchain. You're using it for the very thing that it's supposed to be used for securing the monetary policy period and securing the monetary policy and the ownership of the coins. And you don't have to show who's owning it or who has the signature power or who has the backup and the insurance clause in that signature power. You don't need any of that. And Tap root turns all of that into a single public key and a single signature. It hides all of it with Mast, with the mercalized abstract syntax trees, blah blah, where you create this off of the transaction, off of the chain, everything. You create this tree of possible paths that you have of the multi signal contracts in the Lightning case, you have the cooperative close potential, the insurance closed potential, and the punishment clause, you have these three different branches. Well, you put all that together and you give the root hash of all of that and mix that with the signatures and produce one public key and one signature, and it looks identical to any other one to one transaction on the chain period. You see none of it, and therefore, also you have to validate none of it. You. Just check the hash, you just boom it. Validation becomes so freaking cheap. And the ability, the things that you can do with that are you just open up a whole new world and you can really start to breaking down like one UTXO into ownership of many different parties. You really simplify, splicing in and splicing out of all the Lightning Channel opening, closing, splicing looping, all of that shit becomes so much easier, more private, more private. Lightning Network goes completely dark. You can't even use a Lightning Network Explorer anymore. You can't look at the chain and know what's Lightning and what's not, which kind of sucks, but it's awesome. And what's funny is that it actually doesn't come with the usual trade offs. Usually you get one benefit at the cost of something else, or it takes a little bit longer to validate, but you get all these great features in the transaction, or you get all these awesome features, but it costs a little bit more in data. Usually there's always something that is the negative side of it, and Taproot has managed to almost have no negative. I think the only thing is that to do a certain type of transaction or to differentiate it, it takes like one bit, like literally one bit or one bite. I can't remember what it was. And they had to decide where and how exactly to put in that bite to kind of mitigate that one thing. And that was actually contentious, believe it or not, to figure out how to manage that one tiny little difference. Love it. But it's just good across the board, better for efficiency, better for the block space, and better for privacy. And if we can get that into the bitcoin code base. I think what we can do with that opens up enough possibility that bitcoin could work almost indefinitely with a layer two and layer three protocols and be incredibly secure. Not open us up to all these new risks and still be pretty damn feature rich and get back enough privacy at the base layer to enable privacy for the normal retail payment system. For a global payment system. Yeah. So awesome, man. I mean, can you give us a couple of examples of proposals that are reliant on the Top Group software? Well, I'm not sure if signature aggregation, because it's more signatures, is kind of the base of Tap root. So it's like VIP 391-4141 I can't remember. I can't remember what the numbers are, but it's like three of them in one sats root, and then the verification and then Snore signatures and Mast, I. Think, is in there too. Yeah. Really? All the proposals that are wait a second. Is the vault actually a consequence of do you know the callback function? Like the vault? Is that from a different opcode? Is that from oh, God, I should have read about this again recently. It's been a long time since I since I read mastering bitcoin that's been taken many years. So I put most of that information aside, the details of the opcodes and everything. Yeah, ",
            "timestamp": "01:02:57-01:11:44",
            "topics": [
                "taproot",
                "taproot",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.5199
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "weight": 1.5072999999999999,
        "id": "9accdae3-e03e-4e2f-8ac6-66bf14c6e9f6",
        "name": "Bitcoin Audible:Read 518 - Two Taproot Activation Clients   Aaron Van Wirdum :00:09:20-00:10:27",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "the proposed Bitcoin protocol upgrade for compact and privacy preserving smart contracts is getting closer to activation. The Taproot code itself had already been included in the most recent major bitcoin core release, bitcoin Core 00:210, which is currently the de facto reference implementation for the Bitcoin protocol. The next step was to deploy activation code for the upgrade to go live across the network. But due to technical and philosophical disagreements on how the Bitcoin protocol should be upgraded, discussion about Taproot activation turned out to be a long and sometimes heated debate. Now it has resulted in two different Taproot activation paths embedded in two main software clients that could, in some scenarios, even become incompatible with one another. This is the story of these main two Taproot activation clients, the difference between them and some possible scenarios going forward. Background Tap ",
        "details": {
            "boost": 0,
            "date": 1618804800,
            "description": "[[Taproot]]: Proposed [[Bitcoin]] Protocol ",
            "episode_title": "Read 518 - Two Taproot Activation Clients   Aaron Van Wirdum ",
            "guest": [
                "Aaron Van Wirdum"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN9741421976.mp3?updated=1624479911",
            "node_type": "clip",
            "ref_id": "9accdae3-e03e-4e2f-8ac6-66bf14c6e9f6",
            "show_title": "Bitcoin Audible",
            "text": "the proposed Bitcoin protocol upgrade for compact and privacy preserving smart contracts is getting closer to activation. The Taproot code itself had already been included in the most recent major bitcoin core release, bitcoin Core 00:210, which is currently the de facto reference implementation for the Bitcoin protocol. The next step was to deploy activation code for the upgrade to go live across the network. But due to technical and philosophical disagreements on how the Bitcoin protocol should be upgraded, discussion about Taproot activation turned out to be a long and sometimes heated debate. Now it has resulted in two different Taproot activation paths embedded in two main software clients that could, in some scenarios, even become incompatible with one another. This is the story of these main two Taproot activation clients, the difference between them and some possible scenarios going forward. Background Tap ",
            "timestamp": "00:09:20-00:10:27",
            "topics": [
                "taproot",
                "bitcoin",
                "taproot",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.5072999999999999
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "weight": 1.5019,
        "id": "bf196483-5d36-413f-ad0f-06aa91b965f9",
        "name": "The Anita Posch Show  A Bitcoin Only Podcast:Last Week in Bitcoin  Keep Calm and Carry On:00:01:03-00:02:53",
        "label": "The Anita Posch Show  A Bitcoin Only Podcast",
        "type": "podcast",
        "node_type": "clip",
        "text": "update to the bitcoin core software is. This soft fork might be locked in in a few weeks. The minor signals are looking very promising. Still 1815 blocks within a period of 14 days. These are 90% of all blocks have to signal for tabloid, and if they do, Tap root will be automatically activated in November. There's no turning back. The decision cannot be changed afterwards. The next signaling period starts tomorrow. Tap route brings three big changes. It improves scalability privacy and sets up foundational scaffolding for future improvements. With tabloid, all types of bitcoin transactions will look the same. Cashing out from the Lightning network, for instance, will look like a simple transaction between two parties. Although there might be thousands of payments included in one Lightning channel. Tap root can hide complex scripts and show only the branch of the script that has been executed. This makes bitcoin transactions cheaper because they need less data space and therefore you pay less fees and it makes them more efficient for everyone. Taproot introduces new address types, starting with PC One P. The whole implementation process will take some years until all wallets support the new address format. It's a very important step for bitcoin because it strengthens core properties like privacy, neutrality and open access. Even more tabrut makes it more difficult for regulators to intervene, which secures the financial inclusion of billions of people without IDs status or wealth. Is ",
        "details": {
            "boost": 0,
            "date": 1622174400,
            "description": "[[Anita Posch]] [[Bitcoin]] privacy improvements with [[Taproot]]",
            "episode_title": "Last Week in Bitcoin  Keep Calm and Carry On",
            "guest": [
                "Anita Posch"
            ],
            "image_url": "",
            "keyword": true,
            "link": "https://bitcoinundco.com/en/podlove/file/1913/s/feed/c/mp3/118-en.mp3",
            "node_type": "clip",
            "ref_id": "bf196483-5d36-413f-ad0f-06aa91b965f9",
            "show_title": "The Anita Posch Show  A Bitcoin Only Podcast",
            "text": "update to the bitcoin core software is. This soft fork might be locked in in a few weeks. The minor signals are looking very promising. Still 1815 blocks within a period of 14 days. These are 90% of all blocks have to signal for tabloid, and if they do, Tap root will be automatically activated in November. There's no turning back. The decision cannot be changed afterwards. The next signaling period starts tomorrow. Tap route brings three big changes. It improves scalability privacy and sets up foundational scaffolding for future improvements. With tabloid, all types of bitcoin transactions will look the same. Cashing out from the Lightning network, for instance, will look like a simple transaction between two parties. Although there might be thousands of payments included in one Lightning channel. Tap root can hide complex scripts and show only the branch of the script that has been executed. This makes bitcoin transactions cheaper because they need less data space and therefore you pay less fees and it makes them more efficient for everyone. Taproot introduces new address types, starting with PC One P. The whole implementation process will take some years until all wallets support the new address format. It's a very important step for bitcoin because it strengthens core properties like privacy, neutrality and open access. Even more tabrut makes it more difficult for regulators to intervene, which secures the financial inclusion of billions of people without IDs status or wealth. Is ",
            "timestamp": "00:01:03-00:02:53",
            "topics": [
                "anita posch",
                "bitcoin",
                "taproot",
                "taproot",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.5019
        },
        "image_url": "",
        "colors": []
    },
    {
        "weight": 1.4902,
        "id": "3ab3bfd4-226b-407d-9452-3f8cd1f6ed2c",
        "name": "Bitcoin Audible:Read 618 - Expanding Functionality in Lightning Implementations  Shinobi :00:07:06-00:10:18",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "the implementation of Taproot to enable a new transaction structure for channels. Remember, all that a channel is is a set of pre signed transactions to lay the foundation for future privacy improvements. One of those is the shift away from hash time lock contracts to point timelock contracts or PTLCs. Currently, HTLCs are what guarantee that a payment either succeeds or fails for every hop along a payment route, the pre image to the hash lock is released and guarantees the payment goes through for everyone, or it doesn't, and is refunded for everyone. PTLCs accomplish the same thing using adapter signatures instead of hashes, which means that every hop along the path does not have the same hash, which could identify a single payment across multiple hops if one person is running multiple nodes along the payment path. While this by no means is a magic privacy solution for the network, it is a building block toward comprehensive privacy once other solutions are implemented. The next step after implementing Taproot channels for Lightning is updating the channels live on the network to use them. There are 82 697 public Lightning channels as of this writing, with close to the most efficient use of blockspace containing around 3300 transactions. That would take 25 blocks of just channel closures to close them all out and another 25 to reopen them as Taproot channels. Let's assume that there are twice as many private channels as there are public ones. This would bring the total to around 150 blocks to close out and reopen all existing Lightning channels as Taproot channels, assuming the blocks are filled with no other transactions. In reality though, those blocks are not going to be full of just Lightning transactions, so this process could take a week or more for the entire network to cycle through an upgrade. LND is planning to implement a feature called on the Fly Channel Updates, where instead of closing existing channels and opening new ones, you simply spend the existing channel state pre signed transaction into a new one instead of into outputs that would close the channel on the chain. This comes at the cost of an extra transaction for non cooperative closes, but would allow node operators to take advantage of new tap rootbased features without having to close existing channels. Obviously, the implementation of Taro will likely take a front seat at some point after these developments, but the implementation of a brand new top layer token protocol will likely take some significant amount of time. Given other features that might be a good idea to implement, as well as the day to day work of optimizing the nodes existing functionality, I don't think there's any telling how long until that sees the light of day. ",
        "details": {
            "boost": 0,
            "date": 1650340800,
            "description": "Implementation of [[Taproot]]",
            "episode_title": "Read 618 - Expanding Functionality in Lightning Implementations  Shinobi ",
            "guest": [
                "Shinobi"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN1921856693.mp3?updated=1650333249",
            "node_type": "clip",
            "ref_id": "3ab3bfd4-226b-407d-9452-3f8cd1f6ed2c",
            "show_title": "Bitcoin Audible",
            "text": "the implementation of Taproot to enable a new transaction structure for channels. Remember, all that a channel is is a set of pre signed transactions to lay the foundation for future privacy improvements. One of those is the shift away from hash time lock contracts to point timelock contracts or PTLCs. Currently, HTLCs are what guarantee that a payment either succeeds or fails for every hop along a payment route, the pre image to the hash lock is released and guarantees the payment goes through for everyone, or it doesn't, and is refunded for everyone. PTLCs accomplish the same thing using adapter signatures instead of hashes, which means that every hop along the path does not have the same hash, which could identify a single payment across multiple hops if one person is running multiple nodes along the payment path. While this by no means is a magic privacy solution for the network, it is a building block toward comprehensive privacy once other solutions are implemented. The next step after implementing Taproot channels for Lightning is updating the channels live on the network to use them. There are 82 697 public Lightning channels as of this writing, with close to the most efficient use of blockspace containing around 3300 transactions. That would take 25 blocks of just channel closures to close them all out and another 25 to reopen them as Taproot channels. Let's assume that there are twice as many private channels as there are public ones. This would bring the total to around 150 blocks to close out and reopen all existing Lightning channels as Taproot channels, assuming the blocks are filled with no other transactions. In reality though, those blocks are not going to be full of just Lightning transactions, so this process could take a week or more for the entire network to cycle through an upgrade. LND is planning to implement a feature called on the Fly Channel Updates, where instead of closing existing channels and opening new ones, you simply spend the existing channel state pre signed transaction into a new one instead of into outputs that would close the channel on the chain. This comes at the cost of an extra transaction for non cooperative closes, but would allow node operators to take advantage of new tap rootbased features without having to close existing channels. Obviously, the implementation of Taro will likely take a front seat at some point after these developments, but the implementation of a brand new top layer token protocol will likely take some significant amount of time. Given other features that might be a good idea to implement, as well as the day to day work of optimizing the nodes existing functionality, I don't think there's any telling how long until that sees the light of day. ",
            "timestamp": "00:07:06-00:10:18",
            "topics": [
                "taproot",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.4902
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "weight": 1.4614,
        "id": "5e309f5f-3d50-4c20-9f2e-73057074ed24",
        "name": "Bitcoin Audible:Read 464 - Poolin s Initiative to Activate Taproot  Aaron Van Wirdum :00:10:43-00:14:27",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "Bitcoin magazine recently sent out an email to all mining pools that controlled at least 1% of the hash power on the Bitcoin network inquiring about Taproot and activation preferences. At the time of publication of this article, the only other mining pool that responded was Slushpool, whose cofounder Jan Capek said we'll support Taproot and doesn't expect it to be as heated a topic as SegWit. CAPEC indicated a preference for BIP eight as the activation method with a 90% hash power activation threshold and forced activation after one year. Over the next days and weeks, Delatore will also be reaching out to bitcoin mining pools to poll where they stand on Taproot and the different activation mechanisms and will update the website accordingly. And that closes out the pool and launches initiative to activate Taproot by Aaron Vanwerdom and BitcoinMagazine.com. Now, you guys really need to be checking up on Bitcoin Magazine because they literally keep up to date on everything. Like, they're a massive resource for me and I legit just don't have the time to go into every single thing that they write. So just throwing it out there if you want to stay up on a lot of this stuff. My two favorite sources are Bitcoin Optic and Bitcoin magazine. Bitcoin Optic really dives into some of the specifics of this stuff and Bitcoin Magazine is just probably one of the best news sources in the space, to be perfectly honest. So that's just a little shell for Bitcoin Magazine there. But this initiative by Pooling is actually like, this is a big deal in my opinion, because this is a lot of what the developers have been really reluctant about, about just kind of coming out because it is such a central point of failure and they don't want to give the impression that we're just waiting for them to decide. I've been reading in a lot of the discussions and stuff, like I try to at least get in the groups and try to keep up to date and see how they're talking about it. And a lot of people are very reluctant, or a lot of developers are very reluctant about being like, we're going to say it's this way and this is how it needs to be done. There's a lot of power and responsibility that comes with that and more importantly, a very serious central vulnerability if we basically make the precedent that the developers are just deciding how this thing goes and everyone needs to upgrade accordingly. I mean, obviously they cannot force anybody to install the new software, but technically neither can Ethereum. But essentially they have a community that just does whatever the developers say and they don't really put any input in this most recent hard fork, which by the way, there's actually another episode of Shit Coin Insider coming right around the corner where we dig all into this. It was just a complete mess and I really can't believe the dismissive attitude that the developers took around this problem, but it's just basically another great example of the completely polar opposite attitudes of the development community around bitcoin versus that around ethereum. And, well, all coins in general really just picking on ethereum because of their recent debacle. But it's really cool that pool in particular is taking the initiative and really moving ahead and pushing to get people to make a stance on this. And the mining ",
        "details": {
            "boost": 0,
            "date": 1605762000,
            "description": "Does [[Slush Pool]] Support [[Taproot]]?",
            "episode_title": "Read 464 - Poolin s Initiative to Activate Taproot  Aaron Van Wirdum ",
            "guest": [
                "Aaron Van Wirdum"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/0b9229a4-8cef-441c-8fc1-8e622616a44a.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN8083365362.mp3?updated=1627961540",
            "node_type": "clip",
            "ref_id": "5e309f5f-3d50-4c20-9f2e-73057074ed24",
            "show_title": "Bitcoin Audible",
            "text": "Bitcoin magazine recently sent out an email to all mining pools that controlled at least 1% of the hash power on the Bitcoin network inquiring about Taproot and activation preferences. At the time of publication of this article, the only other mining pool that responded was Slushpool, whose cofounder Jan Capek said we'll support Taproot and doesn't expect it to be as heated a topic as SegWit. CAPEC indicated a preference for BIP eight as the activation method with a 90% hash power activation threshold and forced activation after one year. Over the next days and weeks, Delatore will also be reaching out to bitcoin mining pools to poll where they stand on Taproot and the different activation mechanisms and will update the website accordingly. And that closes out the pool and launches initiative to activate Taproot by Aaron Vanwerdom and BitcoinMagazine.com. Now, you guys really need to be checking up on Bitcoin Magazine because they literally keep up to date on everything. Like, they're a massive resource for me and I legit just don't have the time to go into every single thing that they write. So just throwing it out there if you want to stay up on a lot of this stuff. My two favorite sources are Bitcoin Optic and Bitcoin magazine. Bitcoin Optic really dives into some of the specifics of this stuff and Bitcoin Magazine is just probably one of the best news sources in the space, to be perfectly honest. So that's just a little shell for Bitcoin Magazine there. But this initiative by Pooling is actually like, this is a big deal in my opinion, because this is a lot of what the developers have been really reluctant about, about just kind of coming out because it is such a central point of failure and they don't want to give the impression that we're just waiting for them to decide. I've been reading in a lot of the discussions and stuff, like I try to at least get in the groups and try to keep up to date and see how they're talking about it. And a lot of people are very reluctant, or a lot of developers are very reluctant about being like, we're going to say it's this way and this is how it needs to be done. There's a lot of power and responsibility that comes with that and more importantly, a very serious central vulnerability if we basically make the precedent that the developers are just deciding how this thing goes and everyone needs to upgrade accordingly. I mean, obviously they cannot force anybody to install the new software, but technically neither can Ethereum. But essentially they have a community that just does whatever the developers say and they don't really put any input in this most recent hard fork, which by the way, there's actually another episode of Shit Coin Insider coming right around the corner where we dig all into this. It was just a complete mess and I really can't believe the dismissive attitude that the developers took around this problem, but it's just basically another great example of the completely polar opposite attitudes of the development community around bitcoin versus that around ethereum. And, well, all coins in general really just picking on ethereum because of their recent debacle. But it's really cool that pool in particular is taking the initiative and really moving ahead and pushing to get people to make a stance on this. And the mining ",
            "timestamp": "00:10:43-00:14:27",
            "topics": [
                "slush pool",
                "taproot",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.4614
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/0b9229a4-8cef-441c-8fc1-8e622616a44a_s.jpg",
        "colors": []
    },
    {
        "weight": 1.461,
        "id": "23cd7491-9ae2-487b-81ef-566ad7a5b788",
        "name": "Bitcoin Audible:Read 617 - Announcing Taro  Multi-Asset Bitcoin   Lightning  Ryan Gentry :00:42:36-00:52:00",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "is that that is the power that you can do with Taproot. So the amount of complexity and branching that you can do within this and the number of different data structures and metadata and time locks and alternatives and various keys that you can do and stack within a single signature is unbounded. You can do it practically indefinitely. And that is a fascinating thing. And we just don't understand all of the things that will be possible to build with that. When you can start to create these sorts of arrangements, you could have a federated set up within a single key. There's a serious potential that you could run side chains like this. And god, it's so crazy. It's so crazy how much this is going to move very quickly. And I think every shit coin that has boasted that, oh, we can run stable coins on top of us, and that was damn near their claim to fame, is going to be in a bad spot. It's going to be in really bad spot because like it or not, it's coming back to bitcoin. Now, the trade offs, what's the danger? What's the risk of having non bitcoin assets issued on bitcoin? This is where things get kind of hairy because it's a bittersweet, right? There's a lot of great things that can happen with this. Credit is not going anywhere. Credit is a critical part of any economy. And to be able to issue credit for a business, or equity for a business, well, I mean, it's a clear use case. It's a clearly valuable thing that an economy needs. And I think it makes sense that we would end up using bitcoin as the consensus model for this, as the double spend protection, like as the time chain. That is what bitcoin does. That is fundamentally the power of this technology. So it makes sense that it ends up there. But when you end up in a contentious situation, when you end up in a block size war, assets that must be scarce necessarily, like equity or whatever, it becomes a risk, it becomes an unknown factor or an increasingly mode of influence over which direction the bitcoin network takes. So during a contentious hard fork, you have a problem. Imagine if coinbase had issued USDC, $100 million, a billion dollars worth of USDC onto the bitcoin chain before the block size war, and then doubled down and said we were only going to support big block bitcoin. Well, when bitcoin forks, those stable coins exist on both chains at the same time, there's, quote, unquote, excuse me, a billion dollars on Coinbase bitcoin. They now have an incredible amount of influence over which network or which fork becomes the quote unquote accepted or dominant one, because they can make a billion dollars worth of value that people within the bitcoin space are holding vanish because they only have a billion dollars if they're one to one. If they're actually fully reserved, which they're coinbase, I wouldn't trust them to do that. But regardless, they're supposed to have a reserve of a billion dollars for a billion dollars in stablecoin If there's now $2 billion in stable coins on two separate forks of the same network, they have to pick which one that billion dollars exists on. So this is a risky trade off. Now, the reason it might not be as much undue influence as it may seem like at first, is that the underlying value and for the same reason that Tether being on Tron is not a risk to bitcoin right now, they could say, oh, we're only going to use Tron. It's like nobody cares, right? The value of bitcoin remains the value of bitcoin. And if we decide which Lightning network is the one we're running nodes for. And we decide and this is actually kind of the beauty of Taro over Omni in the situation of this or in the scenario of this hard fork. This imagined hard fork with Coinbase Coin. Is that I will not keep my node running for a Lightning network on Coinbase bitcoin. Right. Is that my Lightning network is going to have a bunch of nodes and excuse me. It's going to have a bunch of channels and a bunch of liquidity. And I'm going to have multiple things. And I'm going to accept Lightning payments and stuff from other merchants. And I'm going to pay merchants and I'm going to pay people like other peers and all this stuff. But when the network forks, I'm not going to spin up a shit Coin, I'm not going to spin up a Be cash node and run my Lightning network over there. So they will not be able to settle through my node, their Taro stablecoin, their USDC will not longer get the benefit of my liquidity. Whereas on Omni is that if I have a explicitly stable Coin channel, well, then they can just make that channel disappear for me. So my channel just will only exist on one of those coins. Whereas when we're looking at bitcoin as the settlement layer. Well. Then you've still got this user activated Softwork sort of calling their bluff. Where if the Lightning network does not the Lightning network infrastructure does not support their fork. Well. Then it doesn't matter if that billion dollars of stablecoin disappears because everybody's just going to dump it for somebody else's stablecoin or for bitcoin on the Lightning network. That will actually settle their payment because the Lightning network becomes useless. If all of the nodes running the Lightning settlement layer, running Lightning nodes and opening up and maintaining all these channels ignores their chain. It's not like a set in stone like, oh God, this makes Coinbase just control things. But it is an interesting new dynamic. And this is also not too unlike the scenario where you're paying kind of like the VIP $300 drive chains, which I still go back and forth on. But when you're paying fees to a side block or whatever, is that you're altering the fundamental incentives? Not a lot. But if more people are using the drive chain as opposed to the base layer. And let's say there are 10%. 20% of fees on that side chain and that side chain has huge blocks. Gigabyte blocks. Well. Then the maintainers of that side chain. The quote unquote nodes that do exist on that side chain can essentially reject or lie about what the accurate fee is to any of the Light clients. And in doing so, they can essentially make mining unprofitable for anybody who is not also mining the side chain. So anyway, it's always important to consider the attack vectors, to consider the trade offs and the incentives that come in play with this. But regardless, stablecoins are here. I think stablecoins are a net benefit to the banking system, to a world that needs to transition to Bitcoin. And like I said, I've always liked the idea that we would kind of bifurcate and turn back into a banknote system where credit from banks were priced individually, were priced in isolation of each other, where each bank had their own stablecoin I think that is a far better and easier to keep the incentives right for a banking system than our current one. That's obviously not discounting the fact that systemically everything is still ",
        "details": {
            "boost": 0,
            "date": 1649908800,
            "description": "What is the Power of [[Taproot]]?",
            "episode_title": "Read 617 - Announcing Taro  Multi-Asset Bitcoin   Lightning  Ryan Gentry ",
            "guest": [
                "Ryan Gentry"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN1100459556.mp3?updated=1650332701",
            "node_type": "clip",
            "ref_id": "23cd7491-9ae2-487b-81ef-566ad7a5b788",
            "show_title": "Bitcoin Audible",
            "text": "is that that is the power that you can do with Taproot. So the amount of complexity and branching that you can do within this and the number of different data structures and metadata and time locks and alternatives and various keys that you can do and stack within a single signature is unbounded. You can do it practically indefinitely. And that is a fascinating thing. And we just don't understand all of the things that will be possible to build with that. When you can start to create these sorts of arrangements, you could have a federated set up within a single key. There's a serious potential that you could run side chains like this. And god, it's so crazy. It's so crazy how much this is going to move very quickly. And I think every shit coin that has boasted that, oh, we can run stable coins on top of us, and that was damn near their claim to fame, is going to be in a bad spot. It's going to be in really bad spot because like it or not, it's coming back to bitcoin. Now, the trade offs, what's the danger? What's the risk of having non bitcoin assets issued on bitcoin? This is where things get kind of hairy because it's a bittersweet, right? There's a lot of great things that can happen with this. Credit is not going anywhere. Credit is a critical part of any economy. And to be able to issue credit for a business, or equity for a business, well, I mean, it's a clear use case. It's a clearly valuable thing that an economy needs. And I think it makes sense that we would end up using bitcoin as the consensus model for this, as the double spend protection, like as the time chain. That is what bitcoin does. That is fundamentally the power of this technology. So it makes sense that it ends up there. But when you end up in a contentious situation, when you end up in a block size war, assets that must be scarce necessarily, like equity or whatever, it becomes a risk, it becomes an unknown factor or an increasingly mode of influence over which direction the bitcoin network takes. So during a contentious hard fork, you have a problem. Imagine if coinbase had issued USDC, $100 million, a billion dollars worth of USDC onto the bitcoin chain before the block size war, and then doubled down and said we were only going to support big block bitcoin. Well, when bitcoin forks, those stable coins exist on both chains at the same time, there's, quote, unquote, excuse me, a billion dollars on Coinbase bitcoin. They now have an incredible amount of influence over which network or which fork becomes the quote unquote accepted or dominant one, because they can make a billion dollars worth of value that people within the bitcoin space are holding vanish because they only have a billion dollars if they're one to one. If they're actually fully reserved, which they're coinbase, I wouldn't trust them to do that. But regardless, they're supposed to have a reserve of a billion dollars for a billion dollars in stablecoin If there's now $2 billion in stable coins on two separate forks of the same network, they have to pick which one that billion dollars exists on. So this is a risky trade off. Now, the reason it might not be as much undue influence as it may seem like at first, is that the underlying value and for the same reason that Tether being on Tron is not a risk to bitcoin right now, they could say, oh, we're only going to use Tron. It's like nobody cares, right? The value of bitcoin remains the value of bitcoin. And if we decide which Lightning network is the one we're running nodes for. And we decide and this is actually kind of the beauty of Taro over Omni in the situation of this or in the scenario of this hard fork. This imagined hard fork with Coinbase Coin. Is that I will not keep my node running for a Lightning network on Coinbase bitcoin. Right. Is that my Lightning network is going to have a bunch of nodes and excuse me. It's going to have a bunch of channels and a bunch of liquidity. And I'm going to have multiple things. And I'm going to accept Lightning payments and stuff from other merchants. And I'm going to pay merchants and I'm going to pay people like other peers and all this stuff. But when the network forks, I'm not going to spin up a shit Coin, I'm not going to spin up a Be cash node and run my Lightning network over there. So they will not be able to settle through my node, their Taro stablecoin, their USDC will not longer get the benefit of my liquidity. Whereas on Omni is that if I have a explicitly stable Coin channel, well, then they can just make that channel disappear for me. So my channel just will only exist on one of those coins. Whereas when we're looking at bitcoin as the settlement layer. Well. Then you've still got this user activated Softwork sort of calling their bluff. Where if the Lightning network does not the Lightning network infrastructure does not support their fork. Well. Then it doesn't matter if that billion dollars of stablecoin disappears because everybody's just going to dump it for somebody else's stablecoin or for bitcoin on the Lightning network. That will actually settle their payment because the Lightning network becomes useless. If all of the nodes running the Lightning settlement layer, running Lightning nodes and opening up and maintaining all these channels ignores their chain. It's not like a set in stone like, oh God, this makes Coinbase just control things. But it is an interesting new dynamic. And this is also not too unlike the scenario where you're paying kind of like the VIP $300 drive chains, which I still go back and forth on. But when you're paying fees to a side block or whatever, is that you're altering the fundamental incentives? Not a lot. But if more people are using the drive chain as opposed to the base layer. And let's say there are 10%. 20% of fees on that side chain and that side chain has huge blocks. Gigabyte blocks. Well. Then the maintainers of that side chain. The quote unquote nodes that do exist on that side chain can essentially reject or lie about what the accurate fee is to any of the Light clients. And in doing so, they can essentially make mining unprofitable for anybody who is not also mining the side chain. So anyway, it's always important to consider the attack vectors, to consider the trade offs and the incentives that come in play with this. But regardless, stablecoins are here. I think stablecoins are a net benefit to the banking system, to a world that needs to transition to Bitcoin. And like I said, I've always liked the idea that we would kind of bifurcate and turn back into a banknote system where credit from banks were priced individually, were priced in isolation of each other, where each bank had their own stablecoin I think that is a far better and easier to keep the incentives right for a banking system than our current one. That's obviously not discounting the fact that systemically everything is still ",
            "timestamp": "00:42:36-00:52:00",
            "topics": [
                "taproot",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.461
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "weight": 1.4594,
        "id": "fa39f8c6-b381-4bad-ac53-993b023f72d5",
        "name": "Bitcoin Audible:Read 502 - LOT true or false  The Last Hurdle for Taproot  Aaron Van Wirdum :00:03:22-00:06:40",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "The code for Taproot A proposed bitcoin protocol upgrade for compact and privacy preserving smart contracts has been included in the most recent version of bitcoin core, currently the de facto reference implementation for the bitcoin protocol. The only remaining step is for the upgrade to activate on the bitcoin network. But as a consensus system without central authority, bitcoin protocol upgrades can be challenging. If one segment of the network upgrades to a new version of the protocol before another segment does, different nodes might enforce different rules, introducing the risk that the network fractures between them a soft fork upgrade, which Tap Root is is backwards compatible. To minimize this risk, as long as a majority of miners by hash power enforce the new rules, both upgraded and nono upgraded nodes accept their version of the blockchain. Upgraded nodes because the new rules are properly enforced, and nonupgraded nodes because none of the legacy rules are being broken. Several of Bitcoin's previous softworks have therefore been deployed by leveraging hash power as a coordination mechanism, which is referred to as a minor activated soft fork or MASF. Once, usually 95% of newly mined blocks included a bit that signaled readiness. All upgraded nodes would start enforcing the new rules. If this threshold wouldn't be met within usually a year, the upgrade would instead expire. In 2017, the segregated witness, or SegWit MASF minor activated soft fork got close to expiring. In the midst of a heated scaling debate, miners refused to signal readiness for the upgrade. In response, a grassroots group of users and some developers released a special Bitcoin software client, the BIP 148 client. The BP 148 client would activate SegWit on a given date, even if there was insufficient hash power support to meet the original 95% threshold, an upgrade mechanism referred to as a user activated software, or UASF. Right before the SegWit UASF would activate, miners started signaling readiness. Now, about four years later, the events around SegWit activation have spurred a new discussion on soft fork activation in the context of the Tap Root upgrade. This discussion is in a small part about the hash power threshold and duration of the activation period, but these seem to have mostly settled on 90% and one year, respectively, which the remainder of this article will also assume. The last remaining point of contention is about the lock in on timeout lo t or lot parameter, which can be set on either true lot equals true or false lot equals false what are ",
        "details": {
            "boost": 0,
            "date": 1614834000,
            "description": "[[Taproot]]: Proposed [[Bitcoin Protocol]] upgrade ",
            "episode_title": "Read 502 - LOT true or false  The Last Hurdle for Taproot  Aaron Van Wirdum ",
            "guest": [
                "Aaron Van Wirdum"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN6946777144.mp3?updated=1624480480",
            "node_type": "clip",
            "ref_id": "fa39f8c6-b381-4bad-ac53-993b023f72d5",
            "show_title": "Bitcoin Audible",
            "text": "The code for Taproot A proposed bitcoin protocol upgrade for compact and privacy preserving smart contracts has been included in the most recent version of bitcoin core, currently the de facto reference implementation for the bitcoin protocol. The only remaining step is for the upgrade to activate on the bitcoin network. But as a consensus system without central authority, bitcoin protocol upgrades can be challenging. If one segment of the network upgrades to a new version of the protocol before another segment does, different nodes might enforce different rules, introducing the risk that the network fractures between them a soft fork upgrade, which Tap Root is is backwards compatible. To minimize this risk, as long as a majority of miners by hash power enforce the new rules, both upgraded and nono upgraded nodes accept their version of the blockchain. Upgraded nodes because the new rules are properly enforced, and nonupgraded nodes because none of the legacy rules are being broken. Several of Bitcoin's previous softworks have therefore been deployed by leveraging hash power as a coordination mechanism, which is referred to as a minor activated soft fork or MASF. Once, usually 95% of newly mined blocks included a bit that signaled readiness. All upgraded nodes would start enforcing the new rules. If this threshold wouldn't be met within usually a year, the upgrade would instead expire. In 2017, the segregated witness, or SegWit MASF minor activated soft fork got close to expiring. In the midst of a heated scaling debate, miners refused to signal readiness for the upgrade. In response, a grassroots group of users and some developers released a special Bitcoin software client, the BIP 148 client. The BP 148 client would activate SegWit on a given date, even if there was insufficient hash power support to meet the original 95% threshold, an upgrade mechanism referred to as a user activated software, or UASF. Right before the SegWit UASF would activate, miners started signaling readiness. Now, about four years later, the events around SegWit activation have spurred a new discussion on soft fork activation in the context of the Tap Root upgrade. This discussion is in a small part about the hash power threshold and duration of the activation period, but these seem to have mostly settled on 90% and one year, respectively, which the remainder of this article will also assume. The last remaining point of contention is about the lock in on timeout lo t or lot parameter, which can be set on either true lot equals true or false lot equals false what are ",
            "timestamp": "00:03:22-00:06:40",
            "topics": [
                "taproot",
                "bitcoin protocol",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.4594
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "weight": 1.4502,
        "id": "6dfb867a-9c18-4767-b80c-f13de6224c57",
        "name": "Bitcoin Audible:CryptoQuikRead 318 - Taproot is Coming  Aaron van Wirdum :00:12:35-00:17:06",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "Root offers all the benefits of mass, while under normal circumstances, no one will ever know that a regular transaction was hiding such a complex smart contract as a fallback. This is a general outline of the Tap Root concept. Implementation specifics may vary. For more details, read the original Tap Root proposal by Gregory Maxwell or watch this presentation by Peter Wella. All right. And that concludes Erin Vanvertim's Tap Root article on Bitcoin magazine. Let's go ahead and hit our sponsor and I really want to dive into this one. All right. Thank you to Bitcoin Magazine for allowing me to continue to read these articles. There's so much great stuff. And another huge thank you to Aaron Vanveredom for the continuous amazing work that he puts out. They are unbelievably lucky to have him as well as I am. We have had him on the show in the past. If you haven't actually listened to that interview, we go into a lot of great stuff and he has so many he's just an ocean of articles to dig through. And I've been consistently told that his Lightning Network series that I read on the show way back when in episode 40 something, is one of the best explanations. And dives into the Lightning Network that you can get. And it's pretty damn thorough and amazing. So I highly recommend all of that stuff. I'll have those links in the show notes along with the Bitcoin Magazine article. But let's talk about Taproot So this piece goes through. There's a lot of people working on these Snore and Tap Root proposals right now, and it's kind of funny that all these things were slowly piled on top of each other and kind of doing the work on all of these softwares. We've got multiple layers of additional use of this technology because Mast is a huge improvement in and of itself. So let's go back to the beginning. I'm going to kind of re explain, hopefully more simply, some of these things. I know, particularly in audio. Hearing all of these terms can make it really confusing to follow. But P2WSA paid to script hash. It just means that you are paying to hash just a fingerprint of some other data that is required to unlock it and that includes a signature and a script typically well, the script is almost always just this person must sign but it can include any amount of complexity that you want. But because you have to reveal all of the script to unlock those coins because what happens is that when I send the coins to their new location they just go and they're locked with the hash. They're locked with the fingerprint of a lot of data and then in order to then unlock that hash. You have to present all of the data that it is the fingerprint of. So it's a cost savings when locking up the coins but it's not a cost savings at all when you unlock the coins because it just changes when you have to broadcast that information to the network because before it was the person who sent the coins was needed in order to or was needing to put all of the different instructions on chain as to how to unlock them. And now it's the person who unlocks the coins that has to give all that information. Which actually makes sense when you think about it because the person getting the security of that complex script who's reaping the benefits of it or utilizing whatever service or smart contract inside of it is the person redeeming it, not the person that's creating it. So it makes sense that we would want the cost on that side of the equation, the receiver rather than the sender. So just in a normal like sorting out the economics of it, that's actually kind of important in my opinion. But again, it doesn't really do anything for privacy or just cost effectiveness overall, just kind of putting the cost for the cost should be that was implemented in 2012 ish, and I can't remember exactly when, but then Mast is a new proposal that is not implemented yet. This has been in the works for a while and this is what led to the combination of all the other technologies that are in proposal right now. But Mast is turning ",
        "details": {
            "boost": 0,
            "date": 1573448400,
            "description": "Is [[Taproot]] Offers All the Benefits of [[MAST]]?",
            "episode_title": "CryptoQuikRead 318 - Taproot is Coming  Aaron van Wirdum ",
            "guest": [
                "Aaron van Wirdum"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN2334120546.mp3?updated=1627940471",
            "node_type": "clip",
            "ref_id": "6dfb867a-9c18-4767-b80c-f13de6224c57",
            "show_title": "Bitcoin Audible",
            "text": "Root offers all the benefits of mass, while under normal circumstances, no one will ever know that a regular transaction was hiding such a complex smart contract as a fallback. This is a general outline of the Tap Root concept. Implementation specifics may vary. For more details, read the original Tap Root proposal by Gregory Maxwell or watch this presentation by Peter Wella. All right. And that concludes Erin Vanvertim's Tap Root article on Bitcoin magazine. Let's go ahead and hit our sponsor and I really want to dive into this one. All right. Thank you to Bitcoin Magazine for allowing me to continue to read these articles. There's so much great stuff. And another huge thank you to Aaron Vanveredom for the continuous amazing work that he puts out. They are unbelievably lucky to have him as well as I am. We have had him on the show in the past. If you haven't actually listened to that interview, we go into a lot of great stuff and he has so many he's just an ocean of articles to dig through. And I've been consistently told that his Lightning Network series that I read on the show way back when in episode 40 something, is one of the best explanations. And dives into the Lightning Network that you can get. And it's pretty damn thorough and amazing. So I highly recommend all of that stuff. I'll have those links in the show notes along with the Bitcoin Magazine article. But let's talk about Taproot So this piece goes through. There's a lot of people working on these Snore and Tap Root proposals right now, and it's kind of funny that all these things were slowly piled on top of each other and kind of doing the work on all of these softwares. We've got multiple layers of additional use of this technology because Mast is a huge improvement in and of itself. So let's go back to the beginning. I'm going to kind of re explain, hopefully more simply, some of these things. I know, particularly in audio. Hearing all of these terms can make it really confusing to follow. But P2WSA paid to script hash. It just means that you are paying to hash just a fingerprint of some other data that is required to unlock it and that includes a signature and a script typically well, the script is almost always just this person must sign but it can include any amount of complexity that you want. But because you have to reveal all of the script to unlock those coins because what happens is that when I send the coins to their new location they just go and they're locked with the hash. They're locked with the fingerprint of a lot of data and then in order to then unlock that hash. You have to present all of the data that it is the fingerprint of. So it's a cost savings when locking up the coins but it's not a cost savings at all when you unlock the coins because it just changes when you have to broadcast that information to the network because before it was the person who sent the coins was needed in order to or was needing to put all of the different instructions on chain as to how to unlock them. And now it's the person who unlocks the coins that has to give all that information. Which actually makes sense when you think about it because the person getting the security of that complex script who's reaping the benefits of it or utilizing whatever service or smart contract inside of it is the person redeeming it, not the person that's creating it. So it makes sense that we would want the cost on that side of the equation, the receiver rather than the sender. So just in a normal like sorting out the economics of it, that's actually kind of important in my opinion. But again, it doesn't really do anything for privacy or just cost effectiveness overall, just kind of putting the cost for the cost should be that was implemented in 2012 ish, and I can't remember exactly when, but then Mast is a new proposal that is not implemented yet. This has been in the works for a while and this is what led to the combination of all the other technologies that are in proposal right now. But Mast is turning ",
            "timestamp": "00:12:35-00:17:06",
            "topics": [
                "taproot",
                "mast",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.4502
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "weight": 1.4407,
        "id": "b9d66ffd-c9e8-4565-a662-59549803b775",
        "name": "Bitcoin Audible:Read 502 - LOT true or false  The Last Hurdle for Taproot  Aaron Van Wirdum :00:21:37-00:25:34",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "also possible, but probably less likely, that neither Lot True or Lot False is adopted by Bitcoin Core, but either or both options are included in alternative clients. If enough users switch to such alternative clients, even if there are Lot False clients, tap Root could activate without Bitcoin Core's involvement. Bitcoin Core could then release a Tap Root compatible version of its software once the rest of the network has upgraded. This is similar to how some alternative Bitcoin clients like the Bitcoin have historically adopted protocol upgrades. Or perhaps a new possibility will present itself. Authors note some of the arguments and scenarios described in the article are simplified for the sake of readability. In the event of a chain split, more factors could affect the outcome, while a lack of consensus on lot true or lot false could also result in smaller but still harmful disturbances than the ones described. To keep up with the Taproot activation process, the Bitcoin dev mailing list and the hashtag Taproot activation channel on free. Note IRC are currently the most relevant discussion channels. By Aaron Von Wordham. Another great breakdown. I've really depend on Aaron Von Wordham a lot for breaking these down for the average Bitcoin er and reader. And I keep up with Bitcoin Optech, which is another wonderful resource for this sort of thing. And I highly encourage you to read all of Aaron Van Vertem stuff. He does such a good job of breaking down the technical stuff and we've done shit, I don't know, 15 of his pieces on the show. We have a big list of Aaron bombardom articles, so definitely check out some of the other stuff that he's done. He's had a great breakdown of SegWit and the whole history there the history of P2WSA another major soft fork that kind of had some contentious issues going on and how that was resolved. He has a great piece on Tap route breaking down what that is exactly for everybody who doesn't know. I'll have that link in the show notes, so you can check it out. Let's take a quick break real fast and then I kind of want to give my version on this. I'll tell you whether or not I want lot true or lot false and we'll get into it a little bit before we close this one out really fast. Let's hit our sponsor and we'll come right back. The economy will have to shift to a better, more reliable monetary foundation in order to get us out of this extraordinary mess. Why not get a head start and switch to your own Bitcoin standard with Level Co LVL Bitcoin Mobile Banking Services. They are a free exchange with direct deposit, wire and ACH transfers, checks and debit card. And that's in the free version. For just $9 a month you get even more a world debit card personal banker to chat with and even more benefits. They are in 28 states right now and you can check out if you are one of the lucky mofos living in one@guyswan.com level. And they are planning to make their way to the rest of the US except New York by the end of this year. So stay tuned. That is level. Co Mobile Banking Serviceservices@guyswancom. Level, why are you wasting time? Start living in a Bitcoin denominated future today. So, per usual, aaron Von Wardom gives us a really great breakdown of what's going on here. And the nutshell version is that the ",
        "details": {
            "boost": 0,
            "date": 1614834000,
            "description": "How [[Taproot]] Activate without [[Bitcoin Core]]?",
            "episode_title": "Read 502 - LOT true or false  The Last Hurdle for Taproot  Aaron Van Wirdum ",
            "guest": [
                "Aaron Van Wirdum"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN6946777144.mp3?updated=1624480480",
            "node_type": "clip",
            "ref_id": "b9d66ffd-c9e8-4565-a662-59549803b775",
            "show_title": "Bitcoin Audible",
            "text": "also possible, but probably less likely, that neither Lot True or Lot False is adopted by Bitcoin Core, but either or both options are included in alternative clients. If enough users switch to such alternative clients, even if there are Lot False clients, tap Root could activate without Bitcoin Core's involvement. Bitcoin Core could then release a Tap Root compatible version of its software once the rest of the network has upgraded. This is similar to how some alternative Bitcoin clients like the Bitcoin have historically adopted protocol upgrades. Or perhaps a new possibility will present itself. Authors note some of the arguments and scenarios described in the article are simplified for the sake of readability. In the event of a chain split, more factors could affect the outcome, while a lack of consensus on lot true or lot false could also result in smaller but still harmful disturbances than the ones described. To keep up with the Taproot activation process, the Bitcoin dev mailing list and the hashtag Taproot activation channel on free. Note IRC are currently the most relevant discussion channels. By Aaron Von Wordham. Another great breakdown. I've really depend on Aaron Von Wordham a lot for breaking these down for the average Bitcoin er and reader. And I keep up with Bitcoin Optech, which is another wonderful resource for this sort of thing. And I highly encourage you to read all of Aaron Van Vertem stuff. He does such a good job of breaking down the technical stuff and we've done shit, I don't know, 15 of his pieces on the show. We have a big list of Aaron bombardom articles, so definitely check out some of the other stuff that he's done. He's had a great breakdown of SegWit and the whole history there the history of P2WSA another major soft fork that kind of had some contentious issues going on and how that was resolved. He has a great piece on Tap route breaking down what that is exactly for everybody who doesn't know. I'll have that link in the show notes, so you can check it out. Let's take a quick break real fast and then I kind of want to give my version on this. I'll tell you whether or not I want lot true or lot false and we'll get into it a little bit before we close this one out really fast. Let's hit our sponsor and we'll come right back. The economy will have to shift to a better, more reliable monetary foundation in order to get us out of this extraordinary mess. Why not get a head start and switch to your own Bitcoin standard with Level Co LVL Bitcoin Mobile Banking Services. They are a free exchange with direct deposit, wire and ACH transfers, checks and debit card. And that's in the free version. For just $9 a month you get even more a world debit card personal banker to chat with and even more benefits. They are in 28 states right now and you can check out if you are one of the lucky mofos living in one@guyswan.com level. And they are planning to make their way to the rest of the US except New York by the end of this year. So stay tuned. That is level. Co Mobile Banking Serviceservices@guyswancom. Level, why are you wasting time? Start living in a Bitcoin denominated future today. So, per usual, aaron Von Wardom gives us a really great breakdown of what's going on here. And the nutshell version is that the ",
            "timestamp": "00:21:37-00:25:34",
            "topics": [
                "taproot",
                "bitcoin core",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.4407
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "weight": 1.4197,
        "id": "1120be8b-6e08-4781-95bb-a3b51c480940",
        "name": "Bitcoin Audible:Guy s Take  34 - TAPROOT IS MERGED  :00:07:39-00:10:11",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "And we'll just kind of go over again what Taproot is, why we want it for Bitcoin, because I'll just see random comments people talk about, oh, it's scaling solution and it's like it's not scaling. There is a benefit to being able to squeeze more out of a block, right? And this is just by the nature of, again, it takes less data to do the same things that's at the heart of what Taproot is. It's compacting everything as densely as we can for transaction. Well, in this case for script and signature data. So signature, that's the original, like the previous really big software, again, that we just talked about was SegWit, and that means segregated witness. Witness refers to the signature. So what this essentially did was that it made a new spot to put the signature data for the transactions and it was actually to fix a bug. But it helped in another way is it allowed us to count it separately versus that old 1 MB limit. Because the signature data is the biggest part of a transaction, or at least the one part of a transaction that is the biggest of any single piece of data in the transaction. And then when you're writing a script on a transaction is that makes that data even bigger every single time you add a new instruction, every single time you add a new output or a new key, anything like that. For instance, if you have a multi SIG transaction, even if it's from one input to one output, is a lot bigger than a single key, one input to one output transaction. And of course, because of all that extra data being there, a, it costs more because it takes up more space, but B, you're also showing everybody what's going on. You're telling everybody that this is a multi signature and this is exactly how many keys it takes to unlock it's publicly broadcast. So if anybody knows that that is yours, they also know how many keys are involved and what level of complexity any of this is. And this ",
        "details": {
            "boost": 0,
            "date": 1602820800,
            "description": "Benefits of [[Taproot]]",
            "episode_title": "Guy s Take  34 - TAPROOT IS MERGED  ",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/6377c14f-551c-44e2-b0d9-564cd519503a.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN3029808295.mp3?updated=1627960381",
            "node_type": "clip",
            "ref_id": "1120be8b-6e08-4781-95bb-a3b51c480940",
            "show_title": "Bitcoin Audible",
            "text": "And we'll just kind of go over again what Taproot is, why we want it for Bitcoin, because I'll just see random comments people talk about, oh, it's scaling solution and it's like it's not scaling. There is a benefit to being able to squeeze more out of a block, right? And this is just by the nature of, again, it takes less data to do the same things that's at the heart of what Taproot is. It's compacting everything as densely as we can for transaction. Well, in this case for script and signature data. So signature, that's the original, like the previous really big software, again, that we just talked about was SegWit, and that means segregated witness. Witness refers to the signature. So what this essentially did was that it made a new spot to put the signature data for the transactions and it was actually to fix a bug. But it helped in another way is it allowed us to count it separately versus that old 1 MB limit. Because the signature data is the biggest part of a transaction, or at least the one part of a transaction that is the biggest of any single piece of data in the transaction. And then when you're writing a script on a transaction is that makes that data even bigger every single time you add a new instruction, every single time you add a new output or a new key, anything like that. For instance, if you have a multi SIG transaction, even if it's from one input to one output, is a lot bigger than a single key, one input to one output transaction. And of course, because of all that extra data being there, a, it costs more because it takes up more space, but B, you're also showing everybody what's going on. You're telling everybody that this is a multi signature and this is exactly how many keys it takes to unlock it's publicly broadcast. So if anybody knows that that is yours, they also know how many keys are involved and what level of complexity any of this is. And this ",
            "timestamp": "00:07:39-00:10:11",
            "topics": [
                "taproot",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.4197
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/6377c14f-551c-44e2-b0d9-564cd519503a_s.jpg",
        "colors": []
    },
    {
        "weight": 1.4154,
        "id": "d564076b-753c-42c4-bcc8-c6e5f09babf9",
        "name": "The Bad Crypto Podcast:Sports Stadiums Go Crypto - Bad News For Nov 17th:00:12:48-00:15:06",
        "label": "The Bad Crypto Podcast",
        "type": "podcast",
        "node_type": "clip",
        "text": "hot. Bitcoin is hot, too. And this lead story here from Coin desk, Taproot the long anticipated upgrade for bitcoin has activated Taproot So what happens now? Well, it says here and it says here why this matters. They say that it's a melting pot of a lot of different technical innovations, all from bitcoin all into one upgrade. And they basically modified three bitcoin improvement proposals one from basically just three of those. And what it's doing is it's enhancing privacy, it's enhancing scalability, and it's also going to allow things for like smart contracts to be able to be utilized on the Lightning network. And so it's trying to make bitcoin a little bit more like ethereum, I think, to be able to do smart contracts. So we'll probably start seeing more bitcoin NFTs probably start seeing more bitcoin defy. This is really big news. And I think it's probably some of the biggest news that we've seen as far as bitcoin goes in a long time because of all these new developments. These new toolbox that developers have to be able to build. Because a lot of times they were just sort of hamstrung because all the cool stuff was being built on Ethereum. Or being built on salon. Or being built on internet computer. Or being built on polka dot or ada or whatever. And you can't build a lot of that stuff on bitcoin. Well, now they're trying to make sure that that is the case, because bitcoin is an evolving protocol, right? It's not just something that here it is, it's going to stay that way. It's going to evolve as time evolves. Don't tell me what I can build, what I can do. You don't know my blockchains. You don't know my blockchains, where my blockchains have been. I got your tap route right here. Privacy, scalability, things coming, technical things that I don't understand, you might. And smart contracts, good stuff. I don't understand any of this shit. I'm going to make a fart contract. That's good. I know nothing about nothing. I'm going to put the farts on the blockchain. Somebody's probably done that already. So what you do? ",
        "details": {
            "boost": 0,
            "date": 1637125200,
            "description": "[[Taproot]] has Activated #Bitcoin #DeFi #NFT [[Smart Contract]]",
            "episode_title": "Sports Stadiums Go Crypto - Bad News For Nov 17th",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/69b507fc-8462-4d04-af14-2b859735ab00.jpg",
            "keyword": true,
            "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/8103b6e6-466d-481d-9ca0-ade40009555c/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106",
            "node_type": "clip",
            "ref_id": "d564076b-753c-42c4-bcc8-c6e5f09babf9",
            "show_title": "The Bad Crypto Podcast",
            "text": "hot. Bitcoin is hot, too. And this lead story here from Coin desk, Taproot the long anticipated upgrade for bitcoin has activated Taproot So what happens now? Well, it says here and it says here why this matters. They say that it's a melting pot of a lot of different technical innovations, all from bitcoin all into one upgrade. And they basically modified three bitcoin improvement proposals one from basically just three of those. And what it's doing is it's enhancing privacy, it's enhancing scalability, and it's also going to allow things for like smart contracts to be able to be utilized on the Lightning network. And so it's trying to make bitcoin a little bit more like ethereum, I think, to be able to do smart contracts. So we'll probably start seeing more bitcoin NFTs probably start seeing more bitcoin defy. This is really big news. And I think it's probably some of the biggest news that we've seen as far as bitcoin goes in a long time because of all these new developments. These new toolbox that developers have to be able to build. Because a lot of times they were just sort of hamstrung because all the cool stuff was being built on Ethereum. Or being built on salon. Or being built on internet computer. Or being built on polka dot or ada or whatever. And you can't build a lot of that stuff on bitcoin. Well, now they're trying to make sure that that is the case, because bitcoin is an evolving protocol, right? It's not just something that here it is, it's going to stay that way. It's going to evolve as time evolves. Don't tell me what I can build, what I can do. You don't know my blockchains. You don't know my blockchains, where my blockchains have been. I got your tap route right here. Privacy, scalability, things coming, technical things that I don't understand, you might. And smart contracts, good stuff. I don't understand any of this shit. I'm going to make a fart contract. That's good. I know nothing about nothing. I'm going to put the farts on the blockchain. Somebody's probably done that already. So what you do? ",
            "timestamp": "00:12:48-00:15:06",
            "topics": [
                "taproot",
                "smart contract",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.4154
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/69b507fc-8462-4d04-af14-2b859735ab00_s.jpg",
        "colors": []
    },
    {
        "weight": 1.4144999999999999,
        "id": "8ca35d38-aa21-4724-94fb-9855173b60d6",
        "name": "Bitcoin Audible:Chat 44 - 2 Bitcoiners Talking Bitcoin with Citizen Bitcoin:01:22:03-01:26:20",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "to Taproot. This is a tangent from Taproot, but one of the big things that there's the signature aggregation, which is another massive both privacy and efficiency improvement where they will take aggregation and batching of transactions to this whole other level where now rather than having a public key for signature and key for every individual output, you can actually combine them all into a single key. So me, you, Cory, Jan, we could all have a transaction where we are batching together and usually we would have to sign every single UTXO. Well, we can sign and add all of our signatures together literally like a linear, like an algebraic just adding them together and then sit that one signature, that one block of information with all of our UTXOs. And not only does it mean that nobody can tell who owns which one, there's no explicit signature for these four, one signature for these two, blah, blah, blah. There's none of those connections but there's only one piece of data. There's 1200 bits, whatever the size is signature block for all of the UTXOs and this can go to thousands and thousands of them and that is huge. And obviously without Snoring, Taproot not even possible. This is step one to get in there and then the other one is L Two, the improvement to Lightning network that will hugely simplify the process of updating channels. In fact, there is one, I haven't read it yet, but somebody was talking about the process of moving funds into and out of a Lightning channel. Man, I know I have that saved in my list somewhere. I probably need to do a guy's take on this because this one was already blowing my mind, but I think I had something to do. I think it was something that was enabled by l Two, but it was basically like on the fly. Adding of money to a channel when you had not enough liquidity that basically didn't really alter that much from the normal updating of a channel. It was just incredibly easy and incredibly fast. That makes routing just so much better. Right? Basically solves any routing issues. Yeah, it's almost like is it like an automatic pull kind of situation from obviously bitcoin is pushed, but where does it get the liquidity? I guess from a different UTXO. Okay, it's wrapping in a different UTXO which is not any different from Splicing or anything, it's just that rather than closing and reopening the channel, you're just rewriting the current one with the new UTXO in it and boom, you've got that liquidity. So do you have to create a channel with like a list of UTXOs that are available to splice in or something like that. I don't know. I don't know that deep yet, but I'm going into it because I just saved it as guy definitely read into and watch this, preferably before you go on citizen bitcoin so you could talk about it. Yeah, well, I gave you two days heads up. So hey, it's not your fault, man. All right, so Taproot man. We got to get Taproot in there sooner than later. Of course, it's been on a bit for quite a while and of course the devs are extremely conservative and responsible, pushing out even soft forks, which appropriately but it's getting pretty mature, I feel, at this point. Doable this year. And what do ",
        "details": {
            "boost": 0,
            "date": 1596513600,
            "description": "[[Signature Aggregation]] in [[Taproot]]",
            "episode_title": "Chat 44 - 2 Bitcoiners Talking Bitcoin with Citizen Bitcoin",
            "guest": [
                "Brady of Citizen Bitcoin "
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN6254051243.mp3?updated=1627958944",
            "node_type": "clip",
            "ref_id": "8ca35d38-aa21-4724-94fb-9855173b60d6",
            "show_title": "Bitcoin Audible",
            "text": "to Taproot. This is a tangent from Taproot, but one of the big things that there's the signature aggregation, which is another massive both privacy and efficiency improvement where they will take aggregation and batching of transactions to this whole other level where now rather than having a public key for signature and key for every individual output, you can actually combine them all into a single key. So me, you, Cory, Jan, we could all have a transaction where we are batching together and usually we would have to sign every single UTXO. Well, we can sign and add all of our signatures together literally like a linear, like an algebraic just adding them together and then sit that one signature, that one block of information with all of our UTXOs. And not only does it mean that nobody can tell who owns which one, there's no explicit signature for these four, one signature for these two, blah, blah, blah. There's none of those connections but there's only one piece of data. There's 1200 bits, whatever the size is signature block for all of the UTXOs and this can go to thousands and thousands of them and that is huge. And obviously without Snoring, Taproot not even possible. This is step one to get in there and then the other one is L Two, the improvement to Lightning network that will hugely simplify the process of updating channels. In fact, there is one, I haven't read it yet, but somebody was talking about the process of moving funds into and out of a Lightning channel. Man, I know I have that saved in my list somewhere. I probably need to do a guy's take on this because this one was already blowing my mind, but I think I had something to do. I think it was something that was enabled by l Two, but it was basically like on the fly. Adding of money to a channel when you had not enough liquidity that basically didn't really alter that much from the normal updating of a channel. It was just incredibly easy and incredibly fast. That makes routing just so much better. Right? Basically solves any routing issues. Yeah, it's almost like is it like an automatic pull kind of situation from obviously bitcoin is pushed, but where does it get the liquidity? I guess from a different UTXO. Okay, it's wrapping in a different UTXO which is not any different from Splicing or anything, it's just that rather than closing and reopening the channel, you're just rewriting the current one with the new UTXO in it and boom, you've got that liquidity. So do you have to create a channel with like a list of UTXOs that are available to splice in or something like that. I don't know. I don't know that deep yet, but I'm going into it because I just saved it as guy definitely read into and watch this, preferably before you go on citizen bitcoin so you could talk about it. Yeah, well, I gave you two days heads up. So hey, it's not your fault, man. All right, so Taproot man. We got to get Taproot in there sooner than later. Of course, it's been on a bit for quite a while and of course the devs are extremely conservative and responsible, pushing out even soft forks, which appropriately but it's getting pretty mature, I feel, at this point. Doable this year. And what do ",
            "timestamp": "01:22:03-01:26:20",
            "topics": [
                "signature aggregation",
                "taproot",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.4144999999999999
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "weight": 1.3999,
        "id": "ea022f77-b773-4315-99ba-d6e4ad9afe84",
        "name": "Bitcoin Audible:Read 617 - Announcing Taro  Multi-Asset Bitcoin   Lightning  Ryan Gentry :00:11:33-00:12:49",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "use of the new Taproot scripting behavior available on bitcoin as of the Soft fork last November to allow developers to embed arbitrary asset metadata within an existing output. This means no additional burden on full nodes, no burning of bitcoin via the OPRETURN opcode and the Taro assets inherit all the same double spin protection of normal bitcoin transfers, along with the additional functionality like transferability over the existing Lightning network. Because the Lightning network is a payment channel network, it has faster settlement and lower fees than other blockchains and retains those properties as the network scales. Bringing stable coins to bitcoin via the Lightning network is good for users who want access to financial services, good for app developers who want new tools, good for routing node operators who want more fees, and good for issuers who want a better experience for their users. For more deeper technical details of the Taro protocol, you can dive into the protocol bi P S link included. In a nutshell, ",
        "details": {
            "boost": 0,
            "date": 1649908800,
            "description": "[[Taro]] using [[Taproot]] scripting behavior",
            "episode_title": "Read 617 - Announcing Taro  Multi-Asset Bitcoin   Lightning  Ryan Gentry ",
            "guest": [
                "Ryan Gentry"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN1100459556.mp3?updated=1650332701",
            "node_type": "clip",
            "ref_id": "ea022f77-b773-4315-99ba-d6e4ad9afe84",
            "show_title": "Bitcoin Audible",
            "text": "use of the new Taproot scripting behavior available on bitcoin as of the Soft fork last November to allow developers to embed arbitrary asset metadata within an existing output. This means no additional burden on full nodes, no burning of bitcoin via the OPRETURN opcode and the Taro assets inherit all the same double spin protection of normal bitcoin transfers, along with the additional functionality like transferability over the existing Lightning network. Because the Lightning network is a payment channel network, it has faster settlement and lower fees than other blockchains and retains those properties as the network scales. Bringing stable coins to bitcoin via the Lightning network is good for users who want access to financial services, good for app developers who want new tools, good for routing node operators who want more fees, and good for issuers who want a better experience for their users. For more deeper technical details of the Taro protocol, you can dive into the protocol bi P S link included. In a nutshell, ",
            "timestamp": "00:11:33-00:12:49",
            "topics": [
                "taro",
                "taproot",
                "taro",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.3999
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "weight": 1.385,
        "id": "882630a1-4f46-4e02-861b-c2273a023803",
        "name": "Bitcoin Audible:Read 442 - DLCs are on Bitcoin  New Functionality   Potential  Ben Carman :00:24:30-00:27:57",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "there's a quote by which obviously Taproot and Snore go even further steps into making that really a reality in the full sense of it's just one signature. Even the multi SIG itself is one signature. The time lock is just one signature that really takes it to a whole nother level, whereas this is basically manipulating the individual signatures. But this is kind of the beauty of Bitcoin and the restrictions as to what building blocks to use. Andrew Pollstra has a great talk about Taproot and Snore, which I can't quite remember which one it's on. I think he's probably mentioned this on a couple of podcasts too, that I've listened to. But innovation in cryptography, like building new cryptographic systems, isn't like a huge problem. Like, after you have the cryptographic building blocks, you don't really change those much. You don't change ECDSA, you just start writing code around it. But to have a restriction, a constraint that says, all right, well, now you can start building with this. But the only thing that you can output is a key and a signature that you can't have, like a contract, you can have this huge list of trees and architecture of an agreement and all of this stuff. The output just has to be a signature. He talks about how that's kind of insane to even suggest that you could build on something build something like that in that environment, like this opposite thinking, like, oh, well, you start with signatures and keys and stuff, and then you can build all of this stuff. But what about building all of these things where the output itself is just a signature and a key? Like building before the keys rather than after? In a sense, maybe that's a little bit off, but hopefully the analogy comes across. But he said that if you went to a cryptographer with that level of constraint or restriction, they'd be like, what are you crazy? Doesn't make any sense. But that's kind of the situation we have in Bitcoin, and that's where some of these amazing breakthroughs are actually coming with adapter signatures. We've even figured out that you can essentially do what Schnoar does with ECDSA, that we could technically get the music thing, where all signatures just combined to one signature with multiparty ECDSA, which is a completely novel thing, if I'm not mistaken. This is something that we've just kind of figured out because of the constraints of Bitcoins, like, holy crap, we can do this with ECDSA. It takes a lot more interaction upfront. Like, there's a lot of trade offs with it. But it's possible that's, like one of those things that with the ossifying of the protocol itself, I'm not too worried if we end up there because I think there's still so much innovation to explore just in that realm of things that we can still build amazing tools and get amazing privacy with the restrictions that we're in. But with that, I think we're going to get Taproot and we're going to get snore and all of these great things and we'll get a whole lot of extra benefits and privacy and cost savings just because it's not contentious and we're still early enough to be able to pull that off. I'm running the hell out of that client. But going back to ",
        "details": {
            "boost": 0,
            "date": 1600833600,
            "description": "Benefits of [[Taproot]] and [[Schnorr Signature]]",
            "episode_title": "Read 442 - DLCs are on Bitcoin  New Functionality   Potential  Ben Carman ",
            "guest": [
                "Ben Carman"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN7512927628.mp3?updated=1627959870",
            "node_type": "clip",
            "ref_id": "882630a1-4f46-4e02-861b-c2273a023803",
            "show_title": "Bitcoin Audible",
            "text": "there's a quote by which obviously Taproot and Snore go even further steps into making that really a reality in the full sense of it's just one signature. Even the multi SIG itself is one signature. The time lock is just one signature that really takes it to a whole nother level, whereas this is basically manipulating the individual signatures. But this is kind of the beauty of Bitcoin and the restrictions as to what building blocks to use. Andrew Pollstra has a great talk about Taproot and Snore, which I can't quite remember which one it's on. I think he's probably mentioned this on a couple of podcasts too, that I've listened to. But innovation in cryptography, like building new cryptographic systems, isn't like a huge problem. Like, after you have the cryptographic building blocks, you don't really change those much. You don't change ECDSA, you just start writing code around it. But to have a restriction, a constraint that says, all right, well, now you can start building with this. But the only thing that you can output is a key and a signature that you can't have, like a contract, you can have this huge list of trees and architecture of an agreement and all of this stuff. The output just has to be a signature. He talks about how that's kind of insane to even suggest that you could build on something build something like that in that environment, like this opposite thinking, like, oh, well, you start with signatures and keys and stuff, and then you can build all of this stuff. But what about building all of these things where the output itself is just a signature and a key? Like building before the keys rather than after? In a sense, maybe that's a little bit off, but hopefully the analogy comes across. But he said that if you went to a cryptographer with that level of constraint or restriction, they'd be like, what are you crazy? Doesn't make any sense. But that's kind of the situation we have in Bitcoin, and that's where some of these amazing breakthroughs are actually coming with adapter signatures. We've even figured out that you can essentially do what Schnoar does with ECDSA, that we could technically get the music thing, where all signatures just combined to one signature with multiparty ECDSA, which is a completely novel thing, if I'm not mistaken. This is something that we've just kind of figured out because of the constraints of Bitcoins, like, holy crap, we can do this with ECDSA. It takes a lot more interaction upfront. Like, there's a lot of trade offs with it. But it's possible that's, like one of those things that with the ossifying of the protocol itself, I'm not too worried if we end up there because I think there's still so much innovation to explore just in that realm of things that we can still build amazing tools and get amazing privacy with the restrictions that we're in. But with that, I think we're going to get Taproot and we're going to get snore and all of these great things and we'll get a whole lot of extra benefits and privacy and cost savings just because it's not contentious and we're still early enough to be able to pull that off. I'm running the hell out of that client. But going back to ",
            "timestamp": "00:24:30-00:27:57",
            "topics": [
                "taproot",
                "schnorr signature",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.385
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "weight": 1.377,
        "id": "9e23280e-3368-427e-8abe-841c5804b343",
        "name": "Bitcoin Audible:CryptoQuikRead 318 - Taproot is Coming  Aaron van Wirdum :00:01:28-00:03:45",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "Bitcoin users may before long be able to benefit from a trick called Taproot First proposed by bitcoin core contributor and former blockstream CTO Gregory Maxwell, Taproot would expand on bitcoin's smart contract flexibility while offering more privacy. In doing so, even the most complex smart contracts would, on the blockchain, typically be indistinguishable from regular transactions. While a big undertaking, this is not just a theory. Several of the most prolific bitcoin core contributors, including Peter Wella, Anthony Towns, Johnson Lao, Jonas Nick, Andrew polestra, Tim Ruffing, rusty Russell, and indeed, Gregory Maxwell, are working on a Schmore signature proposal that would include Taproot all in one protocol upgrade. Here's what Taproot is and how it works. All bitcoins are essentially locked up in scripts, a couple of lines of code embedded in a transaction included in the blockchain that define how the coins can be spent in the next transaction. Spending conditions usually involve providing a signature to prove ownership of the coins. But other well known conditions, for example, include time locks. Coins can only be spent after a specific block height or date or multisig. Coins can only be spent if some number of private keys out of a set of private keys provide signatures. Different conditions can be mixed and matched to create complex types of smart contracts. An example of such a contract could be that coins can be spent if both Alice and Bob sign, or if Alice alone signs after a week has passed, or if Bob alone signs while also providing a secret number. Whichever of these three conditions is met first is how the coins are spent since 2012. Scripts ",
        "details": {
            "boost": 0,
            "date": 1573448400,
            "description": "Nature of [[Taproot]]",
            "episode_title": "CryptoQuikRead 318 - Taproot is Coming  Aaron van Wirdum ",
            "guest": [
                "Aaron van Wirdum"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN2334120546.mp3?updated=1627940471",
            "node_type": "clip",
            "ref_id": "9e23280e-3368-427e-8abe-841c5804b343",
            "show_title": "Bitcoin Audible",
            "text": "Bitcoin users may before long be able to benefit from a trick called Taproot First proposed by bitcoin core contributor and former blockstream CTO Gregory Maxwell, Taproot would expand on bitcoin's smart contract flexibility while offering more privacy. In doing so, even the most complex smart contracts would, on the blockchain, typically be indistinguishable from regular transactions. While a big undertaking, this is not just a theory. Several of the most prolific bitcoin core contributors, including Peter Wella, Anthony Towns, Johnson Lao, Jonas Nick, Andrew polestra, Tim Ruffing, rusty Russell, and indeed, Gregory Maxwell, are working on a Schmore signature proposal that would include Taproot all in one protocol upgrade. Here's what Taproot is and how it works. All bitcoins are essentially locked up in scripts, a couple of lines of code embedded in a transaction included in the blockchain that define how the coins can be spent in the next transaction. Spending conditions usually involve providing a signature to prove ownership of the coins. But other well known conditions, for example, include time locks. Coins can only be spent after a specific block height or date or multisig. Coins can only be spent if some number of private keys out of a set of private keys provide signatures. Different conditions can be mixed and matched to create complex types of smart contracts. An example of such a contract could be that coins can be spent if both Alice and Bob sign, or if Alice alone signs after a week has passed, or if Bob alone signs while also providing a secret number. Whichever of these three conditions is met first is how the coins are spent since 2012. Scripts ",
            "timestamp": "00:01:28-00:03:45",
            "topics": [
                "taproot",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.377
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "weight": 1.3588,
        "id": "e2bee60e-9ff2-4a70-9324-820f1b857c3a",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Taproot Lock-in - NADO 40:00:02:06-00:06:42",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "What does Tap Root lock in recap a little bit for our listeners that maybe miss previous episodes. What does it mean? That Tapu has locked in. Right. So for every software, there is at least as of the last six, seven years, there is mechanism BIP nine, bib eight. Kind of varies. But the idea is that a software can be in multiple States. It's a state machine. And the first state it would be in is defined and defined just means this software exists, we know about it. Then there's a software state called Start it, and that means that can signal for it. And so that means that when a software gets started, all nodes are paying attention to that signal, and then the. Signal is just a bit of data in the Bitcoin block. In the Bitcoin block, they mine. Yeah. In the header that's just a bit is flagged. So notes, start counting minor signaling. Yeah. And if they're signaling that way before software is in the start state, then that signal is just noise. It's ignored. But there are some nodes might look at that and say, hey, I'm seeing some signaling. I don't understand what this is, and they might want to use it. There might be a software that you don't know about. Anyway, this signaling took place. It crossed a certain threshold, and then it went into the next state, which is called locked in, and it's going to remain in that state until block number 709,632 kwh. Yeah. So we used the speedy trial activation mechanism, which we discussed in the previous episode, which meant that miners had about three months to signal support. And if 90% of minors would signal support within one difficulty period, that means the software would be locked in, which means it would activate later. So that happened last week. Chapel got locked in. And like you said, that means it's going to activate at block 709,632, which is scheduled to be mined in November of this year. No, it's not scheduled, but it's expected to be mined in November this year. Right. The other thing, I guess, is worth noting because we also had the episode about the difference activation mechanism and sort of the alternative clients that did something very similar but slightly different. Without getting into the details of that one, we can just safely say at this point that will also activate Taproot at the same block, presumably in November. Yes. So I would assume that at this point there's no point in running that alternative client anymore. Yeah, I tend to agree with that. At this point, it's probably better to just run Bitcoin Core Zero point 21.1 or any newer Bitcoin Core leads that's upcoming. Yes, exactly. And that's basically for those that don't know that because I've seen some questions about that, people asking how to prepare for temporary or how to get ready. That's basically as simple as it is. Upgrades to Bitcoin Core Zero point 21.1 or a newer version of Bitcoin Core or potentially if that's what you're into some alternative client or implementation that also enforces that route. But I don't know which ones these. Yeah, I think at the moment, Nondo. I know that activation client then. Yeah, exactly. So I think Lip, Bitcoin and BTCD are working on Tap root, but they haven't done it yet. So you can't run their code yet to check for Tap root rules. So this is basically just upgrade to Bitcoin Core Zero point 21.1, I guess is our. Exactly. And if you really want to use the cool features that are going to be in Taproot, like Wallet support, we'll get to that later. But then you're going to need Bitcoin version, Bitcoin Core version 22, which will come out later. But you don't have to do that. I think I can just finish the list of States because we were talking about it. So it starts with defined, then it's started, then it's locked in, which is where we're now, then it becomes active and active just means what you think it means. The rules apply and that's what's going to happen. And it's going to stay there forever. Well, at some point, a new version might be released that just assumes it's active and doesn't explicitly say it anymore. It could have also reached the state failed. Right. But it didn't. It didn't. Okay, I ",
        "details": {
            "boost": 0,
            "date": 1623988800,
            "description": "Upgrade states and what is [[Taproot]] lock in?",
            "episode_title": "Taproot Lock-in - NADO 40",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/a64d3011-a305-4883-bf1f-8c3933535a24.jpg",
            "keyword": true,
            "link": "https://traffic.libsyn.com/secure/nadobtc/NADO_40_-_6_17_21_6.33_PM.mp3?dest-id=2366201",
            "node_type": "clip",
            "ref_id": "e2bee60e-9ff2-4a70-9324-820f1b857c3a",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "What does Tap Root lock in recap a little bit for our listeners that maybe miss previous episodes. What does it mean? That Tapu has locked in. Right. So for every software, there is at least as of the last six, seven years, there is mechanism BIP nine, bib eight. Kind of varies. But the idea is that a software can be in multiple States. It's a state machine. And the first state it would be in is defined and defined just means this software exists, we know about it. Then there's a software state called Start it, and that means that can signal for it. And so that means that when a software gets started, all nodes are paying attention to that signal, and then the. Signal is just a bit of data in the Bitcoin block. In the Bitcoin block, they mine. Yeah. In the header that's just a bit is flagged. So notes, start counting minor signaling. Yeah. And if they're signaling that way before software is in the start state, then that signal is just noise. It's ignored. But there are some nodes might look at that and say, hey, I'm seeing some signaling. I don't understand what this is, and they might want to use it. There might be a software that you don't know about. Anyway, this signaling took place. It crossed a certain threshold, and then it went into the next state, which is called locked in, and it's going to remain in that state until block number 709,632 kwh. Yeah. So we used the speedy trial activation mechanism, which we discussed in the previous episode, which meant that miners had about three months to signal support. And if 90% of minors would signal support within one difficulty period, that means the software would be locked in, which means it would activate later. So that happened last week. Chapel got locked in. And like you said, that means it's going to activate at block 709,632, which is scheduled to be mined in November of this year. No, it's not scheduled, but it's expected to be mined in November this year. Right. The other thing, I guess, is worth noting because we also had the episode about the difference activation mechanism and sort of the alternative clients that did something very similar but slightly different. Without getting into the details of that one, we can just safely say at this point that will also activate Taproot at the same block, presumably in November. Yes. So I would assume that at this point there's no point in running that alternative client anymore. Yeah, I tend to agree with that. At this point, it's probably better to just run Bitcoin Core Zero point 21.1 or any newer Bitcoin Core leads that's upcoming. Yes, exactly. And that's basically for those that don't know that because I've seen some questions about that, people asking how to prepare for temporary or how to get ready. That's basically as simple as it is. Upgrades to Bitcoin Core Zero point 21.1 or a newer version of Bitcoin Core or potentially if that's what you're into some alternative client or implementation that also enforces that route. But I don't know which ones these. Yeah, I think at the moment, Nondo. I know that activation client then. Yeah, exactly. So I think Lip, Bitcoin and BTCD are working on Tap root, but they haven't done it yet. So you can't run their code yet to check for Tap root rules. So this is basically just upgrade to Bitcoin Core Zero point 21.1, I guess is our. Exactly. And if you really want to use the cool features that are going to be in Taproot, like Wallet support, we'll get to that later. But then you're going to need Bitcoin version, Bitcoin Core version 22, which will come out later. But you don't have to do that. I think I can just finish the list of States because we were talking about it. So it starts with defined, then it's started, then it's locked in, which is where we're now, then it becomes active and active just means what you think it means. The rules apply and that's what's going to happen. And it's going to stay there forever. Well, at some point, a new version might be released that just assumes it's active and doesn't explicitly say it anymore. It could have also reached the state failed. Right. But it didn't. It didn't. Okay, I ",
            "timestamp": "00:02:06-00:06:42",
            "topics": [
                "taproot",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.3588
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/a64d3011-a305-4883-bf1f-8c3933535a24_s.jpg",
        "colors": []
    },
    {
        "weight": 1.341,
        "id": "f85c6ac0-926a-497a-85df-efbbc28ec366",
        "name": "Bitcoin Audible:CryptoQuikRead 318 - Taproot is Coming  Aaron van Wirdum :00:26:05-00:29:09",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "there is always a path in the Taproot for everyone who is involved to simply sign and release it to that person, well then having that proof going to them with that proof of the merkel path to your destination makes it pointless for them to try to cheat. It makes it pointless for them to not simply do a cooperative close because what do they gain? They don't gain anything. They try to do a cooperative close, they won't get your signature, which means they'll have to do one of the backups and then you broadcast your proof and you get the keys. So it's a way to just slow down the inevitable end of this whole thing. And it's a way to force all the participants in this incredibly complex and decentralized agreement, or centralized agreement, whatever it is, that everyone is forced to be honest because honesty is going to be enforced one way or the other. It's just that we can do it a whole lot cheaper right now or you can waste a lot of people's time. And so, duh, we just want to close this thing out and broadcast it. It's very much like Lightning, except in the sense that the contract is built so that there is a time lock to dispute essentially the final state of the chain or the final state of all the transactions that happened off chain. And the rightful owner always has the ability to revoke any previous state, which is fraud in that instance. This is very similar to the same thing, except with a broad scope of what you can do with the smart contract outside of just off chain payments. The Taproot can encompass a Lightning channel. Like all the scripts and stuff that we're used to seeing like the ability to see how many channels there are on the network are actually going to disappear because we're not going to be able to know what's a channel and what's not from blockchain analysis. If everybody uses a Taproot signature, the only ones that will ever be visible on the chain are the ones that have uncooperative closes, that are actually disputed, which is a tiny fraction of all the channels that are out there. So Lightning will go completely dark with tap route from a blockchain analysis sense of things. However, when you ping the network as a participant of the Lightning network, you will still get updates on channels and stuff, so you'll still be able to have some view of any public channels that are not set up as private on the network, which a lot of them are these days. And you can generally get an idea of your neighborhood and Lightning Network and you can map it. You probably would be able to map it decently well, depending on how many nodes want to be private and how many channels want to be private, which I kind of expect to go up with time, but it's going to be kind of crazy. Like Lightning network is ",
        "details": {
            "boost": 0,
            "date": 1573448400,
            "description": "Does [[Taproot]] Setup Need a Proof?",
            "episode_title": "CryptoQuikRead 318 - Taproot is Coming  Aaron van Wirdum ",
            "guest": [
                "Aaron van Wirdum"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN2334120546.mp3?updated=1627940471",
            "node_type": "clip",
            "ref_id": "f85c6ac0-926a-497a-85df-efbbc28ec366",
            "show_title": "Bitcoin Audible",
            "text": "there is always a path in the Taproot for everyone who is involved to simply sign and release it to that person, well then having that proof going to them with that proof of the merkel path to your destination makes it pointless for them to try to cheat. It makes it pointless for them to not simply do a cooperative close because what do they gain? They don't gain anything. They try to do a cooperative close, they won't get your signature, which means they'll have to do one of the backups and then you broadcast your proof and you get the keys. So it's a way to just slow down the inevitable end of this whole thing. And it's a way to force all the participants in this incredibly complex and decentralized agreement, or centralized agreement, whatever it is, that everyone is forced to be honest because honesty is going to be enforced one way or the other. It's just that we can do it a whole lot cheaper right now or you can waste a lot of people's time. And so, duh, we just want to close this thing out and broadcast it. It's very much like Lightning, except in the sense that the contract is built so that there is a time lock to dispute essentially the final state of the chain or the final state of all the transactions that happened off chain. And the rightful owner always has the ability to revoke any previous state, which is fraud in that instance. This is very similar to the same thing, except with a broad scope of what you can do with the smart contract outside of just off chain payments. The Taproot can encompass a Lightning channel. Like all the scripts and stuff that we're used to seeing like the ability to see how many channels there are on the network are actually going to disappear because we're not going to be able to know what's a channel and what's not from blockchain analysis. If everybody uses a Taproot signature, the only ones that will ever be visible on the chain are the ones that have uncooperative closes, that are actually disputed, which is a tiny fraction of all the channels that are out there. So Lightning will go completely dark with tap route from a blockchain analysis sense of things. However, when you ping the network as a participant of the Lightning network, you will still get updates on channels and stuff, so you'll still be able to have some view of any public channels that are not set up as private on the network, which a lot of them are these days. And you can generally get an idea of your neighborhood and Lightning Network and you can map it. You probably would be able to map it decently well, depending on how many nodes want to be private and how many channels want to be private, which I kind of expect to go up with time, but it's going to be kind of crazy. Like Lightning network is ",
            "timestamp": "00:26:05-00:29:09",
            "topics": [
                "taproot",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.341
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "weight": 1.3237,
        "id": "78559909-4296-407d-89b4-2ef1951b236d",
        "name": "Bitcoin Audible:Read 518 - Two Taproot Activation Clients   Aaron Van Wirdum :00:04:10-00:09:20",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "works. But you have to write down all of that into the transaction. All of that script has to be included in the signature data. And the more complex stuff you do, the bigger and bulkier that data gets. And it can get really obnoxious, really fast. Tap root is a protocol upgrade that turns all of that scripting data even if it has 1000 different branches of failsafes and backups and what if clauses after six months and blah, blah shrinks it all down into a single uniform sized signature. So this not only provides extraordinary data savings for more complex smart contracts, which is pretty relevant right now, with fees being pretty huge. I think the median fee right now is like $16 or something, but it also creates privacy in what the actual contract is doing. So you might have like seven or eight other parties, like your lawyer, a secondary business relationship. The number of things that you could have in a bitcoin contract are basically limitless, but you might not want to broadcast to the whole world that they're even involved. Like you don't want everybody to just be able to see that and all the potential backups and branches and attack vectors of who owns what just by looking at your transaction. And if it's all hidden in a Taproot signature, none of it is visible. Even in the case of that complicated Lightning contract, it looks exactly the same as if you were just sending one amount of bitcoin to one person. The signature looks identical. It's a really powerful improvement to bitcoin, and it even has the potential to make it down the road so that you can actually batch with other people. So, yes, we can uniform our signatures down to one basic signature, even with a complex script. But then you could actually take hundreds of different signatures of different parties and compress those already compressed signatures down into just one signature as well. So this could create another multiple when it comes to data efficiency with batching and coin joins and multisig and like a peer to peer batching protocol, like all sorts of things. So there's just an amazing amount of potential with this upgrade. And the second part of the thing I just hit with combining different signatures into one is something that's possible down the road after we have Taproot Tap root makes that available so that's Taproot in a nutshell, and we're about to get the first major part of that on the network live. And right now we're basically arguing about how to turn it on. And that's where this is much easier to cover. But that's where the lot equals true versus the lot equals false thing comes in. I've got a link in the show notes for a read where Aaron covers this whole thing and what it all means. But again, this is really simple. Basically, how do we turn this thing on? And what we're trying to do is we're trying to reach a certain number of nodes and miners on the network to update to the new code before we turn it on, because everybody needs to be on the new rules before it's safe to cut them on. So basically, setting this to false means that we're going to try to activate, but if we don't hit a high amount of adoption miners installing the new code, here the amount that we would like, it just runs out, it just expires itself and we start back at the drawing board and we come up with a new plan. Lot equals true means that if we don't hit the adoption threshold, screw it, let's turn it on anyway, which actually puts pressure on everybody to go ahead and adopt it and make sure they have it installed because there is a cost or a risk to not doing so. Whereas in the other situation, somebody could actually support Taproot or not really care, but then not upgrade because who cares? Like just to be a new sensor, just because they don't want to do anything. So they could slow everyone down and prevent the Taproot upgrade from happening for no other reason than they just didn't want to be bothered. So hopefully that kind of lays the groundwork for now. We're here now we have an argument about whether we want this thing to be true or false. And now there are two separate clients using two separate activation methods. What does that mean? So now I'm going to hand it over to the brilliant Aaron Von Wordham with today's article and it's titled there are now two Tap root activation clients. Here s Why by Erin von Vertem there are now two different Taproot activation paths embedded in Bitcoin software clients. Here is what this could mean for the Bitcoin protocol. Tap, ",
        "details": {
            "boost": 0,
            "date": 1618804800,
            "description": "Basic Idea of [[Taproot]]",
            "episode_title": "Read 518 - Two Taproot Activation Clients   Aaron Van Wirdum ",
            "guest": [
                "Aaron Van Wirdum"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN9741421976.mp3?updated=1624479911",
            "node_type": "clip",
            "ref_id": "78559909-4296-407d-89b4-2ef1951b236d",
            "show_title": "Bitcoin Audible",
            "text": "works. But you have to write down all of that into the transaction. All of that script has to be included in the signature data. And the more complex stuff you do, the bigger and bulkier that data gets. And it can get really obnoxious, really fast. Tap root is a protocol upgrade that turns all of that scripting data even if it has 1000 different branches of failsafes and backups and what if clauses after six months and blah, blah shrinks it all down into a single uniform sized signature. So this not only provides extraordinary data savings for more complex smart contracts, which is pretty relevant right now, with fees being pretty huge. I think the median fee right now is like $16 or something, but it also creates privacy in what the actual contract is doing. So you might have like seven or eight other parties, like your lawyer, a secondary business relationship. The number of things that you could have in a bitcoin contract are basically limitless, but you might not want to broadcast to the whole world that they're even involved. Like you don't want everybody to just be able to see that and all the potential backups and branches and attack vectors of who owns what just by looking at your transaction. And if it's all hidden in a Taproot signature, none of it is visible. Even in the case of that complicated Lightning contract, it looks exactly the same as if you were just sending one amount of bitcoin to one person. The signature looks identical. It's a really powerful improvement to bitcoin, and it even has the potential to make it down the road so that you can actually batch with other people. So, yes, we can uniform our signatures down to one basic signature, even with a complex script. But then you could actually take hundreds of different signatures of different parties and compress those already compressed signatures down into just one signature as well. So this could create another multiple when it comes to data efficiency with batching and coin joins and multisig and like a peer to peer batching protocol, like all sorts of things. So there's just an amazing amount of potential with this upgrade. And the second part of the thing I just hit with combining different signatures into one is something that's possible down the road after we have Taproot Tap root makes that available so that's Taproot in a nutshell, and we're about to get the first major part of that on the network live. And right now we're basically arguing about how to turn it on. And that's where this is much easier to cover. But that's where the lot equals true versus the lot equals false thing comes in. I've got a link in the show notes for a read where Aaron covers this whole thing and what it all means. But again, this is really simple. Basically, how do we turn this thing on? And what we're trying to do is we're trying to reach a certain number of nodes and miners on the network to update to the new code before we turn it on, because everybody needs to be on the new rules before it's safe to cut them on. So basically, setting this to false means that we're going to try to activate, but if we don't hit a high amount of adoption miners installing the new code, here the amount that we would like, it just runs out, it just expires itself and we start back at the drawing board and we come up with a new plan. Lot equals true means that if we don't hit the adoption threshold, screw it, let's turn it on anyway, which actually puts pressure on everybody to go ahead and adopt it and make sure they have it installed because there is a cost or a risk to not doing so. Whereas in the other situation, somebody could actually support Taproot or not really care, but then not upgrade because who cares? Like just to be a new sensor, just because they don't want to do anything. So they could slow everyone down and prevent the Taproot upgrade from happening for no other reason than they just didn't want to be bothered. So hopefully that kind of lays the groundwork for now. We're here now we have an argument about whether we want this thing to be true or false. And now there are two separate clients using two separate activation methods. What does that mean? So now I'm going to hand it over to the brilliant Aaron Von Wordham with today's article and it's titled there are now two Tap root activation clients. Here s Why by Erin von Vertem there are now two different Taproot activation paths embedded in Bitcoin software clients. Here is what this could mean for the Bitcoin protocol. Tap, ",
            "timestamp": "00:04:10-00:09:20",
            "topics": [
                "taproot",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.3237
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "weight": 1.2185,
        "id": "bf80a754-90ab-49e6-848b-788d2d4e672b",
        "name": "BTC Sessions:WHY ARE WE BULLISH  Bruce Fenton  Len From CAD BTC Pod  Guy Swann ep265:01:31:55-01:37:47",
        "label": "BTC Sessions",
        "type": "podcast",
        "node_type": "clip",
        "text": "it to you. Thoughts on guys topic on Lightning, on things being built during the bear. What are your feelings? Well, I love it. I mean, it's so exciting to see the building on Lightning. I mean, it's just really cool. And you illustrated it perfectly. You don't need a lot of these other coins for this kind of stuff. The foundation of bitcoin is so strong, and I think it's the ultimate cipher punk project and these ideals of decentralization and not having anybody in charge. There's so many revolutionary things about bitcoin that just change everything in how our world works. So it's inevitable that it's going to replace money and then a lot of things that go with money, like Swift. Swift is not exactly money. It's just a clunky, stupid thing that they didn't have anything better to do to move money around. And it's gone. I mean, it's toast. I knew that before the Lightning Network, before it was even invented, it was just as clear as day that there's just no way. And there's a lot of things like that in our world that it's just inevitable to be replaced. So I think it's just a super exciting time to be alive and it's really cool to be in this space. Yeah, it's staggering. Some of the things that have been done and the bear markets are when the greatest innovation comes, right, everybody is asleep. The people that were outside of the space have no idea what's going on. As bitcoin is, you get to be around, experience it, see it happening, see the world at large, not have a clue what's going on. And then the next Bull Run comes, the next hype cycle comes, and everybody's like, the new narrative is like, oh, this is here, this works. And so it was interesting this time around because, like, 2017, the number one concern was scaling. And it's funny because there was still a remnant of that, this Bull Run. There's still, like, the remnants of people being like, oh, well, bitcoin can't scale. You're like, dude, I'm receiving microtransactions from my podcast. What are you talking about? And so it's going to take time to shift. I have no doubt that next Bull Run, if somebody says something like, bitcoin doesn't scale, people will laugh them out of the room because it will be just so blatantly obvious. I think the next turnaround is going to be bitcoin privacy. And I'm very excited on that front in that. In 2017, when it hit a fever pitch, especially early 2017, we had no scaling on bitcoin. There was nothing on chain to make things more efficient. There was no layer two to make things more efficient. Fast forward five years. We've got segued on chain, we've got Taproot on chain, and we've got the Lightning Network, which potentially scales to millions of transactions per second. And that just wasn't even possible at that point in time. And we had no tools from then compared to now. Compare that to privacy. Privacy, I think, is front of mind for a lot of people. A lot of. People are worried that bitcoin privacy is very bad and on chain, more or less, it kind of is. But we do have privacy related tools for bitcoin, a large plethora of them actually, right now. And if that's front of mind, think of the progress that will be made in the subsequent three, four or five years, we'll be in an entirely different place in that period of time. And you'll still have remnants of people being like, you can't be private on bitcoin, but they'll be still moderately mistaken at that point. And then moving forward, they'll be laughably mistaken. So I think it's just whatever the concern is, it ends up being built in some way, shape, or form, and we're already seeing it. And I think moving forward, bitcoin is going to make leaps and bounds in the privacy realm during this bear market. That's my hope, and I hope to see it materialize. And I think it is. It's already there and we're already in a better place versus scaling than we were in 2017. So we'll see how that progresses. But I'll open it up to everybody. I think what I'll start to do is I'm going to start to round it out. But on that topic, if you have any final thoughts or any final thoughts on anything that was mentioned throughout the show, and then I'm also going to give you a challenge as well. We mentioned some resources, so I'm going to throw them out right now. You can't double dip my friends, but if you want to recommend a resource that has been helpful in your bitcoin journey, whether it be a book, an article, a podcast, a video, anything, whatever it may be. The ones that were mentioned were the fourth turning from Bruce when money dies. Both of these definitely worth reading. I have another recommendation I'm not going to mention until the end because I don't want to screw over too many people on their recommendations. If it doesn't get brought up, we'll bring it up again. But The Fourth Turning by William Strauss and Neil Howe and When Money Dies by Adam Ferguson. The first turning is in regards to kind of the cyclical nature of humanity, how we respond to stimuli and crises and so on and so forth, and how we shape our society. When Money Dies basically goes through the conditions that led to and the results of the hyperinflation in Weimar Germany in the 19th, believe, and then which more or less resulted in the Second World War by the end of all of that, or at least in part. So I'm going to jump to Len first, dude. Any final thoughts on anything mentioned throughout the episode and any recommendations for content? So, ",
        "details": {
            "boost": 0,
            "date": 1655524800,
            "description": "Greatest [[Bitcoin Innovations]] are done in [[Bear Markets]] [[Lightning]], [[SegWit]], [[Taproot]]",
            "episode_title": "WHY ARE WE BULLISH  Bruce Fenton  Len From CAD BTC Pod  Guy Swann ep265",
            "guest": [
                "Bruce Fenton",
                "Len From CAD BTC Pod",
                "Guy Swann"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/de744984-4b8b-457b-84b8-376288f1a2d6.jpg",
            "keyword": true,
            "link": "https://anchor.fm/s/11e95d20/podcast/play/53650416/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2022-5-18%2F272279691-44100-2-628761897f42c.mp3",
            "node_type": "clip",
            "ref_id": "bf80a754-90ab-49e6-848b-788d2d4e672b",
            "show_title": "BTC Sessions",
            "text": "it to you. Thoughts on guys topic on Lightning, on things being built during the bear. What are your feelings? Well, I love it. I mean, it's so exciting to see the building on Lightning. I mean, it's just really cool. And you illustrated it perfectly. You don't need a lot of these other coins for this kind of stuff. The foundation of bitcoin is so strong, and I think it's the ultimate cipher punk project and these ideals of decentralization and not having anybody in charge. There's so many revolutionary things about bitcoin that just change everything in how our world works. So it's inevitable that it's going to replace money and then a lot of things that go with money, like Swift. Swift is not exactly money. It's just a clunky, stupid thing that they didn't have anything better to do to move money around. And it's gone. I mean, it's toast. I knew that before the Lightning Network, before it was even invented, it was just as clear as day that there's just no way. And there's a lot of things like that in our world that it's just inevitable to be replaced. So I think it's just a super exciting time to be alive and it's really cool to be in this space. Yeah, it's staggering. Some of the things that have been done and the bear markets are when the greatest innovation comes, right, everybody is asleep. The people that were outside of the space have no idea what's going on. As bitcoin is, you get to be around, experience it, see it happening, see the world at large, not have a clue what's going on. And then the next Bull Run comes, the next hype cycle comes, and everybody's like, the new narrative is like, oh, this is here, this works. And so it was interesting this time around because, like, 2017, the number one concern was scaling. And it's funny because there was still a remnant of that, this Bull Run. There's still, like, the remnants of people being like, oh, well, bitcoin can't scale. You're like, dude, I'm receiving microtransactions from my podcast. What are you talking about? And so it's going to take time to shift. I have no doubt that next Bull Run, if somebody says something like, bitcoin doesn't scale, people will laugh them out of the room because it will be just so blatantly obvious. I think the next turnaround is going to be bitcoin privacy. And I'm very excited on that front in that. In 2017, when it hit a fever pitch, especially early 2017, we had no scaling on bitcoin. There was nothing on chain to make things more efficient. There was no layer two to make things more efficient. Fast forward five years. We've got segued on chain, we've got Taproot on chain, and we've got the Lightning Network, which potentially scales to millions of transactions per second. And that just wasn't even possible at that point in time. And we had no tools from then compared to now. Compare that to privacy. Privacy, I think, is front of mind for a lot of people. A lot of. People are worried that bitcoin privacy is very bad and on chain, more or less, it kind of is. But we do have privacy related tools for bitcoin, a large plethora of them actually, right now. And if that's front of mind, think of the progress that will be made in the subsequent three, four or five years, we'll be in an entirely different place in that period of time. And you'll still have remnants of people being like, you can't be private on bitcoin, but they'll be still moderately mistaken at that point. And then moving forward, they'll be laughably mistaken. So I think it's just whatever the concern is, it ends up being built in some way, shape, or form, and we're already seeing it. And I think moving forward, bitcoin is going to make leaps and bounds in the privacy realm during this bear market. That's my hope, and I hope to see it materialize. And I think it is. It's already there and we're already in a better place versus scaling than we were in 2017. So we'll see how that progresses. But I'll open it up to everybody. I think what I'll start to do is I'm going to start to round it out. But on that topic, if you have any final thoughts or any final thoughts on anything that was mentioned throughout the show, and then I'm also going to give you a challenge as well. We mentioned some resources, so I'm going to throw them out right now. You can't double dip my friends, but if you want to recommend a resource that has been helpful in your bitcoin journey, whether it be a book, an article, a podcast, a video, anything, whatever it may be. The ones that were mentioned were the fourth turning from Bruce when money dies. Both of these definitely worth reading. I have another recommendation I'm not going to mention until the end because I don't want to screw over too many people on their recommendations. If it doesn't get brought up, we'll bring it up again. But The Fourth Turning by William Strauss and Neil Howe and When Money Dies by Adam Ferguson. The first turning is in regards to kind of the cyclical nature of humanity, how we respond to stimuli and crises and so on and so forth, and how we shape our society. When Money Dies basically goes through the conditions that led to and the results of the hyperinflation in Weimar Germany in the 19th, believe, and then which more or less resulted in the Second World War by the end of all of that, or at least in part. So I'm going to jump to Len first, dude. Any final thoughts on anything mentioned throughout the episode and any recommendations for content? So, ",
            "timestamp": "01:31:55-01:37:47",
            "topics": [
                "bitcoin innovations",
                "bear markets",
                "lightning",
                "segwit",
                "taproot",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1.2185
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/de744984-4b8b-457b-84b8-376288f1a2d6_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "c5d33f10-d55a-4a43-b7e5-c25c3c89a304",
        "name": "Citadel Dispatch:CD71  bitcoin payments with  utxoclub   wiz   dooowta  and  benthecarman:01:15:15-01:17:09",
        "label": "Citadel Dispatch",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1657944000,
            "description": "Start using [[Taproot]] now",
            "episode_title": "CD71  bitcoin payments with  utxoclub   wiz   dooowta  and  benthecarman",
            "guest": [
                "@utxoclub",
                "@wiz",
                "@dooowta",
                "@benthecarman"
            ],
            "image_url": "",
            "keyword": false,
            "link": "https://anchor.fm/s/45563e80/podcast/play/54892881/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2022-6-16%2Fa2c89c48-4031-7fde-ecf5-92ba9511f051.m4a",
            "node_type": "clip",
            "ref_id": "c5d33f10-d55a-4a43-b7e5-c25c3c89a304",
            "show_title": "Citadel Dispatch",
            "text": "",
            "timestamp": "01:15:15-01:17:09",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "",
        "colors": []
    },
    {
        "weight": 1,
        "id": "beb13404-ed7c-4237-b977-1ebd6e1eaa55",
        "name": "Bitcoin.Review:Bitcoin.Review with NVK - A Review of Updates to Popular Bitcoin Projects:01:18:32-01:23:18",
        "label": "Bitcoin.Review",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1656475200,
            "description": "[[Armory]] to implement [[Taproot]] along with many others",
            "episode_title": "Bitcoin.Review with NVK - A Review of Updates to Popular Bitcoin Projects",
            "guest": [
                "NVK",
                "Matt Odell"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/cd6b8d64-bd52-4f1e-86b3-ca8ba2eb169f.jpg",
            "keyword": false,
            "link": "https://anchor.fm/s/45563e80/podcast/play/54114630/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2022-5-28%2F0e5e0d70-98b9-10bd-3e81-5afea20cd8cc.m4a",
            "node_type": "clip",
            "ref_id": "beb13404-ed7c-4237-b977-1ebd6e1eaa55",
            "show_title": "Bitcoin.Review",
            "text": "",
            "timestamp": "01:18:32-01:23:18",
            "topics": [
                "armory",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/cd6b8d64-bd52-4f1e-86b3-ca8ba2eb169f_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "d2b2b863-d33a-47a7-ac98-d97ef42586fb",
        "name": "Bitcoin.Review:Bitcoin.Review with NVK - A Review of Updates to Popular Bitcoin Projects:01:11:14-01:12:52",
        "label": "Bitcoin.Review",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1656475200,
            "description": "[[Zues]] added [[Taproot]]",
            "episode_title": "Bitcoin.Review with NVK - A Review of Updates to Popular Bitcoin Projects",
            "guest": [
                "NVK",
                "Matt Odell"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/cd6b8d64-bd52-4f1e-86b3-ca8ba2eb169f.jpg",
            "keyword": false,
            "link": "https://anchor.fm/s/45563e80/podcast/play/54114630/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2022-5-28%2F0e5e0d70-98b9-10bd-3e81-5afea20cd8cc.m4a",
            "node_type": "clip",
            "ref_id": "d2b2b863-d33a-47a7-ac98-d97ef42586fb",
            "show_title": "Bitcoin.Review",
            "text": "",
            "timestamp": "01:11:14-01:12:52",
            "topics": [
                "zues",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/cd6b8d64-bd52-4f1e-86b3-ca8ba2eb169f_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "f3863b80-518a-497b-8083-20e9f111d175",
        "name": "Bitcoin.Review:Bitcoin.Review with NVK - A Review of Updates to Popular Bitcoin Projects:00:11:25-00:13:00",
        "label": "Bitcoin.Review",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1656475200,
            "description": "Mark 3 pay to [[taproot]] support",
            "episode_title": "Bitcoin.Review with NVK - A Review of Updates to Popular Bitcoin Projects",
            "guest": [
                "NVK",
                "Matt Odell"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/cd6b8d64-bd52-4f1e-86b3-ca8ba2eb169f.jpg",
            "keyword": false,
            "link": "https://anchor.fm/s/45563e80/podcast/play/54114630/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2022-5-28%2F0e5e0d70-98b9-10bd-3e81-5afea20cd8cc.m4a",
            "node_type": "clip",
            "ref_id": "f3863b80-518a-497b-8083-20e9f111d175",
            "show_title": "Bitcoin.Review",
            "text": "",
            "timestamp": "00:11:25-00:13:00",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/cd6b8d64-bd52-4f1e-86b3-ca8ba2eb169f_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "5563d4e7-6474-4337-bf62-19817aeae380",
        "name": "Coin Stories with Natalie Brunell:Lyn Alden  Bitcoin  Bear Market and What s Ahead:00:08:25-00:09:14",
        "label": "Coin Stories with Natalie Brunell",
        "type": "podcast",
        "node_type": "clip",
        "text": "market. Can you simplify what Tarot is? Because that will essentially enable stable coins on top of Bitcoin, right? Yeah, well, the funny thing is, Tether started on top of bitcoin on Omni and eventually it migrated onto other things that were more suitable for it. Taro is a protocol proposed by Lightning Labs that's based on the Taproot software that allows them to put assets on Bitcoin and Lightning. And so if that's successful, the most obvious use case is stablecoins because in theory, the Lightning network is one of the best places to have stable coins because it's so fast and cheap compared to even the Altcoin undecurised networks. This one, it runs on Bitcoin based player, but then you get the speed that rivals any of the all coins out there. And so I think that's all it's being equal, I'd rather see stable coins on Bitcoin than customer, for ",
        "details": {
            "boost": 0,
            "date": 1654228800,
            "description": "What is [[Taro]] on Bitcoin and Lightning using [[Taproot]]",
            "episode_title": "Lyn Alden  Bitcoin  Bear Market and What s Ahead",
            "guest": [
                "Lyn Alden"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/8ad86341-0063-41e7-a78c-27d43c150c5c.jpg",
            "keyword": true,
            "link": "https://traffic.libsyn.com/secure/coinstories/070_Lyn_Alden_in_Oslo.mp3?dest-id=2813255",
            "node_type": "clip",
            "ref_id": "5563d4e7-6474-4337-bf62-19817aeae380",
            "show_title": "Coin Stories with Natalie Brunell",
            "text": "market. Can you simplify what Tarot is? Because that will essentially enable stable coins on top of Bitcoin, right? Yeah, well, the funny thing is, Tether started on top of bitcoin on Omni and eventually it migrated onto other things that were more suitable for it. Taro is a protocol proposed by Lightning Labs that's based on the Taproot software that allows them to put assets on Bitcoin and Lightning. And so if that's successful, the most obvious use case is stablecoins because in theory, the Lightning network is one of the best places to have stable coins because it's so fast and cheap compared to even the Altcoin undecurised networks. This one, it runs on Bitcoin based player, but then you get the speed that rivals any of the all coins out there. And so I think that's all it's being equal, I'd rather see stable coins on Bitcoin than customer, for ",
            "timestamp": "00:08:25-00:09:14",
            "topics": [
                "taro",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/8ad86341-0063-41e7-a78c-27d43c150c5c_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "2edc5ed8-1a77-4ba4-8ecc-c501d5223c79",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Explaining Taproot:00:28:41-00:00:00",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1601006400,
            "description": "Current status of [[Taproot]] and its implementation",
            "episode_title": "Explaining Taproot",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/nl/podcast/explaining-taproot-nado-2/id1532957243?i=1000492463884",
            "node_type": "clip",
            "ref_id": "2edc5ed8-1a77-4ba4-8ecc-c501d5223c79",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "",
            "timestamp": "00:28:41-00:00:00",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "43b07e80-d3bc-49a4-8b46-876679de936d",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Payment Pools and Taproot:00:08:38-00:09:32",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1601006400,
            "description": "How [[Taproot]] allows more privacy and compress more information ",
            "episode_title": "Payment Pools and Taproot",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/nl/podcast/payment-pools-and-taproot-nado-6/id1532957243?i=1000492463880",
            "node_type": "clip",
            "ref_id": "43b07e80-d3bc-49a4-8b46-876679de936d",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "",
            "timestamp": "00:08:38-00:09:32",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "80882cf0-026e-461b-b399-145e39dd20db",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Schnorr Signatures and Libsec256k9:00:21:37-00:00:00",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1601006400,
            "description": "[[Schnorr Signature]] as part of [[Taproot]]",
            "episode_title": "Schnorr Signatures and Libsec256k9",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/nl/podcast/schnorr-signatures-and-libsec256k1-nado-9/id1532957243?i=1000492463882",
            "node_type": "clip",
            "ref_id": "80882cf0-026e-461b-b399-145e39dd20db",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "",
            "timestamp": "00:21:37-00:00:00",
            "topics": [
                "schnorr signature",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "c74f22fd-fb43-4e9e-a7d1-ea5fd00ecaa2",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Explaining Signet:00:12:51-00:14:19",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1601006400,
            "description": "What to do if [[Taproot]] rules have changed",
            "episode_title": "Explaining Signet",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/nl/podcast/explaining-signet-nado-10/id1532957243?i=1000492511833",
            "node_type": "clip",
            "ref_id": "c74f22fd-fb43-4e9e-a7d1-ea5fd00ecaa2",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "",
            "timestamp": "00:12:51-00:14:19",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "50e37d1a-6668-4319-8ccf-d9f049d325eb",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Bitcoin Core 0.21.7:00:13:36-00:20:30",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1611291600,
            "description": "[[Taproot]] is now active on [[Signet]]",
            "episode_title": "Bitcoin Core 0.21.7",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/nl/podcast/bitcoin-core-0-21-0-nado-24/id1532957243?i=1000506215123",
            "node_type": "clip",
            "ref_id": "50e37d1a-6668-4319-8ccf-d9f049d325eb",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "",
            "timestamp": "00:13:36-00:20:30",
            "topics": [
                "taproot",
                "signet"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "a60a9981-7cb1-4594-81c9-103f7c8ae40f",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Explaining Taproot Activation and LOT True VS LOT False -:00:38:43-00:00:00",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1614315600,
            "description": "Predictions on how [[Taproot]] implementation will play out ",
            "episode_title": "Explaining Taproot Activation and LOT True VS LOT False -",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/nl/podcast/explaining-taproot-activation-and-lot-true-vs-lot/id1532957243?i=1000510789593",
            "node_type": "clip",
            "ref_id": "a60a9981-7cb1-4594-81c9-103f7c8ae40f",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "",
            "timestamp": "00:38:43-00:00:00",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "ab59ee25-c115-458e-acc7-2dd200401590",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Explaining Taproot Activation and LOT True VS LOT False -:00:10:44-00:12:11",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1614315600,
            "description": "Possibility of anarchy due to lack of consensus on when to activate [[Taproot]]",
            "episode_title": "Explaining Taproot Activation and LOT True VS LOT False -",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/nl/podcast/explaining-taproot-activation-and-lot-true-vs-lot/id1532957243?i=1000510789593",
            "node_type": "clip",
            "ref_id": "ab59ee25-c115-458e-acc7-2dd200401590",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "",
            "timestamp": "00:10:44-00:12:11",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "105c8501-1967-40f5-bf0a-3974c60b4416",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Explaining Taproot Activation and LOT True VS LOT False -:00:08:24-00:10:44",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1614315600,
            "description": "Arguments for and against [[LOT=True]] vs. [[LOT=False]] in [[Taproot]] activation",
            "episode_title": "Explaining Taproot Activation and LOT True VS LOT False -",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/nl/podcast/explaining-taproot-activation-and-lot-true-vs-lot/id1532957243?i=1000510789593",
            "node_type": "clip",
            "ref_id": "105c8501-1967-40f5-bf0a-3974c60b4416",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "",
            "timestamp": "00:08:24-00:10:44",
            "topics": [
                "lot=true",
                "lot=false",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "ab34d27e-9340-4413-b0d8-3b170d206f49",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Explaining Taproot Activation and LOT True VS LOT False -:00:03:18-00:05:09",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1614315600,
            "description": "Miners blocking and ignoring the [[Taproot]] upgrades",
            "episode_title": "Explaining Taproot Activation and LOT True VS LOT False -",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/nl/podcast/explaining-taproot-activation-and-lot-true-vs-lot/id1532957243?i=1000510789593",
            "node_type": "clip",
            "ref_id": "ab34d27e-9340-4413-b0d8-3b170d206f49",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "",
            "timestamp": "00:03:18-00:05:09",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "f7d0933e-06a4-4080-9049-307b26d11bba",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Taproot Activation Update  Speedy Trial And The LOT True Client:00:19:41-00:27:21",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1619150400,
            "description": "When miners signal readiness but not really enforce [[Taproot]] rules",
            "episode_title": "Taproot Activation Update  Speedy Trial And The LOT True Client",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/nl/podcast/taproot-activation-update-speedy-trial-and-the-lot/id1532957243?i=1000518337340",
            "node_type": "clip",
            "ref_id": "f7d0933e-06a4-4080-9049-307b26d11bba",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "",
            "timestamp": "00:19:41-00:27:21",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "caf06f30-e6c8-4d90-b0fb-e40668218f83",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Taproot Activation Update  Speedy Trial And The LOT True Client:00:06:29-00:10:15",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1619150400,
            "description": "How [[Taproot]] rules will take effect at block number 706,632 - [[BIP 9]]",
            "episode_title": "Taproot Activation Update  Speedy Trial And The LOT True Client",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/nl/podcast/taproot-activation-update-speedy-trial-and-the-lot/id1532957243?i=1000518337340",
            "node_type": "clip",
            "ref_id": "caf06f30-e6c8-4d90-b0fb-e40668218f83",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "",
            "timestamp": "00:06:29-00:10:15",
            "topics": [
                "taproot",
                "bip 9"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "757ae3e5-9650-4877-aa8c-f4f60a0c92f1",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Taproot Activation Update  Speedy Trial And The LOT True Client:00:01:24-00:04:28",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1619150400,
            "description": "Recap on previous episode re: [[Taproot]] activation - [[Smart Contracts]]",
            "episode_title": "Taproot Activation Update  Speedy Trial And The LOT True Client",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/nl/podcast/taproot-activation-update-speedy-trial-and-the-lot/id1532957243?i=1000518337340",
            "node_type": "clip",
            "ref_id": "757ae3e5-9650-4877-aa8c-f4f60a0c92f1",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "",
            "timestamp": "00:01:24-00:04:28",
            "topics": [
                "taproot",
                "smart contracts"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "f7f74648-a369-4976-a0ac-11373607a471",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Mara Pool and Mining Censorship:00:27:01-00:28:38",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1620360000,
            "description": "The ongoing debate on how to [[Taproot]]",
            "episode_title": "Mara Pool and Mining Censorship",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/nl/podcast/mara-pool-and-mining-censorship-nado-37/id1532957243?i=1000520681909",
            "node_type": "clip",
            "ref_id": "f7f74648-a369-4976-a0ac-11373607a471",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "",
            "timestamp": "00:27:01-00:28:38",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "65d8d2ef-6006-4534-8399-ce5017aaa545",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Taproot Lock-in:00:14:19-00:18:59",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1623988800,
            "description": "What to expect on [[Taproot]] activation",
            "episode_title": "Taproot Lock-in",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/nl/podcast/taproot-lock-in/id1532957243?i=1000526020249",
            "node_type": "clip",
            "ref_id": "65d8d2ef-6006-4534-8399-ce5017aaa545",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "",
            "timestamp": "00:14:19-00:18:59",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "6e15a1db-149f-4c46-8585-d400a1710a6e",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Taproot Lock-in:00:09:22-00:12:35",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1623988800,
            "description": "The whole idea of the [[Speedy Trial]] was to see if there's any hope of activating [[Taproot]] - [[Eclipse Attack]]",
            "episode_title": "Taproot Lock-in",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/nl/podcast/taproot-lock-in/id1532957243?i=1000526020249",
            "node_type": "clip",
            "ref_id": "6e15a1db-149f-4c46-8585-d400a1710a6e",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "",
            "timestamp": "00:09:22-00:12:35",
            "topics": [
                "speedy trial",
                "taproot",
                "eclipse attack"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "4d52d59f-a0f7-49db-a970-a9f2d4cd4fde",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Taproot Lock-in:00:04:55-00:07:20",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1623988800,
            "description": "Adopting  [[Bitcoin Core 0.21.1]] plus upcoming Bitcoin Core release to get ready for [[Taproot]]",
            "episode_title": "Taproot Lock-in",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/nl/podcast/taproot-lock-in/id1532957243?i=1000526020249",
            "node_type": "clip",
            "ref_id": "4d52d59f-a0f7-49db-a970-a9f2d4cd4fde",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "",
            "timestamp": "00:04:55-00:07:20",
            "topics": [
                "bitcoin core 0.21.1",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "f3171191-b05c-41bf-b99d-ad9dbb694aab",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Taproot Lock-in:00:02:12-00:03:31",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1623988800,
            "description": "What is [[Taproot]] Lock-in",
            "episode_title": "Taproot Lock-in",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/nl/podcast/taproot-lock-in/id1532957243?i=1000526020249",
            "node_type": "clip",
            "ref_id": "f3171191-b05c-41bf-b99d-ad9dbb694aab",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "",
            "timestamp": "00:02:12-00:03:31",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "43e6a66f-8657-4f64-8f84-252a12a72eef",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Bitcoin Core 22.0 Explained:00:14:49-00:17:56",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1631505600,
            "description": "The first major [[Bitcoin Core]] release that has [[Taproot]] support",
            "episode_title": "Bitcoin Core 22.0 Explained",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/nl/podcast/bitcoin-core-22-0-explained-episode-45/id1532957243?i=1000535218017",
            "node_type": "clip",
            "ref_id": "43e6a66f-8657-4f64-8f84-252a12a72eef",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "",
            "timestamp": "00:14:49-00:17:56",
            "topics": [
                "bitcoin core",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "32114f7e-9d5d-41f6-ada7-427d637772d0",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Lightning Network Upgrades  Eltoo   SIGHASH ANYPREVOUT :00:24:18-00:28:02",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1635480000,
            "description": "A [[Soft Fork]] on top of [[Taproot]]",
            "episode_title": "Lightning Network Upgrades  Eltoo   SIGHASH ANYPREVOUT ",
            "guest": [
                "Christian Decker"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/nl/podcast/lightning-network-upgrades-eltoo-sighash-anyprevout/id1532957243?i=1000540166655",
            "node_type": "clip",
            "ref_id": "32114f7e-9d5d-41f6-ada7-427d637772d0",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "",
            "timestamp": "00:24:18-00:28:02",
            "topics": [
                "soft fork",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "1ab56cd4-4234-4007-b557-bc12d1ab5656",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Burying Soft Forks:00:03:06-00:04:11",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1645765200,
            "description": "How to retroactively deal with activation code with [[Taproot]]",
            "episode_title": "Burying Soft Forks",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/nl/podcast/burying-soft-forks-episode-54/id1532957243?i=1000552238205",
            "node_type": "clip",
            "ref_id": "1ab56cd4-4234-4007-b557-bc12d1ab5656",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "",
            "timestamp": "00:03:06-00:04:11",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "4f4cdf02-0255-4c69-9845-cf518738ffc5",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Bitcoin Core 23.0:00:25:24-00:29:05",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1650859200,
            "description": "Added support for [[Taproot]] in the [[Wallet]]",
            "episode_title": "Bitcoin Core 23.0",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/nl/podcast/bitcoin-core-23-0-episode-56/id1532957243?i=1000558597854",
            "node_type": "clip",
            "ref_id": "4f4cdf02-0255-4c69-9845-cf518738ffc5",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "",
            "timestamp": "00:25:24-00:29:05",
            "topics": [
                "taproot",
                "wallet"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "2d62784c-27da-40cf-bef5-c354d590fc10",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Silent Payments:00:18:15-00:21:10",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1654833600,
            "description": "How this protocol only creates [[Taproot]] outputs",
            "episode_title": "Silent Payments",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/nl/podcast/silent-payments-episode-58/id1532957243?i=1000565952822",
            "node_type": "clip",
            "ref_id": "2d62784c-27da-40cf-bef5-c354d590fc10",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "",
            "timestamp": "00:18:15-00:21:10",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "94a52af9-372d-4e88-9272-649a49c1fa57",
        "name": "Once Bitten  A Bitcoin Podcast.: edstromandrew and  bruce pullman discuss Investment Strategies   200:00:44:07-00:47:18",
        "label": "Once Bitten  A Bitcoin Podcast.",
        "type": "podcast",
        "node_type": "clip",
        "text": "It had the block size walls back in those days when that was just being fought tooth and nail. The most recent two other, like the SegWit implementation and then tap route, these things that they get clearly, openly discussed. And you do see huge fights in the space when these things are being discussed, but at least it is being discussed. And it does take a long time for these things to get put in place properly and with consensus, which that's what's different about all the other projects. That's what's different about proof of stake, because if that one guy wants that thing in place and he has all the voting rights, then it's look out. God knows where it's going to happen. God knows what's going to happen to these chains as soon as something like that starts. They are dangerous places to be. It's really crucial to understand this, and this is a common mistake that people make on the path to understanding bitcoin, in my opinion. They first find bitcoin, then they see all the other cool stuff, and they haven't yet dug into the history, as you both just described. The fact that the block size wars happened in Bitcoin and the minority, the intransigent minority, won that fight tells you with pretty high confidence that no single entity or even group within the system, even if it's arguably got a quote unquote majority in terms of power or economic heft, because that really was true. I mean, the closed door room with sort of many or almost all most, let's say, of the major economic powers, the exchanges, the minors, they were all on board with making this major change. And the node operators, a group of node operators, they said no. This, by the way, is also how many governments work or are supposed to work. It's not ruled by the majority, it's protection of minority rights. And there is a reason that that system exists. There's a reason that system of government exists here in the US. And across the UK. The Dow for the Block says wars were the two defining moments and their night and day. And those moments in history really do define these two different groups. Yeah, although I would argue that although the bitcoin is thinking about the Blockchain wars as being almost like something out of Star Wars, actually it was minor compared to the Dow hack and the Dow hack was hideous in comparison and I don't think people necessarily grasp that. It's a good point. ",
        "details": {
            "boost": 0,
            "date": 1633924800,
            "description": "The [[Block Size Wars]], [[SegWit]] and [[Taproot]]",
            "episode_title": " edstromandrew and  bruce pullman discuss Investment Strategies   200",
            "guest": [
                "Andrew Edstrom&Bruce Pullman"
            ],
            "image_url": "",
            "keyword": false,
            "link": "https://anchor.fm/s/1346f9e8/podcast/play/41631815/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-9-11%2Ffef96814-0dfc-b2bd-6b91-d041f38f62f9.mp3",
            "node_type": "clip",
            "ref_id": "94a52af9-372d-4e88-9272-649a49c1fa57",
            "show_title": "Once Bitten  A Bitcoin Podcast.",
            "text": "It had the block size walls back in those days when that was just being fought tooth and nail. The most recent two other, like the SegWit implementation and then tap route, these things that they get clearly, openly discussed. And you do see huge fights in the space when these things are being discussed, but at least it is being discussed. And it does take a long time for these things to get put in place properly and with consensus, which that's what's different about all the other projects. That's what's different about proof of stake, because if that one guy wants that thing in place and he has all the voting rights, then it's look out. God knows where it's going to happen. God knows what's going to happen to these chains as soon as something like that starts. They are dangerous places to be. It's really crucial to understand this, and this is a common mistake that people make on the path to understanding bitcoin, in my opinion. They first find bitcoin, then they see all the other cool stuff, and they haven't yet dug into the history, as you both just described. The fact that the block size wars happened in Bitcoin and the minority, the intransigent minority, won that fight tells you with pretty high confidence that no single entity or even group within the system, even if it's arguably got a quote unquote majority in terms of power or economic heft, because that really was true. I mean, the closed door room with sort of many or almost all most, let's say, of the major economic powers, the exchanges, the minors, they were all on board with making this major change. And the node operators, a group of node operators, they said no. This, by the way, is also how many governments work or are supposed to work. It's not ruled by the majority, it's protection of minority rights. And there is a reason that that system exists. There's a reason that system of government exists here in the US. And across the UK. The Dow for the Block says wars were the two defining moments and their night and day. And those moments in history really do define these two different groups. Yeah, although I would argue that although the bitcoin is thinking about the Blockchain wars as being almost like something out of Star Wars, actually it was minor compared to the Dow hack and the Dow hack was hideous in comparison and I don't think people necessarily grasp that. It's a good point. ",
            "timestamp": "00:44:07-00:47:18",
            "topics": [
                "block size wars",
                "segwit",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "",
        "colors": []
    },
    {
        "weight": 1,
        "id": "5b3d17d2-8e1e-4248-bc2e-4ae2e531a4c2",
        "name": "Once Bitten  A Bitcoin Podcast.: douglasbakkum - Does Airgap Make Bitcoin Hardware Wallets More Secure   214:00:53:54-00:57:33",
        "label": "Once Bitten  A Bitcoin Podcast.",
        "type": "podcast",
        "node_type": "clip",
        "text": "two rabbit holes to go. Down after that. One. Can you explain Tap route to a ten year old? I'll be your sorrow at ten year old then. No, I don't think I can. I'm going to pass that one. How did you explain it to an adult then? Let's see. Schnor signature is also coming in. I guess one of the main things there is to make addresses look more similar to each other. That's one thing. This is kind of more on the privacy side. And so, for example, if you want to use Lightning, you need to make what's called a two multi SIG. So this has a very specific fingerprint. You can see it in the blockchain data. The structure of the transaction which is seen in the blockchain data, you can tell, okay, this is very likely a Lightning transaction. Not so many other use cases for two of two, there's the multisig addresses. So like a two or three kind of set up where some people think multisig gives you a bit more added security and redundancy. And so you basically need two out of three addresses in order to send funds. And then this will also have a different fingerprint in the blockchain capru will allow these transactions to kind of compress together into what looks like the same address. And so you can't distinguish if it was a Lightning transaction or multi suit transaction. Yeah. And so kind of the push there is to reduce, again, from the privacy perspective, to reduce the number of different types of fingerprints that are observable on the blockchain. And of course that will reduce that will reduce the ability of chain analysis codes to track or to, I guess, put chains of possession between addresses. And then of course there's more to it than that where you can have a lot more complicated types of logic when you send transactions. For example, you can have multiple logix in the same transaction. Trying to think of an example where, okay, you have the certain spend conditions like say, two or three multi SIG, and then you can send coins or you can have a time delay time lock where if this doesn't happen by this point in time, then the single address can spend the coins and you can make quite complicated business logic, you could call it. And all of these will compress down into an address that's also indistinguishable from say, Lightning or normal multi speed, I guess. Keep going, but I think that's ",
        "details": {
            "boost": 0,
            "date": 1637902800,
            "description": "[[Taproot]] Explanation",
            "episode_title": " douglasbakkum - Does Airgap Make Bitcoin Hardware Wallets More Secure   214",
            "guest": [
                "Douglas Bakkum"
            ],
            "image_url": "",
            "keyword": false,
            "link": "https://anchor.fm/s/1346f9e8/podcast/play/43759661/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-10-22%2F6c3855eb-82be-1e40-208e-92ba00f927ef.mp3",
            "node_type": "clip",
            "ref_id": "5b3d17d2-8e1e-4248-bc2e-4ae2e531a4c2",
            "show_title": "Once Bitten  A Bitcoin Podcast.",
            "text": "two rabbit holes to go. Down after that. One. Can you explain Tap route to a ten year old? I'll be your sorrow at ten year old then. No, I don't think I can. I'm going to pass that one. How did you explain it to an adult then? Let's see. Schnor signature is also coming in. I guess one of the main things there is to make addresses look more similar to each other. That's one thing. This is kind of more on the privacy side. And so, for example, if you want to use Lightning, you need to make what's called a two multi SIG. So this has a very specific fingerprint. You can see it in the blockchain data. The structure of the transaction which is seen in the blockchain data, you can tell, okay, this is very likely a Lightning transaction. Not so many other use cases for two of two, there's the multisig addresses. So like a two or three kind of set up where some people think multisig gives you a bit more added security and redundancy. And so you basically need two out of three addresses in order to send funds. And then this will also have a different fingerprint in the blockchain capru will allow these transactions to kind of compress together into what looks like the same address. And so you can't distinguish if it was a Lightning transaction or multi suit transaction. Yeah. And so kind of the push there is to reduce, again, from the privacy perspective, to reduce the number of different types of fingerprints that are observable on the blockchain. And of course that will reduce that will reduce the ability of chain analysis codes to track or to, I guess, put chains of possession between addresses. And then of course there's more to it than that where you can have a lot more complicated types of logic when you send transactions. For example, you can have multiple logix in the same transaction. Trying to think of an example where, okay, you have the certain spend conditions like say, two or three multi SIG, and then you can send coins or you can have a time delay time lock where if this doesn't happen by this point in time, then the single address can spend the coins and you can make quite complicated business logic, you could call it. And all of these will compress down into an address that's also indistinguishable from say, Lightning or normal multi speed, I guess. Keep going, but I think that's ",
            "timestamp": "00:53:54-00:57:33",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "",
        "colors": []
    },
    {
        "weight": 1,
        "id": "9d7f6104-9050-43cd-bfbd-db2273ff26af",
        "name": "Noded Bitcoin Podcast:Pete Rizzo:00:41:08-00:50:25",
        "label": "Noded Bitcoin Podcast",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1607058000,
            "description": "How are [[P2sh]] and [[Taproot]] different?",
            "episode_title": "Pete Rizzo",
            "guest": [
                "Pete Rizzo"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/0a24ff3e-9e22-42dc-9d73-70d54d85d45c.jpg",
            "keyword": false,
            "link": "https://noded.org/podcast/noded-0730-with-pete-rizzo/",
            "node_type": "clip",
            "ref_id": "9d7f6104-9050-43cd-bfbd-db2273ff26af",
            "show_title": "Noded Bitcoin Podcast",
            "text": "",
            "timestamp": "00:41:08-00:50:25",
            "topics": [
                "p2sh",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/0a24ff3e-9e22-42dc-9d73-70d54d85d45c_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "f4c17f9d-9e6b-4714-84a9-b4f41219e260",
        "name": "Bitcoin Magazine Podcast:Why Everybody Is Choosing Lightning w  Alysee Killeen:00:15:02-00:19:25",
        "label": "Bitcoin Magazine Podcast",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1648785600,
            "description": "[[Taproot]]'s consequences and potential",
            "episode_title": "Why Everybody Is Choosing Lightning w  Alysee Killeen",
            "guest": [
                "Alysee Killeen"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1583c7c4-f4f2-4e52-8f27-a1eaeb6289fd.jpg",
            "keyword": false,
            "link": "https://traffic.libsyn.com/secure/bitcoinmagazine/Alyseee.mp3?dest-id=1210361",
            "node_type": "clip",
            "ref_id": "f4c17f9d-9e6b-4714-84a9-b4f41219e260",
            "show_title": "Bitcoin Magazine Podcast",
            "text": "",
            "timestamp": "00:15:02-00:19:25",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1583c7c4-f4f2-4e52-8f27-a1eaeb6289fd_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "745de5fd-5861-412d-9001-3dbad79c72ea",
        "name": "Bitcoin Fixes This:Bitcoin Fixes This  46  Listener Questions with Jimmy Song:00:30:11-00:30:25",
        "label": "Bitcoin Fixes This",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1623297600,
            "description": "Next step after [[Taproot]]",
            "episode_title": "Bitcoin Fixes This  46  Listener Questions with Jimmy Song",
            "guest": [
                "None"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/3e178b7d-b8b9-4fd4-ba36-017b834537da.jpg",
            "keyword": false,
            "link": "https://open.spotify.com/episode/6JrTQabYUhrZtLIpJxwLDE?si=aC4we0dkRjKyEv3jgRkl7Q",
            "node_type": "clip",
            "ref_id": "745de5fd-5861-412d-9001-3dbad79c72ea",
            "show_title": "Bitcoin Fixes This",
            "text": "",
            "timestamp": "00:30:11-00:30:25",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/3e178b7d-b8b9-4fd4-ba36-017b834537da_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "dd4fe6e9-9ce4-4ebb-909e-8dd3dc7fef72",
        "name": "Bitcoin Fixes This:Bitcoin Fixes This  46  Listener Questions with Jimmy Song:00:19:48-00:20:15",
        "label": "Bitcoin Fixes This",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1623297600,
            "description": "First practical improvements after [[Taproot]] implementation",
            "episode_title": "Bitcoin Fixes This  46  Listener Questions with Jimmy Song",
            "guest": [
                "None"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/3e178b7d-b8b9-4fd4-ba36-017b834537da.jpg",
            "keyword": false,
            "link": "https://open.spotify.com/episode/6JrTQabYUhrZtLIpJxwLDE?si=aC4we0dkRjKyEv3jgRkl7Q",
            "node_type": "clip",
            "ref_id": "dd4fe6e9-9ce4-4ebb-909e-8dd3dc7fef72",
            "show_title": "Bitcoin Fixes This",
            "text": "",
            "timestamp": "00:19:48-00:20:15",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/3e178b7d-b8b9-4fd4-ba36-017b834537da_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "ebce2e4e-1844-44b0-9e03-9d56ae956691",
        "name": "Bitcoin Fixes This:Bitcoin Fixes This  46  Listener Questions with Jimmy Song:00:14:18-00:15:37",
        "label": "Bitcoin Fixes This",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1623297600,
            "description": "Role of [[Taproot]] for [[Bitcoin adoption]]",
            "episode_title": "Bitcoin Fixes This  46  Listener Questions with Jimmy Song",
            "guest": [
                "None"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/3e178b7d-b8b9-4fd4-ba36-017b834537da.jpg",
            "keyword": false,
            "link": "https://open.spotify.com/episode/6JrTQabYUhrZtLIpJxwLDE?si=aC4we0dkRjKyEv3jgRkl7Q",
            "node_type": "clip",
            "ref_id": "ebce2e4e-1844-44b0-9e03-9d56ae956691",
            "show_title": "Bitcoin Fixes This",
            "text": "",
            "timestamp": "00:14:18-00:15:37",
            "topics": [
                "taproot",
                "bitcoin adoption"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/3e178b7d-b8b9-4fd4-ba36-017b834537da_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "eecfa4ca-b53e-4e06-b320-d482eaf20e1b",
        "name": "Bitcoin Fixes This:Bitcoin Fixes This  46  Listener Questions with Jimmy Song:00:07:24-00:08:31",
        "label": "Bitcoin Fixes This",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1623297600,
            "description": "[[Taproot]] explained",
            "episode_title": "Bitcoin Fixes This  46  Listener Questions with Jimmy Song",
            "guest": [
                "None"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/3e178b7d-b8b9-4fd4-ba36-017b834537da.jpg",
            "keyword": false,
            "link": "https://open.spotify.com/episode/6JrTQabYUhrZtLIpJxwLDE?si=aC4we0dkRjKyEv3jgRkl7Q",
            "node_type": "clip",
            "ref_id": "eecfa4ca-b53e-4e06-b320-d482eaf20e1b",
            "show_title": "Bitcoin Fixes This",
            "text": "",
            "timestamp": "00:07:24-00:08:31",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/3e178b7d-b8b9-4fd4-ba36-017b834537da_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "d5647a9d-9ad1-401e-91e9-0acc67057727",
        "name": "Bitcoin Fixes This:Bitcoin Fixes This  46  Listener Questions with Jimmy Song:03:03:33-00:04:35",
        "label": "Bitcoin Fixes This",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1623297600,
            "description": "How would [[Taproot]] affect [[Bitcoin]] and [[Lightning?]] ",
            "episode_title": "Bitcoin Fixes This  46  Listener Questions with Jimmy Song",
            "guest": [
                "None"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/3e178b7d-b8b9-4fd4-ba36-017b834537da.jpg",
            "keyword": false,
            "link": "https://open.spotify.com/episode/6JrTQabYUhrZtLIpJxwLDE?si=aC4we0dkRjKyEv3jgRkl7Q",
            "node_type": "clip",
            "ref_id": "d5647a9d-9ad1-401e-91e9-0acc67057727",
            "show_title": "Bitcoin Fixes This",
            "text": "",
            "timestamp": "03:03:33-00:04:35",
            "topics": [
                "taproot",
                "bitcoin",
                "lightning?"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/3e178b7d-b8b9-4fd4-ba36-017b834537da_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "fcbf51f9-6bcc-4b91-885e-ac223665ba2f",
        "name": "Bitcoin Fixes This:Bitcoin Fixes This  71  Listener Questions with Jimmy Song:00:32:50-00:33:01",
        "label": "Bitcoin Fixes This",
        "type": "podcast",
        "node_type": "clip",
        "text": "Anyone know if blue wallet will support that? Tweet at them and you'll find out. All right, that wraps it up. I guess for all ",
        "details": {
            "boost": 0,
            "date": 1638421200,
            "description": "[[BlueWallet]] supporting [[Taproot]]?",
            "episode_title": "Bitcoin Fixes This  71  Listener Questions with Jimmy Song",
            "guest": [
                "None"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/d5c1d55c-73ee-4d1a-bfb4-927f1e706360.jpg",
            "keyword": false,
            "link": "https://anchor.fm/s/2a4e8034/podcast/play/44239517/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-11-2%2Fa3f7298a-0137-029f-1132-2937920c4bdc.mp3",
            "node_type": "clip",
            "ref_id": "fcbf51f9-6bcc-4b91-885e-ac223665ba2f",
            "show_title": "Bitcoin Fixes This",
            "text": "Anyone know if blue wallet will support that? Tweet at them and you'll find out. All right, that wraps it up. I guess for all ",
            "timestamp": "00:32:50-00:33:01",
            "topics": [
                "bluewallet",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/d5c1d55c-73ee-4d1a-bfb4-927f1e706360_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "80a70dde-ca15-4176-905a-42dfeafab63f",
        "name": "Bitcoin Fixes This:Bitcoin Fixes This  71  Listener Questions with Jimmy Song:00:31:00-00:31:14",
        "label": "Bitcoin Fixes This",
        "type": "podcast",
        "node_type": "clip",
        "text": "innovation to Bitcoin court after taproof. Probably to cash any provout then that's. A particular signature hashing part. What's ",
        "details": {
            "boost": 0,
            "date": 1638421200,
            "description": "Next innovation to [[Bitcoin Core]] after [[Taproot]]",
            "episode_title": "Bitcoin Fixes This  71  Listener Questions with Jimmy Song",
            "guest": [
                "None"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/d5c1d55c-73ee-4d1a-bfb4-927f1e706360.jpg",
            "keyword": false,
            "link": "https://anchor.fm/s/2a4e8034/podcast/play/44239517/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-11-2%2Fa3f7298a-0137-029f-1132-2937920c4bdc.mp3",
            "node_type": "clip",
            "ref_id": "80a70dde-ca15-4176-905a-42dfeafab63f",
            "show_title": "Bitcoin Fixes This",
            "text": "innovation to Bitcoin court after taproof. Probably to cash any provout then that's. A particular signature hashing part. What's ",
            "timestamp": "00:31:00-00:31:14",
            "topics": [
                "bitcoin core",
                "taproot",
                "taproof"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/d5c1d55c-73ee-4d1a-bfb4-927f1e706360_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "a4ee427d-a4a8-4321-9e1e-b0121b4cf572",
        "name": "Bitcoin Fixes This:Bitcoin Fixes This  71  Listener Questions with Jimmy Song:00:15:49-00:16:46",
        "label": "Bitcoin Fixes This",
        "type": "podcast",
        "node_type": "clip",
        "text": "the new scripting capabilities. Three. C six scripting capabilities enabled by TAPRO compared to smart contracts on Ethereum? I don't think they're really comparable. Ethereum is just sort of like, here. Are some templates you can do whatever. Like Tap root actually gets you Privacy. Right. And it combats specific security threats. So Ethereum is like a complete joke. Of scripting language and everything else. It's not analyzable. So I don't really see Ethereum smart contracts really competing with the ones that Tap provides. Ethereum stuff is basically gimmicky. Bitcoin actually has a purpose that's market proven. ",
        "details": {
            "boost": 0,
            "date": 1638421200,
            "description": "Scripting capabilities enabled by [[Taproot]] compared to [[Ethereum]]",
            "episode_title": "Bitcoin Fixes This  71  Listener Questions with Jimmy Song",
            "guest": [
                "None"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/d5c1d55c-73ee-4d1a-bfb4-927f1e706360.jpg",
            "keyword": false,
            "link": "https://anchor.fm/s/2a4e8034/podcast/play/44239517/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-11-2%2Fa3f7298a-0137-029f-1132-2937920c4bdc.mp3",
            "node_type": "clip",
            "ref_id": "a4ee427d-a4a8-4321-9e1e-b0121b4cf572",
            "show_title": "Bitcoin Fixes This",
            "text": "the new scripting capabilities. Three. C six scripting capabilities enabled by TAPRO compared to smart contracts on Ethereum? I don't think they're really comparable. Ethereum is just sort of like, here. Are some templates you can do whatever. Like Tap root actually gets you Privacy. Right. And it combats specific security threats. So Ethereum is like a complete joke. Of scripting language and everything else. It's not analyzable. So I don't really see Ethereum smart contracts really competing with the ones that Tap provides. Ethereum stuff is basically gimmicky. Bitcoin actually has a purpose that's market proven. ",
            "timestamp": "00:15:49-00:16:46",
            "topics": [
                "taproot",
                "ethereum",
                "ethereum"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/d5c1d55c-73ee-4d1a-bfb4-927f1e706360_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "c966ea9f-e256-4d55-910f-c87ac52e0aa9",
        "name": "Bitcoin Fixes This:Bitcoin Fixes This  71  Listener Questions with Jimmy Song:00:13:43-00:13:59",
        "label": "Bitcoin Fixes This",
        "type": "podcast",
        "node_type": "clip",
        "text": "long is it going to take for at least half the transactions in. A blockchain to have Tap root? I have no idea, but I imagine. At least a few years LN-URL or both. Twelve. No real opinion on that. What do you ",
        "details": {
            "boost": 0,
            "date": 1638421200,
            "description": "How long will it take to have half the transactions in [[Taproot]]?",
            "episode_title": "Bitcoin Fixes This  71  Listener Questions with Jimmy Song",
            "guest": [
                "None"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/d5c1d55c-73ee-4d1a-bfb4-927f1e706360.jpg",
            "keyword": false,
            "link": "https://anchor.fm/s/2a4e8034/podcast/play/44239517/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-11-2%2Fa3f7298a-0137-029f-1132-2937920c4bdc.mp3",
            "node_type": "clip",
            "ref_id": "c966ea9f-e256-4d55-910f-c87ac52e0aa9",
            "show_title": "Bitcoin Fixes This",
            "text": "long is it going to take for at least half the transactions in. A blockchain to have Tap root? I have no idea, but I imagine. At least a few years LN-URL or both. Twelve. No real opinion on that. What do you ",
            "timestamp": "00:13:43-00:13:59",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/d5c1d55c-73ee-4d1a-bfb4-927f1e706360_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "d6d8f43a-76c1-4d14-83fb-a2f463e87d0b",
        "name": "Bitcoin Fixes This:Bitcoin Fixes This  71  Listener Questions with Jimmy Song:00:07:05-00:08:42",
        "label": "Bitcoin Fixes This",
        "type": "podcast",
        "node_type": "clip",
        "text": "can you please go into detail about tap route? I know the advantages, but I'm yet to understand the mechanisms to which provide these services. I'm not a coder, but I am. Finding it hard to get into this. I published a few videos a while back where I read through the actual BIP 343-4134 Two and try to explain them. And those are tap roots. So if you want to know the details, it's all in there. But basically there's new Opcodes there's Schnoar signatures. So the Schnoor signatures are different type of signature than ECDSA, the serialization is shorter than ECDSA signatures and things like that. The Opcodes actually use the Schnor signatures instead of ECDSA and secret version one, which is what Cap root is. And then there's also this mastery, which is a Merkalized abstract syntax tree which allows you to have lots of different possible scripts in 32 bytes rather than. A single one in like 80 or something like that. So it makes it much more flexible. But if you're not a coder, it's going to be hard to understand a lot of the details. So you're kind of asking for the impossible. It's like, can you tell me all of the details? But I'm not a coder. It's like, then how are you going to understand that? I'm not sure what you're asking me to do. ",
        "details": {
            "boost": 0,
            "date": 1638421200,
            "description": "Details on [[Taproot]]",
            "episode_title": "Bitcoin Fixes This  71  Listener Questions with Jimmy Song",
            "guest": [
                "None"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/d5c1d55c-73ee-4d1a-bfb4-927f1e706360.jpg",
            "keyword": false,
            "link": "https://anchor.fm/s/2a4e8034/podcast/play/44239517/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-11-2%2Fa3f7298a-0137-029f-1132-2937920c4bdc.mp3",
            "node_type": "clip",
            "ref_id": "d6d8f43a-76c1-4d14-83fb-a2f463e87d0b",
            "show_title": "Bitcoin Fixes This",
            "text": "can you please go into detail about tap route? I know the advantages, but I'm yet to understand the mechanisms to which provide these services. I'm not a coder, but I am. Finding it hard to get into this. I published a few videos a while back where I read through the actual BIP 343-4134 Two and try to explain them. And those are tap roots. So if you want to know the details, it's all in there. But basically there's new Opcodes there's Schnoar signatures. So the Schnoor signatures are different type of signature than ECDSA, the serialization is shorter than ECDSA signatures and things like that. The Opcodes actually use the Schnor signatures instead of ECDSA and secret version one, which is what Cap root is. And then there's also this mastery, which is a Merkalized abstract syntax tree which allows you to have lots of different possible scripts in 32 bytes rather than. A single one in like 80 or something like that. So it makes it much more flexible. But if you're not a coder, it's going to be hard to understand a lot of the details. So you're kind of asking for the impossible. It's like, can you tell me all of the details? But I'm not a coder. It's like, then how are you going to understand that? I'm not sure what you're asking me to do. ",
            "timestamp": "00:07:05-00:08:42",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/d5c1d55c-73ee-4d1a-bfb4-927f1e706360_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "58fb39e5-3669-42fb-9d41-9a6b272bb767",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Payment Pools and Taproot - NADO 6:00:07:57-00:09:28",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "pools, right? Yes. Okay, so payment pools are this way of sharing a UTXO with, say, 15 people in this case. But you do it in such a way that you maintain Privacy and it remains compact. Yeah. Okay. And for that, Tap route is quite useful. Yes. So that's one of the interesting things about this proposal is that it's one of the first sort of proposals that uses step route in a very interesting way. Yes. That offers better Privacy, and it offers a way to put just to jam a lot more info into the script. We've talked about this in previous episodes, especially the Merkel three aspect of it. So when you do an update, if everybody agrees, you produce a single signature. That is like a multi signature, but it looks like a single signature. So nobody knows whether there were 100 participants or just one. And you can have all these branches that when each person takes money out, that will be one branch of the tree. But you can't see how many branches that were in the tree. So even if one person leaves, you still can't see how many people that were in there. That's kind of the general thing that you can hide with Taproom. Okay, so now we're in this pool with 15 of us. There's 15 people in the pool. It's a fantastic pool. I love this pool. Now let's get to the actual benefits we promise to get to the benefits. ",
        "details": {
            "boost": 0,
            "date": 1601006400,
            "description": "[[Payment pool]] mechanism and [[Taproot]]'s importance",
            "episode_title": "Payment Pools and Taproot - NADO 6",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": false,
            "link": "https://traffic.libsyn.com/secure/nadobtc/NADO_-_Episode_6_v2.mp3?dest-id=2366201",
            "node_type": "clip",
            "ref_id": "58fb39e5-3669-42fb-9d41-9a6b272bb767",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "pools, right? Yes. Okay, so payment pools are this way of sharing a UTXO with, say, 15 people in this case. But you do it in such a way that you maintain Privacy and it remains compact. Yeah. Okay. And for that, Tap route is quite useful. Yes. So that's one of the interesting things about this proposal is that it's one of the first sort of proposals that uses step route in a very interesting way. Yes. That offers better Privacy, and it offers a way to put just to jam a lot more info into the script. We've talked about this in previous episodes, especially the Merkel three aspect of it. So when you do an update, if everybody agrees, you produce a single signature. That is like a multi signature, but it looks like a single signature. So nobody knows whether there were 100 participants or just one. And you can have all these branches that when each person takes money out, that will be one branch of the tree. But you can't see how many branches that were in the tree. So even if one person leaves, you still can't see how many people that were in there. That's kind of the general thing that you can hide with Taproom. Okay, so now we're in this pool with 15 of us. There's 15 people in the pool. It's a fantastic pool. I love this pool. Now let's get to the actual benefits we promise to get to the benefits. ",
            "timestamp": "00:07:57-00:09:28",
            "topics": [
                "payment pool",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "87e0b2ad-0e08-452f-a801-c6b0ea6e31a0",
        "name": "Tales From The Crypt:Rabbit Hole Recap  Bitcoin Week of 2021.06.14:0:24:20-0:34:45",
        "label": "Tales From The Crypt",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1623902400,
            "description": "[[Taproot]] upgrade has locked in, activation expected in November 2021",
            "episode_title": "Rabbit Hole Recap  Bitcoin Week of 2021.06.14",
            "guest": [
                "Matt Odell"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2.jpg",
            "keyword": false,
            "link": "https://anchor.fm/tales-from-the-crypt/episodes/Rabbit-Hole-Recap-Bitcoin-Week-of-2021-06-14-e12vnbl",
            "node_type": "clip",
            "ref_id": "87e0b2ad-0e08-452f-a801-c6b0ea6e31a0",
            "show_title": "Tales From The Crypt",
            "text": "",
            "timestamp": "0:24:20-0:34:45",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "0a6e3ab0-1fbd-4593-94b0-b1ab4d7400cc",
        "name": "Tales From The Crypt:Rabbit Hole Recap  Bitcoin Week of 2021.11.08:0:16:25-0:27:40",
        "label": "Tales From The Crypt",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1636693200,
            "description": "[[taproot]] activates in two days",
            "episode_title": "Rabbit Hole Recap  Bitcoin Week of 2021.11.08",
            "guest": [
                "Matt Odell"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2.jpg",
            "keyword": false,
            "link": "https://anchor.fm/tales-from-the-crypt/episodes/Rabbit-Hole-Recap-Bitcoin-Week-of-2021-11-08-e1a51ho",
            "node_type": "clip",
            "ref_id": "0a6e3ab0-1fbd-4593-94b0-b1ab4d7400cc",
            "show_title": "Tales From The Crypt",
            "text": "",
            "timestamp": "0:16:25-0:27:40",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "6690561a-c33c-4409-ad7a-dad8a20d649f",
        "name": "Tales From The Crypt:Rabbit Hole Recap  Bitcoin Week of 2021.11.15:0:28:32-0:39:30",
        "label": "Tales From The Crypt",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1637298000,
            "description": "[[taproot]] activates successfully at block 609732 #muunWallet",
            "episode_title": "Rabbit Hole Recap  Bitcoin Week of 2021.11.15",
            "guest": [
                "Matt Odell"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2.jpg",
            "keyword": false,
            "link": "https://anchor.fm/tales-from-the-crypt/episodes/Rabbit-Hole-Recap-Bitcoin-Week-of-2021-11-15-e1ahtt9",
            "node_type": "clip",
            "ref_id": "6690561a-c33c-4409-ad7a-dad8a20d649f",
            "show_title": "Tales From The Crypt",
            "text": "",
            "timestamp": "0:28:32-0:39:30",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "604b395b-403b-440c-b2e3-d82e5fda158c",
        "name": "Tales From The Crypt:Rabbit Hole Recap  175  Don t live in fear:0:40:55-0:43:54",
        "label": "Tales From The Crypt",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1638421200,
            "description": "[[Ledger]] adds support for [[PSBT]]'s, [[MultiSig]], and [[Taproot]]",
            "episode_title": "Rabbit Hole Recap  175  Don t live in fear",
            "guest": [
                "Matt Odell"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2.jpg",
            "keyword": false,
            "link": "https://anchor.fm/tales-from-the-crypt/episodes/Rabbit-Hole-Recap-175-Dont-live-in-fear-e1b5ken",
            "node_type": "clip",
            "ref_id": "604b395b-403b-440c-b2e3-d82e5fda158c",
            "show_title": "Tales From The Crypt",
            "text": "",
            "timestamp": "0:40:55-0:43:54",
            "topics": [
                "ledger",
                "psbt",
                "multisig",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "b2e261a3-527a-42b3-a876-62008723e8b9",
        "name": "Tales From The Crypt:Rabbit Hole Recap  176  Party rip:0:44:38-0:47:15",
        "label": "Tales From The Crypt",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1639112400,
            "description": "[[Swan]] adds [[taproot]] support and api",
            "episode_title": "Rabbit Hole Recap  176  Party rip",
            "guest": [
                "Matt Odell"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2.jpg",
            "keyword": false,
            "link": "https://anchor.fm/tales-from-the-crypt/episodes/Rabbit-Hole-Recap-176-Party-rip-e1bhdir",
            "node_type": "clip",
            "ref_id": "b2e261a3-527a-42b3-a876-62008723e8b9",
            "show_title": "Tales From The Crypt",
            "text": "",
            "timestamp": "0:44:38-0:47:15",
            "topics": [
                "swan",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "0ad52c64-3f14-4a12-8fd3-b3d1578dba88",
        "name": "Tales From The Crypt:Avoiding oblivion  the state of Chicago  and bitcoin smart contracts with Chris Stewart:0:46:40-1:25:30",
        "label": "Tales From The Crypt",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1635307200,
            "description": "[[DLCs]] and [[AJ Towns]]' [[Taproot]] + [[PTLC proposal]]",
            "episode_title": "Avoiding oblivion  the state of Chicago  and bitcoin smart contracts with Chris Stewart",
            "guest": [
                "Chris Stewart"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2.jpg",
            "keyword": false,
            "link": "https://anchor.fm/tales-from-the-crypt/episodes/279-Avoiding-oblivion--the-state-of-Chicago--and-bitcoin-smart-contracts-with-Chris-Stewart-e19cl90",
            "node_type": "clip",
            "ref_id": "0ad52c64-3f14-4a12-8fd3-b3d1578dba88",
            "show_title": "Tales From The Crypt",
            "text": "",
            "timestamp": "0:46:40-1:25:30",
            "topics": [
                "dlcs",
                "aj towns",
                "taproot",
                "ptlc proposal"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "41facde0-1cbf-471a-9c0d-42a05fd66791",
        "name": "Tales From The Crypt:Understanding Taro with Olaoluwa Osuntokun:0:37:50-0:39:55",
        "label": "Tales From The Crypt",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1650600000,
            "description": "can [[taproot]] assets be privately issued?",
            "episode_title": "Understanding Taro with Olaoluwa Osuntokun",
            "guest": [
                "Olaoluwa Osuntokun"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2.jpg",
            "keyword": false,
            "link": "https://anchor.fm/tales-from-the-crypt/episodes/326-Understanding-Taro-with-Olaoluwa-Osuntokun-e1hlov11",
            "node_type": "clip",
            "ref_id": "41facde0-1cbf-471a-9c0d-42a05fd66791",
            "show_title": "Tales From The Crypt",
            "text": "",
            "timestamp": "0:37:50-0:39:55",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "10243c5d-9c54-47d4-bbf7-6d90cb055751",
        "name": "Bitcoin Audible:CryptoQuikRead 318 - Taproot is Coming  Aaron van Wirdum :00:08:45-00:12:35",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "is based on an interesting realization no matter how complex, almost any masked construction could or should include a condition that allows all participants to agree on the outcome and simply sign off on a settlement transaction together. In the earlier example, if Bob knows Alice can by herself claim all the funds next week, he might as well cooperate with her now to sign off together. In many typical smart contract setups, he would even be penalized if he doesn't. The complexity really just serves to keep everyone honest. Tap root resembles mass and always includes a condition where all participants can cooperate to spend the funds the cooperative close by utilizing Schnor signatures. This is where it gets interesting. First off, the cooperative close would utilize Schnor's threshold trick to make it look like a regular transaction from one person to another. So the public keys of all participants are added together, resulting in the threshold public key corresponding with this threshold public key, the combination of all participants signatures, their threshold signature allows them to spend the funds. So far, so good. But spending the funds as if it were a normal transaction is the only thing they can do. No mast like structures yet. That's where the other snore trick comes in all the alternative ways in which the funds can be spent, the non cooperative outcomes are this time combined into a different script. This script then, is hashed and used to tweak the threshold public key rather than public key times two, as used in the earlier example. This result in a threshold public key times script. We're still simplifying here. This threshold public key times script corresponds, of course, to a threshold signature time script. Now, if the money is spent cooperatively, all participants combine their signatures into the threshold signature and tweak it with the script. The resulting threshold signature times script allows them to spend the funds yet, and importantly, to the outside world, all this would still just look like a regular public key and a regular signature. In other words, a regular transaction only if a cooperative close proves impossible. The threshold public key can be shown for what it really is tweaked in this case, both the original threshold public key and the script are revealed. This proves that the Threshold public key times the script was tweaked with this specific script. So like the hash in P Two Sh, the tweak proves to the world that the funds should be spendable if the alternative conditions as specified in this script are met. And like with P twoSH, these conditions are of course, immediately met to spend the funds. Alternatively, instead of tweaking the threshold public key with script, the threshold public key can be tweaked with a merkel root of a merkel tree that includes all the different conditions under which the funds can be spent. A mass structure to spend the funds, then only the spending condition that's been met needs to be revealed. As such, Tap ",
        "details": {
            "boost": 0,
            "date": 1573448400,
            "description": "How [[Taproot]] Works?",
            "episode_title": "CryptoQuikRead 318 - Taproot is Coming  Aaron van Wirdum ",
            "guest": [
                "Aaron van Wirdum"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "keyword": false,
            "link": "https://traffic.megaphone.fm/CSN2334120546.mp3?updated=1627940471",
            "node_type": "clip",
            "ref_id": "10243c5d-9c54-47d4-bbf7-6d90cb055751",
            "show_title": "Bitcoin Audible",
            "text": "is based on an interesting realization no matter how complex, almost any masked construction could or should include a condition that allows all participants to agree on the outcome and simply sign off on a settlement transaction together. In the earlier example, if Bob knows Alice can by herself claim all the funds next week, he might as well cooperate with her now to sign off together. In many typical smart contract setups, he would even be penalized if he doesn't. The complexity really just serves to keep everyone honest. Tap root resembles mass and always includes a condition where all participants can cooperate to spend the funds the cooperative close by utilizing Schnor signatures. This is where it gets interesting. First off, the cooperative close would utilize Schnor's threshold trick to make it look like a regular transaction from one person to another. So the public keys of all participants are added together, resulting in the threshold public key corresponding with this threshold public key, the combination of all participants signatures, their threshold signature allows them to spend the funds. So far, so good. But spending the funds as if it were a normal transaction is the only thing they can do. No mast like structures yet. That's where the other snore trick comes in all the alternative ways in which the funds can be spent, the non cooperative outcomes are this time combined into a different script. This script then, is hashed and used to tweak the threshold public key rather than public key times two, as used in the earlier example. This result in a threshold public key times script. We're still simplifying here. This threshold public key times script corresponds, of course, to a threshold signature time script. Now, if the money is spent cooperatively, all participants combine their signatures into the threshold signature and tweak it with the script. The resulting threshold signature times script allows them to spend the funds yet, and importantly, to the outside world, all this would still just look like a regular public key and a regular signature. In other words, a regular transaction only if a cooperative close proves impossible. The threshold public key can be shown for what it really is tweaked in this case, both the original threshold public key and the script are revealed. This proves that the Threshold public key times the script was tweaked with this specific script. So like the hash in P Two Sh, the tweak proves to the world that the funds should be spendable if the alternative conditions as specified in this script are met. And like with P twoSH, these conditions are of course, immediately met to spend the funds. Alternatively, instead of tweaking the threshold public key with script, the threshold public key can be tweaked with a merkel root of a merkel tree that includes all the different conditions under which the funds can be spent. A mass structure to spend the funds, then only the spending condition that's been met needs to be revealed. As such, Tap ",
            "timestamp": "00:08:45-00:12:35",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "d2c491fa-af50-4fbd-b8ac-5cda0128ab36",
        "name": "Bitcoin Audible:Chat 44 - 2 Bitcoiners Talking Bitcoin with Citizen Bitcoin:01:11:44-01:22:03",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "I think really the big benefit to tap it, I don't think there's any even a specific proposal. It's just that everything that we're doing now can be made more efficient, like multi SIG. Right now, multi SIG is, like, a huge burden, but it's kind of becoming the standard. Like, I don't like to have anything, any large amount that's not behind multi stick. I don't even like the idea of relying on one hardware wallet anymore for my security, particularly with the ledger privacy dump. And I've got this new one. Kobo vault. I'm not sure if you've played with that one yet, but it's really cool looking. But I'm 100% sure if I trust it, like, they're a new company. I don't know of anybody who has reviewed the firmware and stuff in these things. Like, it could be a honey pot. They could be trying to steal a bunch of people's bitcoin, but it's okay to use it in, like, a multi SIG. I don't have to trust that hardware while I'm splitting up that trust among multiple. If I do a two of three multi SIG, and that's getting easier. You got a casa, you got, like, blockstream green, you've got a caravan, and all these things that are making this much easier to basically sign with multiple keys, just kind of swap the suckers in and out and hit, approve, hit, approve, approve, and you've got a signature. And because of that, the new security standard is a giant bloat on the chain. And of course, obviously it's a privacy giveaway that you have a multi SIG. Tap root natively has threshold signatures, which are basically the same thing just done with shore signatures and kind of a different mechanism. But it's multi sigma SIG with one signature. And again, all of the tracking of multi SIG outputs and stuff on the chain you're getting to see is like, oh, look, all these people are here's. All the multi sigs that are related to Lightning. Here are all the multi sigs that appear to be somebody's savings account, and maybe even they can connect it to, like, services can easily connect it to you. No, shut up. Alarm. Okay? But a Taproot just hides all of this. I want people to see as little data as possible when they're looking at the blockchain, even though the efficiency is great, it really is. And particularly, like, in validation and stuff because someone who. Someone is talking to someone out the window. I think we've got a delivery here. Hold on a second. This is organic security meat space security. I got to get my gun just in case it's not security. Alarm. False alarm. Nobody's here to murder me. Take all your bitcoin. Which they couldn't. I was deleting. I had my hammer out, ready to. Destroy my transit distributed multi SIG, right? Yeah, do it. I was saying on Twitter, you got to have signs. Like you have security signs out there. Like this house protected by ADC or whatever the security company is called. The one out there says, protected by distributed multi SIG. Somebody comes up to your house for the $5 inch tag and you're like, move on to the next bitcoin. And this guy's got multisick. I don't really feel like kidnapping him and dragging him around to various locations. Oh, Jesus. So that's why it's important guys get on the multi SIG before this thing moons. This thing goes to 200, 300K. Like you're going to make sure and. A little bit of money in bitcoin can turn into a lot of money so quickly when things get out of control, it becomes completely apparent, freakishly apparent, how not good your security is when you had an account that was like, maybe it's only $1,000 or whatever, and then suddenly it's like, eleven grand. Like, who, okay. And you got a hurricane on that out in the water or whatever right now out in the Atlantic. And you're like, holy crap, if this floods, I think I would lose all of it right now. I don't have a proper backup. I don't have another key in another place. And it just feels really good when you really focus and get your stuff behind multiple keys and you know you're protected in a way that if my house burned down right now or if I was kidnapped, like, I have just enough of a key, but not enough of a key that I could always get it back with time and going to another location. But I wouldn't lose it. But neither would I be able to give it to someone else. You know what I mean? Like, I could be kidnapped and I would just be like, you would have to shoot me. I would be like, I can read you the seed of one of my multi six, but all I have is that I have the one key of my multi SIG. I can't give you my bitcoin, and it's like, you're just going to have to shoot me. You're going to have to take me to the bank and the thing, you take me to the other location, just like you're saying. And it's comforting even though it probably means they're going to shoot me. Right? No point, unless they're just a psychopathic murderer. Most people are just in it for the money. There's some major consequences just to murdering people. Most people aren't ready for that. And that one, like I said, it's hard to get away with murder. It will stay that way, especially in an age of decreasing privacy. Yeah. That'S kind of that horrible trade off of privacy. Like, you won't want bad guys to get caught, but you don't want that. Trade off does exist, but obviously I think without a doubt, the benefits of privacy, I think the idea of independence and privacy actually discourages the mentality that creates criminality and murders and stuff like the sound money and personal responsibility. I think so much of the mentality that leads to criminality and stuff is that I'm entitled to your stuff, is that I'm hopeless and I'm not even in control of my own life. Like, so much of it is an attempt to control something when you feel like you have no control. Sound money or I guess poisonous money. Controlled and corrupted money is such a source of that sort of thing spreading throughout society. And you actually kind of see that when you get to these times. When society is bloated and full of debt and all of these things are going awry. You get exactly a huge explosion in that sort of mentality in criminal behavior and violent behavior and all of this stuff. So I think you can't really separate those two. Even though in the short term it appears that privacy and independence and the ability to be anonymous or whatever, all of those things may benefit criminality in the short term, I think in the long term it kind of gets at the root of what causes criminality. Yeah, there was an era before crimefighting relied on killing your privacy. Good old fashioned police work can happen again. Right? And even with Tatrooo, the blockchain is still monitorable and still pseudonymous. It's going to hide the details of contracts and et cetera, which is good, but it's not going to hide identities necessarily. And even if the Lightning network is dark, it's still going to be hard to route massive amounts of money over it. So if you're going to be doing some engaging in some huge international arms deal or something like that, you're not going to be doing it on Lightning. Yeah, it's a whole lot better for them to use the banking system and Deutsche Bank right now to get that done, of course. But there's something really interesting, actually, it's kind of a little bit going too far down this topic, but I think it's in the crypto anarchist manifesto. I don't know if it's the Crypto anarchist or the Cypherpunk manifesto. One of the manifesto talks about how an anonymous system is not a secret system, and it's about allowing the parties involved to disclose explicitly what they want to disclose to the world, what they want the public to know, but that they simply have the option of remaining private. Whereas a secret system is one where nobody knows where you're doing something that you think is wrong or bad and you don't want anyone to know. It like it's your privilege, it's your access. But that's kind of the fascinating thing about something like Lightning is that the transactions are private between you and who you're transacting with. So the old fashioned police work will be going to the person you got a transaction with. And if it was indeed one to hurt somebody or do something terrible or evil or human trafficking or something like that. Yeah, it's the same as transmitting a big old bag of cash to the person who you're hiring to murder somebody. Exactly. But the real world associations between the two parties are going to be there. Yeah, back ",
        "details": {
            "boost": 0,
            "date": 1596513600,
            "description": "Benefit of [[Taproot]]",
            "episode_title": "Chat 44 - 2 Bitcoiners Talking Bitcoin with Citizen Bitcoin",
            "guest": [
                "Brady of Citizen Bitcoin "
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN6254051243.mp3?updated=1627958944",
            "node_type": "clip",
            "ref_id": "d2c491fa-af50-4fbd-b8ac-5cda0128ab36",
            "show_title": "Bitcoin Audible",
            "text": "I think really the big benefit to tap it, I don't think there's any even a specific proposal. It's just that everything that we're doing now can be made more efficient, like multi SIG. Right now, multi SIG is, like, a huge burden, but it's kind of becoming the standard. Like, I don't like to have anything, any large amount that's not behind multi stick. I don't even like the idea of relying on one hardware wallet anymore for my security, particularly with the ledger privacy dump. And I've got this new one. Kobo vault. I'm not sure if you've played with that one yet, but it's really cool looking. But I'm 100% sure if I trust it, like, they're a new company. I don't know of anybody who has reviewed the firmware and stuff in these things. Like, it could be a honey pot. They could be trying to steal a bunch of people's bitcoin, but it's okay to use it in, like, a multi SIG. I don't have to trust that hardware while I'm splitting up that trust among multiple. If I do a two of three multi SIG, and that's getting easier. You got a casa, you got, like, blockstream green, you've got a caravan, and all these things that are making this much easier to basically sign with multiple keys, just kind of swap the suckers in and out and hit, approve, hit, approve, approve, and you've got a signature. And because of that, the new security standard is a giant bloat on the chain. And of course, obviously it's a privacy giveaway that you have a multi SIG. Tap root natively has threshold signatures, which are basically the same thing just done with shore signatures and kind of a different mechanism. But it's multi sigma SIG with one signature. And again, all of the tracking of multi SIG outputs and stuff on the chain you're getting to see is like, oh, look, all these people are here's. All the multi sigs that are related to Lightning. Here are all the multi sigs that appear to be somebody's savings account, and maybe even they can connect it to, like, services can easily connect it to you. No, shut up. Alarm. Okay? But a Taproot just hides all of this. I want people to see as little data as possible when they're looking at the blockchain, even though the efficiency is great, it really is. And particularly, like, in validation and stuff because someone who. Someone is talking to someone out the window. I think we've got a delivery here. Hold on a second. This is organic security meat space security. I got to get my gun just in case it's not security. Alarm. False alarm. Nobody's here to murder me. Take all your bitcoin. Which they couldn't. I was deleting. I had my hammer out, ready to. Destroy my transit distributed multi SIG, right? Yeah, do it. I was saying on Twitter, you got to have signs. Like you have security signs out there. Like this house protected by ADC or whatever the security company is called. The one out there says, protected by distributed multi SIG. Somebody comes up to your house for the $5 inch tag and you're like, move on to the next bitcoin. And this guy's got multisick. I don't really feel like kidnapping him and dragging him around to various locations. Oh, Jesus. So that's why it's important guys get on the multi SIG before this thing moons. This thing goes to 200, 300K. Like you're going to make sure and. A little bit of money in bitcoin can turn into a lot of money so quickly when things get out of control, it becomes completely apparent, freakishly apparent, how not good your security is when you had an account that was like, maybe it's only $1,000 or whatever, and then suddenly it's like, eleven grand. Like, who, okay. And you got a hurricane on that out in the water or whatever right now out in the Atlantic. And you're like, holy crap, if this floods, I think I would lose all of it right now. I don't have a proper backup. I don't have another key in another place. And it just feels really good when you really focus and get your stuff behind multiple keys and you know you're protected in a way that if my house burned down right now or if I was kidnapped, like, I have just enough of a key, but not enough of a key that I could always get it back with time and going to another location. But I wouldn't lose it. But neither would I be able to give it to someone else. You know what I mean? Like, I could be kidnapped and I would just be like, you would have to shoot me. I would be like, I can read you the seed of one of my multi six, but all I have is that I have the one key of my multi SIG. I can't give you my bitcoin, and it's like, you're just going to have to shoot me. You're going to have to take me to the bank and the thing, you take me to the other location, just like you're saying. And it's comforting even though it probably means they're going to shoot me. Right? No point, unless they're just a psychopathic murderer. Most people are just in it for the money. There's some major consequences just to murdering people. Most people aren't ready for that. And that one, like I said, it's hard to get away with murder. It will stay that way, especially in an age of decreasing privacy. Yeah. That'S kind of that horrible trade off of privacy. Like, you won't want bad guys to get caught, but you don't want that. Trade off does exist, but obviously I think without a doubt, the benefits of privacy, I think the idea of independence and privacy actually discourages the mentality that creates criminality and murders and stuff like the sound money and personal responsibility. I think so much of the mentality that leads to criminality and stuff is that I'm entitled to your stuff, is that I'm hopeless and I'm not even in control of my own life. Like, so much of it is an attempt to control something when you feel like you have no control. Sound money or I guess poisonous money. Controlled and corrupted money is such a source of that sort of thing spreading throughout society. And you actually kind of see that when you get to these times. When society is bloated and full of debt and all of these things are going awry. You get exactly a huge explosion in that sort of mentality in criminal behavior and violent behavior and all of this stuff. So I think you can't really separate those two. Even though in the short term it appears that privacy and independence and the ability to be anonymous or whatever, all of those things may benefit criminality in the short term, I think in the long term it kind of gets at the root of what causes criminality. Yeah, there was an era before crimefighting relied on killing your privacy. Good old fashioned police work can happen again. Right? And even with Tatrooo, the blockchain is still monitorable and still pseudonymous. It's going to hide the details of contracts and et cetera, which is good, but it's not going to hide identities necessarily. And even if the Lightning network is dark, it's still going to be hard to route massive amounts of money over it. So if you're going to be doing some engaging in some huge international arms deal or something like that, you're not going to be doing it on Lightning. Yeah, it's a whole lot better for them to use the banking system and Deutsche Bank right now to get that done, of course. But there's something really interesting, actually, it's kind of a little bit going too far down this topic, but I think it's in the crypto anarchist manifesto. I don't know if it's the Crypto anarchist or the Cypherpunk manifesto. One of the manifesto talks about how an anonymous system is not a secret system, and it's about allowing the parties involved to disclose explicitly what they want to disclose to the world, what they want the public to know, but that they simply have the option of remaining private. Whereas a secret system is one where nobody knows where you're doing something that you think is wrong or bad and you don't want anyone to know. It like it's your privilege, it's your access. But that's kind of the fascinating thing about something like Lightning is that the transactions are private between you and who you're transacting with. So the old fashioned police work will be going to the person you got a transaction with. And if it was indeed one to hurt somebody or do something terrible or evil or human trafficking or something like that. Yeah, it's the same as transmitting a big old bag of cash to the person who you're hiring to murder somebody. Exactly. But the real world associations between the two parties are going to be there. Yeah, back ",
            "timestamp": "01:11:44-01:22:03",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "5489aa82-ca13-4d0b-8436-bca9de24a567",
        "name": "Bitcoin Audible:Guy s Take  34 - TAPROOT IS MERGED  :00:33:20-00:00:00",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1602820800,
            "description": "Positive Impact of [[Taproot]] on [[Bitcoin]]",
            "episode_title": "Guy s Take  34 - TAPROOT IS MERGED  ",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/6377c14f-551c-44e2-b0d9-564cd519503a.jpg",
            "keyword": false,
            "link": "https://traffic.megaphone.fm/CSN3029808295.mp3?updated=1627960381",
            "node_type": "clip",
            "ref_id": "5489aa82-ca13-4d0b-8436-bca9de24a567",
            "show_title": "Bitcoin Audible",
            "text": "",
            "timestamp": "00:33:20-00:00:00",
            "topics": [
                "taproot",
                "bitcoin"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/6377c14f-551c-44e2-b0d9-564cd519503a_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "c87de52c-2cc7-4c42-9cab-9143eaaf2c34",
        "name": "Bitcoin Audible:Guy s Take  34 - TAPROOT IS MERGED  :00:31:11-00:33:20",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "is also going to make a new version of Lightning possible. So this is also like I talked about, the Cross Input Signature aggregation thing is basically step two in this process and Tap route is step one. Well, another major part of this that snore signatures and Tap root enable is the next version of Lightning, which will actually solve a lot of those problems as well. A lot of the limitations that Lightning has are like how much data needs to be stored to enforce the current state, like the valid state of the Lightning Channel. In the case of contestation, in case that somebody is challenging what the quote unquote truth of your Lightning Channel is, well, you need to give proof that that is not the truth, that they are cheating. And that takes a lot of data. The longer channel lasts, the more data it takes to essentially be able to prove that for anything in that channel's past, and this is one of those tools that goes, is a huge leap toward making it that all you need is one piece of data and it enables you to generate the insurance calls for every previous state. Essentially, all you need is the latest state of the channel and it invalidates everything previous to it. And that's going to just make Lightning more efficient. And there's just so many different improvements and kind of ways that this can be used. And that's what we've already thought about and already discovered. And the beauty of this is that there's going to be a whole new array of people now looking at this differently and having an entirely new set of tools and a lack of limitation in what they can do. And to be able to add all of this complexity without worrying about additional cost. This is just going to be a really big moment in Bitcoin history, I think. And amazingly, this is not contentious. ",
        "details": {
            "boost": 0,
            "date": 1602820800,
            "description": "[[Taproot]] Making the New Version of [[Lightning]]",
            "episode_title": "Guy s Take  34 - TAPROOT IS MERGED  ",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/6377c14f-551c-44e2-b0d9-564cd519503a.jpg",
            "keyword": false,
            "link": "https://traffic.megaphone.fm/CSN3029808295.mp3?updated=1627960381",
            "node_type": "clip",
            "ref_id": "c87de52c-2cc7-4c42-9cab-9143eaaf2c34",
            "show_title": "Bitcoin Audible",
            "text": "is also going to make a new version of Lightning possible. So this is also like I talked about, the Cross Input Signature aggregation thing is basically step two in this process and Tap route is step one. Well, another major part of this that snore signatures and Tap root enable is the next version of Lightning, which will actually solve a lot of those problems as well. A lot of the limitations that Lightning has are like how much data needs to be stored to enforce the current state, like the valid state of the Lightning Channel. In the case of contestation, in case that somebody is challenging what the quote unquote truth of your Lightning Channel is, well, you need to give proof that that is not the truth, that they are cheating. And that takes a lot of data. The longer channel lasts, the more data it takes to essentially be able to prove that for anything in that channel's past, and this is one of those tools that goes, is a huge leap toward making it that all you need is one piece of data and it enables you to generate the insurance calls for every previous state. Essentially, all you need is the latest state of the channel and it invalidates everything previous to it. And that's going to just make Lightning more efficient. And there's just so many different improvements and kind of ways that this can be used. And that's what we've already thought about and already discovered. And the beauty of this is that there's going to be a whole new array of people now looking at this differently and having an entirely new set of tools and a lack of limitation in what they can do. And to be able to add all of this complexity without worrying about additional cost. This is just going to be a really big moment in Bitcoin history, I think. And amazingly, this is not contentious. ",
            "timestamp": "00:31:11-00:33:20",
            "topics": [
                "taproot",
                "lightning",
                "lightning"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/6377c14f-551c-44e2-b0d9-564cd519503a_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "6260505d-c26a-4984-831a-4772dac2c992",
        "name": "Bitcoin Audible:Guy s Take  34 - TAPROOT IS MERGED  :00:25:47-00:26:49",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "shines in a big way to start off with, is that massive decreases in computation time. So the more people use Tap root and Tap script, which is just the application of Tap root for scripts and signatures and shit, the more people use that, the faster we're going to go through. We'll still have that big chunk of blocks, 400,000 to 600,000, that are really sluggish and take a long time to validate. But then it'll speed up as we get into 680,000 and people start using Tap root. And if we get full blocks that are just 80, 90% Tap root, things will really start screaming again. Obviously not as fast as a whole bunch of empty blocks, but you get the idea. It's just a lot more efficient that way. So that's the first one where I really think this is a huge improvement. The second one, and the more important one, in my opinion, the really ",
        "details": {
            "boost": 0,
            "date": 1602820800,
            "description": "What Makes [[Taproot]] Shines?",
            "episode_title": "Guy s Take  34 - TAPROOT IS MERGED  ",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/6377c14f-551c-44e2-b0d9-564cd519503a.jpg",
            "keyword": false,
            "link": "https://traffic.megaphone.fm/CSN3029808295.mp3?updated=1627960381",
            "node_type": "clip",
            "ref_id": "6260505d-c26a-4984-831a-4772dac2c992",
            "show_title": "Bitcoin Audible",
            "text": "shines in a big way to start off with, is that massive decreases in computation time. So the more people use Tap root and Tap script, which is just the application of Tap root for scripts and signatures and shit, the more people use that, the faster we're going to go through. We'll still have that big chunk of blocks, 400,000 to 600,000, that are really sluggish and take a long time to validate. But then it'll speed up as we get into 680,000 and people start using Tap root. And if we get full blocks that are just 80, 90% Tap root, things will really start screaming again. Obviously not as fast as a whole bunch of empty blocks, but you get the idea. It's just a lot more efficient that way. So that's the first one where I really think this is a huge improvement. The second one, and the more important one, in my opinion, the really ",
            "timestamp": "00:25:47-00:26:49",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/6377c14f-551c-44e2-b0d9-564cd519503a_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "b2b21176-307b-488d-b2a1-8e4efc26ce59",
        "name": "Bitcoin Audible:Read 464 - Poolin s Initiative to Activate Taproot  Aaron Van Wirdum :00:03:26-00:05:57",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "top Two Bitcoin Mining Pool pooling once Tap Route and hopes Other pools do Too update on November 17. 2020. Bitnainsbtc.com contributing about 12% of the network's hash power and slushpool about 3% of the network hash power have also signaled their support on Tap Root activation.com. I will have that link in the show notes as well, but that is Taprootactivation.com Pooling, the Chinese mining pool that currently controls around 13% of all hash power on the Bitcoin network, is preparing for Taproot, the proposed protocol upgrade for which the code is included in the upcoming Bitcoin core 00:210 release. Bitcoin's second largest mining pool, only topped by F two pool, which controls about 17% of hash power, today launched a web page to help inform mining pools on Tap Root and lets them indicate how they would prefer the backwards compatible upgrade to be activated. We're excited to see Tap Root get close to deployment, and as one of the biggest mining pools on the Bitcoin network, we want to be constructive in the software activation process that will help make Tap Root a reality pool. In VP, Alejandro de la Torre told Bitcoin magazine. Tap Tap Root, as implemented in Bitcoin Core, is actually a combination of three upgrades rolled into one. First, it would introduce the Schnor signature algorithm, which is considered by many cryptographers to be the best in the field. Besides a strong level of correctness no malleability and relatively fast verifiability, Schnor signatures allow for math to be performed with them. Among other things, this allows for new types of smart contracts on Bitcoin. Smart contract flexibility would be further expanded through a trick called mast, which allows for coins to be spent in various ways without ever needing to reveal the options that ultimately aren't chosen. Moreover, if all parties to a smart contract agree on the outcome of the contract, Taproot lets them cooperate to make the settlement transaction indistinguishable from regular transactions benefiting user privacy. Third, Tap Root will include an updated version of Bitcoin's programming language called Tap script pooling, founded ",
        "details": {
            "boost": 0,
            "date": 1605762000,
            "description": "What is [[Taproot]]?",
            "episode_title": "Read 464 - Poolin s Initiative to Activate Taproot  Aaron Van Wirdum ",
            "guest": [
                "Aaron Van Wirdum"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/0b9229a4-8cef-441c-8fc1-8e622616a44a.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN8083365362.mp3?updated=1627961540",
            "node_type": "clip",
            "ref_id": "b2b21176-307b-488d-b2a1-8e4efc26ce59",
            "show_title": "Bitcoin Audible",
            "text": "top Two Bitcoin Mining Pool pooling once Tap Route and hopes Other pools do Too update on November 17. 2020. Bitnainsbtc.com contributing about 12% of the network's hash power and slushpool about 3% of the network hash power have also signaled their support on Tap Root activation.com. I will have that link in the show notes as well, but that is Taprootactivation.com Pooling, the Chinese mining pool that currently controls around 13% of all hash power on the Bitcoin network, is preparing for Taproot, the proposed protocol upgrade for which the code is included in the upcoming Bitcoin core 00:210 release. Bitcoin's second largest mining pool, only topped by F two pool, which controls about 17% of hash power, today launched a web page to help inform mining pools on Tap Root and lets them indicate how they would prefer the backwards compatible upgrade to be activated. We're excited to see Tap Root get close to deployment, and as one of the biggest mining pools on the Bitcoin network, we want to be constructive in the software activation process that will help make Tap Root a reality pool. In VP, Alejandro de la Torre told Bitcoin magazine. Tap Tap Root, as implemented in Bitcoin Core, is actually a combination of three upgrades rolled into one. First, it would introduce the Schnor signature algorithm, which is considered by many cryptographers to be the best in the field. Besides a strong level of correctness no malleability and relatively fast verifiability, Schnor signatures allow for math to be performed with them. Among other things, this allows for new types of smart contracts on Bitcoin. Smart contract flexibility would be further expanded through a trick called mast, which allows for coins to be spent in various ways without ever needing to reveal the options that ultimately aren't chosen. Moreover, if all parties to a smart contract agree on the outcome of the contract, Taproot lets them cooperate to make the settlement transaction indistinguishable from regular transactions benefiting user privacy. Third, Tap Root will include an updated version of Bitcoin's programming language called Tap script pooling, founded ",
            "timestamp": "00:03:26-00:05:57",
            "topics": [
                "taproot",
                "taprootactivation"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/0b9229a4-8cef-441c-8fc1-8e622616a44a_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "8df9eee2-9763-4830-a060-bf2d1bee7297",
        "name": "Bitcoin Audible:Chat  56 - DLCs  PTLCs  the Oracle Problem   More with SuredBits  Nadav:00:52:07-00:59:57",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "keys everywhere. And so that could just be like a transaction with change. It's not necessarily that it's splitting between two people. Right? So, yeah, especially once we have tapper. These things are like indistinguishable from normal activity on Bitcoin, and they do very general things. And on top of that, as we mentioned, with integrating them with Lightning, I like to think of DLCs as something more like a building block. You can use this with other protocols. It's a way of making payments contingent on things Oracle say. So that's just like add that into your toolbox that already has multifig and time locks and hash locks and point locks. Now you have Oracle locks as well, and you just throw that into your toolkit and move on and build stuff on top of that as well. That is awesome. So I've recently had a few people I know personally who invested in bitcoin just before this major run up, and they've really been riding a rocket down the rabbit hole. So I was just having a combo with somebody who was just like, I need to run a note. I got to get on Lightning. Do I need a raspberry pi computer? What? Hardware wallet, all this crazy stuff. And I'm like, slow down. The first and most important thing you need to do is secure your savings by holding your keys. You need a secure, easy to use hardware wallet. That is the BitBox. Two. It is actually cofounded by a Bitcoin developer, and the team is made up of serious engineers. It is Swiss made. It's a sleek, simple design. The backup is as simple as plug in your SD card, hit the backup button, take it out. The wallet software is super minimal, and it just works. If you have started investing, get a BitBox before it turns into a ton of money, and keep your bitcoin safe. Check it out at Guy swan combatbox. And you all have basically done this. We merged multi Oracle support in yesterday, so now we've got kind of the full feature set, more or less. Oh, wow. So this is basically ready to go. Well, give me a month or two to test it and document it and get the other implementations up to speed and maybe clean up some of the specifications with more examples and stuff. But yeah, at the end of the day, if you really wanted to and you were savvy enough, you could pull down my code and run it and do because we're doing this on main chain. We do an experiment at this point at least once a month, sometimes once a week. We're like, new kind of contract, let's go. And then we just do it on chain internally. Insured bits. You did a contract for difference on main chain a couple of weeks ago. And before that, me and Chris executed a volatility contract on main chain and all these kinds of things. And every time we get a new bit of features, we're like, okay, let's go, main chain right away. And then coming up, hopefully me and Ben will be executing a multi Oracle CFD change. So that will be the next one thing we do, and that should be soonish. What do you think the first application is for this? Do you all plan on running or being an Oracle or something to start off with? Actually, there already have been DLCs out in the wild. So there's a company called Atomic Finance, and they had an application that ran a market for DLCs on the US election. And this was ongoing for quite a while. And they had a nice website. I think that they got a bunch of the big people on Twitter, like Pierre Shard, and all these other people to come and just put things on the book, essentially like, here are the odds, here's the amount. And then anyone could take. And then it was just kind of like this lightweight browser wallet, web wallet that you would put funds into. It was noncustodial, which is great, but it was like you had to move funds into this web wallet, which in the future won't be the case, hopefully. But regardless, it had this nice interface and it was very smooth. We used it, we played around with it as well. Yeah. And then all of those, I assume, in the coming days are going to be executed and those are all just on chain DLCs that actually happened. So this is like some stuff has already been built with it because on the specification side, so I should say there is a big spectrum effort for DLCs. I lead kind of these monthly meetings with a bunch of people all over the world. We've got people from Crypto Garage over in Japan. We've got Lloyd Fornier, who is out of Australia, and he I believe is funded by Square Crypto and he's just kind of an independent developer working on a bunch of stuff, DLC's being one of them. He's the one actually who figured out how to do these Verifiably encrypted signatures using ECDSA. Everyone knew how to do it with Snore already. These are also called adapter signatures, if you've ever heard of these. Adapter signatures are just these Verifiably encrypted signatures. Yeah. And so he's writing a specification right now for adapter signatures on ECDSA, which DLCs are using. Anyway, there's a big spec effort. I can share the link for the repo if you want to throw that in the show notes. Yeah, actually that would be great for the show notes. Yeah. And a bunch of activity. Yeah. Essentially right now things are nearing stable but not quite there. And so part of the reason that you haven't seen as much out in the wild is because things on the Oracle side of things are going to be pretty completely stable in a month or two and we're going to be tagging like a V zero or something like this. And then once that's done, Oracles can publish saying, I'm going to say with the bitcoin prices in ten years on this day, or something like that. And we don't want people doing that before we have a completely stable Oracle interface because it's a huge pain if you have open events that haven't been signed yet to do this migration, it's possible it's just a pain. So we want to save people from that. That's part of the reason why the selection that was such a great use case for the time is because it ended very quickly. It used to kind of an old version of DLCs, but it still worked. And the newer version is better and more stuff to come, I'm sure, from the guys over atomic finance. Questions on DLC Lightning real quick. Yeah. Is that when you're doing that, like, let's say it's like a month before the election and I write this transaction, does that then mean that I'm basically like, let's say my route to you is through Bob. Does that mean that we're locking up money with Bob for that month and I'm essentially paying for one of the whole HTLCs or whatever that will let him pay him an interest rate essentially for holding that money? Yeah. So there's ",
        "details": {
            "boost": 0,
            "date": 1611637200,
            "description": "[[Taproot]] in Bitcoin",
            "episode_title": "Chat  56 - DLCs  PTLCs  the Oracle Problem   More with SuredBits  Nadav",
            "guest": [
                "Nadav Kohen"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/7f23843d-1b02-4d4c-92c4-b67960a9353d.jpg",
            "keyword": false,
            "link": "https://traffic.megaphone.fm/CSN5776810099.mp3?updated=1624485219",
            "node_type": "clip",
            "ref_id": "8df9eee2-9763-4830-a060-bf2d1bee7297",
            "show_title": "Bitcoin Audible",
            "text": "keys everywhere. And so that could just be like a transaction with change. It's not necessarily that it's splitting between two people. Right? So, yeah, especially once we have tapper. These things are like indistinguishable from normal activity on Bitcoin, and they do very general things. And on top of that, as we mentioned, with integrating them with Lightning, I like to think of DLCs as something more like a building block. You can use this with other protocols. It's a way of making payments contingent on things Oracle say. So that's just like add that into your toolbox that already has multifig and time locks and hash locks and point locks. Now you have Oracle locks as well, and you just throw that into your toolkit and move on and build stuff on top of that as well. That is awesome. So I've recently had a few people I know personally who invested in bitcoin just before this major run up, and they've really been riding a rocket down the rabbit hole. So I was just having a combo with somebody who was just like, I need to run a note. I got to get on Lightning. Do I need a raspberry pi computer? What? Hardware wallet, all this crazy stuff. And I'm like, slow down. The first and most important thing you need to do is secure your savings by holding your keys. You need a secure, easy to use hardware wallet. That is the BitBox. Two. It is actually cofounded by a Bitcoin developer, and the team is made up of serious engineers. It is Swiss made. It's a sleek, simple design. The backup is as simple as plug in your SD card, hit the backup button, take it out. The wallet software is super minimal, and it just works. If you have started investing, get a BitBox before it turns into a ton of money, and keep your bitcoin safe. Check it out at Guy swan combatbox. And you all have basically done this. We merged multi Oracle support in yesterday, so now we've got kind of the full feature set, more or less. Oh, wow. So this is basically ready to go. Well, give me a month or two to test it and document it and get the other implementations up to speed and maybe clean up some of the specifications with more examples and stuff. But yeah, at the end of the day, if you really wanted to and you were savvy enough, you could pull down my code and run it and do because we're doing this on main chain. We do an experiment at this point at least once a month, sometimes once a week. We're like, new kind of contract, let's go. And then we just do it on chain internally. Insured bits. You did a contract for difference on main chain a couple of weeks ago. And before that, me and Chris executed a volatility contract on main chain and all these kinds of things. And every time we get a new bit of features, we're like, okay, let's go, main chain right away. And then coming up, hopefully me and Ben will be executing a multi Oracle CFD change. So that will be the next one thing we do, and that should be soonish. What do you think the first application is for this? Do you all plan on running or being an Oracle or something to start off with? Actually, there already have been DLCs out in the wild. So there's a company called Atomic Finance, and they had an application that ran a market for DLCs on the US election. And this was ongoing for quite a while. And they had a nice website. I think that they got a bunch of the big people on Twitter, like Pierre Shard, and all these other people to come and just put things on the book, essentially like, here are the odds, here's the amount. And then anyone could take. And then it was just kind of like this lightweight browser wallet, web wallet that you would put funds into. It was noncustodial, which is great, but it was like you had to move funds into this web wallet, which in the future won't be the case, hopefully. But regardless, it had this nice interface and it was very smooth. We used it, we played around with it as well. Yeah. And then all of those, I assume, in the coming days are going to be executed and those are all just on chain DLCs that actually happened. So this is like some stuff has already been built with it because on the specification side, so I should say there is a big spectrum effort for DLCs. I lead kind of these monthly meetings with a bunch of people all over the world. We've got people from Crypto Garage over in Japan. We've got Lloyd Fornier, who is out of Australia, and he I believe is funded by Square Crypto and he's just kind of an independent developer working on a bunch of stuff, DLC's being one of them. He's the one actually who figured out how to do these Verifiably encrypted signatures using ECDSA. Everyone knew how to do it with Snore already. These are also called adapter signatures, if you've ever heard of these. Adapter signatures are just these Verifiably encrypted signatures. Yeah. And so he's writing a specification right now for adapter signatures on ECDSA, which DLCs are using. Anyway, there's a big spec effort. I can share the link for the repo if you want to throw that in the show notes. Yeah, actually that would be great for the show notes. Yeah. And a bunch of activity. Yeah. Essentially right now things are nearing stable but not quite there. And so part of the reason that you haven't seen as much out in the wild is because things on the Oracle side of things are going to be pretty completely stable in a month or two and we're going to be tagging like a V zero or something like this. And then once that's done, Oracles can publish saying, I'm going to say with the bitcoin prices in ten years on this day, or something like that. And we don't want people doing that before we have a completely stable Oracle interface because it's a huge pain if you have open events that haven't been signed yet to do this migration, it's possible it's just a pain. So we want to save people from that. That's part of the reason why the selection that was such a great use case for the time is because it ended very quickly. It used to kind of an old version of DLCs, but it still worked. And the newer version is better and more stuff to come, I'm sure, from the guys over atomic finance. Questions on DLC Lightning real quick. Yeah. Is that when you're doing that, like, let's say it's like a month before the election and I write this transaction, does that then mean that I'm basically like, let's say my route to you is through Bob. Does that mean that we're locking up money with Bob for that month and I'm essentially paying for one of the whole HTLCs or whatever that will let him pay him an interest rate essentially for holding that money? Yeah. So there's ",
            "timestamp": "00:52:07-00:59:57",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/7f23843d-1b02-4d4c-92c4-b67960a9353d_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "2c8742b7-5ae8-4849-bf66-551641f1245c",
        "name": "Bitcoin Audible:Read 502 - LOT true or false  The Last Hurdle for Taproot  Aaron Van Wirdum :00:40:28-00:00:00",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1614834000,
            "description": "Will Bitcoin Fine without [[Taproot]]?",
            "episode_title": "Read 502 - LOT true or false  The Last Hurdle for Taproot  Aaron Van Wirdum ",
            "guest": [
                "Aaron Van Wirdum"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "keyword": false,
            "link": "https://traffic.megaphone.fm/CSN6946777144.mp3?updated=1624480480",
            "node_type": "clip",
            "ref_id": "2c8742b7-5ae8-4849-bf66-551641f1245c",
            "show_title": "Bitcoin Audible",
            "text": "",
            "timestamp": "00:40:28-00:00:00",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "8e5ec558-4971-4ccf-aabf-3b56d6b68e8a",
        "name": "Bitcoin Audible:Read 502 - LOT true or false  The Last Hurdle for Taproot  Aaron Van Wirdum :00:38:07-00:40:28",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "I love Tap route. It's a big efficiency boost. It's great for privacy within, like a smart contract or a transaction or multi SIG. It's great for Lightning. It enables future improvements that are really important, I think, and I genuinely I really, really think we should activate it. I would also run personally a Lot True client and want to stay very much on top of it in case Lottrew ended up being the riskier scenario towards the end of the year long period. With that said, I would never split off onto a minority chain for it and argue with whether Tap root bitcoin or nontaproot bitcoin is the real one. I will just cut my note off. Tap root is not a ride or die issue. It's a good to have, not a need to have. So this isn't a different vision for what Bitcoin is. This isn't me trying to protect her, being able to verify my own money in the future. This is just fun extras and added efficiency. I don't see any support here for a permanent split over Tap route. If a fork does happen, it will consolidate one way or the other. We are not going to split up into two communities attacking each other over whether or not we want to tap route next year or right now. Again, this debate is about when we flip the switch, not if. So if somebody cuts it on, it's extremely likely everyone will just rush into their room and cut the same switch on. They'll just jump on the ship. But whoever does, I don't think it should be bitcoin core. I think they should accept Taproot if it activates via the threshold and do nothing but follow the longest chain and validate Taproot blocks if they show up. Otherwise, maybe they have the next release and they've got a true false button or something like that. I still would prefer a separate client, but maybe because there's not quite the pressure there that getting people to go out and download a new client, there's still risk to that as well. But I guess in a general sense I'm not willing to damage bitcoin ",
        "details": {
            "boost": 0,
            "date": 1614834000,
            "description": "Essense of [[Taproot]]",
            "episode_title": "Read 502 - LOT true or false  The Last Hurdle for Taproot  Aaron Van Wirdum ",
            "guest": [
                "Aaron Van Wirdum"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN6946777144.mp3?updated=1624480480",
            "node_type": "clip",
            "ref_id": "8e5ec558-4971-4ccf-aabf-3b56d6b68e8a",
            "show_title": "Bitcoin Audible",
            "text": "I love Tap route. It's a big efficiency boost. It's great for privacy within, like a smart contract or a transaction or multi SIG. It's great for Lightning. It enables future improvements that are really important, I think, and I genuinely I really, really think we should activate it. I would also run personally a Lot True client and want to stay very much on top of it in case Lottrew ended up being the riskier scenario towards the end of the year long period. With that said, I would never split off onto a minority chain for it and argue with whether Tap root bitcoin or nontaproot bitcoin is the real one. I will just cut my note off. Tap root is not a ride or die issue. It's a good to have, not a need to have. So this isn't a different vision for what Bitcoin is. This isn't me trying to protect her, being able to verify my own money in the future. This is just fun extras and added efficiency. I don't see any support here for a permanent split over Tap route. If a fork does happen, it will consolidate one way or the other. We are not going to split up into two communities attacking each other over whether or not we want to tap route next year or right now. Again, this debate is about when we flip the switch, not if. So if somebody cuts it on, it's extremely likely everyone will just rush into their room and cut the same switch on. They'll just jump on the ship. But whoever does, I don't think it should be bitcoin core. I think they should accept Taproot if it activates via the threshold and do nothing but follow the longest chain and validate Taproot blocks if they show up. Otherwise, maybe they have the next release and they've got a true false button or something like that. I still would prefer a separate client, but maybe because there's not quite the pressure there that getting people to go out and download a new client, there's still risk to that as well. But I guess in a general sense I'm not willing to damage bitcoin ",
            "timestamp": "00:38:07-00:40:28",
            "topics": [
                "taproot",
                "tap"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "dd57eece-2825-4810-8b1d-d6671fb841a2",
        "name": "Bitcoin Audible:Read 606 - Lightning is a Liquidity Network  Roy Sheinfeld :00:35:25-00:36:46",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "say every single time you write a transaction and you have a whole bunch of different pieces of it, well, all of that has to be essentially manually written out and each part of that transaction needs to be signed. And then the whole big fat thing needs to be published to the chain. Tap root is essentially you can compress all of it into hash, but you're just kind of compressing it all into a single public key in which all of those branches of things are hidden behind it, such that you don't actually need to publish that, you just need to publish the squished together public key. You just need to publish that hash. Basically, it's a way to compress all of the data into a transaction such that A, you don't really know what any of that information is unless you're actually part of the transaction. And all the transactions basically look ubiquitous. They all look exactly the same from one address to like another address or something with a single signature. And all of the details and the instructions and the scripts are hidden in the signature. But what this does is it enables us to have very complex and lots of different instructions and lots of different paths in that without actually adding any cost to the transaction. So here's my thinking. ",
        "details": {
            "boost": 0,
            "date": 1645678800,
            "description": "How does [[Taproot]] work?",
            "episode_title": "Read 606 - Lightning is a Liquidity Network  Roy Sheinfeld ",
            "guest": [
                "Roy Sheinfeld"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "keyword": false,
            "link": "https://traffic.megaphone.fm/CSN1823272013.mp3?updated=1646942561",
            "node_type": "clip",
            "ref_id": "dd57eece-2825-4810-8b1d-d6671fb841a2",
            "show_title": "Bitcoin Audible",
            "text": "say every single time you write a transaction and you have a whole bunch of different pieces of it, well, all of that has to be essentially manually written out and each part of that transaction needs to be signed. And then the whole big fat thing needs to be published to the chain. Tap root is essentially you can compress all of it into hash, but you're just kind of compressing it all into a single public key in which all of those branches of things are hidden behind it, such that you don't actually need to publish that, you just need to publish the squished together public key. You just need to publish that hash. Basically, it's a way to compress all of the data into a transaction such that A, you don't really know what any of that information is unless you're actually part of the transaction. And all the transactions basically look ubiquitous. They all look exactly the same from one address to like another address or something with a single signature. And all of the details and the instructions and the scripts are hidden in the signature. But what this does is it enables us to have very complex and lots of different instructions and lots of different paths in that without actually adding any cost to the transaction. So here's my thinking. ",
            "timestamp": "00:35:25-00:36:46",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "d415962a-2461-4cc3-a3a4-4fe8e239310e",
        "name": "The Anita Posch Show  A Bitcoin Only Podcast:A New Bitcoin Epoch - Legal Tender in El Salvador:00:08:21-00:08:47",
        "label": "The Anita Posch Show  A Bitcoin Only Podcast",
        "type": "podcast",
        "node_type": "clip",
        "text": "because almost all blocks are signaling green. Now. You can find this on tabloid watch. Another great step in Bitcoin's development strengthening privacy and improving scalability. In November, the changes in the software will go into effect. What a week. And these were only the two main stories. My personal main story is that I finished writing my manuscript for ",
        "details": {
            "boost": 0,
            "date": 1623384000,
            "description": "[[Anita Posch]] [[Taproot]] will lock in successfully",
            "episode_title": "A New Bitcoin Epoch - Legal Tender in El Salvador",
            "guest": [
                "Anita Posch"
            ],
            "image_url": "",
            "keyword": false,
            "link": "https://bitcoinundco.com/en/podlove/file/1951/s/feed/c/mp3/122-en.mp3",
            "node_type": "clip",
            "ref_id": "d415962a-2461-4cc3-a3a4-4fe8e239310e",
            "show_title": "The Anita Posch Show  A Bitcoin Only Podcast",
            "text": "because almost all blocks are signaling green. Now. You can find this on tabloid watch. Another great step in Bitcoin's development strengthening privacy and improving scalability. In November, the changes in the software will go into effect. What a week. And these were only the two main stories. My personal main story is that I finished writing my manuscript for ",
            "timestamp": "00:08:21-00:08:47",
            "topics": [
                "anita posch",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "",
        "colors": []
    },
    {
        "weight": 1,
        "id": "497e05fa-3a59-4dc5-8f27-6c99b95a5e27",
        "name": "The Anita Posch Show  A Bitcoin Only Podcast:Lightning Unleashes Bitcoin:00:08:15-00:10:25",
        "label": "The Anita Posch Show  A Bitcoin Only Podcast",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1631160000,
            "description": "[[Andreas M. Antonopoulos]] The importance of [[Taproot]] in [[Bitcoin]]",
            "episode_title": "Lightning Unleashes Bitcoin",
            "guest": [
                "Andreas M. Antonopoulos"
            ],
            "image_url": "",
            "keyword": false,
            "link": "https://bitcoinundco.com/en/andreas-antonopoulos-lightning/",
            "node_type": "clip",
            "ref_id": "497e05fa-3a59-4dc5-8f27-6c99b95a5e27",
            "show_title": "The Anita Posch Show  A Bitcoin Only Podcast",
            "text": "",
            "timestamp": "00:08:15-00:10:25",
            "topics": [
                "andreas m. antonopoulos",
                "taproot",
                "bitcoin"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "",
        "colors": []
    },
    {
        "weight": 1,
        "id": "3941e5ce-f698-4acd-a32e-b5fc6685b528",
        "name": "The Anita Posch Show  A Bitcoin Only Podcast:The Lightning Network and Greenlight Nodes:00:32:09-00:39:52",
        "label": "The Anita Posch Show  A Bitcoin Only Podcast",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1632974400,
            "description": "[[Anita Posch]] [[Taproot]] and new possibilities in the [[Lightning Network]]",
            "episode_title": "The Lightning Network and Greenlight Nodes",
            "guest": [
                "Christian Decker"
            ],
            "image_url": "",
            "keyword": false,
            "link": "https://bitcoinundco.com/en/christian-decker-lightning/",
            "node_type": "clip",
            "ref_id": "3941e5ce-f698-4acd-a32e-b5fc6685b528",
            "show_title": "The Anita Posch Show  A Bitcoin Only Podcast",
            "text": "",
            "timestamp": "00:32:09-00:39:52",
            "topics": [
                "anita posch",
                "taproot",
                "lightning network"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "",
        "colors": []
    },
    {
        "weight": 1,
        "id": "88114a5e-e654-4575-af17-6498bd00a927",
        "name": "The Anita Posch Show  A Bitcoin Only Podcast:Lightning - The Future of Payments:00:30:08-00:31:40",
        "label": "The Anita Posch Show  A Bitcoin Only Podcast",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1635998400,
            "description": "[[Anita Posch] Nodes operators can profit in [[Taproot]]",
            "episode_title": "Lightning - The Future of Payments",
            "guest": [
                "Johannes Zweng"
            ],
            "image_url": "",
            "keyword": false,
            "link": "https://bitcoinundco.com/en/lightning-future-payments/",
            "node_type": "clip",
            "ref_id": "88114a5e-e654-4575-af17-6498bd00a927",
            "show_title": "The Anita Posch Show  A Bitcoin Only Podcast",
            "text": "",
            "timestamp": "00:30:08-00:31:40",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "",
        "colors": []
    },
    {
        "weight": 1,
        "id": "5a8d67cc-8b2e-46eb-9da5-c51fc9d7abeb",
        "name": "The Anita Posch Show  A Bitcoin Only Podcast:Lightning - The Future of Payments:00:17:07-00:21:27",
        "label": "The Anita Posch Show  A Bitcoin Only Podcast",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1635998400,
            "description": "[[Anita Posch]] What are the advantage of the [[Taproot]] feature",
            "episode_title": "Lightning - The Future of Payments",
            "guest": [
                "Johannes Zweng"
            ],
            "image_url": "",
            "keyword": false,
            "link": "https://bitcoinundco.com/en/lightning-future-payments/",
            "node_type": "clip",
            "ref_id": "5a8d67cc-8b2e-46eb-9da5-c51fc9d7abeb",
            "show_title": "The Anita Posch Show  A Bitcoin Only Podcast",
            "text": "",
            "timestamp": "00:17:07-00:21:27",
            "topics": [
                "anita posch",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "",
        "colors": []
    },
    {
        "weight": 1,
        "id": "f310a8a8-6925-4897-be99-b49f91960e41",
        "name": "The Anita Posch Show  A Bitcoin Only Podcast:Lightning - The Future of Payments:00:11:59-00:17:07",
        "label": "The Anita Posch Show  A Bitcoin Only Podcast",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1635998400,
            "description": "[[Johannes Zweng]]'s  enable new features by [[Taproot]] in the [[Lightning Network]]",
            "episode_title": "Lightning - The Future of Payments",
            "guest": [
                "Johannes Zweng"
            ],
            "image_url": "",
            "keyword": false,
            "link": "https://bitcoinundco.com/en/lightning-future-payments/",
            "node_type": "clip",
            "ref_id": "f310a8a8-6925-4897-be99-b49f91960e41",
            "show_title": "The Anita Posch Show  A Bitcoin Only Podcast",
            "text": "",
            "timestamp": "00:11:59-00:17:07",
            "topics": [
                "johannes zweng",
                "taproot",
                "lightning network"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "",
        "colors": []
    },
    {
        "weight": 1,
        "id": "d79e8026-6d6b-4b76-b004-4ff835fe9e0e",
        "name": "The Anita Posch Show  A Bitcoin Only Podcast:Unleashing Bitcoin s Full Potential:00:23:24-00:26:35",
        "label": "The Anita Posch Show  A Bitcoin Only Podcast",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1654488000,
            "description": "Why [[Carel van Wyk]] is not interested in stablecoins [[Taproot]], [[Rootstock]]",
            "episode_title": "Unleashing Bitcoin s Full Potential",
            "guest": [
                "Carel van Wyk"
            ],
            "image_url": "",
            "keyword": false,
            "link": "https://bitcoinundco.com/en/unleashing-bitcoin-carel-van-wyk/",
            "node_type": "clip",
            "ref_id": "d79e8026-6d6b-4b76-b004-4ff835fe9e0e",
            "show_title": "The Anita Posch Show  A Bitcoin Only Podcast",
            "text": "",
            "timestamp": "00:23:24-00:26:35",
            "topics": [
                "carel van wyk",
                "taproot",
                "rootstock"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "",
        "colors": []
    },
    {
        "weight": 1,
        "id": "e1a13903-4269-48ba-b885-d7a8f343b9cc",
        "name": "Down The Rabbit Hole with Kaz:The Biology of Bitcoin:00:19:28-00:31:57",
        "label": "Down The Rabbit Hole with Kaz",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1603944000,
            "description": "[[Schnorr Signatures]], [[Taproot]], and upgrades to the [[Bitcoin]] code base",
            "episode_title": "The Biology of Bitcoin",
            "guest": [
                "Gigi"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/d477227d-0df7-48fe-8832-349e78c5f1c3.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/us/podcast/e5-the-biology-of-bitcoin-with-gigi/id1521871909?i=1000522480224",
            "node_type": "clip",
            "ref_id": "e1a13903-4269-48ba-b885-d7a8f343b9cc",
            "show_title": "Down The Rabbit Hole with Kaz",
            "text": "",
            "timestamp": "00:19:28-00:31:57",
            "topics": [
                "schnorr signatures",
                "taproot",
                "bitcoin"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/d477227d-0df7-48fe-8832-349e78c5f1c3_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "e33ee8de-02f6-445a-9850-4068ffb04bb7",
        "name": "Down The Rabbit Hole with Kaz:Bitcoin Tech:00:24:30-00:40:54",
        "label": "Down The Rabbit Hole with Kaz",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1603944000,
            "description": "[[Kaz]] What is [[Taproot]]",
            "episode_title": "Bitcoin Tech",
            "guest": [
                "Ben Carman & Nadav Kohen"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/d477227d-0df7-48fe-8832-349e78c5f1c3.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/us/podcast/e7-bitcoin-tech-with-ben-carman-nadav-kohen/id1521871909?i=1000522480225",
            "node_type": "clip",
            "ref_id": "e33ee8de-02f6-445a-9850-4068ffb04bb7",
            "show_title": "Down The Rabbit Hole with Kaz",
            "text": "",
            "timestamp": "00:24:30-00:40:54",
            "topics": [
                "kaz",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/d477227d-0df7-48fe-8832-349e78c5f1c3_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "40f3b12f-0b5c-4233-ab38-d8eb88b4d191",
        "name": "Lightning Labs:Taro  A New Protocol for Multi-Asset Bitcoin and Lightning:00:00:00-00:01:02",
        "label": "Lightning Labs",
        "type": "youtube",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1652241600,
            "description": "[[Taro]]: [[Taproot]] Asset Representation Overlay",
            "episode_title": "Taro  A New Protocol for Multi-Asset Bitcoin and Lightning",
            "guest": [],
            "image_url": "",
            "keyword": false,
            "link": "https://www.youtube.com/watch?v=-yiTtO_p3Cw",
            "node_type": "clip",
            "ref_id": "40f3b12f-0b5c-4233-ab38-d8eb88b4d191",
            "show_title": "Lightning Labs",
            "text": "",
            "timestamp": "00:00:00-00:01:02",
            "topics": [
                "taro",
                "taproot"
            ],
            "type": "youtube",
            "weight": 1
        },
        "image_url": "",
        "colors": []
    },
    {
        "weight": 1,
        "id": "8935141c-2362-4baa-bdaf-16f57c6d6328",
        "name": "Unchained:Unconfirmed  How Taproot Could Improve Bitcoin -- If It Gets Adopted:00:03:56-00:04:37",
        "label": "Unchained",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1622779200,
            "description": "What is [[Taproot]]?",
            "episode_title": "Unconfirmed  How Taproot Could Improve Bitcoin -- If It Gets Adopted",
            "guest": [
                "Jeremy Rubin"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/7de0d293-8ae3-4362-8500-8f7300f3fe41.jpg",
            "keyword": false,
            "link": "https://podcasts.google.com/feed/aHR0cDovL3VuY2hhaW5lZC5saWJzeW4uY29tL3VuY2hhaW5lZA/episode/ODVkNzdlY2YtZDkwNC00MTUzLTk0ZjctNmMxNWI3N2UwOThj?sa=X&ved=0CAgQuIEEahgKEwjY0eC3oJX3AhUAAAAAHQAAAAAQjAE",
            "node_type": "clip",
            "ref_id": "8935141c-2362-4baa-bdaf-16f57c6d6328",
            "show_title": "Unchained",
            "text": "",
            "timestamp": "00:03:56-00:04:37",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/7de0d293-8ae3-4362-8500-8f7300f3fe41_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "20e21ed1-78fd-4a85-a079-7ca0ade08aa0",
        "name": "Unchained:Unconfirmed  How Taproot Could Improve Bitcoin -- If It Gets Adopted:00:04:37-00:06:15",
        "label": "Unchained",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1622779200,
            "description": "How [[Taproot]] will make [[Bitcoin]] Transactions More Private",
            "episode_title": "Unconfirmed  How Taproot Could Improve Bitcoin -- If It Gets Adopted",
            "guest": [
                "Jeremy Rubin"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/7de0d293-8ae3-4362-8500-8f7300f3fe41.jpg",
            "keyword": false,
            "link": "https://podcasts.google.com/feed/aHR0cDovL3VuY2hhaW5lZC5saWJzeW4uY29tL3VuY2hhaW5lZA/episode/ODVkNzdlY2YtZDkwNC00MTUzLTk0ZjctNmMxNWI3N2UwOThj?sa=X&ved=0CAgQuIEEahgKEwjY0eC3oJX3AhUAAAAAHQAAAAAQjAE",
            "node_type": "clip",
            "ref_id": "20e21ed1-78fd-4a85-a079-7ca0ade08aa0",
            "show_title": "Unchained",
            "text": "",
            "timestamp": "00:04:37-00:06:15",
            "topics": [
                "taproot",
                "bitcoin"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/7de0d293-8ae3-4362-8500-8f7300f3fe41_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "5c17b52c-438a-4908-9291-06e2dd14896e",
        "name": "Unchained:Unconfirmed  How Taproot Could Improve Bitcoin -- If It Gets Adopted:00:06:15-00:07:15",
        "label": "Unchained",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1622779200,
            "description": "Effects Of [[Taproot]] on On-chain Analytics Companies",
            "episode_title": "Unconfirmed  How Taproot Could Improve Bitcoin -- If It Gets Adopted",
            "guest": [
                "Jeremy Rubin"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/7de0d293-8ae3-4362-8500-8f7300f3fe41.jpg",
            "keyword": false,
            "link": "https://podcasts.google.com/feed/aHR0cDovL3VuY2hhaW5lZC5saWJzeW4uY29tL3VuY2hhaW5lZA/episode/ODVkNzdlY2YtZDkwNC00MTUzLTk0ZjctNmMxNWI3N2UwOThj?sa=X&ved=0CAgQuIEEahgKEwjY0eC3oJX3AhUAAAAAHQAAAAAQjAE",
            "node_type": "clip",
            "ref_id": "5c17b52c-438a-4908-9291-06e2dd14896e",
            "show_title": "Unchained",
            "text": "",
            "timestamp": "00:06:15-00:07:15",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/7de0d293-8ae3-4362-8500-8f7300f3fe41_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "2f1cabb9-eb06-4893-b222-42abbdc5db5a",
        "name": "Unchained:Unconfirmed  How Taproot Could Improve Bitcoin -- If It Gets Adopted:00:07:15-00:08:44",
        "label": "Unchained",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1622779200,
            "description": "Parts of [[Bitcoin]] Transactions Which will Remain Public if [[Taproot]] Goes Live",
            "episode_title": "Unconfirmed  How Taproot Could Improve Bitcoin -- If It Gets Adopted",
            "guest": [
                "Jeremy Rubin"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/7de0d293-8ae3-4362-8500-8f7300f3fe41.jpg",
            "keyword": false,
            "link": "https://podcasts.google.com/feed/aHR0cDovL3VuY2hhaW5lZC5saWJzeW4uY29tL3VuY2hhaW5lZA/episode/ODVkNzdlY2YtZDkwNC00MTUzLTk0ZjctNmMxNWI3N2UwOThj?sa=X&ved=0CAgQuIEEahgKEwjY0eC3oJX3AhUAAAAAHQAAAAAQjAE",
            "node_type": "clip",
            "ref_id": "2f1cabb9-eb06-4893-b222-42abbdc5db5a",
            "show_title": "Unchained",
            "text": "",
            "timestamp": "00:07:15-00:08:44",
            "topics": [
                "bitcoin",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/7de0d293-8ae3-4362-8500-8f7300f3fe41_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "4a92e73d-2e6b-4e75-86e6-a4bb0027fa1a",
        "name": "Unchained:Unconfirmed  How Taproot Could Improve Bitcoin -- If It Gets Adopted:00:08:44-00:14:20",
        "label": "Unchained",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1622779200,
            "description": "New Wallet Feautures [[Taproot]] will Unlock for [[Bitcoin]]",
            "episode_title": "Unconfirmed  How Taproot Could Improve Bitcoin -- If It Gets Adopted",
            "guest": [
                "Jeremy Rubin"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/7de0d293-8ae3-4362-8500-8f7300f3fe41.jpg",
            "keyword": false,
            "link": "https://podcasts.google.com/feed/aHR0cDovL3VuY2hhaW5lZC5saWJzeW4uY29tL3VuY2hhaW5lZA/episode/ODVkNzdlY2YtZDkwNC00MTUzLTk0ZjctNmMxNWI3N2UwOThj?sa=X&ved=0CAgQuIEEahgKEwjY0eC3oJX3AhUAAAAAHQAAAAAQjAE",
            "node_type": "clip",
            "ref_id": "4a92e73d-2e6b-4e75-86e6-a4bb0027fa1a",
            "show_title": "Unchained",
            "text": "",
            "timestamp": "00:08:44-00:14:20",
            "topics": [
                "taproot",
                "bitcoin"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/7de0d293-8ae3-4362-8500-8f7300f3fe41_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "ca8a54fb-ce46-4c25-b8a9-1d2fa9f8e313",
        "name": "Unchained:Unconfirmed  How Taproot Could Improve Bitcoin -- If It Gets Adopted:00:22:40-00:26:59",
        "label": "Unchained",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1622779200,
            "description": "How [[Taproot]] Signaling Works",
            "episode_title": "Unconfirmed  How Taproot Could Improve Bitcoin -- If It Gets Adopted",
            "guest": [
                "Jeremy Rubin"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/7de0d293-8ae3-4362-8500-8f7300f3fe41.jpg",
            "keyword": false,
            "link": "https://podcasts.google.com/feed/aHR0cDovL3VuY2hhaW5lZC5saWJzeW4uY29tL3VuY2hhaW5lZA/episode/ODVkNzdlY2YtZDkwNC00MTUzLTk0ZjctNmMxNWI3N2UwOThj?sa=X&ved=0CAgQuIEEahgKEwjY0eC3oJX3AhUAAAAAHQAAAAAQjAE",
            "node_type": "clip",
            "ref_id": "ca8a54fb-ce46-4c25-b8a9-1d2fa9f8e313",
            "show_title": "Unchained",
            "text": "",
            "timestamp": "00:22:40-00:26:59",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/7de0d293-8ae3-4362-8500-8f7300f3fe41_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "d734c4f4-f005-44c9-b8d3-260fe3f49cce",
        "name": "Unchained:Unconfirmed  How Taproot Could Improve Bitcoin -- If It Gets Adopted:00:26:59-00:32:00",
        "label": "Unchained",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1622779200,
            "description": "When will [[Taproot]] Lock-in",
            "episode_title": "Unconfirmed  How Taproot Could Improve Bitcoin -- If It Gets Adopted",
            "guest": [
                "Jeremy Rubin"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/7de0d293-8ae3-4362-8500-8f7300f3fe41.jpg",
            "keyword": false,
            "link": "https://podcasts.google.com/feed/aHR0cDovL3VuY2hhaW5lZC5saWJzeW4uY29tL3VuY2hhaW5lZA/episode/ODVkNzdlY2YtZDkwNC00MTUzLTk0ZjctNmMxNWI3N2UwOThj?sa=X&ved=0CAgQuIEEahgKEwjY0eC3oJX3AhUAAAAAHQAAAAAQjAE",
            "node_type": "clip",
            "ref_id": "d734c4f4-f005-44c9-b8d3-260fe3f49cce",
            "show_title": "Unchained",
            "text": "",
            "timestamp": "00:26:59-00:32:00",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/7de0d293-8ae3-4362-8500-8f7300f3fe41_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "31446053-a3e1-4ee7-9a03-6c2ad6b8dbd1",
        "name": "CryptoIntelligence:Bitcoin Taproot Upgrade:00:35:13-00:35:53",
        "label": "CryptoIntelligence",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1643864400,
            "description": "[[Taproot]]'s Impact on People and Investors",
            "episode_title": "Bitcoin Taproot Upgrade",
            "guest": [],
            "image_url": "",
            "keyword": false,
            "link": "https://podcasts.google.com/feed/aHR0cHM6Ly9pbmZvMzI5NTEucG9kb21hdGljLmNvbS9yc3MyLnhtbA/episode/aHR0cHM6Ly9pbmZvMzI5NTEucG9kb21hdGljLmNvbS9lbnRyeS8yMDIyLTAyLTAyVDExXzQwXzAzLTA4XzAw?sa=X&ved=0CAgQuIEEahcKEwjY0eC3oJX3AhUAAAAAHQAAAAAQfA",
            "node_type": "clip",
            "ref_id": "31446053-a3e1-4ee7-9a03-6c2ad6b8dbd1",
            "show_title": "CryptoIntelligence",
            "text": "",
            "timestamp": "00:35:13-00:35:53",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "",
        "colors": []
    },
    {
        "weight": 1,
        "id": "5247d37e-8b3c-4ea7-8a09-36c8a4800316",
        "name": "CryptoIntelligence:Bitcoin Taproot Upgrade:00:37:49-00:40:16",
        "label": "CryptoIntelligence",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1643864400,
            "description": "How [[Taproot]] Upgrade Affects [[DeFi]]",
            "episode_title": "Bitcoin Taproot Upgrade",
            "guest": [],
            "image_url": "",
            "keyword": false,
            "link": "https://podcasts.google.com/feed/aHR0cHM6Ly9pbmZvMzI5NTEucG9kb21hdGljLmNvbS9yc3MyLnhtbA/episode/aHR0cHM6Ly9pbmZvMzI5NTEucG9kb21hdGljLmNvbS9lbnRyeS8yMDIyLTAyLTAyVDExXzQwXzAzLTA4XzAw?sa=X&ved=0CAgQuIEEahcKEwjY0eC3oJX3AhUAAAAAHQAAAAAQfA",
            "node_type": "clip",
            "ref_id": "5247d37e-8b3c-4ea7-8a09-36c8a4800316",
            "show_title": "CryptoIntelligence",
            "text": "",
            "timestamp": "00:37:49-00:40:16",
            "topics": [
                "taproot",
                "defi"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "",
        "colors": []
    },
    {
        "weight": 1,
        "id": "b637b2a9-1eb6-4f13-9d4d-f2e360dfa186",
        "name": "Bitcoin Audible:Announcing Taro  Multi-Asset Bitcoin   Lightning  Ryan Gentry :00:07:49-00:08:31",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1650600000,
            "description": "How [[Taro]] Works with [[Taproot]]",
            "episode_title": "Announcing Taro  Multi-Asset Bitcoin   Lightning  Ryan Gentry ",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/us/podcast/read-617-announcing-taro-multi-asset-bitcoin-lightning/id1359544516?i=1000557651262",
            "node_type": "clip",
            "ref_id": "b637b2a9-1eb6-4f13-9d4d-f2e360dfa186",
            "show_title": "Bitcoin Audible",
            "text": "",
            "timestamp": "00:07:49-00:08:31",
            "topics": [
                "taro",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "d804b3e3-6dd7-4df6-a1ef-828359f35f28",
        "name": "Bitcoin Audible:Announcing Taro  Multi-Asset Bitcoin   Lightning  Ryan Gentry :00:12:48-00:13:45",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1650600000,
            "description": "Major Benefits of [[Taproot]]",
            "episode_title": "Announcing Taro  Multi-Asset Bitcoin   Lightning  Ryan Gentry ",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "keyword": false,
            "link": "https://podcasts.apple.com/us/podcast/read-617-announcing-taro-multi-asset-bitcoin-lightning/id1359544516?i=1000557651262",
            "node_type": "clip",
            "ref_id": "d804b3e3-6dd7-4df6-a1ef-828359f35f28",
            "show_title": "Bitcoin Audible",
            "text": "",
            "timestamp": "00:12:48-00:13:45",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "33ec03bb-e9fb-4c9e-bd6c-880c604d4fca",
        "name": "On the Brink:Mustafa Yiham  Bixin  on the industrial Bitcoin miner perspective:00:37:14-00:40:06",
        "label": "On the Brink",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1607317200,
            "description": "Whether [[Bixin]] plans to support [[Taproot]]",
            "episode_title": "Mustafa Yiham  Bixin  on the industrial Bitcoin miner perspective",
            "guest": [
                "Mustafa Yiham"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/19ee7484-9568-4a5e-884e-8accb3794058.jpg",
            "keyword": false,
            "link": "https://onthebrink-podcast.com/bixin/",
            "node_type": "clip",
            "ref_id": "33ec03bb-e9fb-4c9e-bd6c-880c604d4fca",
            "show_title": "On the Brink",
            "text": "",
            "timestamp": "00:37:14-00:40:06",
            "topics": [
                "bixin",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/19ee7484-9568-4a5e-884e-8accb3794058_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "aaecf108-5b16-48a8-a482-3bc0e207a7de",
        "name": "What Bitcoin Did with Peter McCormack:El Salvador s Bitcoin Report Card:01:24:24-01:31:44",
        "label": "What Bitcoin Did with Peter McCormack",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1637038800,
            "description": "[[Taproot]]",
            "episode_title": "El Salvador s Bitcoin Report Card",
            "guest": [
                "Aaron Van Wirdum"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/4e607036-8fde-48ef-ab76-9c2ac4bab031.jpg",
            "keyword": false,
            "link": "https://www.whatbitcoindid.com/podcast/el-salvadors-bitcoin-report-card",
            "node_type": "clip",
            "ref_id": "aaecf108-5b16-48a8-a482-3bc0e207a7de",
            "show_title": "What Bitcoin Did with Peter McCormack",
            "text": "",
            "timestamp": "01:24:24-01:31:44",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/4e607036-8fde-48ef-ab76-9c2ac4bab031_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "18f70a0d-b6ad-4424-a6f7-f825a29d3718",
        "name": "What Bitcoin Did with Peter McCormack:Bitcoin Tech  2 - Nodes  Part 1 :00:40:01-00:45:21",
        "label": "What Bitcoin Did with Peter McCormack",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1614488400,
            "description": "[[Taproot]] and [[miner signalling]]",
            "episode_title": "Bitcoin Tech  2 - Nodes  Part 1 ",
            "guest": [
                "Shinobi"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/4e607036-8fde-48ef-ab76-9c2ac4bab031.jpg",
            "keyword": false,
            "link": "https://www.whatbitcoindid.com/podcast/bitcoin-tech-2-nodes-part-1",
            "node_type": "clip",
            "ref_id": "18f70a0d-b6ad-4424-a6f7-f825a29d3718",
            "show_title": "What Bitcoin Did with Peter McCormack",
            "text": "",
            "timestamp": "00:40:01-00:45:21",
            "topics": [
                "taproot",
                "miner signalling"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/4e607036-8fde-48ef-ab76-9c2ac4bab031_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "afea2ee4-bf9a-48ea-bc44-6e3d254ee11c",
        "name": "What Bitcoin Did with Peter McCormack:2020 Bitcoin Review with Matt Odell:01:12:16-01:16:29",
        "label": "What Bitcoin Did with Peter McCormack",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1609477200,
            "description": "[[Taproot]]",
            "episode_title": "2020 Bitcoin Review with Matt Odell",
            "guest": [
                "Matt Odell"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/a35bc6bb-8057-4ce6-b64d-c88e951a9262.jpg",
            "keyword": false,
            "link": "https://www.whatbitcoindid.com/podcast/2020-bitcoin-review-with-matt-odell",
            "node_type": "clip",
            "ref_id": "afea2ee4-bf9a-48ea-bc44-6e3d254ee11c",
            "show_title": "What Bitcoin Did with Peter McCormack",
            "text": "",
            "timestamp": "01:12:16-01:16:29",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/a35bc6bb-8057-4ce6-b64d-c88e951a9262_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "7e93d69f-fc51-4831-9c50-0e7fec1c1938",
        "name": "What Bitcoin Did with Peter McCormack:2020 Bitcoin Tech Review with Shinobi:01:13:54-01:17:48",
        "label": "What Bitcoin Did with Peter McCormack",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1608699600,
            "description": "[[Taproot]] and [[SegWit]]",
            "episode_title": "2020 Bitcoin Tech Review with Shinobi",
            "guest": [
                "Shinobi"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/20d00aaf-fa00-4709-8d2f-f979384ff3ca.jpg",
            "keyword": false,
            "link": "https://www.whatbitcoindid.com/podcast/2020-bitcoin-tech-review",
            "node_type": "clip",
            "ref_id": "7e93d69f-fc51-4831-9c50-0e7fec1c1938",
            "show_title": "What Bitcoin Did with Peter McCormack",
            "text": "",
            "timestamp": "01:13:54-01:17:48",
            "topics": [
                "taproot",
                "segwit"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/20d00aaf-fa00-4709-8d2f-f979384ff3ca_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "49b76473-cea5-499b-a09b-d647ba1ad2f5",
        "name": "What Bitcoin Did with Peter McCormack:Funding Bitcoin Development with John Newbery:00:26:27-00:30:44",
        "label": "What Bitcoin Did with Peter McCormack",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1607058000,
            "description": "[[Schnorr]] and [[Taproot]]",
            "episode_title": "Funding Bitcoin Development with John Newbery",
            "guest": [
                "John Newbery"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/acf7cb01-d086-42e0-be45-b948bd051898.jpg",
            "keyword": false,
            "link": "https://www.whatbitcoindid.com/podcast/funding-bitcoin-development",
            "node_type": "clip",
            "ref_id": "49b76473-cea5-499b-a09b-d647ba1ad2f5",
            "show_title": "What Bitcoin Did with Peter McCormack",
            "text": "",
            "timestamp": "00:26:27-00:30:44",
            "topics": [
                "schnorr",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/acf7cb01-d086-42e0-be45-b948bd051898_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "0992ba7f-128b-435b-9cb8-8198dbf8bfb9",
        "name": "What Bitcoin Did with Peter McCormack:Becoming a Bitcoin Core Developer with Amiti Uttarwar:00:33:20-00:36:30",
        "label": "What Bitcoin Did with Peter McCormack",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1603166400,
            "description": "[[Schnorr]] and [[Taproot]]",
            "episode_title": "Becoming a Bitcoin Core Developer with Amiti Uttarwar",
            "guest": [
                "Amiti Uttarwar"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/661f9980-75ac-4441-b52f-04b9a67e7975.jpg",
            "keyword": false,
            "link": "https://www.whatbitcoindid.com/podcast/becoming-a-bitcoin-core-developer-with-amiti-uttarwar",
            "node_type": "clip",
            "ref_id": "0992ba7f-128b-435b-9cb8-8198dbf8bfb9",
            "show_title": "What Bitcoin Did with Peter McCormack",
            "text": "",
            "timestamp": "00:33:20-00:36:30",
            "topics": [
                "schnorr",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/661f9980-75ac-4441-b52f-04b9a67e7975_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "a8e9c5a4-402b-4f87-8f5f-4c023daa7f9d",
        "name": "What Bitcoin Did with Peter McCormack:All Things Bitcoin with Andrew Poelstra  Giacomo Zucco  Jack Mallers  Matt Odell   Nic Carter:00:33:34-00:38:36",
        "label": "What Bitcoin Did with Peter McCormack",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1597377600,
            "description": "Update on [[Taproot]]",
            "episode_title": "All Things Bitcoin with Andrew Poelstra  Giacomo Zucco  Jack Mallers  Matt Odell   Nic Carter",
            "guest": [
                "Andrew Poelstra",
                "Giacomo Zucco",
                "Jack Mallers",
                "Matt Odell & Nic Carter"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/3713728d-fdf3-4b1e-8c23-77b284482fea.jpg",
            "keyword": false,
            "link": "https://www.whatbitcoindid.com/podcast/all-things-bitcoin",
            "node_type": "clip",
            "ref_id": "a8e9c5a4-402b-4f87-8f5f-4c023daa7f9d",
            "show_title": "What Bitcoin Did with Peter McCormack",
            "text": "",
            "timestamp": "00:33:34-00:38:36",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/3713728d-fdf3-4b1e-8c23-77b284482fea_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "7d6accb1-c46e-4b4b-870e-6d1461b27c74",
        "name": "What Bitcoin Did with Peter McCormack:All Things Bitcoin with Andrew Poelstra  Giacomo Zucco  Jack Mallers  Matt Odell   Nic Carter:00:38:36-00:40:03",
        "label": "What Bitcoin Did with Peter McCormack",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1597377600,
            "description": "Impact of [[Taproot]] on users",
            "episode_title": "All Things Bitcoin with Andrew Poelstra  Giacomo Zucco  Jack Mallers  Matt Odell   Nic Carter",
            "guest": [
                "Andrew Poelstra",
                "Giacomo Zucco",
                "Jack Mallers",
                "Matt Odell & Nic Carter"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/3713728d-fdf3-4b1e-8c23-77b284482fea.jpg",
            "keyword": false,
            "link": "https://www.whatbitcoindid.com/podcast/all-things-bitcoin",
            "node_type": "clip",
            "ref_id": "7d6accb1-c46e-4b4b-870e-6d1461b27c74",
            "show_title": "What Bitcoin Did with Peter McCormack",
            "text": "",
            "timestamp": "00:38:36-00:40:03",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/3713728d-fdf3-4b1e-8c23-77b284482fea_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "9bd03669-3392-4943-8963-ebea35f3b19b",
        "name": "What Bitcoin Did with Peter McCormack:All Things Bitcoin with Andrew Poelstra  Giacomo Zucco  Jack Mallers  Matt Odell   Nic Carter:00:40:03-00:44:10",
        "label": "What Bitcoin Did with Peter McCormack",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1597377600,
            "description": "Updating old [[nodes]] for [[Taproot]]",
            "episode_title": "All Things Bitcoin with Andrew Poelstra  Giacomo Zucco  Jack Mallers  Matt Odell   Nic Carter",
            "guest": [
                "Andrew Poelstra",
                "Giacomo Zucco",
                "Jack Mallers",
                "Matt Odell & Nic Carter"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/3713728d-fdf3-4b1e-8c23-77b284482fea.jpg",
            "keyword": false,
            "link": "https://www.whatbitcoindid.com/podcast/all-things-bitcoin",
            "node_type": "clip",
            "ref_id": "9bd03669-3392-4943-8963-ebea35f3b19b",
            "show_title": "What Bitcoin Did with Peter McCormack",
            "text": "",
            "timestamp": "00:40:03-00:44:10",
            "topics": [
                "nodes",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/3713728d-fdf3-4b1e-8c23-77b284482fea_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "4545784c-7310-4a33-a308-685419b5dab5",
        "name": "What Bitcoin Did with Peter McCormack:Pieter Wuille on Building Bitcoin:00:50:00-00:55:47",
        "label": "What Bitcoin Did with Peter McCormack",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1564718400,
            "description": "Discussing the [[Taproot]], [[Schnorr]] and [[Mast BIP]], as well as potential [[future Bitcoin projects]]",
            "episode_title": "Pieter Wuille on Building Bitcoin",
            "guest": [
                "Pieter Wuille"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/4e607036-8fde-48ef-ab76-9c2ac4bab031.jpg",
            "keyword": false,
            "link": "https://www.whatbitcoindid.com/podcast/pieter-wuille-on-building-bitcoin",
            "node_type": "clip",
            "ref_id": "4545784c-7310-4a33-a308-685419b5dab5",
            "show_title": "What Bitcoin Did with Peter McCormack",
            "text": "",
            "timestamp": "00:50:00-00:55:47",
            "topics": [
                "taproot",
                "schnorr",
                "mast bip",
                "future bitcoin projects"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/4e607036-8fde-48ef-ab76-9c2ac4bab031_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "0deee3e4-0b47-41c7-96de-e502fac0f629",
        "name": "What Bitcoin Did with Peter McCormack:Andrew Poelstra on Schnorr  Taproot   Graft Root Coming to Bitcoin:00:47:43-00:53:57",
        "label": "What Bitcoin Did with Peter McCormack",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1558670400,
            "description": "Exploring [[Graft Root]] and how it relates to [[Taproot]]",
            "episode_title": "Andrew Poelstra on Schnorr  Taproot   Graft Root Coming to Bitcoin",
            "guest": [
                "Andrew Poelstra"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/4e607036-8fde-48ef-ab76-9c2ac4bab031.jpg",
            "keyword": false,
            "link": "https://www.whatbitcoindid.com/podcast/andrew-poelstra-on-schnorr-taproot-graft-root-coming-to-bitcoin",
            "node_type": "clip",
            "ref_id": "0deee3e4-0b47-41c7-96de-e502fac0f629",
            "show_title": "What Bitcoin Did with Peter McCormack",
            "text": "",
            "timestamp": "00:47:43-00:53:57",
            "topics": [
                "graft root",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/4e607036-8fde-48ef-ab76-9c2ac4bab031_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "c7202fd2-be86-4325-97ec-fb961829e55a",
        "name": "Stephan Livera Podcast:Ledger s New Bitcoin App:00:34:51-00:00:00",
        "label": "Stephan Livera Podcast",
        "type": "youtube",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1645074000,
            "description": "[[Taproot]] support",
            "episode_title": "Ledger s New Bitcoin App",
            "guest": [
                "Salvatore Ingala"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "keyword": false,
            "link": "https://www.youtube.com/watch?v=pi64CNFu8h4",
            "node_type": "clip",
            "ref_id": "c7202fd2-be86-4325-97ec-fb961829e55a",
            "show_title": "Stephan Livera Podcast",
            "text": "",
            "timestamp": "00:34:51-00:00:00",
            "topics": [
                "taproot"
            ],
            "type": "youtube",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "6179f78c-1ade-49d0-8219-738704fb85a8",
        "name": "Stephan Livera Podcast:SlushPool Signalling For Taproot:00:03:23-00:07:31",
        "label": "Stephan Livera Podcast",
        "type": "youtube",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1620878400,
            "description": "Introduction - background for [[Pavel Moravec]] of [[Braiins]] [[SlushPool]], [[firmware development]], [[Bitcoin]], [[mining]], [[mining pool]], [[full stack software]], [[Taproot]], [[signalling]], [[SHA256]] [[hash power]]",
            "episode_title": "SlushPool Signalling For Taproot",
            "guest": [
                "Pavel Moravec"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "keyword": false,
            "link": "https://www.youtube.com/watch?v=fxRKMUXoCeE",
            "node_type": "clip",
            "ref_id": "6179f78c-1ade-49d0-8219-738704fb85a8",
            "show_title": "Stephan Livera Podcast",
            "text": "",
            "timestamp": "00:03:23-00:07:31",
            "topics": [
                "pavel moravec",
                "braiins",
                "slushpool",
                "firmware development",
                "bitcoin",
                "mining",
                "mining pool",
                "full stack software",
                "taproot",
                "signalling",
                "sha256",
                "hash power"
            ],
            "type": "youtube",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "08e1e993-d816-40ee-848d-0ad5587fb823",
        "name": "Stephan Livera Podcast:SlushPool Signalling For Taproot:00:07:31-00:10:37",
        "label": "Stephan Livera Podcast",
        "type": "youtube",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1620878400,
            "description": "[[Taproot]], [[soft fork]] upgrade, [[smart contracts]], [[scripting]], [[privacy]] gains, [[cryptographic primitives]], [[algorithm]], [[multi signature]], [[Lightning]]",
            "episode_title": "SlushPool Signalling For Taproot",
            "guest": [
                "Pavel Moravec"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "keyword": false,
            "link": "https://www.youtube.com/watch?v=fxRKMUXoCeE",
            "node_type": "clip",
            "ref_id": "08e1e993-d816-40ee-848d-0ad5587fb823",
            "show_title": "Stephan Livera Podcast",
            "text": "",
            "timestamp": "00:07:31-00:10:37",
            "topics": [
                "taproot",
                "soft fork",
                "smart contracts",
                "scripting",
                "privacy",
                "cryptographic primitives",
                "algorithm",
                "multi signature",
                "lightning"
            ],
            "type": "youtube",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "39b8fefb-7783-4c85-8139-f0d8bd968c46",
        "name": "Stephan Livera Podcast:SlushPool Signalling For Taproot:00:10:37-00:15:00",
        "label": "Stephan Livera Podcast",
        "type": "youtube",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1620878400,
            "description": "Why signal for [[Taproot]] - [[SlushPool]], new better version of [[bitcoin]], [[signalling]], [[soft fork]], [[miner signalling]], upgrade process, rules, rule set, [[bitcoin core]], version bit",
            "episode_title": "SlushPool Signalling For Taproot",
            "guest": [
                "Pavel Moravec"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "keyword": false,
            "link": "https://www.youtube.com/watch?v=fxRKMUXoCeE",
            "node_type": "clip",
            "ref_id": "39b8fefb-7783-4c85-8139-f0d8bd968c46",
            "show_title": "Stephan Livera Podcast",
            "text": "",
            "timestamp": "00:10:37-00:15:00",
            "topics": [
                "taproot",
                "slushpool",
                "bitcoin",
                "signalling",
                "soft fork",
                "miner signalling",
                "bitcoin core"
            ],
            "type": "youtube",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "40292a36-54d9-4f4c-b732-958b844478fe",
        "name": "Stephan Livera Podcast:SlushPool Signalling For Taproot:00:15:00-00:20:16",
        "label": "Stephan Livera Podcast",
        "type": "youtube",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1620878400,
            "description": "Period of [[signalling]] - [[difficulty]], [[blocks]], [[retarget period]], [[Taproot]], enforcing of rules, [[taproot.watch]], [[miner]], [[pools]], [[hash rate]], [[activation]], political games, [[90% threshold]], [[speedy trial]]",
            "episode_title": "SlushPool Signalling For Taproot",
            "guest": [
                "Pavel Moravec"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "keyword": false,
            "link": "https://www.youtube.com/watch?v=fxRKMUXoCeE",
            "node_type": "clip",
            "ref_id": "40292a36-54d9-4f4c-b732-958b844478fe",
            "show_title": "Stephan Livera Podcast",
            "text": "",
            "timestamp": "00:15:00-00:20:16",
            "topics": [
                "signalling",
                "difficulty",
                "blocks",
                "retarget period",
                "taproot",
                "taproot.watch",
                "miner",
                "pools",
                "hash rate",
                "activation",
                "90% threshold",
                "speedy trial"
            ],
            "type": "youtube",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "b81cce1c-6ed9-4c50-beeb-3b476e836516",
        "name": "Stephan Livera Podcast:SlushPool Signalling For Taproot:00:20:16-00:24:39",
        "label": "Stephan Livera Podcast",
        "type": "youtube",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1620878400,
            "description": "Difficulties for [[pools]] [[signalling]] for [[Taproot]] - [[speedy trial]], [[bitcoin core]], [[mining software]], [[miners]], enforce the rules, [[bitcoin network]], [[mining pool]], data centers, servers, [[nodes]], [[hash rate]], software, [[SlushPool]]",
            "episode_title": "SlushPool Signalling For Taproot",
            "guest": [
                "Pavel Moravec"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "keyword": false,
            "link": "https://www.youtube.com/watch?v=fxRKMUXoCeE",
            "node_type": "clip",
            "ref_id": "b81cce1c-6ed9-4c50-beeb-3b476e836516",
            "show_title": "Stephan Livera Podcast",
            "text": "",
            "timestamp": "00:20:16-00:24:39",
            "topics": [
                "pools",
                "signalling",
                "taproot",
                "speedy trial",
                "bitcoin core",
                "mining software",
                "miners",
                "bitcoin network",
                "mining pool",
                "nodes",
                "hash rate",
                "slushpool"
            ],
            "type": "youtube",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "5b042489-fa11-42cb-b5d7-249defe0feb2",
        "name": "Stephan Livera Podcast:SlushPool Signalling For Taproot:00:41:10-00:55:33",
        "label": "Stephan Livera Podcast",
        "type": "youtube",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1620878400,
            "description": "What future upgrades might look like - [[soft forks]], identifiable pools, [[hashrate]], [[taproot]], [[privacy]], [[solo-mining]], [[hash power]], big pools, [[sovereignty]], [[anonymity]], [[blockchain analysis]], [[taproot]] brings more [[privacy]], [[SegWit]], [[Lightning]], [[on-chain]], [[bitcoin]], [[miner revenues]] into the future, [[signalling]]",
            "episode_title": "SlushPool Signalling For Taproot",
            "guest": [
                "Pavel Moravec"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "keyword": false,
            "link": "https://www.youtube.com/watch?v=fxRKMUXoCeE",
            "node_type": "clip",
            "ref_id": "5b042489-fa11-42cb-b5d7-249defe0feb2",
            "show_title": "Stephan Livera Podcast",
            "text": "",
            "timestamp": "00:41:10-00:55:33",
            "topics": [
                "soft forks",
                "hashrate",
                "taproot",
                "privacy",
                "solo-mining",
                "hash power",
                "sovereignty",
                "anonymity",
                "blockchain analysis",
                "taproot",
                "privacy",
                "segwit",
                "lightning",
                "on-chain",
                "bitcoin",
                "miner revenues",
                "signalling"
            ],
            "type": "youtube",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "b1eabcd8-8d00-4950-b264-f4f2741ca3a7",
        "name": "Stephan Livera Podcast:How Bitcoin UASF went down  taproot lot true  speedy trial  small blocks:00:00:00-00:03:40",
        "label": "Stephan Livera Podcast",
        "type": "youtube",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1647576000,
            "description": "Introduction - How [[Bitcoin UASF]] went down, [[taproot]] lot=true, speedy trial, [[small blocks]]",
            "episode_title": "How Bitcoin UASF went down  taproot lot true  speedy trial  small blocks",
            "guest": [
                "Luke Dashjr"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "keyword": false,
            "link": "https://www.youtube.com/watch?v=rspXF6Gp3-g",
            "node_type": "clip",
            "ref_id": "b1eabcd8-8d00-4950-b264-f4f2741ca3a7",
            "show_title": "Stephan Livera Podcast",
            "text": "",
            "timestamp": "00:00:00-00:03:40",
            "topics": [
                "bitcoin uasf",
                "taproot",
                "small blocks"
            ],
            "type": "youtube",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "038127f8-95f1-47fe-819f-f0ec7fd01180",
        "name": "Stephan Livera Podcast:Bitcoin Soft Fork Activation  Taproot  and Playing Chicken:00:04:33-00:23:19",
        "label": "Stephan Livera Podcast",
        "type": "youtube",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1646974800,
            "description": "What are the benefits of [[Taproot]]",
            "episode_title": "Bitcoin Soft Fork Activation  Taproot  and Playing Chicken",
            "guest": [
                "Matt Corallo"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "keyword": false,
            "link": "https://www.youtube.com/watch?v=SY-v2chnS9s",
            "node_type": "clip",
            "ref_id": "038127f8-95f1-47fe-819f-f0ec7fd01180",
            "show_title": "Stephan Livera Podcast",
            "text": "",
            "timestamp": "00:04:33-00:23:19",
            "topics": [
                "taproot"
            ],
            "type": "youtube",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "11f89c52-57eb-464d-875b-ecf15a23d4c4",
        "name": "Stephan Livera Podcast:Bitcoin Soft Fork Activation  Taproot  and Playing Chicken:00:34:50-01:00:18",
        "label": "Stephan Livera Podcast",
        "type": "youtube",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1646974800,
            "description": "[[Taproot]] activation paths",
            "episode_title": "Bitcoin Soft Fork Activation  Taproot  and Playing Chicken",
            "guest": [
                "Matt Corallo"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "keyword": false,
            "link": "https://www.youtube.com/watch?v=SY-v2chnS9s",
            "node_type": "clip",
            "ref_id": "11f89c52-57eb-464d-875b-ecf15a23d4c4",
            "show_title": "Stephan Livera Podcast",
            "text": "",
            "timestamp": "00:34:50-01:00:18",
            "topics": [
                "taproot"
            ],
            "type": "youtube",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "a65f8d26-c22a-4872-992a-4f499a845126",
        "name": "Stephan Livera Podcast:Schnorr Taproot Tapscript BIPs:00:06:00-00:12:37",
        "label": "Stephan Livera Podcast",
        "type": "youtube",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1641013200,
            "description": "What Are [[Schnorr signatures]]? What is [[MuSig]]? - [[Taproot]] [[multisig]] [[Zapo]]",
            "episode_title": "Schnorr Taproot Tapscript BIPs",
            "guest": [
                "AJ Towns"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "keyword": false,
            "link": "https://www.youtube.com/watch?v=8S7D_FdZfE8",
            "node_type": "clip",
            "ref_id": "a65f8d26-c22a-4872-992a-4f499a845126",
            "show_title": "Stephan Livera Podcast",
            "text": "",
            "timestamp": "00:06:00-00:12:37",
            "topics": [
                "schnorr signatures",
                "musig",
                "taproot",
                "multisig",
                "zapo"
            ],
            "type": "youtube",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "532afd6a-f58f-4197-a7b7-6eee90b6d8cd",
        "name": "Stephan Livera Podcast:Schnorr Taproot Tapscript BIPs:00:14:25-00:15:53",
        "label": "Stephan Livera Podcast",
        "type": "youtube",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1641013200,
            "description": "[[Taproot]] and [[Tapscript]] - [[pay to pub key]], [[pub key]], [[script hash]], [[hardware wallets]]",
            "episode_title": "Schnorr Taproot Tapscript BIPs",
            "guest": [
                "AJ Towns"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "keyword": false,
            "link": "https://www.youtube.com/watch?v=8S7D_FdZfE8",
            "node_type": "clip",
            "ref_id": "532afd6a-f58f-4197-a7b7-6eee90b6d8cd",
            "show_title": "Stephan Livera Podcast",
            "text": "",
            "timestamp": "00:14:25-00:15:53",
            "topics": [
                "taproot",
                "tapscript",
                "pay to pub key",
                "pub key",
                "script hash",
                "hardware wallets"
            ],
            "type": "youtube",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "3531a8fc-5d24-46d8-89b1-c993b5e90b5b",
        "name": "Stephan Livera Podcast:Schnorr Taproot Tapscript BIPs:00:27:42-00:29:26",
        "label": "Stephan Livera Podcast",
        "type": "youtube",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1641013200,
            "description": "[[Threshold signatures]] - [[3of5]], [[5of5]], [[multisig]], [[Schnorr]], [[Taproot]], [[MuSig]]",
            "episode_title": "Schnorr Taproot Tapscript BIPs",
            "guest": [
                "AJ Towns"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "keyword": false,
            "link": "https://www.youtube.com/watch?v=8S7D_FdZfE8",
            "node_type": "clip",
            "ref_id": "3531a8fc-5d24-46d8-89b1-c993b5e90b5b",
            "show_title": "Stephan Livera Podcast",
            "text": "",
            "timestamp": "00:27:42-00:29:26",
            "topics": [
                "threshold signatures",
                "3of5",
                "5of5",
                "multisig",
                "schnorr",
                "taproot",
                "musig"
            ],
            "type": "youtube",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "8b002f84-16f4-4a54-b376-ac7b28784e6e",
        "name": "Stephan Livera Podcast:Schnorr Taproot Tapscript BIPs:00:39:36-00:42:37",
        "label": "Stephan Livera Podcast",
        "type": "youtube",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1641013200,
            "description": "Policy [[privacy]] - [[pub key]], [[Merkle Tree]], [[multisig]], [[Lightning]], [[Taproot]], [[UTXO]], [[Chain Analysis]]",
            "episode_title": "Schnorr Taproot Tapscript BIPs",
            "guest": [
                "AJ Towns"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "keyword": false,
            "link": "https://www.youtube.com/watch?v=8S7D_FdZfE8",
            "node_type": "clip",
            "ref_id": "8b002f84-16f4-4a54-b376-ac7b28784e6e",
            "show_title": "Stephan Livera Podcast",
            "text": "",
            "timestamp": "00:39:36-00:42:37",
            "topics": [
                "privacy",
                "pub key",
                "merkle tree",
                "multisig",
                "lightning",
                "taproot",
                "utxo",
                "chain analysis"
            ],
            "type": "youtube",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "5fcec958-2719-4562-a624-fa87deb3f4c1",
        "name": "Stephan Livera Podcast:Schnorr Taproot Tapscript BIPs:00:49:37-00:53:52",
        "label": "Stephan Livera Podcast",
        "type": "youtube",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1641013200,
            "description": "[[Taproot]] [[L2]] - [[sighash]], [[no input]], [[SegWit]], [[checksig]], [[public key]], [[BIP 118]]",
            "episode_title": "Schnorr Taproot Tapscript BIPs",
            "guest": [
                "AJ Towns"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "keyword": false,
            "link": "https://www.youtube.com/watch?v=8S7D_FdZfE8",
            "node_type": "clip",
            "ref_id": "5fcec958-2719-4562-a624-fa87deb3f4c1",
            "show_title": "Stephan Livera Podcast",
            "text": "",
            "timestamp": "00:49:37-00:53:52",
            "topics": [
                "taproot",
                "l2",
                "sighash",
                "no input",
                "segwit",
                "checksig",
                "public key",
                "bip 118"
            ],
            "type": "youtube",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "882373f4-c66b-483d-97ce-6ee5ca5062d7",
        "name": "Stephan Livera Podcast:Schnorr Taproot Tapscript BIPs:00:53:52-01:00:04",
        "label": "Stephan Livera Podcast",
        "type": "youtube",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1641013200,
            "description": "[[No input]] & [[Lightning]] - [[L2]], [[Lightning channels]], [[Mainnet]], [[transactions]], [[transaction ID]], [[state]], [[watchtowers]], [[signatures]], [[taproot]], [[any prev out]]",
            "episode_title": "Schnorr Taproot Tapscript BIPs",
            "guest": [
                "AJ Towns"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "keyword": false,
            "link": "https://www.youtube.com/watch?v=8S7D_FdZfE8",
            "node_type": "clip",
            "ref_id": "882373f4-c66b-483d-97ce-6ee5ca5062d7",
            "show_title": "Stephan Livera Podcast",
            "text": "",
            "timestamp": "00:53:52-01:00:04",
            "topics": [
                "no input",
                "lightning",
                "l2",
                "lightning channels",
                "mainnet",
                "transactions",
                "transaction id",
                "state",
                "watchtowers",
                "signatures",
                "taproot",
                "any prev out"
            ],
            "type": "youtube",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "57346559-c23a-4f76-931c-6a647675bf66",
        "name": "Stephan Livera Podcast:Schnorr Taproot Tapscript BIPs:01:00:04-01:11:53",
        "label": "Stephan Livera Podcast",
        "type": "youtube",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1641013200,
            "description": "Review Club - [[Taproot]], [[Schnorr]], [[Taproot BIP]], [[Schnorr BIP]],[[Bitcoin Core]], criticism/feedback, [[SegWit]], [[Quantum computers]]",
            "episode_title": "Schnorr Taproot Tapscript BIPs",
            "guest": [
                "AJ Towns"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "keyword": false,
            "link": "https://www.youtube.com/watch?v=8S7D_FdZfE8",
            "node_type": "clip",
            "ref_id": "57346559-c23a-4f76-931c-6a647675bf66",
            "show_title": "Stephan Livera Podcast",
            "text": "",
            "timestamp": "01:00:04-01:11:53",
            "topics": [
                "taproot",
                "schnorr",
                "taproot bip",
                "schnorr bip",
                "bitcoin core",
                "segwit",
                "quantum computers"
            ],
            "type": "youtube",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "af1b6078-e933-4bc4-9ef2-c276eecf81ad",
        "name": "Stephan Livera Podcast:Schnorr Taproot Tapscript BIPs:01:11:53-01:17:38",
        "label": "Stephan Livera Podcast",
        "type": "youtube",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1641013200,
            "description": "Upgrade pathway - [[BIPs]], [[Taproot]], New use cases, [[Time locks]], [[smart contracts]], [[future spend]] [[Bitcoin]] ",
            "episode_title": "Schnorr Taproot Tapscript BIPs",
            "guest": [
                "AJ Towns"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "keyword": false,
            "link": "https://www.youtube.com/watch?v=8S7D_FdZfE8",
            "node_type": "clip",
            "ref_id": "af1b6078-e933-4bc4-9ef2-c276eecf81ad",
            "show_title": "Stephan Livera Podcast",
            "text": "",
            "timestamp": "01:11:53-01:17:38",
            "topics": [
                "bips",
                "taproot",
                "time locks",
                "smart contracts",
                "future spend",
                "bitcoin"
            ],
            "type": "youtube",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "d3181d26-e0f3-45e1-b758-371c5909994a",
        "name": "Stephan Livera Podcast:Schnorr Taproot Tapscript BIPs:01:17:38-00:00:00",
        "label": "Stephan Livera Podcast",
        "type": "youtube",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1641013200,
            "description": "Activation - debate, [[UASF]], [[BIP148]], [[BIP149]], [[Miner signalling]], [[SegWit]], [[BIP9]] upgrade and activation, [[soft forks]], [[Taproot]], [[BIP8]], risks ",
            "episode_title": "Schnorr Taproot Tapscript BIPs",
            "guest": [
                "AJ Towns"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "keyword": false,
            "link": "https://www.youtube.com/watch?v=8S7D_FdZfE8",
            "node_type": "clip",
            "ref_id": "d3181d26-e0f3-45e1-b758-371c5909994a",
            "show_title": "Stephan Livera Podcast",
            "text": "",
            "timestamp": "01:17:38-00:00:00",
            "topics": [
                "uasf",
                "bip148",
                "bip149",
                "miner signalling",
                "segwit",
                "bip9",
                "soft forks",
                "taproot",
                "bip8"
            ],
            "type": "youtube",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "76490d63-51a7-4882-bc94-b1501eed58a4",
        "name": "Blockstream Talk:Fork Wars   the Biggest Innovations Happening in Bitcoin:00:08:32-00:13:43",
        "label": "Blockstream Talk",
        "type": "podcast",
        "node_type": "clip",
        "text": "",
        "details": {
            "boost": 0,
            "date": 1642654800,
            "description": "What [[off chain]] capabilities need to be deployed for [[Taproot]] to be considered successful?",
            "episode_title": "Fork Wars   the Biggest Innovations Happening in Bitcoin",
            "guest": [
                "Jonas Nick"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/12db0692-468b-4d0e-a73d-cfd33643aed7.jpg",
            "keyword": false,
            "link": "https://blockstreamtalk.com/episodes/blockstream-talk-8-fork-wars-the-biggest-innovations-happening-in-bitcoin-with-jonas-nick",
            "node_type": "clip",
            "ref_id": "76490d63-51a7-4882-bc94-b1501eed58a4",
            "show_title": "Blockstream Talk",
            "text": "",
            "timestamp": "00:08:32-00:13:43",
            "topics": [
                "off chain",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/12db0692-468b-4d0e-a73d-cfd33643aed7_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "d98d678b-6a08-4d74-9dea-ed91e5b34830",
        "name": "BTC Sessions:NEWS ROUNDUP  The Wreckage Of Blockfi  3AC  Celsius and More ep269:00:36:25-00:39:59",
        "label": "BTC Sessions",
        "type": "podcast",
        "node_type": "clip",
        "text": "I love to see the innovation that comes out of the bear markets because nobody's going to think and this is what I love about the bear markets, too. Think of how freaked out everybody is about privacy right now, myself included. But you got to think, back in 2017, all of the stuff around scaling was reaching a fever pitch. Like, holy shit, how are we going to scale bitcoin? Everything? And the big narrative was, oh, we got to make a million shit coins. We got a fork bitcoin, we got to change it. We had no scaling whatsoever up until around the summer or the fall of 2017. Segue, it wasn't even enacted for on chain scaling. Now look what we've got. We've scaled on chain. We've added segway, we've added Tapper, which will also help a little bit with scaling. We've also added the Lightning Network, which I use literally daily now. I can now receive fractions of a penny minute by minute for people listening to this podcast. There may be somebody listening to it right now, streaming stats to me hitting that boost button as I say it, and just doing little bursts of sats. So the scaling in bitcoin went from no solutions available on chain at all whatsoever, to where we are now, which is like, we have massively scaled in a short period of time. Number one concern for most bitcoin is right now is the regulation coming down the pipe in regards to privacy and trying to get this dragnet going. I just showed you that playlist. We already have all of these tools available to us in regards to privacy. It's far from perfect. There's a learning curve involved, but the tools exist now. When the worry is getting I would say it's mounting quite a bit. Think forward five years. Do you think we're going to be in an even better place than we are now? I think the innovation in and around privacy over the next five years is going to be equal or better than what we've done with scaling. I very much look forward to it. I have to dive into something called Fediments. Jeff Booth told me to check that out the other day. So, anyways, I am very bullish on what's going to happen in the privacy space around this, so I'm very excited about that. Shout out to also the random porn bots that are hitting up the chat now. Maybe don't click that, but just so you know, don't condone that. Anyways, let's keep going here. Just a few more things I wanted to touch on. Again shout out to Nunchuck. Tomorrow is Canada Day. Tomorrow is Canada Day. And first of all, I want to wish a very happy Candidate Day to a number of gentlemen that are very near and dear to me. I don't see and talk to them nearly enough, but happy candidate from the bottom of my heart. To Greg Fosse, jeff Booth BJ victor and Nick aka nobody caribou. Gentlemen, I'm sorry I don't get to talk to you all the time, but I think you guys are all incredible. I think everything that you do is important, and I'm glad to have been able to stand alongside you, at least in part through the beginning of this year. And so, ",
        "details": {
            "boost": 0,
            "date": 1656648000,
            "description": "Bitcoin scaling innovations that come out of the [[Bear markets]]: [[SegWit]], [[Taproot]], [[Lightning Network]]",
            "episode_title": "NEWS ROUNDUP  The Wreckage Of Blockfi  3AC  Celsius and More ep269",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/eeca50f4-77ab-453f-bb40-f7432087759f.jpg",
            "keyword": false,
            "link": "https://anchor.fm/s/11e95d20/podcast/play/54244073/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2022-5-30%2F274441829-44100-2-1fb7fa27d06d.mp3",
            "node_type": "clip",
            "ref_id": "d98d678b-6a08-4d74-9dea-ed91e5b34830",
            "show_title": "BTC Sessions",
            "text": "I love to see the innovation that comes out of the bear markets because nobody's going to think and this is what I love about the bear markets, too. Think of how freaked out everybody is about privacy right now, myself included. But you got to think, back in 2017, all of the stuff around scaling was reaching a fever pitch. Like, holy shit, how are we going to scale bitcoin? Everything? And the big narrative was, oh, we got to make a million shit coins. We got a fork bitcoin, we got to change it. We had no scaling whatsoever up until around the summer or the fall of 2017. Segue, it wasn't even enacted for on chain scaling. Now look what we've got. We've scaled on chain. We've added segway, we've added Tapper, which will also help a little bit with scaling. We've also added the Lightning Network, which I use literally daily now. I can now receive fractions of a penny minute by minute for people listening to this podcast. There may be somebody listening to it right now, streaming stats to me hitting that boost button as I say it, and just doing little bursts of sats. So the scaling in bitcoin went from no solutions available on chain at all whatsoever, to where we are now, which is like, we have massively scaled in a short period of time. Number one concern for most bitcoin is right now is the regulation coming down the pipe in regards to privacy and trying to get this dragnet going. I just showed you that playlist. We already have all of these tools available to us in regards to privacy. It's far from perfect. There's a learning curve involved, but the tools exist now. When the worry is getting I would say it's mounting quite a bit. Think forward five years. Do you think we're going to be in an even better place than we are now? I think the innovation in and around privacy over the next five years is going to be equal or better than what we've done with scaling. I very much look forward to it. I have to dive into something called Fediments. Jeff Booth told me to check that out the other day. So, anyways, I am very bullish on what's going to happen in the privacy space around this, so I'm very excited about that. Shout out to also the random porn bots that are hitting up the chat now. Maybe don't click that, but just so you know, don't condone that. Anyways, let's keep going here. Just a few more things I wanted to touch on. Again shout out to Nunchuck. Tomorrow is Canada Day. Tomorrow is Canada Day. And first of all, I want to wish a very happy Candidate Day to a number of gentlemen that are very near and dear to me. I don't see and talk to them nearly enough, but happy candidate from the bottom of my heart. To Greg Fosse, jeff Booth BJ victor and Nick aka nobody caribou. Gentlemen, I'm sorry I don't get to talk to you all the time, but I think you guys are all incredible. I think everything that you do is important, and I'm glad to have been able to stand alongside you, at least in part through the beginning of this year. And so, ",
            "timestamp": "00:36:25-00:39:59",
            "topics": [
                "bear markets",
                "segwit",
                "taproot",
                "lightning network"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/eeca50f4-77ab-453f-bb40-f7432087759f_s.jpg",
        "colors": []
    },
    {
        "weight": 1,
        "id": "71fa6f0c-e19c-480e-ad2e-1aee6e746990",
        "name": "BTC Sessions:WHY ARE WE BULLISH  JoeyTweets  Mario Gibney  Bobby Shell  Len ep215:01:07:42-01:12:08",
        "label": "BTC Sessions",
        "type": "podcast",
        "node_type": "clip",
        "text": "that top route is sort of giving back. And if you have an idea about this, when you think about chain analysis companies, what is the mechanism by which they'll be able to stay in business through Tap root? Because it's something that we don't talk a lot about. I don't see a lot of it on Twitter. I see even in the comments here, people talking to a chain analysis not being able to keep up. They'll find a way. What is the way you think that they'll be able to continue their work? Because it's almost inevitable that this cat and mouse is going to continue. Right. So what are the trade offs here? I'm not sure if you're asking two different questions here. Yeah, two questions. Okay. Yeah, sure. The trade offs. The cool thing about Tapper is not that there are no trade offs. There definitely are some, but it's very minimal. There are almost no new trust assumptions required. I don't think there are no new cryptographic trust assumptions required for it to work. There's a minor thing in that the way that the fees are reduced for Tap route slightly decreases the ability of address to be hidden in a certain way. Right now, you don't pay directly to public addresses. You pay to a hash of the public address. And then when you're spending from that, you kind of reveal what the public address is. And then you have these two pieces of data where you have, like, after you spend from an output, the public address shows up, and then in the output, you also have the hash. Whereas with Tap roots, due to how it works, there is no hash of the public key. You're paying directly to a public key. So that's where the space savings comes from. Now I've seen some debate back and forth on whether or not there's even much of a benefit to kind of hiding your public key behind a hash before you spend it. But that is kind of I do remember that being one point where it was discussed, like, okay, do we actually want to make this trade? That's the only thing came to mind. But there aren't. There is a degree you could argue that there's added complexity and now there's more, other, more output types, more transaction addresses that white wallets will need to know how to handle. But to be honest, those are pretty minor compared to the benefits for getting here. This really was a large work of optimization. The other thing you're asking about was Cha analysis companies. Now, I'm Super stoked for the Privacy enhancements here, but this is not a panacea. I think we really do have to adopt the mindset that there is going to be a constant kind of ongoing war between Privacy solutions and entities that are trying to analyze the blockchain. Right. So this is going to make it harder for them to distinguish between Lightning, network channel opens, and closures. But there's a handful of heuristics that these companies use to kind of make guesses. It'll make their job a bit harder, but it's not going to make it impossible. And also another thing to keep in mind that Privacy doesn't only happen at the blockchain level. We normally think of surveillance companies as like scanning Bitcoin transactions and kind of making inferences based on the inputs and outputs. But there are also different levels where Privacy happens. There are some things that could be done where these companies run their own nodes, and if they run a bunch of different nodes in different parts of the network, and they might be able to kind of tell where transactions were first broadcast from so they can guess where they come from. So maybe more their efforts will shift to different levels, and there's all sorts of work being done on at the kind of peer to peer communications layer for nodes, which we don't often think about because a lot of that just happens in the background. But maybe more of the Privacy efforts will be focused there, more the analysis efforts will be focused there. So I don't think these companies are going to go out of business anytime soon. But we are going to make their job harder, and hopefully it'll shake some of them out, and then hopefully the entity is paying for this data will be paying more money for less info, but I don't think it's not going to be a full Gameover solution. Okay, one more question. Since ",
        "details": {
            "boost": 0,
            "date": 1636866000,
            "description": "Trade-offs Given Back by [[Chainalysis Companies]] to Continue Business Through [[Taproot]]",
            "episode_title": "WHY ARE WE BULLISH  JoeyTweets  Mario Gibney  Bobby Shell  Len ep215",
            "guest": [
                "JoeyTweets",
                "Mario Gibney",
                "Bobby Shell",
                "Len"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/f3b67780-d9c2-4a20-ab5c-115032a05b3a.jpg",
            "keyword": false,
            "link": "https://anchor.fm/s/11e95d20/podcast/play/43334718/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-10-14%2F0bfc842d-3fe7-98e0-1a25-43385ac48a7d.mp3",
            "node_type": "clip",
            "ref_id": "71fa6f0c-e19c-480e-ad2e-1aee6e746990",
            "show_title": "BTC Sessions",
            "text": "that top route is sort of giving back. And if you have an idea about this, when you think about chain analysis companies, what is the mechanism by which they'll be able to stay in business through Tap root? Because it's something that we don't talk a lot about. I don't see a lot of it on Twitter. I see even in the comments here, people talking to a chain analysis not being able to keep up. They'll find a way. What is the way you think that they'll be able to continue their work? Because it's almost inevitable that this cat and mouse is going to continue. Right. So what are the trade offs here? I'm not sure if you're asking two different questions here. Yeah, two questions. Okay. Yeah, sure. The trade offs. The cool thing about Tapper is not that there are no trade offs. There definitely are some, but it's very minimal. There are almost no new trust assumptions required. I don't think there are no new cryptographic trust assumptions required for it to work. There's a minor thing in that the way that the fees are reduced for Tap route slightly decreases the ability of address to be hidden in a certain way. Right now, you don't pay directly to public addresses. You pay to a hash of the public address. And then when you're spending from that, you kind of reveal what the public address is. And then you have these two pieces of data where you have, like, after you spend from an output, the public address shows up, and then in the output, you also have the hash. Whereas with Tap roots, due to how it works, there is no hash of the public key. You're paying directly to a public key. So that's where the space savings comes from. Now I've seen some debate back and forth on whether or not there's even much of a benefit to kind of hiding your public key behind a hash before you spend it. But that is kind of I do remember that being one point where it was discussed, like, okay, do we actually want to make this trade? That's the only thing came to mind. But there aren't. There is a degree you could argue that there's added complexity and now there's more, other, more output types, more transaction addresses that white wallets will need to know how to handle. But to be honest, those are pretty minor compared to the benefits for getting here. This really was a large work of optimization. The other thing you're asking about was Cha analysis companies. Now, I'm Super stoked for the Privacy enhancements here, but this is not a panacea. I think we really do have to adopt the mindset that there is going to be a constant kind of ongoing war between Privacy solutions and entities that are trying to analyze the blockchain. Right. So this is going to make it harder for them to distinguish between Lightning, network channel opens, and closures. But there's a handful of heuristics that these companies use to kind of make guesses. It'll make their job a bit harder, but it's not going to make it impossible. And also another thing to keep in mind that Privacy doesn't only happen at the blockchain level. We normally think of surveillance companies as like scanning Bitcoin transactions and kind of making inferences based on the inputs and outputs. But there are also different levels where Privacy happens. There are some things that could be done where these companies run their own nodes, and if they run a bunch of different nodes in different parts of the network, and they might be able to kind of tell where transactions were first broadcast from so they can guess where they come from. So maybe more their efforts will shift to different levels, and there's all sorts of work being done on at the kind of peer to peer communications layer for nodes, which we don't often think about because a lot of that just happens in the background. But maybe more of the Privacy efforts will be focused there, more the analysis efforts will be focused there. So I don't think these companies are going to go out of business anytime soon. But we are going to make their job harder, and hopefully it'll shake some of them out, and then hopefully the entity is paying for this data will be paying more money for less info, but I don't think it's not going to be a full Gameover solution. Okay, one more question. Since ",
            "timestamp": "01:07:42-01:12:08",
            "topics": [
                "chainalysis companies",
                "taproot"
            ],
            "type": "podcast",
            "weight": 1
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/f3b67780-d9c2-4a20-ab5c-115032a05b3a_s.jpg",
        "colors": []
    },
    {
        "weight": 0.6134,
        "id": "aa2f5f8a-cbeb-4103-ac48-4eaee97bd7a5",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Explaining Taproot Activation and LOT True VS LOT False - NADO 29:00:00:00-00:01:12",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "type": "podcast",
        "node_type": "clip",
        "text": "Live from Utrecht. This is the Fan Williams, Schurz, NATO. Hello, Schwarz. Make the pawn. We have a lot to talk about. We have a lot to discuss. Yes. In this episode, we're going to discuss discuss the Taproot activation process and the debate surrounding it on the parameter lot. Lock in on time out. That's right. It can be set to true and false. And maybe as a reminder to the listener, we have talked about Taproot in general multiple times, but especially in episode two. And we've talked about Activating Taproot Activating software in general in episode three. So we might skip over a few things. Yeah. In episode three, we discussed all sorts of different proposals to activate Taproot, but it's been over half a year at least. Right. That was on September 25. So about five months. Yeah. So it's been a while. And by now, the discussion has reached sort of its final stage, I would say. And at this point, the discussion is about the loss parameter. True or false? First, to ",
        "details": {
            "boost": 0,
            "date": 1614315600,
            "description": "Intro",
            "episode_title": "Explaining Taproot Activation and LOT True VS LOT False - NADO 29",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "keyword": true,
            "link": "https://traffic.libsyn.com/secure/nadobtc/NADO_-_Episode_29.mp3?dest-id=2366201",
            "node_type": "clip",
            "ref_id": "aa2f5f8a-cbeb-4103-ac48-4eaee97bd7a5",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin",
            "text": "Live from Utrecht. This is the Fan Williams, Schurz, NATO. Hello, Schwarz. Make the pawn. We have a lot to talk about. We have a lot to discuss. Yes. In this episode, we're going to discuss discuss the Taproot activation process and the debate surrounding it on the parameter lot. Lock in on time out. That's right. It can be set to true and false. And maybe as a reminder to the listener, we have talked about Taproot in general multiple times, but especially in episode two. And we've talked about Activating Taproot Activating software in general in episode three. So we might skip over a few things. Yeah. In episode three, we discussed all sorts of different proposals to activate Taproot, but it's been over half a year at least. Right. That was on September 25. So about five months. Yeah. So it's been a while. And by now, the discussion has reached sort of its final stage, I would say. And at this point, the discussion is about the loss parameter. True or false? First, to ",
            "timestamp": "00:00:00-00:01:12",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 0.6134
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "weight": 0.5939,
        "id": "e7cbdd17-2a86-4aea-a6d4-5d3f89c5e641",
        "name": "Bitcoin Audible:Read 518 - Two Taproot Activation Clients   Aaron Van Wirdum :00:00:00-00:04:10",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "Due to technical and philosophical disagreements on how the bitcoin protocol should be upgraded, discussion around Taproot activation turned out to be a long and sometimes heated debate. Now it has resulted in two two different Taproot activation paths embedded in two main software clients that could, in some scenarios, even become incompatible with one another. The best in bitcoin made audible. I am. Guys. Swan. And this is Bitcoin Audible. What is up, guys? Welcome back to Bitcoin. Audible. I am Gee Swan, the guy who has read more about bitcoin than anybody else you know. So what on earth is going on with all of this Taproot mess? We have another great piece from bitcoin magazine and author Aaron van Wardom. We've read on the show and had him on the show, but read on the show many times and he gets into all the details for us about what's going on with these Taproot clients. But before we get into it, I really want to do a quick overview of the kind of set the stage here for those of you who don't know. But it should only be a minute or two to kind of hit the basics of what Taproot is and kind of how we got here really fast, though some love to the BitBox. Two for keeping the keys to my bitcoin future safe and easy to use on an open source hardware device. If you have significant savings in bitcoin and you don't have a hardware device yet, it's a no brainer to me. You need to keep it safe and you need to hold your own keys. The BigBox too. You can find that at guyswan combitbox. And of course, if you're not stacking regularly, I didn't miss this dip. I stacked this dip with SwanBitcoin. comGUY. On that note, my ref link gives you some free sats and supports the show, but it is the auto DCA every month, every week, every day. Whatever your flavor, bitcoin stack automatic savings plan. You don't have to do anything, it just runs. And both of those guys make bitcoin audible possible. Check them both out at guy swan. Swan with two ns.com. I don't want to do a full breakdown of tap route, but if you really want to take a deep dive, go to bitcoinautable. Comlibrary. Just type in Taproot T-A-P-R-O-O-T. We've covered from a ton of different angles on this show, talked about it a lot, and Aaron himself actually has a really wonderful piece. Breaking it all down. I think we've read like two or three pieces that he's done or around Taproot But in a nutshell, just to get the idea, everybody knows there's a limited block space, right? There's a limited amount of data that bitcoin can process at any specific amount of time. And when you add instructions to a transaction, including the most simplest simplest, including the simplest one that you include in every transaction that only Bob can spend these coins for, which if I'm sending coins to Bob, but also any other complex script that let's say Bob can spin the coins only if Alice also signs. But if Alice doesn't sign, Bob can spin them after 144 blocks by himself. However, if Alice provides a certain secret before those 144 blocks is up, then Alice gets all the coins and this can get increasingly complex. What I just gave is kind of a simplified actually, it is a simplified version of Lightning, like how that actually ",
        "details": {
            "boost": 0,
            "date": 1618804800,
            "description": "Intro",
            "episode_title": "Read 518 - Two Taproot Activation Clients   Aaron Van Wirdum ",
            "guest": [
                "Aaron Van Wirdum"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN9741421976.mp3?updated=1624479911",
            "node_type": "clip",
            "ref_id": "e7cbdd17-2a86-4aea-a6d4-5d3f89c5e641",
            "show_title": "Bitcoin Audible",
            "text": "Due to technical and philosophical disagreements on how the bitcoin protocol should be upgraded, discussion around Taproot activation turned out to be a long and sometimes heated debate. Now it has resulted in two two different Taproot activation paths embedded in two main software clients that could, in some scenarios, even become incompatible with one another. The best in bitcoin made audible. I am. Guys. Swan. And this is Bitcoin Audible. What is up, guys? Welcome back to Bitcoin. Audible. I am Gee Swan, the guy who has read more about bitcoin than anybody else you know. So what on earth is going on with all of this Taproot mess? We have another great piece from bitcoin magazine and author Aaron van Wardom. We've read on the show and had him on the show, but read on the show many times and he gets into all the details for us about what's going on with these Taproot clients. But before we get into it, I really want to do a quick overview of the kind of set the stage here for those of you who don't know. But it should only be a minute or two to kind of hit the basics of what Taproot is and kind of how we got here really fast, though some love to the BitBox. Two for keeping the keys to my bitcoin future safe and easy to use on an open source hardware device. If you have significant savings in bitcoin and you don't have a hardware device yet, it's a no brainer to me. You need to keep it safe and you need to hold your own keys. The BigBox too. You can find that at guyswan combitbox. And of course, if you're not stacking regularly, I didn't miss this dip. I stacked this dip with SwanBitcoin. comGUY. On that note, my ref link gives you some free sats and supports the show, but it is the auto DCA every month, every week, every day. Whatever your flavor, bitcoin stack automatic savings plan. You don't have to do anything, it just runs. And both of those guys make bitcoin audible possible. Check them both out at guy swan. Swan with two ns.com. I don't want to do a full breakdown of tap route, but if you really want to take a deep dive, go to bitcoinautable. Comlibrary. Just type in Taproot T-A-P-R-O-O-T. We've covered from a ton of different angles on this show, talked about it a lot, and Aaron himself actually has a really wonderful piece. Breaking it all down. I think we've read like two or three pieces that he's done or around Taproot But in a nutshell, just to get the idea, everybody knows there's a limited block space, right? There's a limited amount of data that bitcoin can process at any specific amount of time. And when you add instructions to a transaction, including the most simplest simplest, including the simplest one that you include in every transaction that only Bob can spend these coins for, which if I'm sending coins to Bob, but also any other complex script that let's say Bob can spin the coins only if Alice also signs. But if Alice doesn't sign, Bob can spin them after 144 blocks by himself. However, if Alice provides a certain secret before those 144 blocks is up, then Alice gets all the coins and this can get increasingly complex. What I just gave is kind of a simplified actually, it is a simplified version of Lightning, like how that actually ",
            "timestamp": "00:00:00-00:04:10",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 0.5939
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "weight": 0.588,
        "id": "408df8f4-586d-49d0-b9e3-bb418e3b3913",
        "name": "The Anita Posch Show  A Bitcoin Only Podcast:Andreas M. Antonopoulos  Bitcoin Outlook 2021:00:26:04-00:29:33",
        "label": "The Anita Posch Show  A Bitcoin Only Podcast",
        "type": "podcast",
        "node_type": "clip",
        "text": "that would be good for more privacy is Cap route. Do you think that yeah, absolutely. Will this be implemented this year? I think the code will be merged into Bitcoin core this year, which will be the start of an activation process that can take anywhere from one to three years. It very much depends. I hope we'll do it faster than three years. But nothing moves too fast in Bitcoin for good reasons. Taproot is a very important privacy preserving technology, and it's also building blocks that allows us to build other, even more important privacy preserving technologies. Can you please elaborate on that a little bit? I think it enables page showing and other stuff. Yeah. Taproot is basically a collection of three different technologies merged together. First of all, it's an implementation of Schnor signatures. So as part of the Tapre package is Schnoar signatures, which are signatures that have some unique properties. One of the unique properties is that you can aggregate them. So what that means is, for example, if we have five private keys, five public keys and five signatures, we can add up all of the signatures and add up all of the public keys. So that looks like a transaction created by the sum of all of the private keys and signed that way. So you can't tell the difference between a transaction that was signed by five people in a transaction that was signed by one. This allows you to then take other protocols that use multi signature and hide them and make them look like a simple payment. So a transaction cashing out from a Lightning channel, for example, looks like a very simple payment from one person to another, and you can't tell the difference. That's critical. So Schnor signature aggregation. The second big technology is what's called mercurized Abstract Syntax trees. But basically this is what it is. In Bitcoin, we have a scripting language that allows us to tell you why and how something is being spent. So you can say this is being spent because it's protected by a multi SIG. And here's three signatures which solve this multi SIG. The scripts can get rather complicated. You can say if one of these keys, or two of these keys, or this key after three months, or that key signs. So you have four different conditions as it is now, you would have to show the whole script and then which part of it you executed. Now, the beautiful part of this new Tap roads development is that you can hide all of that script as a tree. That is a Merkel tree with its hash in the script, and then you only show the branch you executed. So you say, well, in here was a thing that said one of these two keys. What else was in there? You don't need to know. It's some of the hashes. You never know what it is. So I'll show you only the part that I'm executing. In fact, even better, using Schnor signatures. I will then take that and make it look like a single signature of a single script. And now you don't know what is happening behind the scenes. So it's a major privacy upgrade. It's a scalability upgrade, it's an efficiency upgrade, yeah. And it's a script upgrade. ",
        "details": {
            "boost": 0,
            "date": 1609390800,
            "description": "The Fight for privacy-- [[Taproot Activation]] and [[Schnorr Signature]]",
            "episode_title": "Andreas M. Antonopoulos  Bitcoin Outlook 2021",
            "guest": [
                "Andrea M. Antonopoulos"
            ],
            "image_url": "",
            "keyword": true,
            "link": "https://bitcoinundco.com/en/podlove/file/1601/s/feed/c/mp3/092-en.mp3",
            "node_type": "clip",
            "ref_id": "408df8f4-586d-49d0-b9e3-bb418e3b3913",
            "show_title": "The Anita Posch Show  A Bitcoin Only Podcast",
            "text": "that would be good for more privacy is Cap route. Do you think that yeah, absolutely. Will this be implemented this year? I think the code will be merged into Bitcoin core this year, which will be the start of an activation process that can take anywhere from one to three years. It very much depends. I hope we'll do it faster than three years. But nothing moves too fast in Bitcoin for good reasons. Taproot is a very important privacy preserving technology, and it's also building blocks that allows us to build other, even more important privacy preserving technologies. Can you please elaborate on that a little bit? I think it enables page showing and other stuff. Yeah. Taproot is basically a collection of three different technologies merged together. First of all, it's an implementation of Schnor signatures. So as part of the Tapre package is Schnoar signatures, which are signatures that have some unique properties. One of the unique properties is that you can aggregate them. So what that means is, for example, if we have five private keys, five public keys and five signatures, we can add up all of the signatures and add up all of the public keys. So that looks like a transaction created by the sum of all of the private keys and signed that way. So you can't tell the difference between a transaction that was signed by five people in a transaction that was signed by one. This allows you to then take other protocols that use multi signature and hide them and make them look like a simple payment. So a transaction cashing out from a Lightning channel, for example, looks like a very simple payment from one person to another, and you can't tell the difference. That's critical. So Schnor signature aggregation. The second big technology is what's called mercurized Abstract Syntax trees. But basically this is what it is. In Bitcoin, we have a scripting language that allows us to tell you why and how something is being spent. So you can say this is being spent because it's protected by a multi SIG. And here's three signatures which solve this multi SIG. The scripts can get rather complicated. You can say if one of these keys, or two of these keys, or this key after three months, or that key signs. So you have four different conditions as it is now, you would have to show the whole script and then which part of it you executed. Now, the beautiful part of this new Tap roads development is that you can hide all of that script as a tree. That is a Merkel tree with its hash in the script, and then you only show the branch you executed. So you say, well, in here was a thing that said one of these two keys. What else was in there? You don't need to know. It's some of the hashes. You never know what it is. So I'll show you only the part that I'm executing. In fact, even better, using Schnor signatures. I will then take that and make it look like a single signature of a single script. And now you don't know what is happening behind the scenes. So it's a major privacy upgrade. It's a scalability upgrade, it's an efficiency upgrade, yeah. And it's a script upgrade. ",
            "timestamp": "00:26:04-00:29:33",
            "topics": [
                "taproot activation",
                "schnorr signature",
                "taproot"
            ],
            "type": "podcast",
            "weight": 0.588
        },
        "image_url": "",
        "colors": []
    },
    {
        "weight": 0.5576,
        "id": "f495a5c6-3b24-4fc7-b17c-2343cadebaa8",
        "name": "Bitcoin Audible:Guy s Take  34 - TAPROOT IS MERGED  :00:00:00-00:01:45",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "Taproot has been merged and we are going to get into it in today's Guys Take episode. We've talked about it a lot and the code has finally dropped. And this is the beginning of the climb up the mountain and there is no activation details yet, but we're going to get all into it with today's Guys Take episode. Tap Root 2020, baby. What's up, guys? Welcome back to Bitcoin. Audible. I am Guy Swan, the guy who has read more about Bitcoin than anybody else you know. And this is a guy's take episode all about Taproot. So I haven't been able to tweet it out because I got suspended for quoting someone who used the C word and debating some libertarian nonsense. So I got temporarily suspended for hateful speech or something like that. I don't think their algorithm can read context such as Twitter, such as social media. So I get to take a Twitter break today. But I did scan through luckily I scanned through my feed and I was happy to announce this to the Insider crew, to the Satoshi Audio Knots group that we've got for supporters to the show. And I'm super jacked the Tap ",
        "details": {
            "boost": 0,
            "date": 1602820800,
            "description": "Intro",
            "episode_title": "Guy s Take  34 - TAPROOT IS MERGED  ",
            "guest": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/6377c14f-551c-44e2-b0d9-564cd519503a.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN3029808295.mp3?updated=1627960381",
            "node_type": "clip",
            "ref_id": "f495a5c6-3b24-4fc7-b17c-2343cadebaa8",
            "show_title": "Bitcoin Audible",
            "text": "Taproot has been merged and we are going to get into it in today's Guys Take episode. We've talked about it a lot and the code has finally dropped. And this is the beginning of the climb up the mountain and there is no activation details yet, but we're going to get all into it with today's Guys Take episode. Tap Root 2020, baby. What's up, guys? Welcome back to Bitcoin. Audible. I am Guy Swan, the guy who has read more about Bitcoin than anybody else you know. And this is a guy's take episode all about Taproot. So I haven't been able to tweet it out because I got suspended for quoting someone who used the C word and debating some libertarian nonsense. So I got temporarily suspended for hateful speech or something like that. I don't think their algorithm can read context such as Twitter, such as social media. So I get to take a Twitter break today. But I did scan through luckily I scanned through my feed and I was happy to announce this to the Insider crew, to the Satoshi Audio Knots group that we've got for supporters to the show. And I'm super jacked the Tap ",
            "timestamp": "00:00:00-00:01:45",
            "topics": [
                "taproot"
            ],
            "type": "podcast",
            "weight": 0.5576
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/6377c14f-551c-44e2-b0d9-564cd519503a_s.jpg",
        "colors": []
    },
    {
        "weight": 0.551,
        "id": "80a70dde-ca15-4176-905a-42dfeafab63f",
        "name": "Bitcoin Fixes This:Bitcoin Fixes This  71  Listener Questions with Jimmy Song:00:31:00-00:31:14",
        "label": "Bitcoin Fixes This",
        "type": "podcast",
        "node_type": "clip",
        "text": "innovation to Bitcoin court after taproof. Probably to cash any provout then that's. A particular signature hashing part. What's ",
        "details": {
            "boost": 0,
            "date": 1638421200,
            "description": "Next innovation to [[Bitcoin Core]] after [[Taproot]]",
            "episode_title": "Bitcoin Fixes This  71  Listener Questions with Jimmy Song",
            "guest": [
                "None"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/d5c1d55c-73ee-4d1a-bfb4-927f1e706360.jpg",
            "keyword": true,
            "link": "https://anchor.fm/s/2a4e8034/podcast/play/44239517/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-11-2%2Fa3f7298a-0137-029f-1132-2937920c4bdc.mp3",
            "node_type": "clip",
            "ref_id": "80a70dde-ca15-4176-905a-42dfeafab63f",
            "show_title": "Bitcoin Fixes This",
            "text": "innovation to Bitcoin court after taproof. Probably to cash any provout then that's. A particular signature hashing part. What's ",
            "timestamp": "00:31:00-00:31:14",
            "topics": [
                "bitcoin core",
                "taproot",
                "taproof"
            ],
            "type": "podcast",
            "weight": 0.551
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/d5c1d55c-73ee-4d1a-bfb4-927f1e706360_s.jpg",
        "colors": []
    },
    {
        "weight": 0.5202,
        "id": "8513010c-8328-4083-a245-468afaee74c2",
        "name": "Bitcoin Audible:Read 379 - Dont be Misled by Red Herrings - Treatise on Bitcoin   Privacy Part 2  Giacomo Zucco :00:41:14-00:44:35",
        "label": "Bitcoin Audible",
        "type": "podcast",
        "node_type": "clip",
        "text": "excuse me, not the development, but the adoption of something like tap route when Snoring stuff is available is probably going to be really, really fast because it makes all of it cheaper. One public key for a channel that before required multiple public keys and multiple scripts to knock that down back to a normal transaction is a huge cost savings. Wallets, services, exchanges, users, everybody. Upgrading to that is not going to take very long. Again, those economic incentives are aligned with the better privacy option, and I think we'll continue to see that. There's so many other privacy technologies that I think have the same sort of balance. And increasingly, if you look at, just start looking at Taproot by itself, look at Lightning by itself, look at aggregation by itself, look at Coin join by itself. Look at the cross input signature aggregation, which essentially does the Taproot trick. Except instead of for multiple scripts. It does it for all the signatures for many different inputs and many different outputs and it will make a coin join transaction cheaper than a regular transaction. From 100 inputs to 100 outputs. If you do a cross input snore aggregation, like signature aggregation, you'll have one signature on that. Now, we're still a little bit further away from that. That's not even in active development right now. They're basically developing the building blocks that will lead to that being possible after this next set of software that will go through, probably. But again, you look at any of these things by themselves and they're pretty powerful tools, but what are they all together? Alex Bosworth just tweeted out about how you could do a payment by doing an atomic swap into Lightning to a Lightning payment that paid to another submarine swap out of Lightning and then paying like a bitcoin invoice and you've completely broken. Completely broken any chain analysis from your coins to the coins that got spent at the other end and you did it all atomically. Meaning that you didn't have to trust anybody. Each stage in the transaction was dependent on the previous stage actually happening. Put all of that together, what do you get? That's an incredible amount of privacy. And almost every one of those that I mentioned is also a cost savings. So if these technologies get adopted, if we start using these tools, if we start figuring out where we can apply them, and we make good user experience with these things, well, they'll get used and grant, our anonymity sets will get greater and chain analysis will get increasingly worthless while people who don't even necessarily care about privacy will end up using them. But in ",
        "details": {
            "boost": 0,
            "date": 1586836800,
            "description": "What are [[privacy technology]] that align with economic incentives?",
            "episode_title": "Read 379 - Dont be Misled by Red Herrings - Treatise on Bitcoin   Privacy Part 2  Giacomo Zucco ",
            "guest": [
                "Giacomo Zucco"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "keyword": true,
            "link": "https://traffic.megaphone.fm/CSN4640404763.mp3?updated=1624565054",
            "node_type": "clip",
            "ref_id": "8513010c-8328-4083-a245-468afaee74c2",
            "show_title": "Bitcoin Audible",
            "text": "excuse me, not the development, but the adoption of something like tap route when Snoring stuff is available is probably going to be really, really fast because it makes all of it cheaper. One public key for a channel that before required multiple public keys and multiple scripts to knock that down back to a normal transaction is a huge cost savings. Wallets, services, exchanges, users, everybody. Upgrading to that is not going to take very long. Again, those economic incentives are aligned with the better privacy option, and I think we'll continue to see that. There's so many other privacy technologies that I think have the same sort of balance. And increasingly, if you look at, just start looking at Taproot by itself, look at Lightning by itself, look at aggregation by itself, look at Coin join by itself. Look at the cross input signature aggregation, which essentially does the Taproot trick. Except instead of for multiple scripts. It does it for all the signatures for many different inputs and many different outputs and it will make a coin join transaction cheaper than a regular transaction. From 100 inputs to 100 outputs. If you do a cross input snore aggregation, like signature aggregation, you'll have one signature on that. Now, we're still a little bit further away from that. That's not even in active development right now. They're basically developing the building blocks that will lead to that being possible after this next set of software that will go through, probably. But again, you look at any of these things by themselves and they're pretty powerful tools, but what are they all together? Alex Bosworth just tweeted out about how you could do a payment by doing an atomic swap into Lightning to a Lightning payment that paid to another submarine swap out of Lightning and then paying like a bitcoin invoice and you've completely broken. Completely broken any chain analysis from your coins to the coins that got spent at the other end and you did it all atomically. Meaning that you didn't have to trust anybody. Each stage in the transaction was dependent on the previous stage actually happening. Put all of that together, what do you get? That's an incredible amount of privacy. And almost every one of those that I mentioned is also a cost savings. So if these technologies get adopted, if we start using these tools, if we start figuring out where we can apply them, and we make good user experience with these things, well, they'll get used and grant, our anonymity sets will get greater and chain analysis will get increasingly worthless while people who don't even necessarily care about privacy will end up using them. But in ",
            "timestamp": "00:41:14-00:44:35",
            "topics": [
                "privacy technology",
                "taproot"
            ],
            "type": "podcast",
            "weight": 0.5202
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "id": "6cd8dc46-8782-4270-8013-24fa61e9b9e4",
        "name": "Lightning Labs:Taro  A New Protocol for Multi-Asset Bitcoin and Lightning:undefined",
        "label": "Lightning Labs",
        "node_type": "episode",
        "details": {
            "children": [
                "40f3b12f-0b5c-4233-ab38-d8eb88b4d191"
            ],
            "episode_title": "Taro  A New Protocol for Multi-Asset Bitcoin and Lightning",
            "guests": [],
            "image_url": "",
            "node_type": "episode",
            "ref_id": "6cd8dc46-8782-4270-8013-24fa61e9b9e4",
            "show_title": "Lightning Labs"
        },
        "image_url": "",
        "colors": []
    },
    {
        "id": "69b507fc-8462-4d04-af14-2b859735ab00",
        "name": "The Bad Crypto Podcast:Sports Stadiums Go Crypto - Bad News For Nov 17th:undefined",
        "label": "The Bad Crypto Podcast",
        "node_type": "episode",
        "details": {
            "children": [
                "d564076b-753c-42c4-bcc8-c6e5f09babf9"
            ],
            "episode_title": "Sports Stadiums Go Crypto - Bad News For Nov 17th",
            "guests": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/69b507fc-8462-4d04-af14-2b859735ab00.jpg",
            "node_type": "episode",
            "ref_id": "69b507fc-8462-4d04-af14-2b859735ab00",
            "show_title": "The Bad Crypto Podcast"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/69b507fc-8462-4d04-af14-2b859735ab00_s.jpg",
        "colors": []
    },
    {
        "id": "a237b538-9b4a-476e-9813-a4f5a62befa9",
        "name": "Unchained:Unconfirmed  How Taproot Could Improve Bitcoin -- If It Gets Adopted:undefined",
        "label": "Unchained",
        "node_type": "episode",
        "details": {
            "children": [
                "d734c4f4-f005-44c9-b8d3-260fe3f49cce",
                "ca8a54fb-ce46-4c25-b8a9-1d2fa9f8e313",
                "4a92e73d-2e6b-4e75-86e6-a4bb0027fa1a",
                "2f1cabb9-eb06-4893-b222-42abbdc5db5a",
                "5c17b52c-438a-4908-9291-06e2dd14896e",
                "20e21ed1-78fd-4a85-a079-7ca0ade08aa0",
                "8935141c-2362-4baa-bdaf-16f57c6d6328"
            ],
            "episode_title": "Unconfirmed  How Taproot Could Improve Bitcoin -- If It Gets Adopted",
            "guests": [
                "Jeremy Rubin"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/7de0d293-8ae3-4362-8500-8f7300f3fe41.jpg",
            "node_type": "episode",
            "ref_id": "a237b538-9b4a-476e-9813-a4f5a62befa9",
            "show_title": "Unchained"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/7de0d293-8ae3-4362-8500-8f7300f3fe41_s.jpg",
        "colors": []
    },
    {
        "id": "e58e8b29-d9b0-4489-bfb2-9037d737301d",
        "name": "CryptoIntelligence:Bitcoin Taproot Upgrade:undefined",
        "label": "CryptoIntelligence",
        "node_type": "episode",
        "details": {
            "children": [
                "5247d37e-8b3c-4ea7-8a09-36c8a4800316",
                "31446053-a3e1-4ee7-9a03-6c2ad6b8dbd1"
            ],
            "episode_title": "Bitcoin Taproot Upgrade",
            "guests": [],
            "image_url": "",
            "node_type": "episode",
            "ref_id": "e58e8b29-d9b0-4489-bfb2-9037d737301d",
            "show_title": "CryptoIntelligence"
        },
        "image_url": "",
        "colors": []
    },
    {
        "id": "26884d67-6dc6-433a-a9b5-3b14cae04ed3",
        "name": "Bitcoin Audible:CryptoQuikRead 318 - Taproot is Coming  Aaron van Wirdum :undefined",
        "label": "Bitcoin Audible",
        "node_type": "episode",
        "details": {
            "children": [
                "f85c6ac0-926a-497a-85df-efbbc28ec366",
                "6dfb867a-9c18-4767-b80c-f13de6224c57",
                "10243c5d-9c54-47d4-bbf7-6d90cb055751",
                "9e23280e-3368-427e-8abe-841c5804b343"
            ],
            "episode_title": "CryptoQuikRead 318 - Taproot is Coming  Aaron van Wirdum ",
            "guests": [
                "Aaron van Wirdum"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "node_type": "episode",
            "ref_id": "26884d67-6dc6-433a-a9b5-3b14cae04ed3",
            "show_title": "Bitcoin Audible"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "id": "85daa3ba-dc4b-43a1-bab2-436d5d30e5d4",
        "name": "Bitcoin Audible:Read 379 - Dont be Misled by Red Herrings - Treatise on Bitcoin   Privacy Part 2  Giacomo Zucco :undefined",
        "label": "Bitcoin Audible",
        "node_type": "episode",
        "details": {
            "children": [
                "8513010c-8328-4083-a245-468afaee74c2"
            ],
            "episode_title": "Read 379 - Dont be Misled by Red Herrings - Treatise on Bitcoin   Privacy Part 2  Giacomo Zucco ",
            "guests": [
                "Giacomo Zucco"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "node_type": "episode",
            "ref_id": "85daa3ba-dc4b-43a1-bab2-436d5d30e5d4",
            "show_title": "Bitcoin Audible"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "id": "799e8b0e-2d2e-4392-8f92-99252d2336f5",
        "name": "Bitcoin Audible:Chat 44 - 2 Bitcoiners Talking Bitcoin with Citizen Bitcoin:undefined",
        "label": "Bitcoin Audible",
        "node_type": "episode",
        "details": {
            "children": [
                "8ca35d38-aa21-4724-94fb-9855173b60d6",
                "d2c491fa-af50-4fbd-b8ac-5cda0128ab36",
                "16574814-fb92-474c-8145-2a604633f43f"
            ],
            "episode_title": "Chat 44 - 2 Bitcoiners Talking Bitcoin with Citizen Bitcoin",
            "guests": [
                "Brady of Citizen Bitcoin "
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "node_type": "episode",
            "ref_id": "799e8b0e-2d2e-4392-8f92-99252d2336f5",
            "show_title": "Bitcoin Audible"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "id": "dba14fce-5ab7-46f5-915f-a5a0a574aad1",
        "name": "Bitcoin Audible:Read 442 - DLCs are on Bitcoin  New Functionality   Potential  Ben Carman :undefined",
        "label": "Bitcoin Audible",
        "node_type": "episode",
        "details": {
            "children": [
                "882630a1-4f46-4e02-861b-c2273a023803"
            ],
            "episode_title": "Read 442 - DLCs are on Bitcoin  New Functionality   Potential  Ben Carman ",
            "guests": [
                "Ben Carman"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "node_type": "episode",
            "ref_id": "dba14fce-5ab7-46f5-915f-a5a0a574aad1",
            "show_title": "Bitcoin Audible"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "id": "6377c14f-551c-44e2-b0d9-564cd519503a",
        "name": "Bitcoin Audible:Guy s Take  34 - TAPROOT IS MERGED  :undefined",
        "label": "Bitcoin Audible",
        "node_type": "episode",
        "details": {
            "children": [
                "5489aa82-ca13-4d0b-8436-bca9de24a567",
                "c87de52c-2cc7-4c42-9cab-9143eaaf2c34",
                "4717996c-fe96-4356-8bdd-89e6bae75491",
                "6260505d-c26a-4984-831a-4772dac2c992",
                "4970df9b-f365-452d-8ea5-dd52c25e920b",
                "1120be8b-6e08-4781-95bb-a3b51c480940",
                "f495a5c6-3b24-4fc7-b17c-2343cadebaa8"
            ],
            "episode_title": "Guy s Take  34 - TAPROOT IS MERGED  ",
            "guests": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/6377c14f-551c-44e2-b0d9-564cd519503a.jpg",
            "node_type": "episode",
            "ref_id": "6377c14f-551c-44e2-b0d9-564cd519503a",
            "show_title": "Bitcoin Audible"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/6377c14f-551c-44e2-b0d9-564cd519503a_s.jpg",
        "colors": []
    },
    {
        "id": "0b9229a4-8cef-441c-8fc1-8e622616a44a",
        "name": "Bitcoin Audible:Read 464 - Poolin s Initiative to Activate Taproot  Aaron Van Wirdum :undefined",
        "label": "Bitcoin Audible",
        "node_type": "episode",
        "details": {
            "children": [
                "5e309f5f-3d50-4c20-9f2e-73057074ed24",
                "da61205f-ca0c-4220-864f-f0abbe5568e4",
                "b2b21176-307b-488d-b2a1-8e4efc26ce59"
            ],
            "episode_title": "Read 464 - Poolin s Initiative to Activate Taproot  Aaron Van Wirdum ",
            "guests": [
                "Aaron Van Wirdum"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/0b9229a4-8cef-441c-8fc1-8e622616a44a.jpg",
            "node_type": "episode",
            "ref_id": "0b9229a4-8cef-441c-8fc1-8e622616a44a",
            "show_title": "Bitcoin Audible"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/0b9229a4-8cef-441c-8fc1-8e622616a44a_s.jpg",
        "colors": []
    },
    {
        "id": "7f23843d-1b02-4d4c-92c4-b67960a9353d",
        "name": "Bitcoin Audible:Chat  56 - DLCs  PTLCs  the Oracle Problem   More with SuredBits  Nadav:undefined",
        "label": "Bitcoin Audible",
        "node_type": "episode",
        "details": {
            "children": [
                "8df9eee2-9763-4830-a060-bf2d1bee7297"
            ],
            "episode_title": "Chat  56 - DLCs  PTLCs  the Oracle Problem   More with SuredBits  Nadav",
            "guests": [
                "Nadav Kohen"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/7f23843d-1b02-4d4c-92c4-b67960a9353d.jpg",
            "node_type": "episode",
            "ref_id": "7f23843d-1b02-4d4c-92c4-b67960a9353d",
            "show_title": "Bitcoin Audible"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/7f23843d-1b02-4d4c-92c4-b67960a9353d_s.jpg",
        "colors": []
    },
    {
        "id": "fb528095-95df-4028-9c41-73a64623ae72",
        "name": "Bitcoin Audible:Read 502 - LOT true or false  The Last Hurdle for Taproot  Aaron Van Wirdum :undefined",
        "label": "Bitcoin Audible",
        "node_type": "episode",
        "details": {
            "children": [
                "2c8742b7-5ae8-4849-bf66-551641f1245c",
                "8e5ec558-4971-4ccf-aabf-3b56d6b68e8a",
                "b9d66ffd-c9e8-4565-a662-59549803b775",
                "fa39f8c6-b381-4bad-ac53-993b023f72d5"
            ],
            "episode_title": "Read 502 - LOT true or false  The Last Hurdle for Taproot  Aaron Van Wirdum ",
            "guests": [
                "Aaron Van Wirdum"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "node_type": "episode",
            "ref_id": "fb528095-95df-4028-9c41-73a64623ae72",
            "show_title": "Bitcoin Audible"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "id": "25e51131-6ffc-4a3d-a95d-746b8624a20d",
        "name": "Bitcoin Audible:Read 518 - Two Taproot Activation Clients   Aaron Van Wirdum :undefined",
        "label": "Bitcoin Audible",
        "node_type": "episode",
        "details": {
            "children": [
                "9accdae3-e03e-4e2f-8ac6-66bf14c6e9f6",
                "78559909-4296-407d-89b4-2ef1951b236d",
                "e7cbdd17-2a86-4aea-a6d4-5d3f89c5e641"
            ],
            "episode_title": "Read 518 - Two Taproot Activation Clients   Aaron Van Wirdum ",
            "guests": [
                "Aaron Van Wirdum"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "node_type": "episode",
            "ref_id": "25e51131-6ffc-4a3d-a95d-746b8624a20d",
            "show_title": "Bitcoin Audible"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "id": "f5e62320-35cf-4ae0-a5f1-f24a7f40bb02",
        "name": "Bitcoin Audible:Read 584 - Yes  Bitcoin is a Smart Contract Platform  Shinobi :undefined",
        "label": "Bitcoin Audible",
        "node_type": "episode",
        "details": {
            "children": [
                "e6b57553-28bc-4d37-9166-9d441fc360bd"
            ],
            "episode_title": "Read 584 - Yes  Bitcoin is a Smart Contract Platform  Shinobi ",
            "guests": [
                "Shinobi"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "node_type": "episode",
            "ref_id": "f5e62320-35cf-4ae0-a5f1-f24a7f40bb02",
            "show_title": "Bitcoin Audible"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "id": "60eb2037-e396-490a-9a05-2ae94f4ec9fd",
        "name": "Bitcoin Audible:Announcing Taro  Multi-Asset Bitcoin   Lightning  Ryan Gentry :undefined",
        "label": "Bitcoin Audible",
        "node_type": "episode",
        "details": {
            "children": [
                "d804b3e3-6dd7-4df6-a1ef-828359f35f28",
                "b637b2a9-1eb6-4f13-9d4d-f2e360dfa186"
            ],
            "episode_title": "Announcing Taro  Multi-Asset Bitcoin   Lightning  Ryan Gentry ",
            "guests": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "node_type": "episode",
            "ref_id": "60eb2037-e396-490a-9a05-2ae94f4ec9fd",
            "show_title": "Bitcoin Audible"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "id": "b5e63726-7391-4114-80eb-750212533abd",
        "name": "Bitcoin Audible:Read 618 - Expanding Functionality in Lightning Implementations  Shinobi :undefined",
        "label": "Bitcoin Audible",
        "node_type": "episode",
        "details": {
            "children": [
                "3ab3bfd4-226b-407d-9452-3f8cd1f6ed2c"
            ],
            "episode_title": "Read 618 - Expanding Functionality in Lightning Implementations  Shinobi ",
            "guests": [
                "Shinobi"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "node_type": "episode",
            "ref_id": "b5e63726-7391-4114-80eb-750212533abd",
            "show_title": "Bitcoin Audible"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "id": "56212159-545d-4c10-89f2-1d7bfd264b67",
        "name": "Bitcoin Audible:Read 617 - Announcing Taro  Multi-Asset Bitcoin   Lightning  Ryan Gentry :undefined",
        "label": "Bitcoin Audible",
        "node_type": "episode",
        "details": {
            "children": [
                "23cd7491-9ae2-487b-81ef-566ad7a5b788",
                "ea022f77-b773-4315-99ba-d6e4ad9afe84"
            ],
            "episode_title": "Read 617 - Announcing Taro  Multi-Asset Bitcoin   Lightning  Ryan Gentry ",
            "guests": [
                "Ryan Gentry"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "node_type": "episode",
            "ref_id": "56212159-545d-4c10-89f2-1d7bfd264b67",
            "show_title": "Bitcoin Audible"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "id": "5f1cdc90-f610-40df-9821-04df9350583c",
        "name": "Bitcoin Audible:Read 606 - Lightning is a Liquidity Network  Roy Sheinfeld :undefined",
        "label": "Bitcoin Audible",
        "node_type": "episode",
        "details": {
            "children": [
                "dd57eece-2825-4810-8b1d-d6671fb841a2"
            ],
            "episode_title": "Read 606 - Lightning is a Liquidity Network  Roy Sheinfeld ",
            "guests": [
                "Roy Sheinfeld"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "node_type": "episode",
            "ref_id": "5f1cdc90-f610-40df-9821-04df9350583c",
            "show_title": "Bitcoin Audible"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "id": "1b4954a3-4425-4038-94cb-67b27ea6cf31",
        "name": "On the Brink:Mustafa Yiham  Bixin  on the industrial Bitcoin miner perspective:undefined",
        "label": "On the Brink",
        "node_type": "episode",
        "details": {
            "children": [
                "33ec03bb-e9fb-4c9e-bd6c-880c604d4fca"
            ],
            "episode_title": "Mustafa Yiham  Bixin  on the industrial Bitcoin miner perspective",
            "guests": [
                "Mustafa Yiham"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/19ee7484-9568-4a5e-884e-8accb3794058.jpg",
            "node_type": "episode",
            "ref_id": "1b4954a3-4425-4038-94cb-67b27ea6cf31",
            "show_title": "On the Brink"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/19ee7484-9568-4a5e-884e-8accb3794058_s.jpg",
        "colors": []
    },
    {
        "id": "f7ab7d85-8422-4eb9-ba41-cc3348e93ef7",
        "name": "What Bitcoin Did with Peter McCormack:Andrew Poelstra on Schnorr  Taproot   Graft Root Coming to Bitcoin:undefined",
        "label": "What Bitcoin Did with Peter McCormack",
        "node_type": "episode",
        "details": {
            "children": [
                "0deee3e4-0b47-41c7-96de-e502fac0f629"
            ],
            "episode_title": "Andrew Poelstra on Schnorr  Taproot   Graft Root Coming to Bitcoin",
            "guests": [
                "Andrew Poelstra"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/4e607036-8fde-48ef-ab76-9c2ac4bab031.jpg",
            "node_type": "episode",
            "ref_id": "f7ab7d85-8422-4eb9-ba41-cc3348e93ef7",
            "show_title": "What Bitcoin Did with Peter McCormack"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/4e607036-8fde-48ef-ab76-9c2ac4bab031_s.jpg",
        "colors": []
    },
    {
        "id": "3bef96c0-5232-4fac-b6d7-3fb8e295f21f",
        "name": "What Bitcoin Did with Peter McCormack:Pieter Wuille on Building Bitcoin:undefined",
        "label": "What Bitcoin Did with Peter McCormack",
        "node_type": "episode",
        "details": {
            "children": [
                "4545784c-7310-4a33-a308-685419b5dab5"
            ],
            "episode_title": "Pieter Wuille on Building Bitcoin",
            "guests": [
                "Pieter Wuille"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/4e607036-8fde-48ef-ab76-9c2ac4bab031.jpg",
            "node_type": "episode",
            "ref_id": "3bef96c0-5232-4fac-b6d7-3fb8e295f21f",
            "show_title": "What Bitcoin Did with Peter McCormack"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/4e607036-8fde-48ef-ab76-9c2ac4bab031_s.jpg",
        "colors": []
    },
    {
        "id": "3713728d-fdf3-4b1e-8c23-77b284482fea",
        "name": "What Bitcoin Did with Peter McCormack:All Things Bitcoin with Andrew Poelstra  Giacomo Zucco  Jack Mallers  Matt Odell   Nic Carter:undefined",
        "label": "What Bitcoin Did with Peter McCormack",
        "node_type": "episode",
        "details": {
            "children": [
                "9bd03669-3392-4943-8963-ebea35f3b19b",
                "7d6accb1-c46e-4b4b-870e-6d1461b27c74",
                "a8e9c5a4-402b-4f87-8f5f-4c023daa7f9d"
            ],
            "episode_title": "All Things Bitcoin with Andrew Poelstra  Giacomo Zucco  Jack Mallers  Matt Odell   Nic Carter",
            "guests": [
                "Matt Odell & Nic Carter",
                "Jack Mallers",
                "Giacomo Zucco",
                "Andrew Poelstra"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/3713728d-fdf3-4b1e-8c23-77b284482fea.jpg",
            "node_type": "episode",
            "ref_id": "3713728d-fdf3-4b1e-8c23-77b284482fea",
            "show_title": "What Bitcoin Did with Peter McCormack"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/3713728d-fdf3-4b1e-8c23-77b284482fea_s.jpg",
        "colors": []
    },
    {
        "id": "661f9980-75ac-4441-b52f-04b9a67e7975",
        "name": "What Bitcoin Did with Peter McCormack:Becoming a Bitcoin Core Developer with Amiti Uttarwar:undefined",
        "label": "What Bitcoin Did with Peter McCormack",
        "node_type": "episode",
        "details": {
            "children": [
                "0992ba7f-128b-435b-9cb8-8198dbf8bfb9"
            ],
            "episode_title": "Becoming a Bitcoin Core Developer with Amiti Uttarwar",
            "guests": [
                "Amiti Uttarwar"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/661f9980-75ac-4441-b52f-04b9a67e7975.jpg",
            "node_type": "episode",
            "ref_id": "661f9980-75ac-4441-b52f-04b9a67e7975",
            "show_title": "What Bitcoin Did with Peter McCormack"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/661f9980-75ac-4441-b52f-04b9a67e7975_s.jpg",
        "colors": []
    },
    {
        "id": "acf7cb01-d086-42e0-be45-b948bd051898",
        "name": "What Bitcoin Did with Peter McCormack:Funding Bitcoin Development with John Newbery:undefined",
        "label": "What Bitcoin Did with Peter McCormack",
        "node_type": "episode",
        "details": {
            "children": [
                "49b76473-cea5-499b-a09b-d647ba1ad2f5"
            ],
            "episode_title": "Funding Bitcoin Development with John Newbery",
            "guests": [
                "John Newbery"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/acf7cb01-d086-42e0-be45-b948bd051898.jpg",
            "node_type": "episode",
            "ref_id": "acf7cb01-d086-42e0-be45-b948bd051898",
            "show_title": "What Bitcoin Did with Peter McCormack"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/acf7cb01-d086-42e0-be45-b948bd051898_s.jpg",
        "colors": []
    },
    {
        "id": "20d00aaf-fa00-4709-8d2f-f979384ff3ca",
        "name": "What Bitcoin Did with Peter McCormack:2020 Bitcoin Tech Review with Shinobi:undefined",
        "label": "What Bitcoin Did with Peter McCormack",
        "node_type": "episode",
        "details": {
            "children": [
                "7e93d69f-fc51-4831-9c50-0e7fec1c1938"
            ],
            "episode_title": "2020 Bitcoin Tech Review with Shinobi",
            "guests": [
                "Shinobi"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/20d00aaf-fa00-4709-8d2f-f979384ff3ca.jpg",
            "node_type": "episode",
            "ref_id": "20d00aaf-fa00-4709-8d2f-f979384ff3ca",
            "show_title": "What Bitcoin Did with Peter McCormack"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/20d00aaf-fa00-4709-8d2f-f979384ff3ca_s.jpg",
        "colors": []
    },
    {
        "id": "a35bc6bb-8057-4ce6-b64d-c88e951a9262",
        "name": "What Bitcoin Did with Peter McCormack:2020 Bitcoin Review with Matt Odell:undefined",
        "label": "What Bitcoin Did with Peter McCormack",
        "node_type": "episode",
        "details": {
            "children": [
                "afea2ee4-bf9a-48ea-bc44-6e3d254ee11c"
            ],
            "episode_title": "2020 Bitcoin Review with Matt Odell",
            "guests": [
                "Matt Odell"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/a35bc6bb-8057-4ce6-b64d-c88e951a9262.jpg",
            "node_type": "episode",
            "ref_id": "a35bc6bb-8057-4ce6-b64d-c88e951a9262",
            "show_title": "What Bitcoin Did with Peter McCormack"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/a35bc6bb-8057-4ce6-b64d-c88e951a9262_s.jpg",
        "colors": []
    },
    {
        "id": "1454dd5d-1012-4b05-89ba-eb019c218cb4",
        "name": "What Bitcoin Did with Peter McCormack:Bitcoin Tech  2 - Nodes  Part 1 :undefined",
        "label": "What Bitcoin Did with Peter McCormack",
        "node_type": "episode",
        "details": {
            "children": [
                "18f70a0d-b6ad-4424-a6f7-f825a29d3718"
            ],
            "episode_title": "Bitcoin Tech  2 - Nodes  Part 1 ",
            "guests": [
                "Shinobi"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/4e607036-8fde-48ef-ab76-9c2ac4bab031.jpg",
            "node_type": "episode",
            "ref_id": "1454dd5d-1012-4b05-89ba-eb019c218cb4",
            "show_title": "What Bitcoin Did with Peter McCormack"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/4e607036-8fde-48ef-ab76-9c2ac4bab031_s.jpg",
        "colors": []
    },
    {
        "id": "a1be0c08-2b7f-4fae-85ae-71ba91371e3b",
        "name": "What Bitcoin Did with Peter McCormack:El Salvador s Bitcoin Report Card:undefined",
        "label": "What Bitcoin Did with Peter McCormack",
        "node_type": "episode",
        "details": {
            "children": [
                "aaecf108-5b16-48a8-a482-3bc0e207a7de"
            ],
            "episode_title": "El Salvador s Bitcoin Report Card",
            "guests": [
                "Aaron Van Wirdum"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/4e607036-8fde-48ef-ab76-9c2ac4bab031.jpg",
            "node_type": "episode",
            "ref_id": "a1be0c08-2b7f-4fae-85ae-71ba91371e3b",
            "show_title": "What Bitcoin Did with Peter McCormack"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/4e607036-8fde-48ef-ab76-9c2ac4bab031_s.jpg",
        "colors": []
    },
    {
        "id": "a06aaf55-05ef-45d2-875a-5ab50a868b27",
        "name": "Stephan Livera Podcast:Schnorr Taproot Tapscript BIPs:undefined",
        "label": "Stephan Livera Podcast",
        "node_type": "episode",
        "details": {
            "children": [
                "d3181d26-e0f3-45e1-b758-371c5909994a",
                "af1b6078-e933-4bc4-9ef2-c276eecf81ad",
                "57346559-c23a-4f76-931c-6a647675bf66",
                "882373f4-c66b-483d-97ce-6ee5ca5062d7",
                "5fcec958-2719-4562-a624-fa87deb3f4c1",
                "8b002f84-16f4-4a54-b376-ac7b28784e6e",
                "3531a8fc-5d24-46d8-89b1-c993b5e90b5b",
                "532afd6a-f58f-4197-a7b7-6eee90b6d8cd",
                "a65f8d26-c22a-4872-992a-4f499a845126"
            ],
            "episode_title": "Schnorr Taproot Tapscript BIPs",
            "guests": [
                "AJ Towns"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "node_type": "episode",
            "ref_id": "a06aaf55-05ef-45d2-875a-5ab50a868b27",
            "show_title": "Stephan Livera Podcast"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "id": "a861e454-8317-4edb-8c6b-04bba939d1d5",
        "name": "Stephan Livera Podcast:Bitcoin Soft Fork Activation  Taproot  and Playing Chicken:undefined",
        "label": "Stephan Livera Podcast",
        "node_type": "episode",
        "details": {
            "children": [
                "11f89c52-57eb-464d-875b-ecf15a23d4c4",
                "038127f8-95f1-47fe-819f-f0ec7fd01180"
            ],
            "episode_title": "Bitcoin Soft Fork Activation  Taproot  and Playing Chicken",
            "guests": [
                "Matt Corallo"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "node_type": "episode",
            "ref_id": "a861e454-8317-4edb-8c6b-04bba939d1d5",
            "show_title": "Stephan Livera Podcast"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "id": "4bea6c89-43b4-4e5e-9fea-0662d9ee7c00",
        "name": "Stephan Livera Podcast:How Bitcoin UASF went down  taproot lot true  speedy trial  small blocks:undefined",
        "label": "Stephan Livera Podcast",
        "node_type": "episode",
        "details": {
            "children": [
                "b1eabcd8-8d00-4950-b264-f4f2741ca3a7"
            ],
            "episode_title": "How Bitcoin UASF went down  taproot lot true  speedy trial  small blocks",
            "guests": [
                "Luke Dashjr"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "node_type": "episode",
            "ref_id": "4bea6c89-43b4-4e5e-9fea-0662d9ee7c00",
            "show_title": "Stephan Livera Podcast"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "id": "27314235-edb1-4430-a102-d19a53e7ff19",
        "name": "Stephan Livera Podcast:SlushPool Signalling For Taproot:undefined",
        "label": "Stephan Livera Podcast",
        "node_type": "episode",
        "details": {
            "children": [
                "5b042489-fa11-42cb-b5d7-249defe0feb2",
                "b81cce1c-6ed9-4c50-beeb-3b476e836516",
                "40292a36-54d9-4f4c-b732-958b844478fe",
                "39b8fefb-7783-4c85-8139-f0d8bd968c46",
                "08e1e993-d816-40ee-848d-0ad5587fb823",
                "6179f78c-1ade-49d0-8219-738704fb85a8"
            ],
            "episode_title": "SlushPool Signalling For Taproot",
            "guests": [
                "Pavel Moravec"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "node_type": "episode",
            "ref_id": "27314235-edb1-4430-a102-d19a53e7ff19",
            "show_title": "Stephan Livera Podcast"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "id": "d232e74a-8cf2-4b0c-9e0b-f7a1d376f5bf",
        "name": "Stephan Livera Podcast:Ledger s New Bitcoin App:undefined",
        "label": "Stephan Livera Podcast",
        "node_type": "episode",
        "details": {
            "children": [
                "c7202fd2-be86-4325-97ec-fb961829e55a"
            ],
            "episode_title": "Ledger s New Bitcoin App",
            "guests": [
                "Salvatore Ingala"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "node_type": "episode",
            "ref_id": "d232e74a-8cf2-4b0c-9e0b-f7a1d376f5bf",
            "show_title": "Stephan Livera Podcast"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "id": "2210cf14-eb63-432a-82ef-ae5aa4e90741",
        "name": "Blockstream Talk:Fork Wars   the Biggest Innovations Happening in Bitcoin:undefined",
        "label": "Blockstream Talk",
        "node_type": "episode",
        "details": {
            "children": [
                "76490d63-51a7-4882-bc94-b1501eed58a4"
            ],
            "episode_title": "Fork Wars   the Biggest Innovations Happening in Bitcoin",
            "guests": [
                "Jonas Nick"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/12db0692-468b-4d0e-a73d-cfd33643aed7.jpg",
            "node_type": "episode",
            "ref_id": "2210cf14-eb63-432a-82ef-ae5aa4e90741",
            "show_title": "Blockstream Talk"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/12db0692-468b-4d0e-a73d-cfd33643aed7_s.jpg",
        "colors": []
    },
    {
        "id": "b8a8edf8-bbe7-45c7-9fb9-5673acb4d1bd",
        "name": "BTC Sessions:NEWS ROUNDUP  BTC Price Spikes With Inflation  Taproot Activation Imminent ep214:undefined",
        "label": "BTC Sessions",
        "node_type": "episode",
        "details": {
            "children": [
                "fd743028-4776-4f63-aad8-5f6b9bbce7fe"
            ],
            "episode_title": "NEWS ROUNDUP  BTC Price Spikes With Inflation  Taproot Activation Imminent ep214",
            "guests": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b8a8edf8-bbe7-45c7-9fb9-5673acb4d1bd.jpg",
            "node_type": "episode",
            "ref_id": "b8a8edf8-bbe7-45c7-9fb9-5673acb4d1bd",
            "show_title": "BTC Sessions"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b8a8edf8-bbe7-45c7-9fb9-5673acb4d1bd_s.jpg",
        "colors": []
    },
    {
        "id": "f3b67780-d9c2-4a20-ab5c-115032a05b3a",
        "name": "BTC Sessions:WHY ARE WE BULLISH  JoeyTweets  Mario Gibney  Bobby Shell  Len ep215:undefined",
        "label": "BTC Sessions",
        "node_type": "episode",
        "details": {
            "children": [
                "71fa6f0c-e19c-480e-ad2e-1aee6e746990"
            ],
            "episode_title": "WHY ARE WE BULLISH  JoeyTweets  Mario Gibney  Bobby Shell  Len ep215",
            "guests": [
                "Len",
                "Bobby Shell",
                "Mario Gibney",
                "JoeyTweets"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/f3b67780-d9c2-4a20-ab5c-115032a05b3a.jpg",
            "node_type": "episode",
            "ref_id": "f3b67780-d9c2-4a20-ab5c-115032a05b3a",
            "show_title": "BTC Sessions"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/f3b67780-d9c2-4a20-ab5c-115032a05b3a_s.jpg",
        "colors": []
    },
    {
        "id": "eeca50f4-77ab-453f-bb40-f7432087759f",
        "name": "BTC Sessions:NEWS ROUNDUP  The Wreckage Of Blockfi  3AC  Celsius and More ep269:undefined",
        "label": "BTC Sessions",
        "node_type": "episode",
        "details": {
            "children": [
                "d98d678b-6a08-4d74-9dea-ed91e5b34830"
            ],
            "episode_title": "NEWS ROUNDUP  The Wreckage Of Blockfi  3AC  Celsius and More ep269",
            "guests": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/eeca50f4-77ab-453f-bb40-f7432087759f.jpg",
            "node_type": "episode",
            "ref_id": "eeca50f4-77ab-453f-bb40-f7432087759f",
            "show_title": "BTC Sessions"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/eeca50f4-77ab-453f-bb40-f7432087759f_s.jpg",
        "colors": []
    },
    {
        "id": "de744984-4b8b-457b-84b8-376288f1a2d6",
        "name": "BTC Sessions:WHY ARE WE BULLISH  Bruce Fenton  Len From CAD BTC Pod  Guy Swann ep265:undefined",
        "label": "BTC Sessions",
        "node_type": "episode",
        "details": {
            "children": [
                "bf80a754-90ab-49e6-848b-788d2d4e672b"
            ],
            "episode_title": "WHY ARE WE BULLISH  Bruce Fenton  Len From CAD BTC Pod  Guy Swann ep265",
            "guests": [
                "Guy Swann",
                "Len From CAD BTC Pod",
                "Bruce Fenton"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/de744984-4b8b-457b-84b8-376288f1a2d6.jpg",
            "node_type": "episode",
            "ref_id": "de744984-4b8b-457b-84b8-376288f1a2d6",
            "show_title": "BTC Sessions"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/de744984-4b8b-457b-84b8-376288f1a2d6_s.jpg",
        "colors": []
    },
    {
        "id": "2b065676-16bf-4e39-840d-150b202eeaeb",
        "name": "Down The Rabbit Hole with Kaz:The Biology of Bitcoin:undefined",
        "label": "Down The Rabbit Hole with Kaz",
        "node_type": "episode",
        "details": {
            "children": [
                "e1a13903-4269-48ba-b885-d7a8f343b9cc"
            ],
            "episode_title": "The Biology of Bitcoin",
            "guests": [
                "Gigi"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/d477227d-0df7-48fe-8832-349e78c5f1c3.jpg",
            "node_type": "episode",
            "ref_id": "2b065676-16bf-4e39-840d-150b202eeaeb",
            "show_title": "Down The Rabbit Hole with Kaz"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/d477227d-0df7-48fe-8832-349e78c5f1c3_s.jpg",
        "colors": []
    },
    {
        "id": "1dc3a8d9-4ccc-4e76-9d76-c81cf65e129b",
        "name": "Down The Rabbit Hole with Kaz:Bitcoin Tech:undefined",
        "label": "Down The Rabbit Hole with Kaz",
        "node_type": "episode",
        "details": {
            "children": [
                "e33ee8de-02f6-445a-9850-4068ffb04bb7"
            ],
            "episode_title": "Bitcoin Tech",
            "guests": [
                "Ben Carman & Nadav Kohen"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/d477227d-0df7-48fe-8832-349e78c5f1c3.jpg",
            "node_type": "episode",
            "ref_id": "1dc3a8d9-4ccc-4e76-9d76-c81cf65e129b",
            "show_title": "Down The Rabbit Hole with Kaz"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/d477227d-0df7-48fe-8832-349e78c5f1c3_s.jpg",
        "colors": []
    },
    {
        "id": "0aa654da-c4ad-4c9f-9c95-6443c73cdc26",
        "name": "The Anita Posch Show  A Bitcoin Only Podcast:Andreas M. Antonopoulos  Bitcoin Outlook 2021:undefined",
        "label": "The Anita Posch Show  A Bitcoin Only Podcast",
        "node_type": "episode",
        "details": {
            "children": [
                "408df8f4-586d-49d0-b9e3-bb418e3b3913"
            ],
            "episode_title": "Andreas M. Antonopoulos  Bitcoin Outlook 2021",
            "guests": [
                "Andrea M. Antonopoulos"
            ],
            "image_url": "",
            "node_type": "episode",
            "ref_id": "0aa654da-c4ad-4c9f-9c95-6443c73cdc26",
            "show_title": "The Anita Posch Show  A Bitcoin Only Podcast"
        },
        "image_url": "",
        "colors": []
    },
    {
        "id": "957ccdc7-498c-47c9-9ad4-d48f0a8be582",
        "name": "The Anita Posch Show  A Bitcoin Only Podcast:Unleashing Bitcoin s Full Potential:undefined",
        "label": "The Anita Posch Show  A Bitcoin Only Podcast",
        "node_type": "episode",
        "details": {
            "children": [
                "d79e8026-6d6b-4b76-b004-4ff835fe9e0e"
            ],
            "episode_title": "Unleashing Bitcoin s Full Potential",
            "guests": [
                "Carel van Wyk"
            ],
            "image_url": "",
            "node_type": "episode",
            "ref_id": "957ccdc7-498c-47c9-9ad4-d48f0a8be582",
            "show_title": "The Anita Posch Show  A Bitcoin Only Podcast"
        },
        "image_url": "",
        "colors": []
    },
    {
        "id": "d58011ba-e6d6-43b0-9f3c-b4e104d13306",
        "name": "The Anita Posch Show  A Bitcoin Only Podcast:Lightning - The Future of Payments:undefined",
        "label": "The Anita Posch Show  A Bitcoin Only Podcast",
        "node_type": "episode",
        "details": {
            "children": [
                "88114a5e-e654-4575-af17-6498bd00a927",
                "5a8d67cc-8b2e-46eb-9da5-c51fc9d7abeb",
                "f310a8a8-6925-4897-be99-b49f91960e41"
            ],
            "episode_title": "Lightning - The Future of Payments",
            "guests": [
                "Johannes Zweng"
            ],
            "image_url": "",
            "node_type": "episode",
            "ref_id": "d58011ba-e6d6-43b0-9f3c-b4e104d13306",
            "show_title": "The Anita Posch Show  A Bitcoin Only Podcast"
        },
        "image_url": "",
        "colors": []
    },
    {
        "id": "f1d3cf59-0135-45d9-8a38-25840c674503",
        "name": "The Anita Posch Show  A Bitcoin Only Podcast:The Lightning Network and Greenlight Nodes:undefined",
        "label": "The Anita Posch Show  A Bitcoin Only Podcast",
        "node_type": "episode",
        "details": {
            "children": [
                "3941e5ce-f698-4acd-a32e-b5fc6685b528"
            ],
            "episode_title": "The Lightning Network and Greenlight Nodes",
            "guests": [
                "Christian Decker"
            ],
            "image_url": "",
            "node_type": "episode",
            "ref_id": "f1d3cf59-0135-45d9-8a38-25840c674503",
            "show_title": "The Anita Posch Show  A Bitcoin Only Podcast"
        },
        "image_url": "",
        "colors": []
    },
    {
        "id": "a7518cec-87bc-4bed-ab34-85f1b9bd2b89",
        "name": "The Anita Posch Show  A Bitcoin Only Podcast:Lightning Unleashes Bitcoin:undefined",
        "label": "The Anita Posch Show  A Bitcoin Only Podcast",
        "node_type": "episode",
        "details": {
            "children": [
                "497e05fa-3a59-4dc5-8f27-6c99b95a5e27"
            ],
            "episode_title": "Lightning Unleashes Bitcoin",
            "guests": [
                "Andreas M. Antonopoulos"
            ],
            "image_url": "",
            "node_type": "episode",
            "ref_id": "a7518cec-87bc-4bed-ab34-85f1b9bd2b89",
            "show_title": "The Anita Posch Show  A Bitcoin Only Podcast"
        },
        "image_url": "",
        "colors": []
    },
    {
        "id": "2668979c-b4dd-4794-b42b-2fcd5b9dfdaf",
        "name": "The Anita Posch Show  A Bitcoin Only Podcast:A New Bitcoin Epoch - Legal Tender in El Salvador:undefined",
        "label": "The Anita Posch Show  A Bitcoin Only Podcast",
        "node_type": "episode",
        "details": {
            "children": [
                "d415962a-2461-4cc3-a3a4-4fe8e239310e"
            ],
            "episode_title": "A New Bitcoin Epoch - Legal Tender in El Salvador",
            "guests": [
                "Anita Posch"
            ],
            "image_url": "",
            "node_type": "episode",
            "ref_id": "2668979c-b4dd-4794-b42b-2fcd5b9dfdaf",
            "show_title": "The Anita Posch Show  A Bitcoin Only Podcast"
        },
        "image_url": "",
        "colors": []
    },
    {
        "id": "ef1cad08-fb65-48c3-928e-9b2cbc5a908d",
        "name": "The Anita Posch Show  A Bitcoin Only Podcast:Bitcoin on the Moon - Last Week in Bitcoin:undefined",
        "label": "The Anita Posch Show  A Bitcoin Only Podcast",
        "node_type": "episode",
        "details": {
            "children": [
                "21fa7758-8c64-4498-af23-473137bb62d5"
            ],
            "episode_title": "Bitcoin on the Moon - Last Week in Bitcoin",
            "guests": [
                "Anita Posch"
            ],
            "image_url": "",
            "node_type": "episode",
            "ref_id": "ef1cad08-fb65-48c3-928e-9b2cbc5a908d",
            "show_title": "The Anita Posch Show  A Bitcoin Only Podcast"
        },
        "image_url": "",
        "colors": []
    },
    {
        "id": "87eb3f5b-7fec-424e-9b3a-6f6a6975daa6",
        "name": "The Anita Posch Show  A Bitcoin Only Podcast:Last Week in Bitcoin  Keep Calm and Carry On:undefined",
        "label": "The Anita Posch Show  A Bitcoin Only Podcast",
        "node_type": "episode",
        "details": {
            "children": [
                "bf196483-5d36-413f-ad0f-06aa91b965f9"
            ],
            "episode_title": "Last Week in Bitcoin  Keep Calm and Carry On",
            "guests": [
                "Anita Posch"
            ],
            "image_url": "",
            "node_type": "episode",
            "ref_id": "87eb3f5b-7fec-424e-9b3a-6f6a6975daa6",
            "show_title": "The Anita Posch Show  A Bitcoin Only Podcast"
        },
        "image_url": "",
        "colors": []
    },
    {
        "id": "340a1d98-a6f8-41a6-bdd9-bcf92e8122ce",
        "name": "The Anita Posch Show  A Bitcoin Only Podcast:Last Week in Bitcoin  Don t Mess with Bitcoin:undefined",
        "label": "The Anita Posch Show  A Bitcoin Only Podcast",
        "node_type": "episode",
        "details": {
            "children": [
                "346e5c8a-3eb5-489f-9443-8f5a09520cfe"
            ],
            "episode_title": "Last Week in Bitcoin  Don t Mess with Bitcoin",
            "guests": [
                "Anita Posch"
            ],
            "image_url": "",
            "node_type": "episode",
            "ref_id": "340a1d98-a6f8-41a6-bdd9-bcf92e8122ce",
            "show_title": "The Anita Posch Show  A Bitcoin Only Podcast"
        },
        "image_url": "",
        "colors": []
    },
    {
        "id": "10467934-fd14-44ac-be77-7b84dd8feabf",
        "name": "Tales From The Crypt:Rabbit Hole Recap  Bitcoin Week of 2021.06.14:undefined",
        "label": "Tales From The Crypt",
        "node_type": "episode",
        "details": {
            "children": [
                "87e0b2ad-0e08-452f-a801-c6b0ea6e31a0"
            ],
            "episode_title": "Rabbit Hole Recap  Bitcoin Week of 2021.06.14",
            "guests": [
                "Matt Odell"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2.jpg",
            "node_type": "episode",
            "ref_id": "10467934-fd14-44ac-be77-7b84dd8feabf",
            "show_title": "Tales From The Crypt"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2_s.jpg",
        "colors": []
    },
    {
        "id": "fcf66730-dd46-4601-b152-c70aad47b5b4",
        "name": "Tales From The Crypt:Rabbit Hole Recap  Bitcoin Week of 2021.11.08:undefined",
        "label": "Tales From The Crypt",
        "node_type": "episode",
        "details": {
            "children": [
                "0a6e3ab0-1fbd-4593-94b0-b1ab4d7400cc"
            ],
            "episode_title": "Rabbit Hole Recap  Bitcoin Week of 2021.11.08",
            "guests": [
                "Matt Odell"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2.jpg",
            "node_type": "episode",
            "ref_id": "fcf66730-dd46-4601-b152-c70aad47b5b4",
            "show_title": "Tales From The Crypt"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2_s.jpg",
        "colors": []
    },
    {
        "id": "0eeb0783-3f6d-4fd3-bb3b-6cca2964690a",
        "name": "Tales From The Crypt:Rabbit Hole Recap  Bitcoin Week of 2021.11.15:undefined",
        "label": "Tales From The Crypt",
        "node_type": "episode",
        "details": {
            "children": [
                "6690561a-c33c-4409-ad7a-dad8a20d649f"
            ],
            "episode_title": "Rabbit Hole Recap  Bitcoin Week of 2021.11.15",
            "guests": [
                "Matt Odell"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2.jpg",
            "node_type": "episode",
            "ref_id": "0eeb0783-3f6d-4fd3-bb3b-6cca2964690a",
            "show_title": "Tales From The Crypt"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2_s.jpg",
        "colors": []
    },
    {
        "id": "80d73d47-eb05-40ca-9c28-3332a70e9d2e",
        "name": "Tales From The Crypt:Rabbit Hole Recap  175  Don t live in fear:undefined",
        "label": "Tales From The Crypt",
        "node_type": "episode",
        "details": {
            "children": [
                "604b395b-403b-440c-b2e3-d82e5fda158c"
            ],
            "episode_title": "Rabbit Hole Recap  175  Don t live in fear",
            "guests": [
                "Matt Odell"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2.jpg",
            "node_type": "episode",
            "ref_id": "80d73d47-eb05-40ca-9c28-3332a70e9d2e",
            "show_title": "Tales From The Crypt"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2_s.jpg",
        "colors": []
    },
    {
        "id": "91621fc7-77be-4567-b1de-c3e69abe5680",
        "name": "Tales From The Crypt:Rabbit Hole Recap  176  Party rip:undefined",
        "label": "Tales From The Crypt",
        "node_type": "episode",
        "details": {
            "children": [
                "b2e261a3-527a-42b3-a876-62008723e8b9"
            ],
            "episode_title": "Rabbit Hole Recap  176  Party rip",
            "guests": [
                "Matt Odell"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2.jpg",
            "node_type": "episode",
            "ref_id": "91621fc7-77be-4567-b1de-c3e69abe5680",
            "show_title": "Tales From The Crypt"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2_s.jpg",
        "colors": []
    },
    {
        "id": "ec4b942d-a733-4503-ac2e-178e417e3a5f",
        "name": "Tales From The Crypt:Avoiding oblivion  the state of Chicago  and bitcoin smart contracts with Chris Stewart:undefined",
        "label": "Tales From The Crypt",
        "node_type": "episode",
        "details": {
            "children": [
                "0ad52c64-3f14-4a12-8fd3-b3d1578dba88"
            ],
            "episode_title": "Avoiding oblivion  the state of Chicago  and bitcoin smart contracts with Chris Stewart",
            "guests": [
                "Chris Stewart"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2.jpg",
            "node_type": "episode",
            "ref_id": "ec4b942d-a733-4503-ac2e-178e417e3a5f",
            "show_title": "Tales From The Crypt"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2_s.jpg",
        "colors": []
    },
    {
        "id": "bafb3d84-2b80-4fab-b16e-fe3775a55e08",
        "name": "Tales From The Crypt:Understanding Taro with Olaoluwa Osuntokun:undefined",
        "label": "Tales From The Crypt",
        "node_type": "episode",
        "details": {
            "children": [
                "41facde0-1cbf-471a-9c0d-42a05fd66791"
            ],
            "episode_title": "Understanding Taro with Olaoluwa Osuntokun",
            "guests": [
                "Olaoluwa Osuntokun"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2.jpg",
            "node_type": "episode",
            "ref_id": "bafb3d84-2b80-4fab-b16e-fe3775a55e08",
            "show_title": "Tales From The Crypt"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2_s.jpg",
        "colors": []
    },
    {
        "id": "8b2ddee5-a490-45a5-a47e-4be6e95d7867",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Explaining Taproot:undefined",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "node_type": "episode",
        "details": {
            "children": [
                "2edc5ed8-1a77-4ba4-8ecc-c501d5223c79"
            ],
            "episode_title": "Explaining Taproot",
            "guests": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "node_type": "episode",
            "ref_id": "8b2ddee5-a490-45a5-a47e-4be6e95d7867",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "id": "db58f6c4-510f-4be4-bc0b-546f1dc17cda",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Payment Pools and Taproot:undefined",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "node_type": "episode",
        "details": {
            "children": [
                "43b07e80-d3bc-49a4-8b46-876679de936d"
            ],
            "episode_title": "Payment Pools and Taproot",
            "guests": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "node_type": "episode",
            "ref_id": "db58f6c4-510f-4be4-bc0b-546f1dc17cda",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "id": "eb7b7e66-2ee6-4f56-a3b3-7823227f5019",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Schnorr Signatures and Libsec256k9:undefined",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "node_type": "episode",
        "details": {
            "children": [
                "80882cf0-026e-461b-b399-145e39dd20db"
            ],
            "episode_title": "Schnorr Signatures and Libsec256k9",
            "guests": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "node_type": "episode",
            "ref_id": "eb7b7e66-2ee6-4f56-a3b3-7823227f5019",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "id": "76b9d659-9163-41e6-96f1-cb3ac3812c25",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Explaining Signet:undefined",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "node_type": "episode",
        "details": {
            "children": [
                "c74f22fd-fb43-4e9e-a7d1-ea5fd00ecaa2"
            ],
            "episode_title": "Explaining Signet",
            "guests": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "node_type": "episode",
            "ref_id": "76b9d659-9163-41e6-96f1-cb3ac3812c25",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "id": "930b3f95-4416-442d-bc8b-b6902f179501",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Explaining Taproot Activation and LOT True VS LOT False - NADO 29:undefined",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "node_type": "episode",
        "details": {
            "children": [
                "aa2f5f8a-cbeb-4103-ac48-4eaee97bd7a5"
            ],
            "episode_title": "Explaining Taproot Activation and LOT True VS LOT False - NADO 29",
            "guests": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "node_type": "episode",
            "ref_id": "930b3f95-4416-442d-bc8b-b6902f179501",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "id": "fdb77652-139a-46b3-8c86-837e536f07ab",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Payment Pools and Taproot - NADO 6:undefined",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "node_type": "episode",
        "details": {
            "children": [
                "00d21ae6-f66c-4eb3-9ee2-fe78f2f3aea4",
                "58fb39e5-3669-42fb-9d41-9a6b272bb767"
            ],
            "episode_title": "Payment Pools and Taproot - NADO 6",
            "guests": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "node_type": "episode",
            "ref_id": "fdb77652-139a-46b3-8c86-837e536f07ab",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "id": "a64d3011-a305-4883-bf1f-8c3933535a24",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Taproot Lock-in - NADO 40:undefined",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "node_type": "episode",
        "details": {
            "children": [
                "e2bee60e-9ff2-4a70-9324-820f1b857c3a"
            ],
            "episode_title": "Taproot Lock-in - NADO 40",
            "guests": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/a64d3011-a305-4883-bf1f-8c3933535a24.jpg",
            "node_type": "episode",
            "ref_id": "a64d3011-a305-4883-bf1f-8c3933535a24",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/a64d3011-a305-4883-bf1f-8c3933535a24_s.jpg",
        "colors": []
    },
    {
        "id": "b418491a-480d-451b-993a-9a7ac4d3a70a",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Silent Payments:undefined",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "node_type": "episode",
        "details": {
            "children": [
                "2d62784c-27da-40cf-bef5-c354d590fc10"
            ],
            "episode_title": "Silent Payments",
            "guests": [
                "Ruben Somsen"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "node_type": "episode",
            "ref_id": "b418491a-480d-451b-993a-9a7ac4d3a70a",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "id": "65111f32-3216-48aa-a705-8de94e2cf612",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Bitcoin Core 23.0:undefined",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "node_type": "episode",
        "details": {
            "children": [
                "4f4cdf02-0255-4c69-9845-cf518738ffc5"
            ],
            "episode_title": "Bitcoin Core 23.0",
            "guests": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "node_type": "episode",
            "ref_id": "65111f32-3216-48aa-a705-8de94e2cf612",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "id": "95d85cb7-713a-4043-8f85-3dca2be94e54",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Burying Soft Forks:undefined",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "node_type": "episode",
        "details": {
            "children": [
                "1ab56cd4-4234-4007-b557-bc12d1ab5656"
            ],
            "episode_title": "Burying Soft Forks",
            "guests": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "node_type": "episode",
            "ref_id": "95d85cb7-713a-4043-8f85-3dca2be94e54",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "id": "ad1b2aec-3ac1-4b27-b1de-8953e7b35f5f",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Lightning Network Upgrades  Eltoo   SIGHASH ANYPREVOUT :undefined",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "node_type": "episode",
        "details": {
            "children": [
                "32114f7e-9d5d-41f6-ada7-427d637772d0"
            ],
            "episode_title": "Lightning Network Upgrades  Eltoo   SIGHASH ANYPREVOUT ",
            "guests": [
                "Christian Decker"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "node_type": "episode",
            "ref_id": "ad1b2aec-3ac1-4b27-b1de-8953e7b35f5f",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "id": "b27bb18e-0cc0-4f54-b4a8-20c089e449e4",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Bitcoin Core 22.0 Explained:undefined",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "node_type": "episode",
        "details": {
            "children": [
                "43e6a66f-8657-4f64-8f84-252a12a72eef"
            ],
            "episode_title": "Bitcoin Core 22.0 Explained",
            "guests": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "node_type": "episode",
            "ref_id": "b27bb18e-0cc0-4f54-b4a8-20c089e449e4",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "id": "fb744b69-f7ae-4e05-9a07-90aa98401b68",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Taproot Lock-in:undefined",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "node_type": "episode",
        "details": {
            "children": [
                "65d8d2ef-6006-4534-8399-ce5017aaa545",
                "6e15a1db-149f-4c46-8585-d400a1710a6e",
                "4d52d59f-a0f7-49db-a970-a9f2d4cd4fde",
                "f3171191-b05c-41bf-b99d-ad9dbb694aab"
            ],
            "episode_title": "Taproot Lock-in",
            "guests": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "node_type": "episode",
            "ref_id": "fb744b69-f7ae-4e05-9a07-90aa98401b68",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "id": "ed0ffb2b-01d3-4746-b0d9-a3150aeca69c",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Mara Pool and Mining Censorship:undefined",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "node_type": "episode",
        "details": {
            "children": [
                "f7f74648-a369-4976-a0ac-11373607a471"
            ],
            "episode_title": "Mara Pool and Mining Censorship",
            "guests": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "node_type": "episode",
            "ref_id": "ed0ffb2b-01d3-4746-b0d9-a3150aeca69c",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "id": "4d50e67e-8152-4ca1-875f-6b4d5f4ace2e",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Taproot Activation Update  Speedy Trial And The LOT True Client:undefined",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "node_type": "episode",
        "details": {
            "children": [
                "f7d0933e-06a4-4080-9049-307b26d11bba",
                "caf06f30-e6c8-4d90-b0fb-e40668218f83",
                "757ae3e5-9650-4877-aa8c-f4f60a0c92f1"
            ],
            "episode_title": "Taproot Activation Update  Speedy Trial And The LOT True Client",
            "guests": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "node_type": "episode",
            "ref_id": "4d50e67e-8152-4ca1-875f-6b4d5f4ace2e",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "id": "0ee39e5d-4caa-4022-94c7-7905b6c5e6a3",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Explaining Taproot Activation and LOT True VS LOT False -:undefined",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "node_type": "episode",
        "details": {
            "children": [
                "a60a9981-7cb1-4594-81c9-103f7c8ae40f",
                "ab59ee25-c115-458e-acc7-2dd200401590",
                "105c8501-1967-40f5-bf0a-3974c60b4416",
                "ab34d27e-9340-4413-b0d8-3b170d206f49"
            ],
            "episode_title": "Explaining Taproot Activation and LOT True VS LOT False -",
            "guests": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "node_type": "episode",
            "ref_id": "0ee39e5d-4caa-4022-94c7-7905b6c5e6a3",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "id": "0cda7cd8-1deb-44ab-9518-45dc7dbf4a28",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:Bitcoin Core 0.21.7:undefined",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "node_type": "episode",
        "details": {
            "children": [
                "50e37d1a-6668-4319-8ccf-d9f049d325eb"
            ],
            "episode_title": "Bitcoin Core 0.21.7",
            "guests": [],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "node_type": "episode",
            "ref_id": "0cda7cd8-1deb-44ab-9518-45dc7dbf4a28",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "id": "d5c1d55c-73ee-4d1a-bfb4-927f1e706360",
        "name": "Bitcoin Fixes This:Bitcoin Fixes This  71  Listener Questions with Jimmy Song:undefined",
        "label": "Bitcoin Fixes This",
        "node_type": "episode",
        "details": {
            "children": [
                "fcbf51f9-6bcc-4b91-885e-ac223665ba2f",
                "d6d8f43a-76c1-4d14-83fb-a2f463e87d0b",
                "c966ea9f-e256-4d55-910f-c87ac52e0aa9",
                "a4ee427d-a4a8-4321-9e1e-b0121b4cf572",
                "80a70dde-ca15-4176-905a-42dfeafab63f"
            ],
            "episode_title": "Bitcoin Fixes This  71  Listener Questions with Jimmy Song",
            "guests": [
                "None"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/d5c1d55c-73ee-4d1a-bfb4-927f1e706360.jpg",
            "node_type": "episode",
            "ref_id": "d5c1d55c-73ee-4d1a-bfb4-927f1e706360",
            "show_title": "Bitcoin Fixes This"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/d5c1d55c-73ee-4d1a-bfb4-927f1e706360_s.jpg",
        "colors": []
    },
    {
        "id": "df8d58ac-c7c0-4758-91c1-c0439dd4c656",
        "name": "Bitcoin Fixes This:Bitcoin Fixes This  46  Listener Questions with Jimmy Song:undefined",
        "label": "Bitcoin Fixes This",
        "node_type": "episode",
        "details": {
            "children": [
                "745de5fd-5861-412d-9001-3dbad79c72ea",
                "dd4fe6e9-9ce4-4ebb-909e-8dd3dc7fef72",
                "ebce2e4e-1844-44b0-9e03-9d56ae956691",
                "eecfa4ca-b53e-4e06-b320-d482eaf20e1b",
                "d5647a9d-9ad1-401e-91e9-0acc67057727"
            ],
            "episode_title": "Bitcoin Fixes This  46  Listener Questions with Jimmy Song",
            "guests": [
                "None"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/3e178b7d-b8b9-4fd4-ba36-017b834537da.jpg",
            "node_type": "episode",
            "ref_id": "df8d58ac-c7c0-4758-91c1-c0439dd4c656",
            "show_title": "Bitcoin Fixes This"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/3e178b7d-b8b9-4fd4-ba36-017b834537da_s.jpg",
        "colors": []
    },
    {
        "id": "dbcd092c-b06d-483c-8d9d-c64a558fd5f1",
        "name": "Bitcoin Magazine Podcast:Why Everybody Is Choosing Lightning w  Alysee Killeen:undefined",
        "label": "Bitcoin Magazine Podcast",
        "node_type": "episode",
        "details": {
            "children": [
                "f4c17f9d-9e6b-4714-84a9-b4f41219e260"
            ],
            "episode_title": "Why Everybody Is Choosing Lightning w  Alysee Killeen",
            "guests": [
                "Alysee Killeen"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1583c7c4-f4f2-4e52-8f27-a1eaeb6289fd.jpg",
            "node_type": "episode",
            "ref_id": "dbcd092c-b06d-483c-8d9d-c64a558fd5f1",
            "show_title": "Bitcoin Magazine Podcast"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1583c7c4-f4f2-4e52-8f27-a1eaeb6289fd_s.jpg",
        "colors": []
    },
    {
        "id": "13cb85e2-a530-48a7-9e4e-266532205464",
        "name": "Noded Bitcoin Podcast:Pete Rizzo:undefined",
        "label": "Noded Bitcoin Podcast",
        "node_type": "episode",
        "details": {
            "children": [
                "9d7f6104-9050-43cd-bfbd-db2273ff26af"
            ],
            "episode_title": "Pete Rizzo",
            "guests": [
                "Pete Rizzo"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/0a24ff3e-9e22-42dc-9d73-70d54d85d45c.jpg",
            "node_type": "episode",
            "ref_id": "13cb85e2-a530-48a7-9e4e-266532205464",
            "show_title": "Noded Bitcoin Podcast"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/0a24ff3e-9e22-42dc-9d73-70d54d85d45c_s.jpg",
        "colors": []
    },
    {
        "id": "ef719c66-f40e-42ff-b736-0d8cd56cbc3e",
        "name": "Once Bitten  A Bitcoin Podcast.: edstromandrew and  bruce pullman discuss Investment Strategies   200:undefined",
        "label": "Once Bitten  A Bitcoin Podcast.",
        "node_type": "episode",
        "details": {
            "children": [
                "94a52af9-372d-4e88-9272-649a49c1fa57"
            ],
            "episode_title": " edstromandrew and  bruce pullman discuss Investment Strategies   200",
            "guests": [
                "Andrew Edstrom&Bruce Pullman"
            ],
            "image_url": "",
            "node_type": "episode",
            "ref_id": "ef719c66-f40e-42ff-b736-0d8cd56cbc3e",
            "show_title": "Once Bitten  A Bitcoin Podcast."
        },
        "image_url": "",
        "colors": []
    },
    {
        "id": "0aea63c5-98f4-446f-b5af-1c27b792ae7e",
        "name": "Once Bitten  A Bitcoin Podcast.: douglasbakkum - Does Airgap Make Bitcoin Hardware Wallets More Secure   214:undefined",
        "label": "Once Bitten  A Bitcoin Podcast.",
        "node_type": "episode",
        "details": {
            "children": [
                "5b3d17d2-8e1e-4248-bc2e-4ae2e531a4c2"
            ],
            "episode_title": " douglasbakkum - Does Airgap Make Bitcoin Hardware Wallets More Secure   214",
            "guests": [
                "Douglas Bakkum"
            ],
            "image_url": "",
            "node_type": "episode",
            "ref_id": "0aea63c5-98f4-446f-b5af-1c27b792ae7e",
            "show_title": "Once Bitten  A Bitcoin Podcast."
        },
        "image_url": "",
        "colors": []
    },
    {
        "id": "75234f92-e025-41d4-b1d9-edb2c9143f46",
        "name": "Coin Stories with Natalie Brunell:Lyn Alden  Bitcoin  Bear Market and What s Ahead:undefined",
        "label": "Coin Stories with Natalie Brunell",
        "node_type": "episode",
        "details": {
            "children": [
                "5563d4e7-6474-4337-bf62-19817aeae380"
            ],
            "episode_title": "Lyn Alden  Bitcoin  Bear Market and What s Ahead",
            "guests": [
                "Lyn Alden"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/8ad86341-0063-41e7-a78c-27d43c150c5c.jpg",
            "node_type": "episode",
            "ref_id": "75234f92-e025-41d4-b1d9-edb2c9143f46",
            "show_title": "Coin Stories with Natalie Brunell"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/8ad86341-0063-41e7-a78c-27d43c150c5c_s.jpg",
        "colors": []
    },
    {
        "id": "a6d435c2-358b-4488-a38c-46f05b4825c8",
        "name": "Citadel Dispatch:CD71  bitcoin payments with  utxoclub   wiz   dooowta  and  benthecarman:undefined",
        "label": "Citadel Dispatch",
        "node_type": "episode",
        "details": {
            "children": [
                "c5d33f10-d55a-4a43-b7e5-c25c3c89a304"
            ],
            "episode_title": "CD71  bitcoin payments with  utxoclub   wiz   dooowta  and  benthecarman",
            "guests": [
                "@benthecarman",
                "@dooowta",
                "@wiz",
                "@utxoclub"
            ],
            "image_url": "",
            "node_type": "episode",
            "ref_id": "a6d435c2-358b-4488-a38c-46f05b4825c8",
            "show_title": "Citadel Dispatch"
        },
        "image_url": "",
        "colors": []
    },
    {
        "id": "1473b95e-c874-4fd6-abe0-6c0101ae86fe",
        "name": "Bitcoin.Review:Bitcoin.Review with NVK - A Review of Updates to Popular Bitcoin Projects:undefined",
        "label": "Bitcoin.Review",
        "node_type": "episode",
        "details": {
            "children": [
                "beb13404-ed7c-4237-b977-1ebd6e1eaa55",
                "d2b2b863-d33a-47a7-ac98-d97ef42586fb",
                "f3863b80-518a-497b-8083-20e9f111d175"
            ],
            "episode_title": "Bitcoin.Review with NVK - A Review of Updates to Popular Bitcoin Projects",
            "guests": [
                "Matt Odell",
                "NVK"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/cd6b8d64-bd52-4f1e-86b3-ca8ba2eb169f.jpg",
            "node_type": "episode",
            "ref_id": "1473b95e-c874-4fd6-abe0-6c0101ae86fe",
            "show_title": "Bitcoin.Review"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/cd6b8d64-bd52-4f1e-86b3-ca8ba2eb169f_s.jpg",
        "colors": []
    },
    {
        "id": "cb29a5cc-2201-4bc9-80dd-6925f182ed84",
        "name": "Lightning Labs:undefined:undefined",
        "label": "Lightning Labs",
        "node_type": "show",
        "details": {
            "children": [
                "6cd8dc46-8782-4270-8013-24fa61e9b9e4"
            ],
            "image_url": "",
            "node_type": "show",
            "ref_id": "cb29a5cc-2201-4bc9-80dd-6925f182ed84",
            "show_title": "Lightning Labs"
        },
        "image_url": "",
        "colors": []
    },
    {
        "id": "7e527435-3dd8-4d07-8b15-40d31e02d759",
        "name": "The Bad Crypto Podcast:undefined:undefined",
        "label": "The Bad Crypto Podcast",
        "node_type": "show",
        "details": {
            "children": [
                "69b507fc-8462-4d04-af14-2b859735ab00"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/7e527435-3dd8-4d07-8b15-40d31e02d759.jpg",
            "node_type": "show",
            "ref_id": "7e527435-3dd8-4d07-8b15-40d31e02d759",
            "show_title": "The Bad Crypto Podcast"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/7e527435-3dd8-4d07-8b15-40d31e02d759_s.jpg",
        "colors": []
    },
    {
        "id": "7de0d293-8ae3-4362-8500-8f7300f3fe41",
        "name": "Unchained:undefined:undefined",
        "label": "Unchained",
        "node_type": "show",
        "details": {
            "children": [
                "a237b538-9b4a-476e-9813-a4f5a62befa9",
                "a237b538-9b4a-476e-9813-a4f5a62befa9",
                "a237b538-9b4a-476e-9813-a4f5a62befa9",
                "a237b538-9b4a-476e-9813-a4f5a62befa9",
                "a237b538-9b4a-476e-9813-a4f5a62befa9",
                "a237b538-9b4a-476e-9813-a4f5a62befa9",
                "a237b538-9b4a-476e-9813-a4f5a62befa9"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/7de0d293-8ae3-4362-8500-8f7300f3fe41.jpg",
            "node_type": "show",
            "ref_id": "7de0d293-8ae3-4362-8500-8f7300f3fe41",
            "show_title": "Unchained"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/7de0d293-8ae3-4362-8500-8f7300f3fe41_s.jpg",
        "colors": []
    },
    {
        "id": "a85a6e60-55b8-484c-b93e-45d0f4ec73c4",
        "name": "CryptoIntelligence:undefined:undefined",
        "label": "CryptoIntelligence",
        "node_type": "show",
        "details": {
            "children": [
                "e58e8b29-d9b0-4489-bfb2-9037d737301d",
                "e58e8b29-d9b0-4489-bfb2-9037d737301d"
            ],
            "image_url": "",
            "node_type": "show",
            "ref_id": "a85a6e60-55b8-484c-b93e-45d0f4ec73c4",
            "show_title": "CryptoIntelligence"
        },
        "image_url": "",
        "colors": []
    },
    {
        "id": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "name": "Bitcoin Audible:undefined:undefined",
        "label": "Bitcoin Audible",
        "node_type": "show",
        "details": {
            "children": [
                "26884d67-6dc6-433a-a9b5-3b14cae04ed3",
                "26884d67-6dc6-433a-a9b5-3b14cae04ed3",
                "26884d67-6dc6-433a-a9b5-3b14cae04ed3",
                "26884d67-6dc6-433a-a9b5-3b14cae04ed3",
                "85daa3ba-dc4b-43a1-bab2-436d5d30e5d4",
                "799e8b0e-2d2e-4392-8f92-99252d2336f5",
                "799e8b0e-2d2e-4392-8f92-99252d2336f5",
                "799e8b0e-2d2e-4392-8f92-99252d2336f5",
                "dba14fce-5ab7-46f5-915f-a5a0a574aad1",
                "6377c14f-551c-44e2-b0d9-564cd519503a",
                "6377c14f-551c-44e2-b0d9-564cd519503a",
                "6377c14f-551c-44e2-b0d9-564cd519503a",
                "6377c14f-551c-44e2-b0d9-564cd519503a",
                "6377c14f-551c-44e2-b0d9-564cd519503a",
                "6377c14f-551c-44e2-b0d9-564cd519503a",
                "6377c14f-551c-44e2-b0d9-564cd519503a",
                "0b9229a4-8cef-441c-8fc1-8e622616a44a",
                "0b9229a4-8cef-441c-8fc1-8e622616a44a",
                "0b9229a4-8cef-441c-8fc1-8e622616a44a",
                "7f23843d-1b02-4d4c-92c4-b67960a9353d",
                "fb528095-95df-4028-9c41-73a64623ae72",
                "fb528095-95df-4028-9c41-73a64623ae72",
                "fb528095-95df-4028-9c41-73a64623ae72",
                "fb528095-95df-4028-9c41-73a64623ae72",
                "25e51131-6ffc-4a3d-a95d-746b8624a20d",
                "25e51131-6ffc-4a3d-a95d-746b8624a20d",
                "25e51131-6ffc-4a3d-a95d-746b8624a20d",
                "f5e62320-35cf-4ae0-a5f1-f24a7f40bb02",
                "60eb2037-e396-490a-9a05-2ae94f4ec9fd",
                "60eb2037-e396-490a-9a05-2ae94f4ec9fd",
                "b5e63726-7391-4114-80eb-750212533abd",
                "56212159-545d-4c10-89f2-1d7bfd264b67",
                "56212159-545d-4c10-89f2-1d7bfd264b67",
                "5f1cdc90-f610-40df-9821-04df9350583c"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc.jpg",
            "node_type": "show",
            "ref_id": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
            "show_title": "Bitcoin Audible"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/9e7e229f-2631-4542-b5d7-7fcd502798dc_s.jpg",
        "colors": []
    },
    {
        "id": "19ee7484-9568-4a5e-884e-8accb3794058",
        "name": "On the Brink:undefined:undefined",
        "label": "On the Brink",
        "node_type": "show",
        "details": {
            "children": [
                "1b4954a3-4425-4038-94cb-67b27ea6cf31"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/19ee7484-9568-4a5e-884e-8accb3794058.jpg",
            "node_type": "show",
            "ref_id": "19ee7484-9568-4a5e-884e-8accb3794058",
            "show_title": "On the Brink"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/19ee7484-9568-4a5e-884e-8accb3794058_s.jpg",
        "colors": []
    },
    {
        "id": "4e607036-8fde-48ef-ab76-9c2ac4bab031",
        "name": "What Bitcoin Did with Peter McCormack:undefined:undefined",
        "label": "What Bitcoin Did with Peter McCormack",
        "node_type": "show",
        "details": {
            "children": [
                "f7ab7d85-8422-4eb9-ba41-cc3348e93ef7",
                "3bef96c0-5232-4fac-b6d7-3fb8e295f21f",
                "3713728d-fdf3-4b1e-8c23-77b284482fea",
                "3713728d-fdf3-4b1e-8c23-77b284482fea",
                "3713728d-fdf3-4b1e-8c23-77b284482fea",
                "661f9980-75ac-4441-b52f-04b9a67e7975",
                "acf7cb01-d086-42e0-be45-b948bd051898",
                "20d00aaf-fa00-4709-8d2f-f979384ff3ca",
                "a35bc6bb-8057-4ce6-b64d-c88e951a9262",
                "1454dd5d-1012-4b05-89ba-eb019c218cb4",
                "a1be0c08-2b7f-4fae-85ae-71ba91371e3b"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/4e607036-8fde-48ef-ab76-9c2ac4bab031.jpg",
            "node_type": "show",
            "ref_id": "4e607036-8fde-48ef-ab76-9c2ac4bab031",
            "show_title": "What Bitcoin Did with Peter McCormack"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/4e607036-8fde-48ef-ab76-9c2ac4bab031_s.jpg",
        "colors": []
    },
    {
        "id": "b79a3eb8-bcd0-4338-b979-d32aef360785",
        "name": "Stephan Livera Podcast:undefined:undefined",
        "label": "Stephan Livera Podcast",
        "node_type": "show",
        "details": {
            "children": [
                "a06aaf55-05ef-45d2-875a-5ab50a868b27",
                "a06aaf55-05ef-45d2-875a-5ab50a868b27",
                "a06aaf55-05ef-45d2-875a-5ab50a868b27",
                "a06aaf55-05ef-45d2-875a-5ab50a868b27",
                "a06aaf55-05ef-45d2-875a-5ab50a868b27",
                "a06aaf55-05ef-45d2-875a-5ab50a868b27",
                "a06aaf55-05ef-45d2-875a-5ab50a868b27",
                "a06aaf55-05ef-45d2-875a-5ab50a868b27",
                "a06aaf55-05ef-45d2-875a-5ab50a868b27",
                "a861e454-8317-4edb-8c6b-04bba939d1d5",
                "a861e454-8317-4edb-8c6b-04bba939d1d5",
                "4bea6c89-43b4-4e5e-9fea-0662d9ee7c00",
                "27314235-edb1-4430-a102-d19a53e7ff19",
                "27314235-edb1-4430-a102-d19a53e7ff19",
                "27314235-edb1-4430-a102-d19a53e7ff19",
                "27314235-edb1-4430-a102-d19a53e7ff19",
                "27314235-edb1-4430-a102-d19a53e7ff19",
                "27314235-edb1-4430-a102-d19a53e7ff19",
                "d232e74a-8cf2-4b0c-9e0b-f7a1d376f5bf"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785.jpg",
            "node_type": "show",
            "ref_id": "b79a3eb8-bcd0-4338-b979-d32aef360785",
            "show_title": "Stephan Livera Podcast"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/b79a3eb8-bcd0-4338-b979-d32aef360785_s.jpg",
        "colors": []
    },
    {
        "id": "12db0692-468b-4d0e-a73d-cfd33643aed7",
        "name": "Blockstream Talk:undefined:undefined",
        "label": "Blockstream Talk",
        "node_type": "show",
        "details": {
            "children": [
                "2210cf14-eb63-432a-82ef-ae5aa4e90741"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/12db0692-468b-4d0e-a73d-cfd33643aed7.jpg",
            "node_type": "show",
            "ref_id": "12db0692-468b-4d0e-a73d-cfd33643aed7",
            "show_title": "Blockstream Talk"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/12db0692-468b-4d0e-a73d-cfd33643aed7_s.jpg",
        "colors": []
    },
    {
        "id": "419512c2-e309-4b25-bfe2-cd481d53f66d",
        "name": "BTC Sessions:undefined:undefined",
        "label": "BTC Sessions",
        "node_type": "show",
        "details": {
            "children": [
                "b8a8edf8-bbe7-45c7-9fb9-5673acb4d1bd",
                "f3b67780-d9c2-4a20-ab5c-115032a05b3a",
                "eeca50f4-77ab-453f-bb40-f7432087759f",
                "de744984-4b8b-457b-84b8-376288f1a2d6"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/419512c2-e309-4b25-bfe2-cd481d53f66d.jpg",
            "node_type": "show",
            "ref_id": "419512c2-e309-4b25-bfe2-cd481d53f66d",
            "show_title": "BTC Sessions"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/419512c2-e309-4b25-bfe2-cd481d53f66d_s.jpg",
        "colors": []
    },
    {
        "id": "d477227d-0df7-48fe-8832-349e78c5f1c3",
        "name": "Down The Rabbit Hole with Kaz:undefined:undefined",
        "label": "Down The Rabbit Hole with Kaz",
        "node_type": "show",
        "details": {
            "children": [
                "2b065676-16bf-4e39-840d-150b202eeaeb",
                "1dc3a8d9-4ccc-4e76-9d76-c81cf65e129b"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/d477227d-0df7-48fe-8832-349e78c5f1c3.jpg",
            "node_type": "show",
            "ref_id": "d477227d-0df7-48fe-8832-349e78c5f1c3",
            "show_title": "Down The Rabbit Hole with Kaz"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/d477227d-0df7-48fe-8832-349e78c5f1c3_s.jpg",
        "colors": []
    },
    {
        "id": "838898e2-a0a0-4361-93b8-8ca0b14430a1",
        "name": "The Anita Posch Show  A Bitcoin Only Podcast:undefined:undefined",
        "label": "The Anita Posch Show  A Bitcoin Only Podcast",
        "node_type": "show",
        "details": {
            "children": [
                "0aa654da-c4ad-4c9f-9c95-6443c73cdc26",
                "957ccdc7-498c-47c9-9ad4-d48f0a8be582",
                "d58011ba-e6d6-43b0-9f3c-b4e104d13306",
                "d58011ba-e6d6-43b0-9f3c-b4e104d13306",
                "d58011ba-e6d6-43b0-9f3c-b4e104d13306",
                "f1d3cf59-0135-45d9-8a38-25840c674503",
                "a7518cec-87bc-4bed-ab34-85f1b9bd2b89",
                "2668979c-b4dd-4794-b42b-2fcd5b9dfdaf",
                "ef1cad08-fb65-48c3-928e-9b2cbc5a908d",
                "87eb3f5b-7fec-424e-9b3a-6f6a6975daa6",
                "340a1d98-a6f8-41a6-bdd9-bcf92e8122ce"
            ],
            "image_url": "",
            "node_type": "show",
            "ref_id": "838898e2-a0a0-4361-93b8-8ca0b14430a1",
            "show_title": "The Anita Posch Show  A Bitcoin Only Podcast"
        },
        "image_url": "",
        "colors": []
    },
    {
        "id": "1f747a62-4255-422a-85d7-0633d31d27c2",
        "name": "Tales From The Crypt:undefined:undefined",
        "label": "Tales From The Crypt",
        "node_type": "show",
        "details": {
            "children": [
                "10467934-fd14-44ac-be77-7b84dd8feabf",
                "fcf66730-dd46-4601-b152-c70aad47b5b4",
                "0eeb0783-3f6d-4fd3-bb3b-6cca2964690a",
                "80d73d47-eb05-40ca-9c28-3332a70e9d2e",
                "91621fc7-77be-4567-b1de-c3e69abe5680",
                "ec4b942d-a733-4503-ac2e-178e417e3a5f",
                "bafb3d84-2b80-4fab-b16e-fe3775a55e08"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2.jpg",
            "node_type": "show",
            "ref_id": "1f747a62-4255-422a-85d7-0633d31d27c2",
            "show_title": "Tales From The Crypt"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1f747a62-4255-422a-85d7-0633d31d27c2_s.jpg",
        "colors": []
    },
    {
        "id": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "name": "Bitcoin Explained - The Technical Side of Bitcoin:undefined:undefined",
        "label": "Bitcoin Explained - The Technical Side of Bitcoin",
        "node_type": "show",
        "details": {
            "children": [
                "8b2ddee5-a490-45a5-a47e-4be6e95d7867",
                "db58f6c4-510f-4be4-bc0b-546f1dc17cda",
                "eb7b7e66-2ee6-4f56-a3b3-7823227f5019",
                "76b9d659-9163-41e6-96f1-cb3ac3812c25",
                "930b3f95-4416-442d-bc8b-b6902f179501",
                "fdb77652-139a-46b3-8c86-837e536f07ab",
                "fdb77652-139a-46b3-8c86-837e536f07ab",
                "a64d3011-a305-4883-bf1f-8c3933535a24",
                "b418491a-480d-451b-993a-9a7ac4d3a70a",
                "65111f32-3216-48aa-a705-8de94e2cf612",
                "95d85cb7-713a-4043-8f85-3dca2be94e54",
                "ad1b2aec-3ac1-4b27-b1de-8953e7b35f5f",
                "b27bb18e-0cc0-4f54-b4a8-20c089e449e4",
                "fb744b69-f7ae-4e05-9a07-90aa98401b68",
                "fb744b69-f7ae-4e05-9a07-90aa98401b68",
                "fb744b69-f7ae-4e05-9a07-90aa98401b68",
                "fb744b69-f7ae-4e05-9a07-90aa98401b68",
                "ed0ffb2b-01d3-4746-b0d9-a3150aeca69c",
                "4d50e67e-8152-4ca1-875f-6b4d5f4ace2e",
                "4d50e67e-8152-4ca1-875f-6b4d5f4ace2e",
                "4d50e67e-8152-4ca1-875f-6b4d5f4ace2e",
                "0ee39e5d-4caa-4022-94c7-7905b6c5e6a3",
                "0ee39e5d-4caa-4022-94c7-7905b6c5e6a3",
                "0ee39e5d-4caa-4022-94c7-7905b6c5e6a3",
                "0ee39e5d-4caa-4022-94c7-7905b6c5e6a3",
                "0cda7cd8-1deb-44ab-9518-45dc7dbf4a28"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514.jpg",
            "node_type": "show",
            "ref_id": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
            "show_title": "Bitcoin Explained - The Technical Side of Bitcoin"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/aeb47b88-cb7f-4504-bb71-ff46d200e514_s.jpg",
        "colors": []
    },
    {
        "id": "3e178b7d-b8b9-4fd4-ba36-017b834537da",
        "name": "Bitcoin Fixes This:undefined:undefined",
        "label": "Bitcoin Fixes This",
        "node_type": "show",
        "details": {
            "children": [
                "d5c1d55c-73ee-4d1a-bfb4-927f1e706360",
                "d5c1d55c-73ee-4d1a-bfb4-927f1e706360",
                "d5c1d55c-73ee-4d1a-bfb4-927f1e706360",
                "d5c1d55c-73ee-4d1a-bfb4-927f1e706360",
                "d5c1d55c-73ee-4d1a-bfb4-927f1e706360",
                "df8d58ac-c7c0-4758-91c1-c0439dd4c656",
                "df8d58ac-c7c0-4758-91c1-c0439dd4c656",
                "df8d58ac-c7c0-4758-91c1-c0439dd4c656",
                "df8d58ac-c7c0-4758-91c1-c0439dd4c656",
                "df8d58ac-c7c0-4758-91c1-c0439dd4c656"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/3e178b7d-b8b9-4fd4-ba36-017b834537da.jpg",
            "node_type": "show",
            "ref_id": "3e178b7d-b8b9-4fd4-ba36-017b834537da",
            "show_title": "Bitcoin Fixes This"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/3e178b7d-b8b9-4fd4-ba36-017b834537da_s.jpg",
        "colors": []
    },
    {
        "id": "1583c7c4-f4f2-4e52-8f27-a1eaeb6289fd",
        "name": "Bitcoin Magazine Podcast:undefined:undefined",
        "label": "Bitcoin Magazine Podcast",
        "node_type": "show",
        "details": {
            "children": [
                "dbcd092c-b06d-483c-8d9d-c64a558fd5f1"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1583c7c4-f4f2-4e52-8f27-a1eaeb6289fd.jpg",
            "node_type": "show",
            "ref_id": "1583c7c4-f4f2-4e52-8f27-a1eaeb6289fd",
            "show_title": "Bitcoin Magazine Podcast"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/1583c7c4-f4f2-4e52-8f27-a1eaeb6289fd_s.jpg",
        "colors": []
    },
    {
        "id": "0a24ff3e-9e22-42dc-9d73-70d54d85d45c",
        "name": "Noded Bitcoin Podcast:undefined:undefined",
        "label": "Noded Bitcoin Podcast",
        "node_type": "show",
        "details": {
            "children": [
                "13cb85e2-a530-48a7-9e4e-266532205464"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/0a24ff3e-9e22-42dc-9d73-70d54d85d45c.jpg",
            "node_type": "show",
            "ref_id": "0a24ff3e-9e22-42dc-9d73-70d54d85d45c",
            "show_title": "Noded Bitcoin Podcast"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/0a24ff3e-9e22-42dc-9d73-70d54d85d45c_s.jpg",
        "colors": []
    },
    {
        "id": "5e3cde4e-30ab-43bc-854f-4f7e2f0d60e6",
        "name": "Once Bitten  A Bitcoin Podcast.:undefined:undefined",
        "label": "Once Bitten  A Bitcoin Podcast.",
        "node_type": "show",
        "details": {
            "children": [
                "ef719c66-f40e-42ff-b736-0d8cd56cbc3e",
                "0aea63c5-98f4-446f-b5af-1c27b792ae7e"
            ],
            "image_url": "",
            "node_type": "show",
            "ref_id": "5e3cde4e-30ab-43bc-854f-4f7e2f0d60e6",
            "show_title": "Once Bitten  A Bitcoin Podcast."
        },
        "image_url": "",
        "colors": []
    },
    {
        "id": "8ad86341-0063-41e7-a78c-27d43c150c5c",
        "name": "Coin Stories with Natalie Brunell:undefined:undefined",
        "label": "Coin Stories with Natalie Brunell",
        "node_type": "show",
        "details": {
            "children": [
                "75234f92-e025-41d4-b1d9-edb2c9143f46"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/8ad86341-0063-41e7-a78c-27d43c150c5c.jpg",
            "node_type": "show",
            "ref_id": "8ad86341-0063-41e7-a78c-27d43c150c5c",
            "show_title": "Coin Stories with Natalie Brunell"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/8ad86341-0063-41e7-a78c-27d43c150c5c_s.jpg",
        "colors": []
    },
    {
        "id": "a09a2c49-84f1-4d0b-b150-6e6103f4ee41",
        "name": "Citadel Dispatch:undefined:undefined",
        "label": "Citadel Dispatch",
        "node_type": "show",
        "details": {
            "children": [
                "a6d435c2-358b-4488-a38c-46f05b4825c8"
            ],
            "image_url": "",
            "node_type": "show",
            "ref_id": "a09a2c49-84f1-4d0b-b150-6e6103f4ee41",
            "show_title": "Citadel Dispatch"
        },
        "image_url": "",
        "colors": []
    },
    {
        "id": "cd6b8d64-bd52-4f1e-86b3-ca8ba2eb169f",
        "name": "Bitcoin.Review:undefined:undefined",
        "label": "Bitcoin.Review",
        "node_type": "show",
        "details": {
            "children": [
                "1473b95e-c874-4fd6-abe0-6c0101ae86fe",
                "1473b95e-c874-4fd6-abe0-6c0101ae86fe",
                "1473b95e-c874-4fd6-abe0-6c0101ae86fe"
            ],
            "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/cd6b8d64-bd52-4f1e-86b3-ca8ba2eb169f.jpg",
            "node_type": "show",
            "ref_id": "cd6b8d64-bd52-4f1e-86b3-ca8ba2eb169f",
            "show_title": "Bitcoin.Review"
        },
        "image_url": "https://stakwork-uploads.s3.amazonaws.com/knowledge-graph-joe/content-images/cd6b8d64-bd52-4f1e-86b3-ca8ba2eb169f_s.jpg",
        "colors": []
    },
    {
        "id": "topicnode_0",
        "name": "bitcoin",
        "weight": 0,
        "label": "bitcoin",
        "type": "topic",
        "node_type": "topic",
        "text": "bitcoin",
        "scale": 30,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_1",
        "name": "anita posch",
        "weight": 0,
        "label": "anita posch",
        "type": "topic",
        "node_type": "topic",
        "text": "anita posch",
        "scale": 12,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_2",
        "name": "privacy",
        "weight": 0,
        "label": "privacy",
        "type": "topic",
        "node_type": "topic",
        "text": "privacy",
        "scale": 10,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_3",
        "name": "bitcoin's script",
        "weight": 0,
        "label": "bitcoin's script",
        "type": "topic",
        "node_type": "topic",
        "text": "bitcoin's script",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_4",
        "name": "bitcoin upgrade",
        "weight": 0,
        "label": "bitcoin upgrade",
        "type": "topic",
        "node_type": "topic",
        "text": "bitcoin upgrade",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_5",
        "name": "slush pool",
        "weight": 0,
        "label": "slush pool",
        "type": "topic",
        "node_type": "topic",
        "text": "slush pool",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_6",
        "name": "bitcoin protocol",
        "weight": 0,
        "label": "bitcoin protocol",
        "type": "topic",
        "node_type": "topic",
        "text": "bitcoin protocol",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_7",
        "name": "mast",
        "weight": 0,
        "label": "mast",
        "type": "topic",
        "node_type": "topic",
        "text": "mast",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_8",
        "name": "bitcoin core",
        "weight": 0,
        "label": "bitcoin core",
        "type": "topic",
        "node_type": "topic",
        "text": "bitcoin core",
        "scale": 14,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_9",
        "name": "smart contract",
        "weight": 0,
        "label": "smart contract",
        "type": "topic",
        "node_type": "topic",
        "text": "smart contract",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_10",
        "name": "signature aggregation",
        "weight": 0,
        "label": "signature aggregation",
        "type": "topic",
        "node_type": "topic",
        "text": "signature aggregation",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_11",
        "name": "taro",
        "weight": 0,
        "label": "taro",
        "type": "topic",
        "node_type": "topic",
        "text": "taro",
        "scale": 10,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_12",
        "name": "schnorr signature",
        "weight": 0,
        "label": "schnorr signature",
        "type": "topic",
        "node_type": "topic",
        "text": "schnorr signature",
        "scale": 6,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_13",
        "name": "bitcoin innovations",
        "weight": 0,
        "label": "bitcoin innovations",
        "type": "topic",
        "node_type": "topic",
        "text": "bitcoin innovations",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_14",
        "name": "bear markets",
        "weight": 0,
        "label": "bear markets",
        "type": "topic",
        "node_type": "topic",
        "text": "bear markets",
        "scale": 4,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_15",
        "name": "lightning",
        "weight": 0,
        "label": "lightning",
        "type": "topic",
        "node_type": "topic",
        "text": "lightning",
        "scale": 14,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_16",
        "name": "segwit",
        "weight": 0,
        "label": "segwit",
        "type": "topic",
        "node_type": "topic",
        "text": "segwit",
        "scale": 16,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_17",
        "name": "armory",
        "weight": 0,
        "label": "armory",
        "type": "topic",
        "node_type": "topic",
        "text": "armory",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_18",
        "name": "zues",
        "weight": 0,
        "label": "zues",
        "type": "topic",
        "node_type": "topic",
        "text": "zues",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_19",
        "name": "signet",
        "weight": 0,
        "label": "signet",
        "type": "topic",
        "node_type": "topic",
        "text": "signet",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_20",
        "name": "lot=true",
        "weight": 0,
        "label": "lot=true",
        "type": "topic",
        "node_type": "topic",
        "text": "lot=true",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_21",
        "name": "lot=false",
        "weight": 0,
        "label": "lot=false",
        "type": "topic",
        "node_type": "topic",
        "text": "lot=false",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_22",
        "name": "bip 9",
        "weight": 0,
        "label": "bip 9",
        "type": "topic",
        "node_type": "topic",
        "text": "bip 9",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_23",
        "name": "smart contracts",
        "weight": 0,
        "label": "smart contracts",
        "type": "topic",
        "node_type": "topic",
        "text": "smart contracts",
        "scale": 6,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_24",
        "name": "speedy trial",
        "weight": 0,
        "label": "speedy trial",
        "type": "topic",
        "node_type": "topic",
        "text": "speedy trial",
        "scale": 6,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_25",
        "name": "eclipse attack",
        "weight": 0,
        "label": "eclipse attack",
        "type": "topic",
        "node_type": "topic",
        "text": "eclipse attack",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_26",
        "name": "bitcoin core 0.21.1",
        "weight": 0,
        "label": "bitcoin core 0.21.1",
        "type": "topic",
        "node_type": "topic",
        "text": "bitcoin core 0.21.1",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_27",
        "name": "soft fork",
        "weight": 0,
        "label": "soft fork",
        "type": "topic",
        "node_type": "topic",
        "text": "soft fork",
        "scale": 6,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_28",
        "name": "wallet",
        "weight": 0,
        "label": "wallet",
        "type": "topic",
        "node_type": "topic",
        "text": "wallet",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_29",
        "name": "block size wars",
        "weight": 0,
        "label": "block size wars",
        "type": "topic",
        "node_type": "topic",
        "text": "block size wars",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_30",
        "name": "p2sh",
        "weight": 0,
        "label": "p2sh",
        "type": "topic",
        "node_type": "topic",
        "text": "p2sh",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_31",
        "name": "bitcoin adoption",
        "weight": 0,
        "label": "bitcoin adoption",
        "type": "topic",
        "node_type": "topic",
        "text": "bitcoin adoption",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_32",
        "name": "lightning?",
        "weight": 0,
        "label": "lightning?",
        "type": "topic",
        "node_type": "topic",
        "text": "lightning?",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_33",
        "name": "bluewallet",
        "weight": 0,
        "label": "bluewallet",
        "type": "topic",
        "node_type": "topic",
        "text": "bluewallet",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_34",
        "name": "taproof",
        "weight": 0,
        "label": "taproof",
        "type": "topic",
        "node_type": "topic",
        "text": "taproof",
        "scale": 4,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_35",
        "name": "ethereum",
        "weight": 0,
        "label": "ethereum",
        "type": "topic",
        "node_type": "topic",
        "text": "ethereum",
        "scale": 4,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_36",
        "name": "payment pool",
        "weight": 0,
        "label": "payment pool",
        "type": "topic",
        "node_type": "topic",
        "text": "payment pool",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_37",
        "name": "ledger",
        "weight": 0,
        "label": "ledger",
        "type": "topic",
        "node_type": "topic",
        "text": "ledger",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_38",
        "name": "psbt",
        "weight": 0,
        "label": "psbt",
        "type": "topic",
        "node_type": "topic",
        "text": "psbt",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_39",
        "name": "multisig",
        "weight": 0,
        "label": "multisig",
        "type": "topic",
        "node_type": "topic",
        "text": "multisig",
        "scale": 8,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_40",
        "name": "swan",
        "weight": 0,
        "label": "swan",
        "type": "topic",
        "node_type": "topic",
        "text": "swan",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_41",
        "name": "dlcs",
        "weight": 0,
        "label": "dlcs",
        "type": "topic",
        "node_type": "topic",
        "text": "dlcs",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_42",
        "name": "aj towns",
        "weight": 0,
        "label": "aj towns",
        "type": "topic",
        "node_type": "topic",
        "text": "aj towns",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_43",
        "name": "ptlc proposal",
        "weight": 0,
        "label": "ptlc proposal",
        "type": "topic",
        "node_type": "topic",
        "text": "ptlc proposal",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_44",
        "name": "taprootactivation",
        "weight": 0,
        "label": "taprootactivation",
        "type": "topic",
        "node_type": "topic",
        "text": "taprootactivation",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_45",
        "name": "tap",
        "weight": 0,
        "label": "tap",
        "type": "topic",
        "node_type": "topic",
        "text": "tap",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_46",
        "name": "andreas m. antonopoulos",
        "weight": 0,
        "label": "andreas m. antonopoulos",
        "type": "topic",
        "node_type": "topic",
        "text": "andreas m. antonopoulos",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_47",
        "name": "lightning network",
        "weight": 0,
        "label": "lightning network",
        "type": "topic",
        "node_type": "topic",
        "text": "lightning network",
        "scale": 6,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_48",
        "name": "johannes zweng",
        "weight": 0,
        "label": "johannes zweng",
        "type": "topic",
        "node_type": "topic",
        "text": "johannes zweng",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_49",
        "name": "carel van wyk",
        "weight": 0,
        "label": "carel van wyk",
        "type": "topic",
        "node_type": "topic",
        "text": "carel van wyk",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_50",
        "name": "rootstock",
        "weight": 0,
        "label": "rootstock",
        "type": "topic",
        "node_type": "topic",
        "text": "rootstock",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_51",
        "name": "schnorr signatures",
        "weight": 0,
        "label": "schnorr signatures",
        "type": "topic",
        "node_type": "topic",
        "text": "schnorr signatures",
        "scale": 4,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_52",
        "name": "kaz",
        "weight": 0,
        "label": "kaz",
        "type": "topic",
        "node_type": "topic",
        "text": "kaz",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_53",
        "name": "defi",
        "weight": 0,
        "label": "defi",
        "type": "topic",
        "node_type": "topic",
        "text": "defi",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_54",
        "name": "bixin",
        "weight": 0,
        "label": "bixin",
        "type": "topic",
        "node_type": "topic",
        "text": "bixin",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_55",
        "name": "miner signalling",
        "weight": 0,
        "label": "miner signalling",
        "type": "topic",
        "node_type": "topic",
        "text": "miner signalling",
        "scale": 6,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_56",
        "name": "schnorr",
        "weight": 0,
        "label": "schnorr",
        "type": "topic",
        "node_type": "topic",
        "text": "schnorr",
        "scale": 10,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_57",
        "name": "nodes",
        "weight": 0,
        "label": "nodes",
        "type": "topic",
        "node_type": "topic",
        "text": "nodes",
        "scale": 4,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_58",
        "name": "mast bip",
        "weight": 0,
        "label": "mast bip",
        "type": "topic",
        "node_type": "topic",
        "text": "mast bip",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_59",
        "name": "future bitcoin projects",
        "weight": 0,
        "label": "future bitcoin projects",
        "type": "topic",
        "node_type": "topic",
        "text": "future bitcoin projects",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_60",
        "name": "graft root",
        "weight": 0,
        "label": "graft root",
        "type": "topic",
        "node_type": "topic",
        "text": "graft root",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_61",
        "name": "pavel moravec",
        "weight": 0,
        "label": "pavel moravec",
        "type": "topic",
        "node_type": "topic",
        "text": "pavel moravec",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_62",
        "name": "braiins",
        "weight": 0,
        "label": "braiins",
        "type": "topic",
        "node_type": "topic",
        "text": "braiins",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_63",
        "name": "slushpool",
        "weight": 0,
        "label": "slushpool",
        "type": "topic",
        "node_type": "topic",
        "text": "slushpool",
        "scale": 6,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_64",
        "name": "firmware development",
        "weight": 0,
        "label": "firmware development",
        "type": "topic",
        "node_type": "topic",
        "text": "firmware development",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_65",
        "name": "mining",
        "weight": 0,
        "label": "mining",
        "type": "topic",
        "node_type": "topic",
        "text": "mining",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_66",
        "name": "mining pool",
        "weight": 0,
        "label": "mining pool",
        "type": "topic",
        "node_type": "topic",
        "text": "mining pool",
        "scale": 4,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_67",
        "name": "full stack software",
        "weight": 0,
        "label": "full stack software",
        "type": "topic",
        "node_type": "topic",
        "text": "full stack software",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_68",
        "name": "signalling",
        "weight": 0,
        "label": "signalling",
        "type": "topic",
        "node_type": "topic",
        "text": "signalling",
        "scale": 10,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_69",
        "name": "sha256",
        "weight": 0,
        "label": "sha256",
        "type": "topic",
        "node_type": "topic",
        "text": "sha256",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_70",
        "name": "hash power",
        "weight": 0,
        "label": "hash power",
        "type": "topic",
        "node_type": "topic",
        "text": "hash power",
        "scale": 4,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_71",
        "name": "scripting",
        "weight": 0,
        "label": "scripting",
        "type": "topic",
        "node_type": "topic",
        "text": "scripting",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_72",
        "name": "cryptographic primitives",
        "weight": 0,
        "label": "cryptographic primitives",
        "type": "topic",
        "node_type": "topic",
        "text": "cryptographic primitives",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_73",
        "name": "algorithm",
        "weight": 0,
        "label": "algorithm",
        "type": "topic",
        "node_type": "topic",
        "text": "algorithm",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_74",
        "name": "multi signature",
        "weight": 0,
        "label": "multi signature",
        "type": "topic",
        "node_type": "topic",
        "text": "multi signature",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_75",
        "name": "difficulty",
        "weight": 0,
        "label": "difficulty",
        "type": "topic",
        "node_type": "topic",
        "text": "difficulty",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_76",
        "name": "blocks",
        "weight": 0,
        "label": "blocks",
        "type": "topic",
        "node_type": "topic",
        "text": "blocks",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_77",
        "name": "retarget period",
        "weight": 0,
        "label": "retarget period",
        "type": "topic",
        "node_type": "topic",
        "text": "retarget period",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_78",
        "name": "taproot.watch",
        "weight": 0,
        "label": "taproot.watch",
        "type": "topic",
        "node_type": "topic",
        "text": "taproot.watch",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_79",
        "name": "miner",
        "weight": 0,
        "label": "miner",
        "type": "topic",
        "node_type": "topic",
        "text": "miner",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_80",
        "name": "pools",
        "weight": 0,
        "label": "pools",
        "type": "topic",
        "node_type": "topic",
        "text": "pools",
        "scale": 4,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_81",
        "name": "hash rate",
        "weight": 0,
        "label": "hash rate",
        "type": "topic",
        "node_type": "topic",
        "text": "hash rate",
        "scale": 4,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_82",
        "name": "activation",
        "weight": 0,
        "label": "activation",
        "type": "topic",
        "node_type": "topic",
        "text": "activation",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_83",
        "name": "90% threshold",
        "weight": 0,
        "label": "90% threshold",
        "type": "topic",
        "node_type": "topic",
        "text": "90% threshold",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_84",
        "name": "mining software",
        "weight": 0,
        "label": "mining software",
        "type": "topic",
        "node_type": "topic",
        "text": "mining software",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_85",
        "name": "miners",
        "weight": 0,
        "label": "miners",
        "type": "topic",
        "node_type": "topic",
        "text": "miners",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_86",
        "name": "bitcoin network",
        "weight": 0,
        "label": "bitcoin network",
        "type": "topic",
        "node_type": "topic",
        "text": "bitcoin network",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_87",
        "name": "soft forks",
        "weight": 0,
        "label": "soft forks",
        "type": "topic",
        "node_type": "topic",
        "text": "soft forks",
        "scale": 4,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_88",
        "name": "hashrate",
        "weight": 0,
        "label": "hashrate",
        "type": "topic",
        "node_type": "topic",
        "text": "hashrate",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_89",
        "name": "solo-mining",
        "weight": 0,
        "label": "solo-mining",
        "type": "topic",
        "node_type": "topic",
        "text": "solo-mining",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_90",
        "name": "sovereignty",
        "weight": 0,
        "label": "sovereignty",
        "type": "topic",
        "node_type": "topic",
        "text": "sovereignty",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_91",
        "name": "anonymity",
        "weight": 0,
        "label": "anonymity",
        "type": "topic",
        "node_type": "topic",
        "text": "anonymity",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_92",
        "name": "blockchain analysis",
        "weight": 0,
        "label": "blockchain analysis",
        "type": "topic",
        "node_type": "topic",
        "text": "blockchain analysis",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_93",
        "name": "on-chain",
        "weight": 0,
        "label": "on-chain",
        "type": "topic",
        "node_type": "topic",
        "text": "on-chain",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_94",
        "name": "miner revenues",
        "weight": 0,
        "label": "miner revenues",
        "type": "topic",
        "node_type": "topic",
        "text": "miner revenues",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_95",
        "name": "bitcoin uasf",
        "weight": 0,
        "label": "bitcoin uasf",
        "type": "topic",
        "node_type": "topic",
        "text": "bitcoin uasf",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_96",
        "name": "small blocks",
        "weight": 0,
        "label": "small blocks",
        "type": "topic",
        "node_type": "topic",
        "text": "small blocks",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_97",
        "name": "musig",
        "weight": 0,
        "label": "musig",
        "type": "topic",
        "node_type": "topic",
        "text": "musig",
        "scale": 4,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_98",
        "name": "zapo",
        "weight": 0,
        "label": "zapo",
        "type": "topic",
        "node_type": "topic",
        "text": "zapo",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_99",
        "name": "tapscript",
        "weight": 0,
        "label": "tapscript",
        "type": "topic",
        "node_type": "topic",
        "text": "tapscript",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_100",
        "name": "pay to pub key",
        "weight": 0,
        "label": "pay to pub key",
        "type": "topic",
        "node_type": "topic",
        "text": "pay to pub key",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_101",
        "name": "pub key",
        "weight": 0,
        "label": "pub key",
        "type": "topic",
        "node_type": "topic",
        "text": "pub key",
        "scale": 4,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_102",
        "name": "script hash",
        "weight": 0,
        "label": "script hash",
        "type": "topic",
        "node_type": "topic",
        "text": "script hash",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_103",
        "name": "hardware wallets",
        "weight": 0,
        "label": "hardware wallets",
        "type": "topic",
        "node_type": "topic",
        "text": "hardware wallets",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_104",
        "name": "threshold signatures",
        "weight": 0,
        "label": "threshold signatures",
        "type": "topic",
        "node_type": "topic",
        "text": "threshold signatures",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_105",
        "name": "3of5",
        "weight": 0,
        "label": "3of5",
        "type": "topic",
        "node_type": "topic",
        "text": "3of5",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_106",
        "name": "5of5",
        "weight": 0,
        "label": "5of5",
        "type": "topic",
        "node_type": "topic",
        "text": "5of5",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_107",
        "name": "merkle tree",
        "weight": 0,
        "label": "merkle tree",
        "type": "topic",
        "node_type": "topic",
        "text": "merkle tree",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_108",
        "name": "utxo",
        "weight": 0,
        "label": "utxo",
        "type": "topic",
        "node_type": "topic",
        "text": "utxo",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_109",
        "name": "chain analysis",
        "weight": 0,
        "label": "chain analysis",
        "type": "topic",
        "node_type": "topic",
        "text": "chain analysis",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_110",
        "name": "l2",
        "weight": 0,
        "label": "l2",
        "type": "topic",
        "node_type": "topic",
        "text": "l2",
        "scale": 4,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_111",
        "name": "sighash",
        "weight": 0,
        "label": "sighash",
        "type": "topic",
        "node_type": "topic",
        "text": "sighash",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_112",
        "name": "no input",
        "weight": 0,
        "label": "no input",
        "type": "topic",
        "node_type": "topic",
        "text": "no input",
        "scale": 4,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_113",
        "name": "checksig",
        "weight": 0,
        "label": "checksig",
        "type": "topic",
        "node_type": "topic",
        "text": "checksig",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_114",
        "name": "public key",
        "weight": 0,
        "label": "public key",
        "type": "topic",
        "node_type": "topic",
        "text": "public key",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_115",
        "name": "bip 118",
        "weight": 0,
        "label": "bip 118",
        "type": "topic",
        "node_type": "topic",
        "text": "bip 118",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_116",
        "name": "lightning channels",
        "weight": 0,
        "label": "lightning channels",
        "type": "topic",
        "node_type": "topic",
        "text": "lightning channels",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_117",
        "name": "mainnet",
        "weight": 0,
        "label": "mainnet",
        "type": "topic",
        "node_type": "topic",
        "text": "mainnet",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_118",
        "name": "transactions",
        "weight": 0,
        "label": "transactions",
        "type": "topic",
        "node_type": "topic",
        "text": "transactions",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_119",
        "name": "transaction id",
        "weight": 0,
        "label": "transaction id",
        "type": "topic",
        "node_type": "topic",
        "text": "transaction id",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_120",
        "name": "state",
        "weight": 0,
        "label": "state",
        "type": "topic",
        "node_type": "topic",
        "text": "state",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_121",
        "name": "watchtowers",
        "weight": 0,
        "label": "watchtowers",
        "type": "topic",
        "node_type": "topic",
        "text": "watchtowers",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_122",
        "name": "signatures",
        "weight": 0,
        "label": "signatures",
        "type": "topic",
        "node_type": "topic",
        "text": "signatures",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_123",
        "name": "any prev out",
        "weight": 0,
        "label": "any prev out",
        "type": "topic",
        "node_type": "topic",
        "text": "any prev out",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_124",
        "name": "taproot bip",
        "weight": 0,
        "label": "taproot bip",
        "type": "topic",
        "node_type": "topic",
        "text": "taproot bip",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_125",
        "name": "schnorr bip",
        "weight": 0,
        "label": "schnorr bip",
        "type": "topic",
        "node_type": "topic",
        "text": "schnorr bip",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_126",
        "name": "quantum computers",
        "weight": 0,
        "label": "quantum computers",
        "type": "topic",
        "node_type": "topic",
        "text": "quantum computers",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_127",
        "name": "bips",
        "weight": 0,
        "label": "bips",
        "type": "topic",
        "node_type": "topic",
        "text": "bips",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_128",
        "name": "time locks",
        "weight": 0,
        "label": "time locks",
        "type": "topic",
        "node_type": "topic",
        "text": "time locks",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_129",
        "name": "future spend",
        "weight": 0,
        "label": "future spend",
        "type": "topic",
        "node_type": "topic",
        "text": "future spend",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_130",
        "name": "uasf",
        "weight": 0,
        "label": "uasf",
        "type": "topic",
        "node_type": "topic",
        "text": "uasf",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_131",
        "name": "bip148",
        "weight": 0,
        "label": "bip148",
        "type": "topic",
        "node_type": "topic",
        "text": "bip148",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_132",
        "name": "bip149",
        "weight": 0,
        "label": "bip149",
        "type": "topic",
        "node_type": "topic",
        "text": "bip149",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_133",
        "name": "bip9",
        "weight": 0,
        "label": "bip9",
        "type": "topic",
        "node_type": "topic",
        "text": "bip9",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_134",
        "name": "bip8",
        "weight": 0,
        "label": "bip8",
        "type": "topic",
        "node_type": "topic",
        "text": "bip8",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_135",
        "name": "off chain",
        "weight": 0,
        "label": "off chain",
        "type": "topic",
        "node_type": "topic",
        "text": "off chain",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_136",
        "name": "chainalysis companies",
        "weight": 0,
        "label": "chainalysis companies",
        "type": "topic",
        "node_type": "topic",
        "text": "chainalysis companies",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_137",
        "name": "taproot activation",
        "weight": 0,
        "label": "taproot activation",
        "type": "topic",
        "node_type": "topic",
        "text": "taproot activation",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "topicnode_138",
        "name": "privacy technology",
        "weight": 0,
        "label": "privacy technology",
        "type": "topic",
        "node_type": "topic",
        "text": "privacy technology",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_139",
        "name": "Aaron Van Wirdum",
        "weight": 0,
        "label": "Aaron Van Wirdum",
        "type": "guest",
        "node_type": "guest",
        "text": "Aaron Van Wirdum",
        "scale": 22,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_140",
        "name": "Anita Posch",
        "weight": 0,
        "label": "Anita Posch",
        "type": "guest",
        "node_type": "guest",
        "text": "Anita Posch",
        "scale": 8,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_141",
        "name": "Shinobi",
        "weight": 0,
        "label": "Shinobi",
        "type": "guest",
        "node_type": "guest",
        "text": "Shinobi",
        "scale": 8,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_142",
        "name": "Brady of Citizen Bitcoin ",
        "weight": 0,
        "label": "Brady of Citizen Bitcoin ",
        "type": "guest",
        "node_type": "guest",
        "text": "Brady of Citizen Bitcoin ",
        "scale": 6,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_143",
        "name": "Ryan Gentry",
        "weight": 0,
        "label": "Ryan Gentry",
        "type": "guest",
        "node_type": "guest",
        "text": "Ryan Gentry",
        "scale": 4,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_144",
        "name": "Aaron van Wirdum",
        "weight": 0,
        "label": "Aaron van Wirdum",
        "type": "guest",
        "node_type": "guest",
        "text": "Aaron van Wirdum",
        "scale": 8,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_145",
        "name": "Ben Carman",
        "weight": 0,
        "label": "Ben Carman",
        "type": "guest",
        "node_type": "guest",
        "text": "Ben Carman",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_146",
        "name": "Bruce Fenton",
        "weight": 0,
        "label": "Bruce Fenton",
        "type": "guest",
        "node_type": "guest",
        "text": "Bruce Fenton",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_147",
        "name": "Len From CAD BTC Pod",
        "weight": 0,
        "label": "Len From CAD BTC Pod",
        "type": "guest",
        "node_type": "guest",
        "text": "Len From CAD BTC Pod",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_148",
        "name": "Guy Swann",
        "weight": 0,
        "label": "Guy Swann",
        "type": "guest",
        "node_type": "guest",
        "text": "Guy Swann",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_149",
        "name": "@utxoclub",
        "weight": 0,
        "label": "@utxoclub",
        "type": "guest",
        "node_type": "guest",
        "text": "@utxoclub",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_150",
        "name": "@wiz",
        "weight": 0,
        "label": "@wiz",
        "type": "guest",
        "node_type": "guest",
        "text": "@wiz",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_151",
        "name": "@dooowta",
        "weight": 0,
        "label": "@dooowta",
        "type": "guest",
        "node_type": "guest",
        "text": "@dooowta",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_152",
        "name": "@benthecarman",
        "weight": 0,
        "label": "@benthecarman",
        "type": "guest",
        "node_type": "guest",
        "text": "@benthecarman",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_153",
        "name": "NVK",
        "weight": 0,
        "label": "NVK",
        "type": "guest",
        "node_type": "guest",
        "text": "NVK",
        "scale": 6,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_154",
        "name": "Matt Odell",
        "weight": 0,
        "label": "Matt Odell",
        "type": "guest",
        "node_type": "guest",
        "text": "Matt Odell",
        "scale": 18,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_155",
        "name": "Lyn Alden",
        "weight": 0,
        "label": "Lyn Alden",
        "type": "guest",
        "node_type": "guest",
        "text": "Lyn Alden",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_156",
        "name": "Christian Decker",
        "weight": 0,
        "label": "Christian Decker",
        "type": "guest",
        "node_type": "guest",
        "text": "Christian Decker",
        "scale": 4,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_157",
        "name": "Andrew Edstrom&Bruce Pullman",
        "weight": 0,
        "label": "Andrew Edstrom&Bruce Pullman",
        "type": "guest",
        "node_type": "guest",
        "text": "Andrew Edstrom&Bruce Pullman",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_158",
        "name": "Douglas Bakkum",
        "weight": 0,
        "label": "Douglas Bakkum",
        "type": "guest",
        "node_type": "guest",
        "text": "Douglas Bakkum",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_159",
        "name": "Pete Rizzo",
        "weight": 0,
        "label": "Pete Rizzo",
        "type": "guest",
        "node_type": "guest",
        "text": "Pete Rizzo",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_160",
        "name": "Alysee Killeen",
        "weight": 0,
        "label": "Alysee Killeen",
        "type": "guest",
        "node_type": "guest",
        "text": "Alysee Killeen",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_161",
        "name": "None",
        "weight": 0,
        "label": "None",
        "type": "guest",
        "node_type": "guest",
        "text": "None",
        "scale": 22,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_162",
        "name": "Chris Stewart",
        "weight": 0,
        "label": "Chris Stewart",
        "type": "guest",
        "node_type": "guest",
        "text": "Chris Stewart",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_163",
        "name": "Olaoluwa Osuntokun",
        "weight": 0,
        "label": "Olaoluwa Osuntokun",
        "type": "guest",
        "node_type": "guest",
        "text": "Olaoluwa Osuntokun",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_164",
        "name": "Nadav Kohen",
        "weight": 0,
        "label": "Nadav Kohen",
        "type": "guest",
        "node_type": "guest",
        "text": "Nadav Kohen",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_165",
        "name": "Roy Sheinfeld",
        "weight": 0,
        "label": "Roy Sheinfeld",
        "type": "guest",
        "node_type": "guest",
        "text": "Roy Sheinfeld",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_166",
        "name": "Andreas M. Antonopoulos",
        "weight": 0,
        "label": "Andreas M. Antonopoulos",
        "type": "guest",
        "node_type": "guest",
        "text": "Andreas M. Antonopoulos",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_167",
        "name": "Johannes Zweng",
        "weight": 0,
        "label": "Johannes Zweng",
        "type": "guest",
        "node_type": "guest",
        "text": "Johannes Zweng",
        "scale": 6,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_168",
        "name": "Carel van Wyk",
        "weight": 0,
        "label": "Carel van Wyk",
        "type": "guest",
        "node_type": "guest",
        "text": "Carel van Wyk",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_169",
        "name": "Gigi",
        "weight": 0,
        "label": "Gigi",
        "type": "guest",
        "node_type": "guest",
        "text": "Gigi",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_170",
        "name": "Ben Carman & Nadav Kohen",
        "weight": 0,
        "label": "Ben Carman & Nadav Kohen",
        "type": "guest",
        "node_type": "guest",
        "text": "Ben Carman & Nadav Kohen",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_171",
        "name": "Jeremy Rubin",
        "weight": 0,
        "label": "Jeremy Rubin",
        "type": "guest",
        "node_type": "guest",
        "text": "Jeremy Rubin",
        "scale": 14,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_172",
        "name": "Mustafa Yiham",
        "weight": 0,
        "label": "Mustafa Yiham",
        "type": "guest",
        "node_type": "guest",
        "text": "Mustafa Yiham",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_173",
        "name": "John Newbery",
        "weight": 0,
        "label": "John Newbery",
        "type": "guest",
        "node_type": "guest",
        "text": "John Newbery",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_174",
        "name": "Amiti Uttarwar",
        "weight": 0,
        "label": "Amiti Uttarwar",
        "type": "guest",
        "node_type": "guest",
        "text": "Amiti Uttarwar",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_175",
        "name": "Andrew Poelstra",
        "weight": 0,
        "label": "Andrew Poelstra",
        "type": "guest",
        "node_type": "guest",
        "text": "Andrew Poelstra",
        "scale": 8,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_176",
        "name": "Giacomo Zucco",
        "weight": 0,
        "label": "Giacomo Zucco",
        "type": "guest",
        "node_type": "guest",
        "text": "Giacomo Zucco",
        "scale": 8,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_177",
        "name": "Jack Mallers",
        "weight": 0,
        "label": "Jack Mallers",
        "type": "guest",
        "node_type": "guest",
        "text": "Jack Mallers",
        "scale": 6,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_178",
        "name": "Matt Odell & Nic Carter",
        "weight": 0,
        "label": "Matt Odell & Nic Carter",
        "type": "guest",
        "node_type": "guest",
        "text": "Matt Odell & Nic Carter",
        "scale": 6,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_179",
        "name": "Pieter Wuille",
        "weight": 0,
        "label": "Pieter Wuille",
        "type": "guest",
        "node_type": "guest",
        "text": "Pieter Wuille",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_180",
        "name": "Salvatore Ingala",
        "weight": 0,
        "label": "Salvatore Ingala",
        "type": "guest",
        "node_type": "guest",
        "text": "Salvatore Ingala",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_181",
        "name": "Pavel Moravec",
        "weight": 0,
        "label": "Pavel Moravec",
        "type": "guest",
        "node_type": "guest",
        "text": "Pavel Moravec",
        "scale": 12,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_182",
        "name": "Luke Dashjr",
        "weight": 0,
        "label": "Luke Dashjr",
        "type": "guest",
        "node_type": "guest",
        "text": "Luke Dashjr",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_183",
        "name": "Matt Corallo",
        "weight": 0,
        "label": "Matt Corallo",
        "type": "guest",
        "node_type": "guest",
        "text": "Matt Corallo",
        "scale": 4,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_184",
        "name": "AJ Towns",
        "weight": 0,
        "label": "AJ Towns",
        "type": "guest",
        "node_type": "guest",
        "text": "AJ Towns",
        "scale": 18,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_185",
        "name": "Jonas Nick",
        "weight": 0,
        "label": "Jonas Nick",
        "type": "guest",
        "node_type": "guest",
        "text": "Jonas Nick",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_186",
        "name": "JoeyTweets",
        "weight": 0,
        "label": "JoeyTweets",
        "type": "guest",
        "node_type": "guest",
        "text": "JoeyTweets",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_187",
        "name": "Mario Gibney",
        "weight": 0,
        "label": "Mario Gibney",
        "type": "guest",
        "node_type": "guest",
        "text": "Mario Gibney",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_188",
        "name": "Bobby Shell",
        "weight": 0,
        "label": "Bobby Shell",
        "type": "guest",
        "node_type": "guest",
        "text": "Bobby Shell",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_189",
        "name": "Len",
        "weight": 0,
        "label": "Len",
        "type": "guest",
        "node_type": "guest",
        "text": "Len",
        "scale": 2,
        "colors": [
            "#000"
        ]
    },
    {
        "id": "guestnode_190",
        "name": "Andrea M. Antonopoulos",
        "weight": 0,
        "label": "Andrea M. Antonopoulos",
        "type": "guest",
        "node_type": "guest",
        "text": "Andrea M. Antonopoulos",
        "scale": 2,
        "colors": [
            "#000"
        ]
    }
]

const startLinks = [
    {
        "source": "6cd8dc46-8782-4270-8013-24fa61e9b9e4",
        "target": "40f3b12f-0b5c-4233-ab38-d8eb88b4d191"
    },
    {
        "source": "69b507fc-8462-4d04-af14-2b859735ab00",
        "target": "d564076b-753c-42c4-bcc8-c6e5f09babf9"
    },
    {
        "source": "a237b538-9b4a-476e-9813-a4f5a62befa9",
        "target": "d734c4f4-f005-44c9-b8d3-260fe3f49cce"
    },
    {
        "source": "a237b538-9b4a-476e-9813-a4f5a62befa9",
        "target": "ca8a54fb-ce46-4c25-b8a9-1d2fa9f8e313"
    },
    {
        "source": "a237b538-9b4a-476e-9813-a4f5a62befa9",
        "target": "4a92e73d-2e6b-4e75-86e6-a4bb0027fa1a"
    },
    {
        "source": "a237b538-9b4a-476e-9813-a4f5a62befa9",
        "target": "2f1cabb9-eb06-4893-b222-42abbdc5db5a"
    },
    {
        "source": "a237b538-9b4a-476e-9813-a4f5a62befa9",
        "target": "5c17b52c-438a-4908-9291-06e2dd14896e"
    },
    {
        "source": "a237b538-9b4a-476e-9813-a4f5a62befa9",
        "target": "20e21ed1-78fd-4a85-a079-7ca0ade08aa0"
    },
    {
        "source": "a237b538-9b4a-476e-9813-a4f5a62befa9",
        "target": "8935141c-2362-4baa-bdaf-16f57c6d6328"
    },
    {
        "source": "e58e8b29-d9b0-4489-bfb2-9037d737301d",
        "target": "5247d37e-8b3c-4ea7-8a09-36c8a4800316"
    },
    {
        "source": "e58e8b29-d9b0-4489-bfb2-9037d737301d",
        "target": "31446053-a3e1-4ee7-9a03-6c2ad6b8dbd1"
    },
    {
        "source": "26884d67-6dc6-433a-a9b5-3b14cae04ed3",
        "target": "f85c6ac0-926a-497a-85df-efbbc28ec366"
    },
    {
        "source": "26884d67-6dc6-433a-a9b5-3b14cae04ed3",
        "target": "6dfb867a-9c18-4767-b80c-f13de6224c57"
    },
    {
        "source": "26884d67-6dc6-433a-a9b5-3b14cae04ed3",
        "target": "10243c5d-9c54-47d4-bbf7-6d90cb055751"
    },
    {
        "source": "26884d67-6dc6-433a-a9b5-3b14cae04ed3",
        "target": "9e23280e-3368-427e-8abe-841c5804b343"
    },
    {
        "source": "85daa3ba-dc4b-43a1-bab2-436d5d30e5d4",
        "target": "8513010c-8328-4083-a245-468afaee74c2"
    },
    {
        "source": "799e8b0e-2d2e-4392-8f92-99252d2336f5",
        "target": "8ca35d38-aa21-4724-94fb-9855173b60d6"
    },
    {
        "source": "799e8b0e-2d2e-4392-8f92-99252d2336f5",
        "target": "d2c491fa-af50-4fbd-b8ac-5cda0128ab36"
    },
    {
        "source": "799e8b0e-2d2e-4392-8f92-99252d2336f5",
        "target": "16574814-fb92-474c-8145-2a604633f43f"
    },
    {
        "source": "dba14fce-5ab7-46f5-915f-a5a0a574aad1",
        "target": "882630a1-4f46-4e02-861b-c2273a023803"
    },
    {
        "source": "6377c14f-551c-44e2-b0d9-564cd519503a",
        "target": "5489aa82-ca13-4d0b-8436-bca9de24a567"
    },
    {
        "source": "6377c14f-551c-44e2-b0d9-564cd519503a",
        "target": "c87de52c-2cc7-4c42-9cab-9143eaaf2c34"
    },
    {
        "source": "6377c14f-551c-44e2-b0d9-564cd519503a",
        "target": "4717996c-fe96-4356-8bdd-89e6bae75491"
    },
    {
        "source": "6377c14f-551c-44e2-b0d9-564cd519503a",
        "target": "6260505d-c26a-4984-831a-4772dac2c992"
    },
    {
        "source": "6377c14f-551c-44e2-b0d9-564cd519503a",
        "target": "4970df9b-f365-452d-8ea5-dd52c25e920b"
    },
    {
        "source": "6377c14f-551c-44e2-b0d9-564cd519503a",
        "target": "1120be8b-6e08-4781-95bb-a3b51c480940"
    },
    {
        "source": "6377c14f-551c-44e2-b0d9-564cd519503a",
        "target": "f495a5c6-3b24-4fc7-b17c-2343cadebaa8"
    },
    {
        "source": "0b9229a4-8cef-441c-8fc1-8e622616a44a",
        "target": "5e309f5f-3d50-4c20-9f2e-73057074ed24"
    },
    {
        "source": "0b9229a4-8cef-441c-8fc1-8e622616a44a",
        "target": "da61205f-ca0c-4220-864f-f0abbe5568e4"
    },
    {
        "source": "0b9229a4-8cef-441c-8fc1-8e622616a44a",
        "target": "b2b21176-307b-488d-b2a1-8e4efc26ce59"
    },
    {
        "source": "7f23843d-1b02-4d4c-92c4-b67960a9353d",
        "target": "8df9eee2-9763-4830-a060-bf2d1bee7297"
    },
    {
        "source": "fb528095-95df-4028-9c41-73a64623ae72",
        "target": "2c8742b7-5ae8-4849-bf66-551641f1245c"
    },
    {
        "source": "fb528095-95df-4028-9c41-73a64623ae72",
        "target": "8e5ec558-4971-4ccf-aabf-3b56d6b68e8a"
    },
    {
        "source": "fb528095-95df-4028-9c41-73a64623ae72",
        "target": "b9d66ffd-c9e8-4565-a662-59549803b775"
    },
    {
        "source": "fb528095-95df-4028-9c41-73a64623ae72",
        "target": "fa39f8c6-b381-4bad-ac53-993b023f72d5"
    },
    {
        "source": "25e51131-6ffc-4a3d-a95d-746b8624a20d",
        "target": "9accdae3-e03e-4e2f-8ac6-66bf14c6e9f6"
    },
    {
        "source": "25e51131-6ffc-4a3d-a95d-746b8624a20d",
        "target": "78559909-4296-407d-89b4-2ef1951b236d"
    },
    {
        "source": "25e51131-6ffc-4a3d-a95d-746b8624a20d",
        "target": "e7cbdd17-2a86-4aea-a6d4-5d3f89c5e641"
    },
    {
        "source": "f5e62320-35cf-4ae0-a5f1-f24a7f40bb02",
        "target": "e6b57553-28bc-4d37-9166-9d441fc360bd"
    },
    {
        "source": "60eb2037-e396-490a-9a05-2ae94f4ec9fd",
        "target": "d804b3e3-6dd7-4df6-a1ef-828359f35f28"
    },
    {
        "source": "60eb2037-e396-490a-9a05-2ae94f4ec9fd",
        "target": "b637b2a9-1eb6-4f13-9d4d-f2e360dfa186"
    },
    {
        "source": "b5e63726-7391-4114-80eb-750212533abd",
        "target": "3ab3bfd4-226b-407d-9452-3f8cd1f6ed2c"
    },
    {
        "source": "56212159-545d-4c10-89f2-1d7bfd264b67",
        "target": "23cd7491-9ae2-487b-81ef-566ad7a5b788"
    },
    {
        "source": "56212159-545d-4c10-89f2-1d7bfd264b67",
        "target": "ea022f77-b773-4315-99ba-d6e4ad9afe84"
    },
    {
        "source": "5f1cdc90-f610-40df-9821-04df9350583c",
        "target": "dd57eece-2825-4810-8b1d-d6671fb841a2"
    },
    {
        "source": "1b4954a3-4425-4038-94cb-67b27ea6cf31",
        "target": "33ec03bb-e9fb-4c9e-bd6c-880c604d4fca"
    },
    {
        "source": "f7ab7d85-8422-4eb9-ba41-cc3348e93ef7",
        "target": "0deee3e4-0b47-41c7-96de-e502fac0f629"
    },
    {
        "source": "3bef96c0-5232-4fac-b6d7-3fb8e295f21f",
        "target": "4545784c-7310-4a33-a308-685419b5dab5"
    },
    {
        "source": "3713728d-fdf3-4b1e-8c23-77b284482fea",
        "target": "9bd03669-3392-4943-8963-ebea35f3b19b"
    },
    {
        "source": "3713728d-fdf3-4b1e-8c23-77b284482fea",
        "target": "7d6accb1-c46e-4b4b-870e-6d1461b27c74"
    },
    {
        "source": "3713728d-fdf3-4b1e-8c23-77b284482fea",
        "target": "a8e9c5a4-402b-4f87-8f5f-4c023daa7f9d"
    },
    {
        "source": "661f9980-75ac-4441-b52f-04b9a67e7975",
        "target": "0992ba7f-128b-435b-9cb8-8198dbf8bfb9"
    },
    {
        "source": "acf7cb01-d086-42e0-be45-b948bd051898",
        "target": "49b76473-cea5-499b-a09b-d647ba1ad2f5"
    },
    {
        "source": "20d00aaf-fa00-4709-8d2f-f979384ff3ca",
        "target": "7e93d69f-fc51-4831-9c50-0e7fec1c1938"
    },
    {
        "source": "a35bc6bb-8057-4ce6-b64d-c88e951a9262",
        "target": "afea2ee4-bf9a-48ea-bc44-6e3d254ee11c"
    },
    {
        "source": "1454dd5d-1012-4b05-89ba-eb019c218cb4",
        "target": "18f70a0d-b6ad-4424-a6f7-f825a29d3718"
    },
    {
        "source": "a1be0c08-2b7f-4fae-85ae-71ba91371e3b",
        "target": "aaecf108-5b16-48a8-a482-3bc0e207a7de"
    },
    {
        "source": "a06aaf55-05ef-45d2-875a-5ab50a868b27",
        "target": "d3181d26-e0f3-45e1-b758-371c5909994a"
    },
    {
        "source": "a06aaf55-05ef-45d2-875a-5ab50a868b27",
        "target": "af1b6078-e933-4bc4-9ef2-c276eecf81ad"
    },
    {
        "source": "a06aaf55-05ef-45d2-875a-5ab50a868b27",
        "target": "57346559-c23a-4f76-931c-6a647675bf66"
    },
    {
        "source": "a06aaf55-05ef-45d2-875a-5ab50a868b27",
        "target": "882373f4-c66b-483d-97ce-6ee5ca5062d7"
    },
    {
        "source": "a06aaf55-05ef-45d2-875a-5ab50a868b27",
        "target": "5fcec958-2719-4562-a624-fa87deb3f4c1"
    },
    {
        "source": "a06aaf55-05ef-45d2-875a-5ab50a868b27",
        "target": "8b002f84-16f4-4a54-b376-ac7b28784e6e"
    },
    {
        "source": "a06aaf55-05ef-45d2-875a-5ab50a868b27",
        "target": "3531a8fc-5d24-46d8-89b1-c993b5e90b5b"
    },
    {
        "source": "a06aaf55-05ef-45d2-875a-5ab50a868b27",
        "target": "532afd6a-f58f-4197-a7b7-6eee90b6d8cd"
    },
    {
        "source": "a06aaf55-05ef-45d2-875a-5ab50a868b27",
        "target": "a65f8d26-c22a-4872-992a-4f499a845126"
    },
    {
        "source": "a861e454-8317-4edb-8c6b-04bba939d1d5",
        "target": "11f89c52-57eb-464d-875b-ecf15a23d4c4"
    },
    {
        "source": "a861e454-8317-4edb-8c6b-04bba939d1d5",
        "target": "038127f8-95f1-47fe-819f-f0ec7fd01180"
    },
    {
        "source": "4bea6c89-43b4-4e5e-9fea-0662d9ee7c00",
        "target": "b1eabcd8-8d00-4950-b264-f4f2741ca3a7"
    },
    {
        "source": "27314235-edb1-4430-a102-d19a53e7ff19",
        "target": "5b042489-fa11-42cb-b5d7-249defe0feb2"
    },
    {
        "source": "27314235-edb1-4430-a102-d19a53e7ff19",
        "target": "b81cce1c-6ed9-4c50-beeb-3b476e836516"
    },
    {
        "source": "27314235-edb1-4430-a102-d19a53e7ff19",
        "target": "40292a36-54d9-4f4c-b732-958b844478fe"
    },
    {
        "source": "27314235-edb1-4430-a102-d19a53e7ff19",
        "target": "39b8fefb-7783-4c85-8139-f0d8bd968c46"
    },
    {
        "source": "27314235-edb1-4430-a102-d19a53e7ff19",
        "target": "08e1e993-d816-40ee-848d-0ad5587fb823"
    },
    {
        "source": "27314235-edb1-4430-a102-d19a53e7ff19",
        "target": "6179f78c-1ade-49d0-8219-738704fb85a8"
    },
    {
        "source": "d232e74a-8cf2-4b0c-9e0b-f7a1d376f5bf",
        "target": "c7202fd2-be86-4325-97ec-fb961829e55a"
    },
    {
        "source": "2210cf14-eb63-432a-82ef-ae5aa4e90741",
        "target": "76490d63-51a7-4882-bc94-b1501eed58a4"
    },
    {
        "source": "b8a8edf8-bbe7-45c7-9fb9-5673acb4d1bd",
        "target": "fd743028-4776-4f63-aad8-5f6b9bbce7fe"
    },
    {
        "source": "f3b67780-d9c2-4a20-ab5c-115032a05b3a",
        "target": "71fa6f0c-e19c-480e-ad2e-1aee6e746990"
    },
    {
        "source": "eeca50f4-77ab-453f-bb40-f7432087759f",
        "target": "d98d678b-6a08-4d74-9dea-ed91e5b34830"
    },
    {
        "source": "de744984-4b8b-457b-84b8-376288f1a2d6",
        "target": "bf80a754-90ab-49e6-848b-788d2d4e672b"
    },
    {
        "source": "2b065676-16bf-4e39-840d-150b202eeaeb",
        "target": "e1a13903-4269-48ba-b885-d7a8f343b9cc"
    },
    {
        "source": "1dc3a8d9-4ccc-4e76-9d76-c81cf65e129b",
        "target": "e33ee8de-02f6-445a-9850-4068ffb04bb7"
    },
    {
        "source": "0aa654da-c4ad-4c9f-9c95-6443c73cdc26",
        "target": "408df8f4-586d-49d0-b9e3-bb418e3b3913"
    },
    {
        "source": "957ccdc7-498c-47c9-9ad4-d48f0a8be582",
        "target": "d79e8026-6d6b-4b76-b004-4ff835fe9e0e"
    },
    {
        "source": "d58011ba-e6d6-43b0-9f3c-b4e104d13306",
        "target": "88114a5e-e654-4575-af17-6498bd00a927"
    },
    {
        "source": "d58011ba-e6d6-43b0-9f3c-b4e104d13306",
        "target": "5a8d67cc-8b2e-46eb-9da5-c51fc9d7abeb"
    },
    {
        "source": "d58011ba-e6d6-43b0-9f3c-b4e104d13306",
        "target": "f310a8a8-6925-4897-be99-b49f91960e41"
    },
    {
        "source": "f1d3cf59-0135-45d9-8a38-25840c674503",
        "target": "3941e5ce-f698-4acd-a32e-b5fc6685b528"
    },
    {
        "source": "a7518cec-87bc-4bed-ab34-85f1b9bd2b89",
        "target": "497e05fa-3a59-4dc5-8f27-6c99b95a5e27"
    },
    {
        "source": "2668979c-b4dd-4794-b42b-2fcd5b9dfdaf",
        "target": "d415962a-2461-4cc3-a3a4-4fe8e239310e"
    },
    {
        "source": "ef1cad08-fb65-48c3-928e-9b2cbc5a908d",
        "target": "21fa7758-8c64-4498-af23-473137bb62d5"
    },
    {
        "source": "87eb3f5b-7fec-424e-9b3a-6f6a6975daa6",
        "target": "bf196483-5d36-413f-ad0f-06aa91b965f9"
    },
    {
        "source": "340a1d98-a6f8-41a6-bdd9-bcf92e8122ce",
        "target": "346e5c8a-3eb5-489f-9443-8f5a09520cfe"
    },
    {
        "source": "10467934-fd14-44ac-be77-7b84dd8feabf",
        "target": "87e0b2ad-0e08-452f-a801-c6b0ea6e31a0"
    },
    {
        "source": "fcf66730-dd46-4601-b152-c70aad47b5b4",
        "target": "0a6e3ab0-1fbd-4593-94b0-b1ab4d7400cc"
    },
    {
        "source": "0eeb0783-3f6d-4fd3-bb3b-6cca2964690a",
        "target": "6690561a-c33c-4409-ad7a-dad8a20d649f"
    },
    {
        "source": "80d73d47-eb05-40ca-9c28-3332a70e9d2e",
        "target": "604b395b-403b-440c-b2e3-d82e5fda158c"
    },
    {
        "source": "91621fc7-77be-4567-b1de-c3e69abe5680",
        "target": "b2e261a3-527a-42b3-a876-62008723e8b9"
    },
    {
        "source": "ec4b942d-a733-4503-ac2e-178e417e3a5f",
        "target": "0ad52c64-3f14-4a12-8fd3-b3d1578dba88"
    },
    {
        "source": "bafb3d84-2b80-4fab-b16e-fe3775a55e08",
        "target": "41facde0-1cbf-471a-9c0d-42a05fd66791"
    },
    {
        "source": "8b2ddee5-a490-45a5-a47e-4be6e95d7867",
        "target": "2edc5ed8-1a77-4ba4-8ecc-c501d5223c79"
    },
    {
        "source": "db58f6c4-510f-4be4-bc0b-546f1dc17cda",
        "target": "43b07e80-d3bc-49a4-8b46-876679de936d"
    },
    {
        "source": "eb7b7e66-2ee6-4f56-a3b3-7823227f5019",
        "target": "80882cf0-026e-461b-b399-145e39dd20db"
    },
    {
        "source": "76b9d659-9163-41e6-96f1-cb3ac3812c25",
        "target": "c74f22fd-fb43-4e9e-a7d1-ea5fd00ecaa2"
    },
    {
        "source": "930b3f95-4416-442d-bc8b-b6902f179501",
        "target": "aa2f5f8a-cbeb-4103-ac48-4eaee97bd7a5"
    },
    {
        "source": "fdb77652-139a-46b3-8c86-837e536f07ab",
        "target": "00d21ae6-f66c-4eb3-9ee2-fe78f2f3aea4"
    },
    {
        "source": "fdb77652-139a-46b3-8c86-837e536f07ab",
        "target": "58fb39e5-3669-42fb-9d41-9a6b272bb767"
    },
    {
        "source": "a64d3011-a305-4883-bf1f-8c3933535a24",
        "target": "e2bee60e-9ff2-4a70-9324-820f1b857c3a"
    },
    {
        "source": "b418491a-480d-451b-993a-9a7ac4d3a70a",
        "target": "2d62784c-27da-40cf-bef5-c354d590fc10"
    },
    {
        "source": "65111f32-3216-48aa-a705-8de94e2cf612",
        "target": "4f4cdf02-0255-4c69-9845-cf518738ffc5"
    },
    {
        "source": "95d85cb7-713a-4043-8f85-3dca2be94e54",
        "target": "1ab56cd4-4234-4007-b557-bc12d1ab5656"
    },
    {
        "source": "ad1b2aec-3ac1-4b27-b1de-8953e7b35f5f",
        "target": "32114f7e-9d5d-41f6-ada7-427d637772d0"
    },
    {
        "source": "b27bb18e-0cc0-4f54-b4a8-20c089e449e4",
        "target": "43e6a66f-8657-4f64-8f84-252a12a72eef"
    },
    {
        "source": "fb744b69-f7ae-4e05-9a07-90aa98401b68",
        "target": "65d8d2ef-6006-4534-8399-ce5017aaa545"
    },
    {
        "source": "fb744b69-f7ae-4e05-9a07-90aa98401b68",
        "target": "6e15a1db-149f-4c46-8585-d400a1710a6e"
    },
    {
        "source": "fb744b69-f7ae-4e05-9a07-90aa98401b68",
        "target": "4d52d59f-a0f7-49db-a970-a9f2d4cd4fde"
    },
    {
        "source": "fb744b69-f7ae-4e05-9a07-90aa98401b68",
        "target": "f3171191-b05c-41bf-b99d-ad9dbb694aab"
    },
    {
        "source": "ed0ffb2b-01d3-4746-b0d9-a3150aeca69c",
        "target": "f7f74648-a369-4976-a0ac-11373607a471"
    },
    {
        "source": "4d50e67e-8152-4ca1-875f-6b4d5f4ace2e",
        "target": "f7d0933e-06a4-4080-9049-307b26d11bba"
    },
    {
        "source": "4d50e67e-8152-4ca1-875f-6b4d5f4ace2e",
        "target": "caf06f30-e6c8-4d90-b0fb-e40668218f83"
    },
    {
        "source": "4d50e67e-8152-4ca1-875f-6b4d5f4ace2e",
        "target": "757ae3e5-9650-4877-aa8c-f4f60a0c92f1"
    },
    {
        "source": "0ee39e5d-4caa-4022-94c7-7905b6c5e6a3",
        "target": "a60a9981-7cb1-4594-81c9-103f7c8ae40f"
    },
    {
        "source": "0ee39e5d-4caa-4022-94c7-7905b6c5e6a3",
        "target": "ab59ee25-c115-458e-acc7-2dd200401590"
    },
    {
        "source": "0ee39e5d-4caa-4022-94c7-7905b6c5e6a3",
        "target": "105c8501-1967-40f5-bf0a-3974c60b4416"
    },
    {
        "source": "0ee39e5d-4caa-4022-94c7-7905b6c5e6a3",
        "target": "ab34d27e-9340-4413-b0d8-3b170d206f49"
    },
    {
        "source": "0cda7cd8-1deb-44ab-9518-45dc7dbf4a28",
        "target": "50e37d1a-6668-4319-8ccf-d9f049d325eb"
    },
    {
        "source": "d5c1d55c-73ee-4d1a-bfb4-927f1e706360",
        "target": "fcbf51f9-6bcc-4b91-885e-ac223665ba2f"
    },
    {
        "source": "d5c1d55c-73ee-4d1a-bfb4-927f1e706360",
        "target": "d6d8f43a-76c1-4d14-83fb-a2f463e87d0b"
    },
    {
        "source": "d5c1d55c-73ee-4d1a-bfb4-927f1e706360",
        "target": "c966ea9f-e256-4d55-910f-c87ac52e0aa9"
    },
    {
        "source": "d5c1d55c-73ee-4d1a-bfb4-927f1e706360",
        "target": "a4ee427d-a4a8-4321-9e1e-b0121b4cf572"
    },
    {
        "source": "d5c1d55c-73ee-4d1a-bfb4-927f1e706360",
        "target": "80a70dde-ca15-4176-905a-42dfeafab63f"
    },
    {
        "source": "df8d58ac-c7c0-4758-91c1-c0439dd4c656",
        "target": "745de5fd-5861-412d-9001-3dbad79c72ea"
    },
    {
        "source": "df8d58ac-c7c0-4758-91c1-c0439dd4c656",
        "target": "dd4fe6e9-9ce4-4ebb-909e-8dd3dc7fef72"
    },
    {
        "source": "df8d58ac-c7c0-4758-91c1-c0439dd4c656",
        "target": "ebce2e4e-1844-44b0-9e03-9d56ae956691"
    },
    {
        "source": "df8d58ac-c7c0-4758-91c1-c0439dd4c656",
        "target": "eecfa4ca-b53e-4e06-b320-d482eaf20e1b"
    },
    {
        "source": "df8d58ac-c7c0-4758-91c1-c0439dd4c656",
        "target": "d5647a9d-9ad1-401e-91e9-0acc67057727"
    },
    {
        "source": "dbcd092c-b06d-483c-8d9d-c64a558fd5f1",
        "target": "f4c17f9d-9e6b-4714-84a9-b4f41219e260"
    },
    {
        "source": "13cb85e2-a530-48a7-9e4e-266532205464",
        "target": "9d7f6104-9050-43cd-bfbd-db2273ff26af"
    },
    {
        "source": "ef719c66-f40e-42ff-b736-0d8cd56cbc3e",
        "target": "94a52af9-372d-4e88-9272-649a49c1fa57"
    },
    {
        "source": "0aea63c5-98f4-446f-b5af-1c27b792ae7e",
        "target": "5b3d17d2-8e1e-4248-bc2e-4ae2e531a4c2"
    },
    {
        "source": "75234f92-e025-41d4-b1d9-edb2c9143f46",
        "target": "5563d4e7-6474-4337-bf62-19817aeae380"
    },
    {
        "source": "a6d435c2-358b-4488-a38c-46f05b4825c8",
        "target": "c5d33f10-d55a-4a43-b7e5-c25c3c89a304"
    },
    {
        "source": "1473b95e-c874-4fd6-abe0-6c0101ae86fe",
        "target": "beb13404-ed7c-4237-b977-1ebd6e1eaa55"
    },
    {
        "source": "1473b95e-c874-4fd6-abe0-6c0101ae86fe",
        "target": "d2b2b863-d33a-47a7-ac98-d97ef42586fb"
    },
    {
        "source": "1473b95e-c874-4fd6-abe0-6c0101ae86fe",
        "target": "f3863b80-518a-497b-8083-20e9f111d175"
    },
    {
        "source": "cb29a5cc-2201-4bc9-80dd-6925f182ed84",
        "target": "6cd8dc46-8782-4270-8013-24fa61e9b9e4"
    },
    {
        "source": "7e527435-3dd8-4d07-8b15-40d31e02d759",
        "target": "69b507fc-8462-4d04-af14-2b859735ab00"
    },
    {
        "source": "7de0d293-8ae3-4362-8500-8f7300f3fe41",
        "target": "a237b538-9b4a-476e-9813-a4f5a62befa9"
    },
    {
        "source": "7de0d293-8ae3-4362-8500-8f7300f3fe41",
        "target": "a237b538-9b4a-476e-9813-a4f5a62befa9"
    },
    {
        "source": "7de0d293-8ae3-4362-8500-8f7300f3fe41",
        "target": "a237b538-9b4a-476e-9813-a4f5a62befa9"
    },
    {
        "source": "7de0d293-8ae3-4362-8500-8f7300f3fe41",
        "target": "a237b538-9b4a-476e-9813-a4f5a62befa9"
    },
    {
        "source": "7de0d293-8ae3-4362-8500-8f7300f3fe41",
        "target": "a237b538-9b4a-476e-9813-a4f5a62befa9"
    },
    {
        "source": "7de0d293-8ae3-4362-8500-8f7300f3fe41",
        "target": "a237b538-9b4a-476e-9813-a4f5a62befa9"
    },
    {
        "source": "7de0d293-8ae3-4362-8500-8f7300f3fe41",
        "target": "a237b538-9b4a-476e-9813-a4f5a62befa9"
    },
    {
        "source": "a85a6e60-55b8-484c-b93e-45d0f4ec73c4",
        "target": "e58e8b29-d9b0-4489-bfb2-9037d737301d"
    },
    {
        "source": "a85a6e60-55b8-484c-b93e-45d0f4ec73c4",
        "target": "e58e8b29-d9b0-4489-bfb2-9037d737301d"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "26884d67-6dc6-433a-a9b5-3b14cae04ed3"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "26884d67-6dc6-433a-a9b5-3b14cae04ed3"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "26884d67-6dc6-433a-a9b5-3b14cae04ed3"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "26884d67-6dc6-433a-a9b5-3b14cae04ed3"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "85daa3ba-dc4b-43a1-bab2-436d5d30e5d4"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "799e8b0e-2d2e-4392-8f92-99252d2336f5"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "799e8b0e-2d2e-4392-8f92-99252d2336f5"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "799e8b0e-2d2e-4392-8f92-99252d2336f5"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "dba14fce-5ab7-46f5-915f-a5a0a574aad1"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "6377c14f-551c-44e2-b0d9-564cd519503a"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "6377c14f-551c-44e2-b0d9-564cd519503a"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "6377c14f-551c-44e2-b0d9-564cd519503a"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "6377c14f-551c-44e2-b0d9-564cd519503a"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "6377c14f-551c-44e2-b0d9-564cd519503a"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "6377c14f-551c-44e2-b0d9-564cd519503a"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "6377c14f-551c-44e2-b0d9-564cd519503a"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "0b9229a4-8cef-441c-8fc1-8e622616a44a"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "0b9229a4-8cef-441c-8fc1-8e622616a44a"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "0b9229a4-8cef-441c-8fc1-8e622616a44a"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "7f23843d-1b02-4d4c-92c4-b67960a9353d"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "fb528095-95df-4028-9c41-73a64623ae72"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "fb528095-95df-4028-9c41-73a64623ae72"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "fb528095-95df-4028-9c41-73a64623ae72"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "fb528095-95df-4028-9c41-73a64623ae72"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "25e51131-6ffc-4a3d-a95d-746b8624a20d"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "25e51131-6ffc-4a3d-a95d-746b8624a20d"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "25e51131-6ffc-4a3d-a95d-746b8624a20d"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "f5e62320-35cf-4ae0-a5f1-f24a7f40bb02"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "60eb2037-e396-490a-9a05-2ae94f4ec9fd"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "60eb2037-e396-490a-9a05-2ae94f4ec9fd"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "b5e63726-7391-4114-80eb-750212533abd"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "56212159-545d-4c10-89f2-1d7bfd264b67"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "56212159-545d-4c10-89f2-1d7bfd264b67"
    },
    {
        "source": "9e7e229f-2631-4542-b5d7-7fcd502798dc",
        "target": "5f1cdc90-f610-40df-9821-04df9350583c"
    },
    {
        "source": "19ee7484-9568-4a5e-884e-8accb3794058",
        "target": "1b4954a3-4425-4038-94cb-67b27ea6cf31"
    },
    {
        "source": "4e607036-8fde-48ef-ab76-9c2ac4bab031",
        "target": "f7ab7d85-8422-4eb9-ba41-cc3348e93ef7"
    },
    {
        "source": "4e607036-8fde-48ef-ab76-9c2ac4bab031",
        "target": "3bef96c0-5232-4fac-b6d7-3fb8e295f21f"
    },
    {
        "source": "4e607036-8fde-48ef-ab76-9c2ac4bab031",
        "target": "3713728d-fdf3-4b1e-8c23-77b284482fea"
    },
    {
        "source": "4e607036-8fde-48ef-ab76-9c2ac4bab031",
        "target": "3713728d-fdf3-4b1e-8c23-77b284482fea"
    },
    {
        "source": "4e607036-8fde-48ef-ab76-9c2ac4bab031",
        "target": "3713728d-fdf3-4b1e-8c23-77b284482fea"
    },
    {
        "source": "4e607036-8fde-48ef-ab76-9c2ac4bab031",
        "target": "661f9980-75ac-4441-b52f-04b9a67e7975"
    },
    {
        "source": "4e607036-8fde-48ef-ab76-9c2ac4bab031",
        "target": "acf7cb01-d086-42e0-be45-b948bd051898"
    },
    {
        "source": "4e607036-8fde-48ef-ab76-9c2ac4bab031",
        "target": "20d00aaf-fa00-4709-8d2f-f979384ff3ca"
    },
    {
        "source": "4e607036-8fde-48ef-ab76-9c2ac4bab031",
        "target": "a35bc6bb-8057-4ce6-b64d-c88e951a9262"
    },
    {
        "source": "4e607036-8fde-48ef-ab76-9c2ac4bab031",
        "target": "1454dd5d-1012-4b05-89ba-eb019c218cb4"
    },
    {
        "source": "4e607036-8fde-48ef-ab76-9c2ac4bab031",
        "target": "a1be0c08-2b7f-4fae-85ae-71ba91371e3b"
    },
    {
        "source": "b79a3eb8-bcd0-4338-b979-d32aef360785",
        "target": "a06aaf55-05ef-45d2-875a-5ab50a868b27"
    },
    {
        "source": "b79a3eb8-bcd0-4338-b979-d32aef360785",
        "target": "a06aaf55-05ef-45d2-875a-5ab50a868b27"
    },
    {
        "source": "b79a3eb8-bcd0-4338-b979-d32aef360785",
        "target": "a06aaf55-05ef-45d2-875a-5ab50a868b27"
    },
    {
        "source": "b79a3eb8-bcd0-4338-b979-d32aef360785",
        "target": "a06aaf55-05ef-45d2-875a-5ab50a868b27"
    },
    {
        "source": "b79a3eb8-bcd0-4338-b979-d32aef360785",
        "target": "a06aaf55-05ef-45d2-875a-5ab50a868b27"
    },
    {
        "source": "b79a3eb8-bcd0-4338-b979-d32aef360785",
        "target": "a06aaf55-05ef-45d2-875a-5ab50a868b27"
    },
    {
        "source": "b79a3eb8-bcd0-4338-b979-d32aef360785",
        "target": "a06aaf55-05ef-45d2-875a-5ab50a868b27"
    },
    {
        "source": "b79a3eb8-bcd0-4338-b979-d32aef360785",
        "target": "a06aaf55-05ef-45d2-875a-5ab50a868b27"
    },
    {
        "source": "b79a3eb8-bcd0-4338-b979-d32aef360785",
        "target": "a06aaf55-05ef-45d2-875a-5ab50a868b27"
    },
    {
        "source": "b79a3eb8-bcd0-4338-b979-d32aef360785",
        "target": "a861e454-8317-4edb-8c6b-04bba939d1d5"
    },
    {
        "source": "b79a3eb8-bcd0-4338-b979-d32aef360785",
        "target": "a861e454-8317-4edb-8c6b-04bba939d1d5"
    },
    {
        "source": "b79a3eb8-bcd0-4338-b979-d32aef360785",
        "target": "4bea6c89-43b4-4e5e-9fea-0662d9ee7c00"
    },
    {
        "source": "b79a3eb8-bcd0-4338-b979-d32aef360785",
        "target": "27314235-edb1-4430-a102-d19a53e7ff19"
    },
    {
        "source": "b79a3eb8-bcd0-4338-b979-d32aef360785",
        "target": "27314235-edb1-4430-a102-d19a53e7ff19"
    },
    {
        "source": "b79a3eb8-bcd0-4338-b979-d32aef360785",
        "target": "27314235-edb1-4430-a102-d19a53e7ff19"
    },
    {
        "source": "b79a3eb8-bcd0-4338-b979-d32aef360785",
        "target": "27314235-edb1-4430-a102-d19a53e7ff19"
    },
    {
        "source": "b79a3eb8-bcd0-4338-b979-d32aef360785",
        "target": "27314235-edb1-4430-a102-d19a53e7ff19"
    },
    {
        "source": "b79a3eb8-bcd0-4338-b979-d32aef360785",
        "target": "27314235-edb1-4430-a102-d19a53e7ff19"
    },
    {
        "source": "b79a3eb8-bcd0-4338-b979-d32aef360785",
        "target": "d232e74a-8cf2-4b0c-9e0b-f7a1d376f5bf"
    },
    {
        "source": "12db0692-468b-4d0e-a73d-cfd33643aed7",
        "target": "2210cf14-eb63-432a-82ef-ae5aa4e90741"
    },
    {
        "source": "419512c2-e309-4b25-bfe2-cd481d53f66d",
        "target": "b8a8edf8-bbe7-45c7-9fb9-5673acb4d1bd"
    },
    {
        "source": "419512c2-e309-4b25-bfe2-cd481d53f66d",
        "target": "f3b67780-d9c2-4a20-ab5c-115032a05b3a"
    },
    {
        "source": "419512c2-e309-4b25-bfe2-cd481d53f66d",
        "target": "eeca50f4-77ab-453f-bb40-f7432087759f"
    },
    {
        "source": "419512c2-e309-4b25-bfe2-cd481d53f66d",
        "target": "de744984-4b8b-457b-84b8-376288f1a2d6"
    },
    {
        "source": "d477227d-0df7-48fe-8832-349e78c5f1c3",
        "target": "2b065676-16bf-4e39-840d-150b202eeaeb"
    },
    {
        "source": "d477227d-0df7-48fe-8832-349e78c5f1c3",
        "target": "1dc3a8d9-4ccc-4e76-9d76-c81cf65e129b"
    },
    {
        "source": "838898e2-a0a0-4361-93b8-8ca0b14430a1",
        "target": "0aa654da-c4ad-4c9f-9c95-6443c73cdc26"
    },
    {
        "source": "838898e2-a0a0-4361-93b8-8ca0b14430a1",
        "target": "957ccdc7-498c-47c9-9ad4-d48f0a8be582"
    },
    {
        "source": "838898e2-a0a0-4361-93b8-8ca0b14430a1",
        "target": "d58011ba-e6d6-43b0-9f3c-b4e104d13306"
    },
    {
        "source": "838898e2-a0a0-4361-93b8-8ca0b14430a1",
        "target": "d58011ba-e6d6-43b0-9f3c-b4e104d13306"
    },
    {
        "source": "838898e2-a0a0-4361-93b8-8ca0b14430a1",
        "target": "d58011ba-e6d6-43b0-9f3c-b4e104d13306"
    },
    {
        "source": "838898e2-a0a0-4361-93b8-8ca0b14430a1",
        "target": "f1d3cf59-0135-45d9-8a38-25840c674503"
    },
    {
        "source": "838898e2-a0a0-4361-93b8-8ca0b14430a1",
        "target": "a7518cec-87bc-4bed-ab34-85f1b9bd2b89"
    },
    {
        "source": "838898e2-a0a0-4361-93b8-8ca0b14430a1",
        "target": "2668979c-b4dd-4794-b42b-2fcd5b9dfdaf"
    },
    {
        "source": "838898e2-a0a0-4361-93b8-8ca0b14430a1",
        "target": "ef1cad08-fb65-48c3-928e-9b2cbc5a908d"
    },
    {
        "source": "838898e2-a0a0-4361-93b8-8ca0b14430a1",
        "target": "87eb3f5b-7fec-424e-9b3a-6f6a6975daa6"
    },
    {
        "source": "838898e2-a0a0-4361-93b8-8ca0b14430a1",
        "target": "340a1d98-a6f8-41a6-bdd9-bcf92e8122ce"
    },
    {
        "source": "1f747a62-4255-422a-85d7-0633d31d27c2",
        "target": "10467934-fd14-44ac-be77-7b84dd8feabf"
    },
    {
        "source": "1f747a62-4255-422a-85d7-0633d31d27c2",
        "target": "fcf66730-dd46-4601-b152-c70aad47b5b4"
    },
    {
        "source": "1f747a62-4255-422a-85d7-0633d31d27c2",
        "target": "0eeb0783-3f6d-4fd3-bb3b-6cca2964690a"
    },
    {
        "source": "1f747a62-4255-422a-85d7-0633d31d27c2",
        "target": "80d73d47-eb05-40ca-9c28-3332a70e9d2e"
    },
    {
        "source": "1f747a62-4255-422a-85d7-0633d31d27c2",
        "target": "91621fc7-77be-4567-b1de-c3e69abe5680"
    },
    {
        "source": "1f747a62-4255-422a-85d7-0633d31d27c2",
        "target": "ec4b942d-a733-4503-ac2e-178e417e3a5f"
    },
    {
        "source": "1f747a62-4255-422a-85d7-0633d31d27c2",
        "target": "bafb3d84-2b80-4fab-b16e-fe3775a55e08"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "8b2ddee5-a490-45a5-a47e-4be6e95d7867"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "db58f6c4-510f-4be4-bc0b-546f1dc17cda"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "eb7b7e66-2ee6-4f56-a3b3-7823227f5019"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "76b9d659-9163-41e6-96f1-cb3ac3812c25"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "930b3f95-4416-442d-bc8b-b6902f179501"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "fdb77652-139a-46b3-8c86-837e536f07ab"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "fdb77652-139a-46b3-8c86-837e536f07ab"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "a64d3011-a305-4883-bf1f-8c3933535a24"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "b418491a-480d-451b-993a-9a7ac4d3a70a"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "65111f32-3216-48aa-a705-8de94e2cf612"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "95d85cb7-713a-4043-8f85-3dca2be94e54"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "ad1b2aec-3ac1-4b27-b1de-8953e7b35f5f"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "b27bb18e-0cc0-4f54-b4a8-20c089e449e4"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "fb744b69-f7ae-4e05-9a07-90aa98401b68"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "fb744b69-f7ae-4e05-9a07-90aa98401b68"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "fb744b69-f7ae-4e05-9a07-90aa98401b68"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "fb744b69-f7ae-4e05-9a07-90aa98401b68"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "ed0ffb2b-01d3-4746-b0d9-a3150aeca69c"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "4d50e67e-8152-4ca1-875f-6b4d5f4ace2e"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "4d50e67e-8152-4ca1-875f-6b4d5f4ace2e"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "4d50e67e-8152-4ca1-875f-6b4d5f4ace2e"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "0ee39e5d-4caa-4022-94c7-7905b6c5e6a3"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "0ee39e5d-4caa-4022-94c7-7905b6c5e6a3"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "0ee39e5d-4caa-4022-94c7-7905b6c5e6a3"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "0ee39e5d-4caa-4022-94c7-7905b6c5e6a3"
    },
    {
        "source": "aeb47b88-cb7f-4504-bb71-ff46d200e514",
        "target": "0cda7cd8-1deb-44ab-9518-45dc7dbf4a28"
    },
    {
        "source": "3e178b7d-b8b9-4fd4-ba36-017b834537da",
        "target": "d5c1d55c-73ee-4d1a-bfb4-927f1e706360"
    },
    {
        "source": "3e178b7d-b8b9-4fd4-ba36-017b834537da",
        "target": "d5c1d55c-73ee-4d1a-bfb4-927f1e706360"
    },
    {
        "source": "3e178b7d-b8b9-4fd4-ba36-017b834537da",
        "target": "d5c1d55c-73ee-4d1a-bfb4-927f1e706360"
    },
    {
        "source": "3e178b7d-b8b9-4fd4-ba36-017b834537da",
        "target": "d5c1d55c-73ee-4d1a-bfb4-927f1e706360"
    },
    {
        "source": "3e178b7d-b8b9-4fd4-ba36-017b834537da",
        "target": "d5c1d55c-73ee-4d1a-bfb4-927f1e706360"
    },
    {
        "source": "3e178b7d-b8b9-4fd4-ba36-017b834537da",
        "target": "df8d58ac-c7c0-4758-91c1-c0439dd4c656"
    },
    {
        "source": "3e178b7d-b8b9-4fd4-ba36-017b834537da",
        "target": "df8d58ac-c7c0-4758-91c1-c0439dd4c656"
    },
    {
        "source": "3e178b7d-b8b9-4fd4-ba36-017b834537da",
        "target": "df8d58ac-c7c0-4758-91c1-c0439dd4c656"
    },
    {
        "source": "3e178b7d-b8b9-4fd4-ba36-017b834537da",
        "target": "df8d58ac-c7c0-4758-91c1-c0439dd4c656"
    },
    {
        "source": "3e178b7d-b8b9-4fd4-ba36-017b834537da",
        "target": "df8d58ac-c7c0-4758-91c1-c0439dd4c656"
    },
    {
        "source": "1583c7c4-f4f2-4e52-8f27-a1eaeb6289fd",
        "target": "dbcd092c-b06d-483c-8d9d-c64a558fd5f1"
    },
    {
        "source": "0a24ff3e-9e22-42dc-9d73-70d54d85d45c",
        "target": "13cb85e2-a530-48a7-9e4e-266532205464"
    },
    {
        "source": "5e3cde4e-30ab-43bc-854f-4f7e2f0d60e6",
        "target": "ef719c66-f40e-42ff-b736-0d8cd56cbc3e"
    },
    {
        "source": "5e3cde4e-30ab-43bc-854f-4f7e2f0d60e6",
        "target": "0aea63c5-98f4-446f-b5af-1c27b792ae7e"
    },
    {
        "source": "8ad86341-0063-41e7-a78c-27d43c150c5c",
        "target": "75234f92-e025-41d4-b1d9-edb2c9143f46"
    },
    {
        "source": "a09a2c49-84f1-4d0b-b150-6e6103f4ee41",
        "target": "a6d435c2-358b-4488-a38c-46f05b4825c8"
    },
    {
        "source": "cd6b8d64-bd52-4f1e-86b3-ca8ba2eb169f",
        "target": "1473b95e-c874-4fd6-abe0-6c0101ae86fe"
    },
    {
        "source": "cd6b8d64-bd52-4f1e-86b3-ca8ba2eb169f",
        "target": "1473b95e-c874-4fd6-abe0-6c0101ae86fe"
    },
    {
        "source": "cd6b8d64-bd52-4f1e-86b3-ca8ba2eb169f",
        "target": "1473b95e-c874-4fd6-abe0-6c0101ae86fe"
    },
    {
        "source": "da61205f-ca0c-4220-864f-f0abbe5568e4",
        "target": "guestnode_139"
    },
    {
        "source": "9accdae3-e03e-4e2f-8ac6-66bf14c6e9f6",
        "target": "guestnode_139"
    },
    {
        "source": "5e309f5f-3d50-4c20-9f2e-73057074ed24",
        "target": "guestnode_139"
    },
    {
        "source": "fa39f8c6-b381-4bad-ac53-993b023f72d5",
        "target": "guestnode_139"
    },
    {
        "source": "b9d66ffd-c9e8-4565-a662-59549803b775",
        "target": "guestnode_139"
    },
    {
        "source": "78559909-4296-407d-89b4-2ef1951b236d",
        "target": "guestnode_139"
    },
    {
        "source": "b2b21176-307b-488d-b2a1-8e4efc26ce59",
        "target": "guestnode_139"
    },
    {
        "source": "2c8742b7-5ae8-4849-bf66-551641f1245c",
        "target": "guestnode_139"
    },
    {
        "source": "8e5ec558-4971-4ccf-aabf-3b56d6b68e8a",
        "target": "guestnode_139"
    },
    {
        "source": "aaecf108-5b16-48a8-a482-3bc0e207a7de",
        "target": "guestnode_139"
    },
    {
        "source": "e7cbdd17-2a86-4aea-a6d4-5d3f89c5e641",
        "target": "guestnode_139"
    },
    {
        "source": "346e5c8a-3eb5-489f-9443-8f5a09520cfe",
        "target": "guestnode_140"
    },
    {
        "source": "21fa7758-8c64-4498-af23-473137bb62d5",
        "target": "guestnode_140"
    },
    {
        "source": "bf196483-5d36-413f-ad0f-06aa91b965f9",
        "target": "guestnode_140"
    },
    {
        "source": "d415962a-2461-4cc3-a3a4-4fe8e239310e",
        "target": "guestnode_140"
    },
    {
        "source": "e6b57553-28bc-4d37-9166-9d441fc360bd",
        "target": "guestnode_141"
    },
    {
        "source": "3ab3bfd4-226b-407d-9452-3f8cd1f6ed2c",
        "target": "guestnode_141"
    },
    {
        "source": "18f70a0d-b6ad-4424-a6f7-f825a29d3718",
        "target": "guestnode_141"
    },
    {
        "source": "7e93d69f-fc51-4831-9c50-0e7fec1c1938",
        "target": "guestnode_141"
    },
    {
        "source": "16574814-fb92-474c-8145-2a604633f43f",
        "target": "guestnode_142"
    },
    {
        "source": "8ca35d38-aa21-4724-94fb-9855173b60d6",
        "target": "guestnode_142"
    },
    {
        "source": "d2c491fa-af50-4fbd-b8ac-5cda0128ab36",
        "target": "guestnode_142"
    },
    {
        "source": "23cd7491-9ae2-487b-81ef-566ad7a5b788",
        "target": "guestnode_143"
    },
    {
        "source": "ea022f77-b773-4315-99ba-d6e4ad9afe84",
        "target": "guestnode_143"
    },
    {
        "source": "6dfb867a-9c18-4767-b80c-f13de6224c57",
        "target": "guestnode_144"
    },
    {
        "source": "9e23280e-3368-427e-8abe-841c5804b343",
        "target": "guestnode_144"
    },
    {
        "source": "f85c6ac0-926a-497a-85df-efbbc28ec366",
        "target": "guestnode_144"
    },
    {
        "source": "10243c5d-9c54-47d4-bbf7-6d90cb055751",
        "target": "guestnode_144"
    },
    {
        "source": "882630a1-4f46-4e02-861b-c2273a023803",
        "target": "guestnode_145"
    },
    {
        "source": "bf80a754-90ab-49e6-848b-788d2d4e672b",
        "target": "guestnode_146"
    },
    {
        "source": "bf80a754-90ab-49e6-848b-788d2d4e672b",
        "target": "guestnode_147"
    },
    {
        "source": "bf80a754-90ab-49e6-848b-788d2d4e672b",
        "target": "guestnode_148"
    },
    {
        "source": "c5d33f10-d55a-4a43-b7e5-c25c3c89a304",
        "target": "guestnode_149"
    },
    {
        "source": "c5d33f10-d55a-4a43-b7e5-c25c3c89a304",
        "target": "guestnode_150"
    },
    {
        "source": "c5d33f10-d55a-4a43-b7e5-c25c3c89a304",
        "target": "guestnode_151"
    },
    {
        "source": "c5d33f10-d55a-4a43-b7e5-c25c3c89a304",
        "target": "guestnode_152"
    },
    {
        "source": "beb13404-ed7c-4237-b977-1ebd6e1eaa55",
        "target": "guestnode_153"
    },
    {
        "source": "d2b2b863-d33a-47a7-ac98-d97ef42586fb",
        "target": "guestnode_153"
    },
    {
        "source": "f3863b80-518a-497b-8083-20e9f111d175",
        "target": "guestnode_153"
    },
    {
        "source": "beb13404-ed7c-4237-b977-1ebd6e1eaa55",
        "target": "guestnode_154"
    },
    {
        "source": "d2b2b863-d33a-47a7-ac98-d97ef42586fb",
        "target": "guestnode_154"
    },
    {
        "source": "f3863b80-518a-497b-8083-20e9f111d175",
        "target": "guestnode_154"
    },
    {
        "source": "87e0b2ad-0e08-452f-a801-c6b0ea6e31a0",
        "target": "guestnode_154"
    },
    {
        "source": "0a6e3ab0-1fbd-4593-94b0-b1ab4d7400cc",
        "target": "guestnode_154"
    },
    {
        "source": "6690561a-c33c-4409-ad7a-dad8a20d649f",
        "target": "guestnode_154"
    },
    {
        "source": "604b395b-403b-440c-b2e3-d82e5fda158c",
        "target": "guestnode_154"
    },
    {
        "source": "b2e261a3-527a-42b3-a876-62008723e8b9",
        "target": "guestnode_154"
    },
    {
        "source": "afea2ee4-bf9a-48ea-bc44-6e3d254ee11c",
        "target": "guestnode_154"
    },
    {
        "source": "5563d4e7-6474-4337-bf62-19817aeae380",
        "target": "guestnode_155"
    },
    {
        "source": "32114f7e-9d5d-41f6-ada7-427d637772d0",
        "target": "guestnode_156"
    },
    {
        "source": "3941e5ce-f698-4acd-a32e-b5fc6685b528",
        "target": "guestnode_156"
    },
    {
        "source": "94a52af9-372d-4e88-9272-649a49c1fa57",
        "target": "guestnode_157"
    },
    {
        "source": "5b3d17d2-8e1e-4248-bc2e-4ae2e531a4c2",
        "target": "guestnode_158"
    },
    {
        "source": "9d7f6104-9050-43cd-bfbd-db2273ff26af",
        "target": "guestnode_159"
    },
    {
        "source": "f4c17f9d-9e6b-4714-84a9-b4f41219e260",
        "target": "guestnode_160"
    },
    {
        "source": "745de5fd-5861-412d-9001-3dbad79c72ea",
        "target": "guestnode_161"
    },
    {
        "source": "dd4fe6e9-9ce4-4ebb-909e-8dd3dc7fef72",
        "target": "guestnode_161"
    },
    {
        "source": "ebce2e4e-1844-44b0-9e03-9d56ae956691",
        "target": "guestnode_161"
    },
    {
        "source": "eecfa4ca-b53e-4e06-b320-d482eaf20e1b",
        "target": "guestnode_161"
    },
    {
        "source": "d5647a9d-9ad1-401e-91e9-0acc67057727",
        "target": "guestnode_161"
    },
    {
        "source": "fcbf51f9-6bcc-4b91-885e-ac223665ba2f",
        "target": "guestnode_161"
    },
    {
        "source": "80a70dde-ca15-4176-905a-42dfeafab63f",
        "target": "guestnode_161"
    },
    {
        "source": "a4ee427d-a4a8-4321-9e1e-b0121b4cf572",
        "target": "guestnode_161"
    },
    {
        "source": "c966ea9f-e256-4d55-910f-c87ac52e0aa9",
        "target": "guestnode_161"
    },
    {
        "source": "d6d8f43a-76c1-4d14-83fb-a2f463e87d0b",
        "target": "guestnode_161"
    },
    {
        "source": "80a70dde-ca15-4176-905a-42dfeafab63f",
        "target": "guestnode_161"
    },
    {
        "source": "0ad52c64-3f14-4a12-8fd3-b3d1578dba88",
        "target": "guestnode_162"
    },
    {
        "source": "41facde0-1cbf-471a-9c0d-42a05fd66791",
        "target": "guestnode_163"
    },
    {
        "source": "8df9eee2-9763-4830-a060-bf2d1bee7297",
        "target": "guestnode_164"
    },
    {
        "source": "dd57eece-2825-4810-8b1d-d6671fb841a2",
        "target": "guestnode_165"
    },
    {
        "source": "497e05fa-3a59-4dc5-8f27-6c99b95a5e27",
        "target": "guestnode_166"
    },
    {
        "source": "88114a5e-e654-4575-af17-6498bd00a927",
        "target": "guestnode_167"
    },
    {
        "source": "5a8d67cc-8b2e-46eb-9da5-c51fc9d7abeb",
        "target": "guestnode_167"
    },
    {
        "source": "f310a8a8-6925-4897-be99-b49f91960e41",
        "target": "guestnode_167"
    },
    {
        "source": "d79e8026-6d6b-4b76-b004-4ff835fe9e0e",
        "target": "guestnode_168"
    },
    {
        "source": "e1a13903-4269-48ba-b885-d7a8f343b9cc",
        "target": "guestnode_169"
    },
    {
        "source": "e33ee8de-02f6-445a-9850-4068ffb04bb7",
        "target": "guestnode_170"
    },
    {
        "source": "8935141c-2362-4baa-bdaf-16f57c6d6328",
        "target": "guestnode_171"
    },
    {
        "source": "20e21ed1-78fd-4a85-a079-7ca0ade08aa0",
        "target": "guestnode_171"
    },
    {
        "source": "5c17b52c-438a-4908-9291-06e2dd14896e",
        "target": "guestnode_171"
    },
    {
        "source": "2f1cabb9-eb06-4893-b222-42abbdc5db5a",
        "target": "guestnode_171"
    },
    {
        "source": "4a92e73d-2e6b-4e75-86e6-a4bb0027fa1a",
        "target": "guestnode_171"
    },
    {
        "source": "ca8a54fb-ce46-4c25-b8a9-1d2fa9f8e313",
        "target": "guestnode_171"
    },
    {
        "source": "d734c4f4-f005-44c9-b8d3-260fe3f49cce",
        "target": "guestnode_171"
    },
    {
        "source": "33ec03bb-e9fb-4c9e-bd6c-880c604d4fca",
        "target": "guestnode_172"
    },
    {
        "source": "49b76473-cea5-499b-a09b-d647ba1ad2f5",
        "target": "guestnode_173"
    },
    {
        "source": "0992ba7f-128b-435b-9cb8-8198dbf8bfb9",
        "target": "guestnode_174"
    },
    {
        "source": "a8e9c5a4-402b-4f87-8f5f-4c023daa7f9d",
        "target": "guestnode_175"
    },
    {
        "source": "7d6accb1-c46e-4b4b-870e-6d1461b27c74",
        "target": "guestnode_175"
    },
    {
        "source": "9bd03669-3392-4943-8963-ebea35f3b19b",
        "target": "guestnode_175"
    },
    {
        "source": "0deee3e4-0b47-41c7-96de-e502fac0f629",
        "target": "guestnode_175"
    },
    {
        "source": "a8e9c5a4-402b-4f87-8f5f-4c023daa7f9d",
        "target": "guestnode_176"
    },
    {
        "source": "7d6accb1-c46e-4b4b-870e-6d1461b27c74",
        "target": "guestnode_176"
    },
    {
        "source": "9bd03669-3392-4943-8963-ebea35f3b19b",
        "target": "guestnode_176"
    },
    {
        "source": "8513010c-8328-4083-a245-468afaee74c2",
        "target": "guestnode_176"
    },
    {
        "source": "a8e9c5a4-402b-4f87-8f5f-4c023daa7f9d",
        "target": "guestnode_177"
    },
    {
        "source": "7d6accb1-c46e-4b4b-870e-6d1461b27c74",
        "target": "guestnode_177"
    },
    {
        "source": "9bd03669-3392-4943-8963-ebea35f3b19b",
        "target": "guestnode_177"
    },
    {
        "source": "a8e9c5a4-402b-4f87-8f5f-4c023daa7f9d",
        "target": "guestnode_178"
    },
    {
        "source": "7d6accb1-c46e-4b4b-870e-6d1461b27c74",
        "target": "guestnode_178"
    },
    {
        "source": "9bd03669-3392-4943-8963-ebea35f3b19b",
        "target": "guestnode_178"
    },
    {
        "source": "4545784c-7310-4a33-a308-685419b5dab5",
        "target": "guestnode_179"
    },
    {
        "source": "c7202fd2-be86-4325-97ec-fb961829e55a",
        "target": "guestnode_180"
    },
    {
        "source": "6179f78c-1ade-49d0-8219-738704fb85a8",
        "target": "guestnode_181"
    },
    {
        "source": "08e1e993-d816-40ee-848d-0ad5587fb823",
        "target": "guestnode_181"
    },
    {
        "source": "39b8fefb-7783-4c85-8139-f0d8bd968c46",
        "target": "guestnode_181"
    },
    {
        "source": "40292a36-54d9-4f4c-b732-958b844478fe",
        "target": "guestnode_181"
    },
    {
        "source": "b81cce1c-6ed9-4c50-beeb-3b476e836516",
        "target": "guestnode_181"
    },
    {
        "source": "5b042489-fa11-42cb-b5d7-249defe0feb2",
        "target": "guestnode_181"
    },
    {
        "source": "b1eabcd8-8d00-4950-b264-f4f2741ca3a7",
        "target": "guestnode_182"
    },
    {
        "source": "038127f8-95f1-47fe-819f-f0ec7fd01180",
        "target": "guestnode_183"
    },
    {
        "source": "11f89c52-57eb-464d-875b-ecf15a23d4c4",
        "target": "guestnode_183"
    },
    {
        "source": "a65f8d26-c22a-4872-992a-4f499a845126",
        "target": "guestnode_184"
    },
    {
        "source": "532afd6a-f58f-4197-a7b7-6eee90b6d8cd",
        "target": "guestnode_184"
    },
    {
        "source": "3531a8fc-5d24-46d8-89b1-c993b5e90b5b",
        "target": "guestnode_184"
    },
    {
        "source": "8b002f84-16f4-4a54-b376-ac7b28784e6e",
        "target": "guestnode_184"
    },
    {
        "source": "5fcec958-2719-4562-a624-fa87deb3f4c1",
        "target": "guestnode_184"
    },
    {
        "source": "882373f4-c66b-483d-97ce-6ee5ca5062d7",
        "target": "guestnode_184"
    },
    {
        "source": "57346559-c23a-4f76-931c-6a647675bf66",
        "target": "guestnode_184"
    },
    {
        "source": "af1b6078-e933-4bc4-9ef2-c276eecf81ad",
        "target": "guestnode_184"
    },
    {
        "source": "d3181d26-e0f3-45e1-b758-371c5909994a",
        "target": "guestnode_184"
    },
    {
        "source": "76490d63-51a7-4882-bc94-b1501eed58a4",
        "target": "guestnode_185"
    },
    {
        "source": "71fa6f0c-e19c-480e-ad2e-1aee6e746990",
        "target": "guestnode_186"
    },
    {
        "source": "71fa6f0c-e19c-480e-ad2e-1aee6e746990",
        "target": "guestnode_187"
    },
    {
        "source": "71fa6f0c-e19c-480e-ad2e-1aee6e746990",
        "target": "guestnode_188"
    },
    {
        "source": "71fa6f0c-e19c-480e-ad2e-1aee6e746990",
        "target": "guestnode_189"
    },
    {
        "source": "408df8f4-586d-49d0-b9e3-bb418e3b3913",
        "target": "guestnode_190"
    }
]