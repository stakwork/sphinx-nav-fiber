import React, {useState, useCallback } from 'react'
import styled from "styled-components";
import ForceGraph from './ForceGraph/ForceGraph'
import _ from 'lodash'
import './body.css'

interface Node {
  id: number,
  name: string,
  type: string,
  text: string
}

interface Link {
  source: number,
  target: number
}

interface Moment {
  episode_title: string,
  link: string,
  podcast_title: string,
  timestamp: string,
  topics: string[],
  text: string
}

interface NodesAndLinks{
  nodes: Node[],
  links: Link[]
}

const DEBOUNCE_LAG = 800

export default function BodyComponent() {

  const [topic, setTopic]: any = useState("");
  const [graphData, setGraphData]: any = useState<NodesAndLinks>({nodes: [], links: []})
  const [isLoading, setIsLoading]: any = useState(false)

 const hStyle = {
    color: 'white',
   
    fontFamily: 'Roboto',
    fontWeight: 'lighter',
    fontSize: 30,
  };

  const bodyStyle = {
    height: 1000,
    background: '#212529',
  };

  const divStyle = {
    height: 10
  };

  function findNodeByName(name: string, _nodes: Array<Node>) : Node | undefined {
    return _nodes.find(candidate => candidate.name === name)
  }
  
  function callApi(word: string) {

    console.log('word', word)
    setIsLoading(true)
    let index = 0


    fetch(`https://ardent-pastry-basement.wayscript.cloud/prediction/${word}`)
      .then(response => response.json())
      .then((data: Moment[]) => {

        console.log('data',data)
        if(data.length) {
          // setGraphData(data)
          const _nodes: Node[] = []
          const _links: Link[] = []
          const topicMap = {}
          // Populating nodes array with podcasts and constructing a topic map
          data.forEach(moment => {
            _nodes.push({
              id: index,
              name: moment.podcast_title + ":" + moment.episode_title + ":" + moment.timestamp,
              type: 'podcast',
              text: moment.text
            })
            index++
            const topics = moment.topics
            // @ts-ignore
            topics.forEach((topic: string) => topicMap[topic] = true)
          })
          // Adds topic nodes
          Object.keys(topicMap)
            .forEach(topic => {
              const topicNode: Node = {
                id: index,
                name: topic,
                type: 'topic',
                text: topic
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
          console.log(_nodes)
          setGraphData({nodes: _nodes, links: _links})
          // setNodes(_nodes)
          // console.log(_links)
          // setLinks(_links)
        }
      })
      .catch(console.error)
      .finally(() => {
        console.log('Running finally block')
        setIsLoading(false)
        console.log(isLoading)
      })
  }

  const dispatchNetwork = useCallback(_.debounce((word) => {
    callApi(word)
  }, DEBOUNCE_LAG), [isLoading])

  const onTopicChange = (topic: string) => {
    setTopic(topic)
    console.log('topic',)
    // callApi(topic)
    dispatchNetwork(topic)
    
  }

  const onNodeClicked = (event: PointerEvent, data: any, isLoading: any) => {
    console.log('onNodeClicked.data: ', data, ', isLoading: ', isLoading)
    if (data.type === 'topic') {
      if (!isLoading) {
        onTopicChange(data.name)
      }
    }
  }
  
  return(
    <Body>
          <form>
            <input
              className={isLoading ? 'loading' : ''}
              disabled={isLoading}
              style={{borderRadius: '100px', paddingLeft: '10px', marginBottom: '10px'}}
              type="text" 
              value={topic}
              placeholder="Search"
              onSubmit={(e) => e.preventDefault()}
              onChange={e => onTopicChange(e.target.value)}
            />
          </form>
          <ForceGraph
            linksData={graphData.links}
            nodesData={graphData.nodes}
            currentTopic={topic}
            onNodeClicked={(e:any,data:any) => onNodeClicked(e, data, isLoading)}
          />
    </Body>
  )
}

const Body = styled.div`
  flex:1;
  height:calc(100vh - 60px);
  // padding-bottom:80px;
  width:100%;
  overflow:auto;
  background:#272c4b;
  display:flex;
  flex-direction:column;
  align-items:center;
`

const Column = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:10px;
  // max-width:900px;
  width:100%;
`