import * as sphinx from "sphinx-bridge-kevkevinpal";
import { Lsat } from "lsat-js";


export interface Node {
    id: number,
    name: string,
    type: string,
    text?: string,
    label?: string,
    colors?: string[],
    details?: Moment,
    image_url?: string,
    scale?: number,
    weight: number
}

export interface Cluster {
    id: number,
    label: string,
    type: string,
    nodes?: Node[]
}
  
  export interface Link {
    source: number,
    target: number
  }
  
  export interface Moment {
    episode_title: string,
    link: string,
    podcast_title: string,
    timestamp: string,
    topics: string[],
    text: string,
    type: string,
    image_url?: string,
    weight:number
  }
  
  export interface NodesAndLinks{
    nodes: Node[],
    links: Link[]
  }

function randomColor() {

    // let coolColors = [
    //     '#ff80ed',
    //     '#40e0d0',
    //     '#ffa500',
    //     '#101010',
    //     '#8a2be2',
    //     '#00ff7f',
    //     '#ff7373'
    // ]

    // let chosenIndex = Math.floor(Math.random()*coolColors.length)
    // return coolColors[chosenIndex]

    return '#000000'
    }


  const getLsat = async (word: String) => {
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
    
      
      let apiRes = await fetch(
        `https://knowledge-graph.sphinx.chat/search?word=${word}`,
        {
          headers: {
            Authorization: lsat.toToken(),
          },
        }
      );
      const apiResData = await apiRes.json();
      return apiResData
    } catch (e) {
      console.log(e);
    }
  };


  async function getGraphData(searchterm: string) {

    console.log('searchterm', searchterm)
    let index = 0      
    
    try {
      let data: Moment[] 
      const origin = window.location.origin

      const isDev = (origin === 'http://localhost:3000' || origin === 'https://sphinx-jarvis-david.sphinx1.repl.co') ? true : false
      if (isDev) {
        console.log('is dev',origin)
        let devUrl = `https://knowledge-graph.sphinx.chat/searching?word=${searchterm}&free=true`
        const res = await fetch(devUrl)      
        data = await res.json()
      } else {
        data = await getLsat(searchterm)
      }
        
        
        const _nodes: Node[] = []
        const _links: Link[] = []
        
        if(data.length) {
          const topicMap: any = {}
            
            console.log('data',data)
          // Populating nodes array with podcasts and constructing a topic map
            data.forEach(async (moment) => {
                
                const topics = moment.topics
                // @ts-ignore

                let nodeColors:any = []
                topics.forEach((topic: string) => {
                    if (topic !== searchterm) {
                        
                        if (!topicMap[topic]) {
                            let c = randomColor()  
                            nodeColors.push(c)
                            topicMap[topic] = {
                                color: c,
                                scale: 0
                            }
                        } else {
                            topicMap[topic].scale += 2 
                        }
                    }
                })

                let smallImage:any = moment.image_url

                if (smallImage) {
                    smallImage = smallImage.replace('.jpg', '_s.jpg')
                }

              _nodes.push({
                    weight:moment.weight,
                    id: index,
                    name: moment.podcast_title + ":" + moment.episode_title + ":" + moment.timestamp,
                    label: moment.podcast_title,
                    type: moment.type||'podcast',
                    text: moment.text,
                    details: moment,
                    image_url: smallImage,
                    colors: nodeColors
                    })
            
               
                index++
          })
          // Adds topic nodes
          Object.keys(topicMap)
              .forEach(topic => {
                const color = topicMap[topic].color
                const scale = topicMap[topic].scale
              const topicNode: Node = {
                id: index,
                name: topic,
                weight: 0,
                label: topic,
                type: 'topic',
                text: topic,
                scale: scale,
                colors: [color]
              }
              _nodes.push(topicNode)
              index++
              })
            

        
          // Populating the links array next
          data.forEach(moment => {
            const { topics } = moment
            topics.forEach(topic => {
              const podcastNode = findNodeByName(moment.podcast_title + ":" + moment.episode_title + ":" + moment.timestamp, _nodes)
              const topicNode = findNodeByName(topic, _nodes)
              if (podcastNode && topicNode) {
                const link: Link = {
                  source: podcastNode.id,
                  target: topicNode.id
                }
                _links.push(link)
              }
            })
          })
        }

         // make sun node of search term
        //  _nodes.push({
        //     id: index,
        //     name: searchterm,
        //     label: searchterm,
        //     type: 'sun',
        //     text: searchterm,
        //     scale: 80,
        //     colors: ['#ff0000']
        //   })


      console.log('_nodes', _nodes)
      _nodes.sort((a, b) => a.weight - b.weight)
        return {nodes: _nodes, links: _links}
    }
      catch (e) {
        console.error(e)
        return {nodes: [], links: []}    
      }
  }

// test
function findNodeByName(name: string, _nodes: Array<Node>) : Node | undefined {
    return _nodes.find(candidate => candidate.name === name)
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

export { getFakeGraphData, getSampleData, getGraphData, convertFromISOtoSeconds, sleep }


const welcomes = [
    'blockchain',
    'currency',
    'cryptography',
    'node',
    'satoshi',
    'youtube',
    'central bank',
    'pubkey',
    'cryptocurrency',
    'hash',
    'podcast',
    'ledger',
    'segwit',
    'lightning',
    'coinbase',
    'market',
    'btc',
    'taproot',
    'bitcoin',
    'gas',
    'distribution',
    'transaction',
    'education',
    'value',
    'trustless',
    'on-chain',
    'mining',
    'inflation',
    'ethereum',
    'bullish',
    'bearish',
    'nft',
    'peer to peer',
    'smart contract',

]

function getSampleData() {
    
    let nodes: any = []
    let links: any = []
    
    for (let i = 0; i < 300; i++){
        const scale = 1 + (i % 10) * 3
        const l = Math.floor(Math.random() * welcomes.length)
        nodes.push({
            fakeData: true,
            label: welcomes[l],
            id: i,
            type:'topic',
            scale
        })
    }

    return {
        nodes,
        links
    }
}
