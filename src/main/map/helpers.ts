export interface Node {
    id: number,
    name: string,
    type: string,
    text?: string,
    label?: string,
    colors?: string[],
    details?: Moment
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
    text: string
  }
  
  export interface NodesAndLinks{
    nodes: Node[],
    links: Link[]
  }

function randomColor() {

    let coolColors = [
        '#ff80ed',
        '#40e0d0',
        '#ffa500',
        '#101010',
        '#8a2be2',
        '#00ff7f',
        '#ff7373'
    ]

    let chosenIndex = Math.floor(Math.random()*coolColors.length)
    return coolColors[chosenIndex]
    }


  async function getGraphData(searchterm: string, currentData: NodesAndLinks) {

    console.log('searchterm', searchterm)
    let index = 0

    try {
        const res = await fetch(`https://ardent-pastry-basement.wayscript.cloud/prediction/${searchterm}`)
        const data: Moment[] = await res.json()
        const _nodes: Node[] = []
        const _links: Link[] = []

        // const currentDataNodes = [...currentData.nodes]
        // console.log('currentDataNodes',currentDataNodes)
        
        if(data.length) {
            const topicMap: any = {}
            
            console.log('data',data)
          // Populating nodes array with podcasts and constructing a topic map
            data.forEach(moment => {
                
                const topics = moment.topics
                // @ts-ignore

                let nodeColors:any = []
                topics.forEach((topic: string) => {
                    if (topic !== searchterm) {
                        let c = randomColor()  
                        nodeColors.push(c)
                        topicMap[topic] = c
                    }
                })

                // const dataMatchForPreviousSearch = currentDataNodes.find(f => {
                //     if ((f.details?.link === moment.link &&
                //         f.details?.timestamp === moment.timestamp )) {
                //         return true
                //     }
                //     return false
                // })

                _nodes.push({
                    id: index,
                        name: moment.podcast_title + ":" + moment.episode_title + ":" + moment.timestamp,
                    label: moment.podcast_title,
                    type: 'podcast',
                    text: moment.text,
                    details: moment,
                    colors: nodeColors
                    })
            
               
                index++
          })
          // Adds topic nodes
          Object.keys(topicMap)
              .forEach(topic => {
            const color = topicMap[topic]
              const topicNode: Node = {
                id: index,
                name: topic,
                label: topic,
                type: 'topic',
                text: topic,
                colors: [color]
              }
              _nodes.push(topicNode)
              index++
              })
            
            console.log('topicMap',topicMap)

        
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
        // console.log('_nodes', _nodes.map((n:any) => {
        //     return {
        //         id: n.id,
        //         name: n.name,
        //         type: n.type,
        //         text: n.text,
        //         details: n.details,
        //         colors: n.colors,
        //         label:n.label
        //     }
        // }))
        // console.log('_links', _links.map((n: any) => {
        //     return {
        //         source: n.source,
        //         target:n.target
        //         }
        // }))

        console.log('_nodes', _nodes)
        console.log('_links',_links)
        return {nodes: _nodes, links: _links}
    }
      catch (e) {
        console.error(e)
        return {nodes: [], links: []}    
      }
  }


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

function getSampleData(){

    return {
        nodes: [
            {
                "id": 0,
                "name": "The Bad Crypto Podcast:one nft sells for $3.5 million - bad news for dec 23rd:00:17:34-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "one nft sells for $3.5 million - bad news for dec 23rd",
                    "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/9c67dbbc-a0fa-4ebf-97ec-ac9b0036ea4d/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106&t=1608827098",
                    "podcast_title": "The Bad Crypto Podcast",
                    "text": "",
                    "timestamp": "00:17:34-0",
                    "topics": [
                        "bitcoin",
                        "crypto",
                        "btc"
                    ]
                },
                "colors": [
                    "#ff7373",
                    "#00ff7f"
                ],
                "label": "The Bad Crypto Podcast"
            },
            {
                "id": 1,
                "name": "The Bad Crypto Podcast:nft sells for $70 million - bad news for march 11, 2021:00:10:21-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "nft sells for $70 million - bad news for march 11, 2021",
                    "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/9fb8f55e-dbd2-4c41-bfac-ace9005e43f9/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106&t=1615529076",
                    "podcast_title": "The Bad Crypto Podcast",
                    "text": "",
                    "timestamp": "00:10:21-0",
                    "topics": [
                        "bitcoin",
                        "btc"
                    ]
                },
                "colors": [
                    "#ff7373"
                ],
                "label": "The Bad Crypto Podcast"
            },
            {
                "id": 2,
                "name": "The Bad Crypto Podcast:paypal launches \"checkout with crypto\" - bad news for april 1st, 2021:00:10:43-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "paypal launches \"checkout with crypto\" - bad news for april 1st, 2021",
                    "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/cd9d2b1c-70a2-4151-9e05-acfd017202bf/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106&t=1617326761",
                    "podcast_title": "The Bad Crypto Podcast",
                    "text": "",
                    "timestamp": "00:10:43-0",
                    "topics": [
                        "btc",
                        "bitcoin",
                        "goldman sachs"
                    ]
                },
                "colors": [
                    "#101010",
                    "#8a2be2"
                ],
                "label": "The Bad Crypto Podcast"
            },
            {
                "id": 3,
                "name": "Lightning Junkies:john carvalho from bitrefill - lnj03:00:06:53-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "john carvalho from bitrefill - lnj03",
                    "link": "https://anchor.fm/s/ce6ee00/podcast/play/4788603/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2019-8-23%2F24635289-44100-2-5b92cbc0dde41.mp3",
                    "podcast_title": "Lightning Junkies",
                    "text": "",
                    "timestamp": "00:06:53-0",
                    "topics": [
                        "btc"
                    ]
                },
                "colors": [],
                "label": "Lightning Junkies"
            },
            {
                "id": 4,
                "name": "The Bad Crypto Podcast:btc $15,000 and climbing - bad news for thursday, nov 5th:00:15:43-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "btc $15,000 and climbing - bad news for thursday, nov 5th",
                    "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/007fb595-08d9-4c40-9024-ac6b00403c88/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106&t=1604635511",
                    "podcast_title": "The Bad Crypto Podcast",
                    "text": "",
                    "timestamp": "00:15:43-0",
                    "topics": [
                        "btc",
                        "bitcoin"
                    ]
                },
                "colors": [
                    "#40e0d0"
                ],
                "label": "The Bad Crypto Podcast"
            },
            {
                "id": 5,
                "name": "Bitcoin Audible:read_569 - calculating the intrinsic value of bitcoin [greg foss]:00:09:22-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "read_569 - calculating the intrinsic value of bitcoin [greg foss]",
                    "link": "https://traffic.megaphone.fm/CSN7116342749.mp3?updated=1634266192",
                    "podcast_title": "Bitcoin Audible",
                    "text": "",
                    "timestamp": "00:09:22-0",
                    "topics": [
                        "btc"
                    ]
                },
                "colors": [],
                "label": "Bitcoin Audible"
            },
            {
                "id": 6,
                "name": "The Bad Crypto Podcast:bitcoin breaks through $23,000 - bad news for dec 17th:00:23:33-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "bitcoin breaks through $23,000 - bad news for dec 17th",
                    "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/45b0cafe-e9a2-4413-852b-ac950063137b/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106&t=1608273414",
                    "podcast_title": "The Bad Crypto Podcast",
                    "text": "",
                    "timestamp": "00:23:33-0",
                    "topics": [
                        "bitcoin",
                        "btc",
                        "ray dalio"
                    ]
                },
                "colors": [
                    "#ff7373",
                    "#8a2be2"
                ],
                "label": "The Bad Crypto Podcast"
            },
            {
                "id": 7,
                "name": "The Bad Crypto Podcast:could this be satoshi? an interview with the blue wizard:00:33:28-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "could this be satoshi? an interview with the blue wizard",
                    "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/d29dd175-9e40-4be3-bc41-acb2006d2666/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106&t=1610932050",
                    "podcast_title": "The Bad Crypto Podcast",
                    "text": "",
                    "timestamp": "00:33:28-0",
                    "topics": [
                        "btc",
                        "the blue wizard"
                    ]
                },
                "colors": [
                    "#40e0d0"
                ],
                "label": "The Bad Crypto Podcast"
            },
            {
                "id": 8,
                "name": "The Bad Crypto Podcast:bitcoin toying with $20,000 - bad news for dec 3rd:00:17:39-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "bitcoin toying with $20,000 - bad news for dec 3rd",
                    "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/5e2bbbd9-74cb-4e71-be6a-ac87000fc351/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106&t=1607048969",
                    "podcast_title": "The Bad Crypto Podcast",
                    "text": "",
                    "timestamp": "00:17:39-0",
                    "topics": [
                        "bitcoin price prediction",
                        "btc"
                    ]
                },
                "colors": [
                    "#ff80ed"
                ],
                "label": "The Bad Crypto Podcast"
            },
            {
                "id": 9,
                "name": "The Kevin Rooke Show:e3_ romain rouphael on lnmarkets, el salvador, and lightning network adoption:00:03:07-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "e3_ romain rouphael on lnmarkets, el salvador, and lightning network adoption",
                    "link": "https://anchor.fm/s/71a8cc78/podcast/play/44219542/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-11-1%2F234791075-44100-2-d5ceb9f0df01e.m4a",
                    "podcast_title": "The Kevin Rooke Show",
                    "text": "",
                    "timestamp": "00:03:07-0",
                    "topics": [
                        "usd",
                        "btc"
                    ]
                },
                "colors": [
                    "#40e0d0"
                ],
                "label": "The Kevin Rooke Show"
            },
            {
                "id": 10,
                "name": "The Bad Crypto Podcast:whale clusters signal bitcoin $14,000 - bad news for thursday, aug 20th:00:05:40-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "whale clusters signal bitcoin $14,000 - bad news for thursday, aug 20th",
                    "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/9254bb08-5a14-4e97-b18e-ac1d0114bb5b/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106&t=1597964683",
                    "podcast_title": "The Bad Crypto Podcast",
                    "text": "",
                    "timestamp": "00:05:40-0",
                    "topics": [
                        "btc",
                        "bitcoin"
                    ]
                },
                "colors": [
                    "#ff80ed"
                ],
                "label": "The Bad Crypto Podcast"
            },
            {
                "id": 11,
                "name": "The Bad Crypto Podcast:the bitcoin king arrested - bad news for july 7th with give directly:00:08:58-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "the bitcoin king arrested - bad news for july 7th with give directly",
                    "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/2781cbc1-df3e-430a-96d4-ad5f000e68b5/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106",
                    "podcast_title": "The Bad Crypto Podcast",
                    "text": "",
                    "timestamp": "00:08:58-0",
                    "topics": [
                        "brazilian",
                        "scam",
                        "btc",
                        "bitcoin king"
                    ]
                },
                "colors": [
                    "#40e0d0",
                    "#101010",
                    "#40e0d0"
                ],
                "label": "The Bad Crypto Podcast"
            },
            {
                "id": 12,
                "name": "The Bad Crypto Podcast:the fed says bitcoin is a store of value - bad news for 4-22-21:00:26:24-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "the fed says bitcoin is a store of value - bad news for 4-22-21",
                    "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/97db327d-3d9b-41f9-9f0b-ad120181bd93/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106",
                    "podcast_title": "The Bad Crypto Podcast",
                    "text": "",
                    "timestamp": "00:26:24-0",
                    "topics": [
                        "btc",
                        "china"
                    ]
                },
                "colors": [
                    "#ff80ed"
                ],
                "label": "The Bad Crypto Podcast"
            },
            {
                "id": 13,
                "name": "The Bad Crypto Podcast:paypal embraces crypto - bad news for thursday, oct 22nd:00:13:26-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "paypal embraces crypto - bad news for thursday, oct 22nd",
                    "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/583451e8-fb11-4204-ab4b-ac5c01644992/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106&t=1603407898",
                    "podcast_title": "The Bad Crypto Podcast",
                    "text": "",
                    "timestamp": "00:13:26-0",
                    "topics": [
                        "bitcoin",
                        "btc"
                    ]
                },
                "colors": [
                    "#ff80ed"
                ],
                "label": "The Bad Crypto Podcast"
            },
            {
                "id": 14,
                "name": "The Bad Crypto Podcast:bitcoin breaks through $23,000 - bad news for dec 17th:00:31:30-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "bitcoin breaks through $23,000 - bad news for dec 17th",
                    "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/45b0cafe-e9a2-4413-852b-ac950063137b/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106&t=1608273414",
                    "podcast_title": "The Bad Crypto Podcast",
                    "text": "",
                    "timestamp": "00:31:30-0",
                    "topics": [
                        "btc",
                        "bitcoin addresses"
                    ]
                },
                "colors": [
                    "#00ff7f"
                ],
                "label": "The Bad Crypto Podcast"
            },
            {
                "id": 15,
                "name": "The Bad Crypto Podcast:bitcoin whale is on the move - bad news for thursday, march 4th:00:08:42-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "bitcoin whale is on the move - bad news for thursday, march 4th",
                    "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/cc131aae-b86e-4a09-ac30-ace20010c9d4/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106&t=1614906934",
                    "podcast_title": "The Bad Crypto Podcast",
                    "text": "",
                    "timestamp": "00:08:42-0",
                    "topics": [
                        "btc",
                        "bitcoin whale"
                    ]
                },
                "colors": [
                    "#ffa500"
                ],
                "label": "The Bad Crypto Podcast"
            },
            {
                "id": 16,
                "name": "The Bad Crypto Podcast:social token platform roll gets ransacked - bad news for march 18th, 2021:00:27:34-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "social token platform roll gets ransacked - bad news for march 18th, 2021",
                    "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/1d1d463a-c73a-4bf9-9f65-acef0183ce5b/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106&t=1616111260",
                    "podcast_title": "The Bad Crypto Podcast",
                    "text": "",
                    "timestamp": "00:27:34-0",
                    "topics": [
                        "bitcoin",
                        "btc",
                        "bank of america"
                    ]
                },
                "colors": [
                    "#ff7373",
                    "#8a2be2"
                ],
                "label": "The Bad Crypto Podcast"
            },
            {
                "id": 17,
                "name": "The Bad Crypto Podcast:bitcoin flashes big buy signal - bad news for june 30th:00:06:58-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "bitcoin flashes big buy signal - bad news for june 30th",
                    "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/daca4dc6-8611-46c4-924d-ad57015682ba/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106",
                    "podcast_title": "The Bad Crypto Podcast",
                    "text": "",
                    "timestamp": "00:06:58-0",
                    "topics": [
                        "btc",
                        "the bad indicator",
                        "bitcoin"
                    ]
                },
                "colors": [
                    "#ffa500",
                    "#00ff7f"
                ],
                "label": "The Bad Crypto Podcast"
            },
            {
                "id": 18,
                "name": "The Bad Crypto Podcast:vitalik shakes the memecoin marketplace - bad news for may 12th:00:10:18-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "vitalik shakes the memecoin marketplace - bad news for may 12th",
                    "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/326d2b85-3546-4c7b-9a76-ad27002c2da6/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106",
                    "podcast_title": "The Bad Crypto Podcast",
                    "text": "",
                    "timestamp": "00:10:18-0",
                    "topics": [
                        "btc",
                        "bitcoin"
                    ]
                },
                "colors": [
                    "#ffa500"
                ],
                "label": "The Bad Crypto Podcast"
            },
            {
                "id": 19,
                "name": "The Bad Crypto Podcast:bitcoin creates a new economic elite - bad news for friday, may 29th:00:11:17-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "bitcoin creates a new economic elite - bad news for friday, may 29th",
                    "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/8218feef-b5ed-415b-8c3d-abcd002a478c/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106&t=1590979144",
                    "podcast_title": "The Bad Crypto Podcast",
                    "text": "",
                    "timestamp": "00:11:17-0",
                    "topics": [
                        "bitcoin addresses",
                        "btc"
                    ]
                },
                "colors": [
                    "#40e0d0"
                ],
                "label": "The Bad Crypto Podcast"
            },
            {
                "id": 20,
                "name": "The Bad Crypto Podcast:microstrategy owns ½ percent of all bitcoin - bad news for june 24th:00:29:05-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "microstrategy owns ½ percent of all bitcoin - bad news for june 24th",
                    "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/32e729dd-cf33-45ba-ac7f-ad5200253535/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106",
                    "podcast_title": "The Bad Crypto Podcast",
                    "text": "",
                    "timestamp": "00:29:05-0",
                    "topics": [
                        "bitcoin",
                        "btc"
                    ]
                },
                "colors": [
                    "#ffa500"
                ],
                "label": "The Bad Crypto Podcast"
            },
            {
                "id": 21,
                "name": "The Bad Crypto Podcast:after the halving bad news for friday, may 15th:00:11:29-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "after the halving bad news for friday, may 15th",
                    "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/a7053672-af02-4c19-af6d-abcd002ac7ac/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106&t=1590979196",
                    "podcast_title": "The Bad Crypto Podcast",
                    "text": "",
                    "timestamp": "00:11:29-0",
                    "topics": [
                        "btc",
                        "post - halving"
                    ]
                },
                "colors": [
                    "#ff7373"
                ],
                "label": "The Bad Crypto Podcast"
            },
            {
                "id": 22,
                "name": "The Bad Crypto Podcast:elon flip-flops again - bad news for june 16th:00:10:20-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "elon flip-flops again - bad news for june 16th",
                    "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/cf2b38ae-09a4-4495-bdac-ad4a002e23a0/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106",
                    "podcast_title": "The Bad Crypto Podcast",
                    "text": "",
                    "timestamp": "00:10:20-0",
                    "topics": [
                        "whales",
                        "btc",
                        "bitcoin"
                    ]
                },
                "colors": [
                    "#8a2be2",
                    "#ff80ed"
                ],
                "label": "The Bad Crypto Podcast"
            },
            {
                "id": 23,
                "name": "The Bad Crypto Podcast:sec comments on banning bitcoin - bad news for 4-15-21:00:23:27-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "sec comments on banning bitcoin - bad news for 4-15-21",
                    "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/521e4bfc-914c-4364-8bd9-ad0c0024e95d/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106",
                    "podcast_title": "The Bad Crypto Podcast",
                    "text": "",
                    "timestamp": "00:23:27-0",
                    "topics": [
                        "simpsons",
                        "btc",
                        "bitcoin"
                    ]
                },
                "colors": [
                    "#101010",
                    "#00ff7f"
                ],
                "label": "The Bad Crypto Podcast"
            },
            {
                "id": 24,
                "name": "The Bad Crypto Podcast:proof of satoshi? bad news for friday, may 22nd:00:39:26-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "proof of satoshi? bad news for friday, may 22nd",
                    "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/04e333c3-9951-4803-88b2-abcd002a7e28/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106&t=1590979222",
                    "podcast_title": "The Bad Crypto Podcast",
                    "text": "",
                    "timestamp": "00:39:26-0",
                    "topics": [
                        "btc",
                        "winklevoss biographer"
                    ]
                },
                "colors": [
                    "#101010"
                ],
                "label": "The Bad Crypto Podcast"
            },
            {
                "id": 25,
                "name": "Bitcoin Audible:read_569 - calculating the intrinsic value of bitcoin [greg foss]:00:10:01-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "read_569 - calculating the intrinsic value of bitcoin [greg foss]",
                    "link": "https://traffic.megaphone.fm/CSN7116342749.mp3?updated=1634266192",
                    "podcast_title": "Bitcoin Audible",
                    "text": "",
                    "timestamp": "00:10:01-0",
                    "topics": [
                        "intrinsic value",
                        "btc"
                    ]
                },
                "colors": [
                    "#ff80ed"
                ],
                "label": "Bitcoin Audible"
            },
            {
                "id": 26,
                "name": "The Bad Crypto Podcast:the fed goes down...literally bad news for thursday, feb 25th:00:12:38-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "the fed goes down...literally bad news for thursday, feb 25th",
                    "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/dd0111fc-29ea-4759-be4d-acdb004ba81e/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106&t=1614314706",
                    "podcast_title": "The Bad Crypto Podcast",
                    "text": "",
                    "timestamp": "00:12:38-0",
                    "topics": [
                        "btc",
                        "bitcoin"
                    ]
                },
                "colors": [
                    "#ff7373"
                ],
                "label": "The Bad Crypto Podcast"
            },
            {
                "id": 27,
                "name": "The Bad Crypto Podcast:bitcoin passes $19,000 - bad news for nov 25th:00:21:19-0",
                "type": "podcast",
                "text": "",
                "details": {
                    "episode_title": "bitcoin passes $19,000 - bad news for nov 25th",
                    "link": "https://chrt.fm/track/864F37/traffic.omny.fm/d/clips/8edea6b9-fca4-41a1-83ee-aa76002b9dd8/8f677bef-192a-4471-a50b-abcd002a30ee/acc3a335-3dab-4ffe-90c2-ac7e017ad6b4/audio.mp3?utm_source=Podcast&in_playlist=5ec27e5e-3d28-4913-b240-abcd002a3106&t=1606352698",
                    "podcast_title": "The Bad Crypto Podcast",
                    "text": "",
                    "timestamp": "00:21:19-0",
                    "topics": [
                        "btc",
                        "bitcoin",
                        "google trends"
                    ]
                },
                "colors": [
                    "#8a2be2",
                    "#ffa500"
                ],
                "label": "The Bad Crypto Podcast"
            },
            {
                "id": 28,
                "name": "bitcoin",
                "type": "topic",
                "text": "bitcoin",
                "colors": [
                    "#8a2be2"
                ],
                "label": "bitcoin"
            },
            {
                "id": 29,
                "name": "crypto",
                "type": "topic",
                "text": "crypto",
                "colors": [
                    "#00ff7f"
                ],
                "label": "crypto"
            },
            {
                "id": 30,
                "name": "goldman sachs",
                "type": "topic",
                "text": "goldman sachs",
                "colors": [
                    "#8a2be2"
                ],
                "label": "goldman sachs"
            },
            {
                "id": 31,
                "name": "ray dalio",
                "type": "topic",
                "text": "ray dalio",
                "colors": [
                    "#8a2be2"
                ],
                "label": "ray dalio"
            },
            {
                "id": 32,
                "name": "the blue wizard",
                "type": "topic",
                "text": "the blue wizard",
                "colors": [
                    "#40e0d0"
                ],
                "label": "the blue wizard"
            },
            {
                "id": 33,
                "name": "bitcoin price prediction",
                "type": "topic",
                "text": "bitcoin price prediction",
                "colors": [
                    "#ff80ed"
                ],
                "label": "bitcoin price prediction"
            },
            {
                "id": 34,
                "name": "usd",
                "type": "topic",
                "text": "usd",
                "colors": [
                    "#40e0d0"
                ],
                "label": "usd"
            },
            {
                "id": 35,
                "name": "brazilian",
                "type": "topic",
                "text": "brazilian",
                "colors": [
                    "#40e0d0"
                ],
                "label": "brazilian"
            },
            {
                "id": 36,
                "name": "scam",
                "type": "topic",
                "text": "scam",
                "colors": [
                    "#101010"
                ],
                "label": "scam"
            },
            {
                "id": 37,
                "name": "bitcoin king",
                "type": "topic",
                "text": "bitcoin king",
                "colors": [
                    "#40e0d0"
                ],
                "label": "bitcoin king"
            },
            {
                "id": 38,
                "name": "china",
                "type": "topic",
                "text": "china",
                "colors": [
                    "#ff80ed"
                ],
                "label": "china"
            },
            {
                "id": 39,
                "name": "bitcoin addresses",
                "type": "topic",
                "text": "bitcoin addresses",
                "colors": [
                    "#40e0d0"
                ],
                "label": "bitcoin addresses"
            },
            {
                "id": 40,
                "name": "bitcoin whale",
                "type": "topic",
                "text": "bitcoin whale",
                "colors": [
                    "#ffa500"
                ],
                "label": "bitcoin whale"
            },
            {
                "id": 41,
                "name": "bank of america",
                "type": "topic",
                "text": "bank of america",
                "colors": [
                    "#8a2be2"
                ],
                "label": "bank of america"
            },
            {
                "id": 42,
                "name": "the bad indicator",
                "type": "topic",
                "text": "the bad indicator",
                "colors": [
                    "#ffa500"
                ],
                "label": "the bad indicator"
            },
            {
                "id": 43,
                "name": "post - halving",
                "type": "topic",
                "text": "post - halving",
                "colors": [
                    "#ff7373"
                ],
                "label": "post - halving"
            },
            {
                "id": 44,
                "name": "whales",
                "type": "topic",
                "text": "whales",
                "colors": [
                    "#8a2be2"
                ],
                "label": "whales"
            },
            {
                "id": 45,
                "name": "simpsons",
                "type": "topic",
                "text": "simpsons",
                "colors": [
                    "#101010"
                ],
                "label": "simpsons"
            },
            {
                "id": 46,
                "name": "winklevoss biographer",
                "type": "topic",
                "text": "winklevoss biographer",
                "colors": [
                    "#101010"
                ],
                "label": "winklevoss biographer"
            },
            {
                "id": 47,
                "name": "intrinsic value",
                "type": "topic",
                "text": "intrinsic value",
                "colors": [
                    "#ff80ed"
                ],
                "label": "intrinsic value"
            },
            {
                "id": 48,
                "name": "google trends",
                "type": "topic",
                "text": "google trends",
                "colors": [
                    "#ffa500"
                ],
                "label": "google trends"
            }
        ],
        links:[
            {
                "source": 0,
                "target": 28
            },
            {
                "source": 0,
                "target": 29
            },
            {
                "source": 1,
                "target": 28
            },
            {
                "source": 2,
                "target": 28
            },
            {
                "source": 2,
                "target": 30
            },
            {
                "source": 4,
                "target": 28
            },
            {
                "source": 6,
                "target": 28
            },
            {
                "source": 6,
                "target": 31
            },
            {
                "source": 7,
                "target": 32
            },
            {
                "source": 8,
                "target": 33
            },
            {
                "source": 9,
                "target": 34
            },
            {
                "source": 10,
                "target": 28
            },
            {
                "source": 11,
                "target": 35
            },
            {
                "source": 11,
                "target": 36
            },
            {
                "source": 11,
                "target": 37
            },
            {
                "source": 12,
                "target": 38
            },
            {
                "source": 13,
                "target": 28
            },
            {
                "source": 14,
                "target": 39
            },
            {
                "source": 15,
                "target": 40
            },
            {
                "source": 16,
                "target": 28
            },
            {
                "source": 16,
                "target": 41
            },
            {
                "source": 17,
                "target": 42
            },
            {
                "source": 17,
                "target": 28
            },
            {
                "source": 18,
                "target": 28
            },
            {
                "source": 19,
                "target": 39
            },
            {
                "source": 20,
                "target": 28
            },
            {
                "source": 21,
                "target": 43
            },
            {
                "source": 22,
                "target": 44
            },
            {
                "source": 22,
                "target": 28
            },
            {
                "source": 23,
                "target": 45
            },
            {
                "source": 23,
                "target": 28
            },
            {
                "source": 24,
                "target": 46
            },
            {
                "source": 25,
                "target": 47
            },
            {
                "source": 26,
                "target": 28
            },
            {
                "source": 27,
                "target": 28
            },
            {
                "source": 27,
                "target": 48
            }
        ]

    }
}