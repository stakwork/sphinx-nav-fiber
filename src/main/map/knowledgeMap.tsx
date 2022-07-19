
import { useState, useEffect } from 'react';
import { ForceGraph3D } from 'react-force-graph';
import { Node, NodesAndLinks, convertFromISOtoSeconds, sleep } from './helpers'
import * as three from 'three'
import SpriteText from 'three-spritetext'
import styled from "styled-components";
import ReactAudioPlayer from 'react-audio-player';
import ClipLoader from "react-spinners/ClipLoader";

export default function KnowledgeMap(props: any) {
  const { onNodeClicked, mapRef } = props
  const [graphData, setGraphData]: any = useState<NodesAndLinks>({ nodes: [], links: [] })
  const [focusedNode, setFocusedNode]:any = useState(null)
  const [selectedEpisodes, setSelectedEpisodes]: any = useState({})
  const [showList, setShowList]: any = useState(true)

   // update dataset
  useEffect(() => {
      setGraphData(props.data)
    setShowList(false)
    setTimeout(() => {
      mapRef?.current?.zoomToFit(600,100)
    },400)
  }, [props.data])

  // do audio list changes on node select 
  useEffect(() => {
    
  // start async
    (async () => {
      // wait while the render appears
      await sleep(100)
      const se: any = { ...selectedEpisodes }
      let keyname = focusedNode?.details?.podcast_title
      
      const selected = () => {
        if (!selectedEpisodes[keyname]) return true
        return selectedEpisodes[keyname]?.media_url === focusedNode.details.link
      }

      const isSelected = selected()

      if (focusedNode&&focusedNode.details) {
        const nodeElement = document.getElementById(focusedNode.details.podcast_title)
        if (nodeElement) {
          nodeElement.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'center' })
            
          const episodeElement = document.getElementById(focusedNode.details.podcast_title + focusedNode.details.episode_title)
          if (episodeElement) {
            episodeElement.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'center' }) 
          }
        }

        if (!isSelected) {
          se[keyname] = {
            ...se[keyname],
            media_url: focusedNode.details.link,
            timestamp: focusedNode.details.timestamp,
            loaded: false
          }
          setSelectedEpisodes(se)  
        }
        startPlayback(focusedNode.details.podcast_title, focusedNode.details.timestamp, focusedNode.details.link, true)
      }
    })()

    // end async
    
  }, [focusedNode])


  const nodeObject = (node: any) => {

    let color = (node.colors && node.colors[0]) ? node.colors[0] : 'tomato'
    
    if (node.type === 'topic') {
      const sprite = new SpriteText(node.name);
      sprite.color = color;
      sprite.textHeight = 10;
      return sprite;
    }

    // const map = new three.TextureLoader().load( 'audio_default.svg' );
    // const material = new three.SpriteMaterial({
    //   map: map,
    // });
    // const sprite = new three.Sprite(material);

    const sprite = new three.Sprite(new three.SpriteMaterial({
      color: color,
      transparent: true,
      fog: false
    }));
    
    let scale = 20
    let randW = 1 * scale
    let randH = 1 * scale

    if (randW < scale / 2) randW = scale / 2
    if (randH < scale / 2) randH = scale / 2
    
    sprite.scale.set(randW, randH, 1);

    return sprite
  }
  
  const linkObject = () => {
    const material = new three.LineBasicMaterial({color: '#000'});
    const geometry = new three.BufferGeometry();
    const line = new three.Line( geometry, material );

    return line
  }
  
  function clickNode(node: any) {
    
    console.log('node',node)
    if (node.type === 'topic') {
      props.getData(node.label)
    }
    else {
      setFocusedNode(node)
      setShowList(true)
    }
  }

    const groupedPodcasts: any = {}
    
    graphData?.nodes?.forEach((d: Node, i: number) => {
      if (d.details?.podcast_title && !groupedPodcasts[d.details?.podcast_title]) {
        groupedPodcasts[d.details?.podcast_title] = {
          ...d.details,
          title: d.details?.podcast_title,
          img: null,
          episodes: [
            {
              ...d.details,
              title:d.details?.episode_title,
              media_url: d.details?.link
            }
          ]
        }
      } else if (d.details?.podcast_title){
        groupedPodcasts[d.details?.podcast_title].episodes.push({
          ...d.details,
          title:d.details?.episode_title,
          media_url: d.details?.link
        })
      }
    })
   

  function startPlayback(podcastKeyname: string, timestamp:string, audioUrl: string, skipBlock?: boolean) {
    // set audio at correct spot
    let start_time = 0
    let end_time = 0
    
    // if (!skipBlock && (selectedEpisodes[podcastKeyname]?.media_url !== audioUrl)) {
    //   console.log('block play!')
    //   return
    // }
    
    if (timestamp) {
      let isStartAndEnd = timestamp.includes('-')
      if (isStartAndEnd) {
        let t = timestamp.split('-')
        start_time = convertFromISOtoSeconds(t[0])  
        end_time = convertFromISOtoSeconds(t[1])    
      } else {
        start_time = convertFromISOtoSeconds(timestamp)  
      }
    }

    const audioElement = document.getElementById(audioUrl) as HTMLAudioElement;
      if (audioElement) {
        audioElement.currentTime = start_time || 0

        // set style to mark range
        // if (start_time && end_time) {
          // audioElement.style.setProperty('background', 'pink')
        // }
        
        console.log('start play!')
        audioElement.play()
      }
  }

  function stopAllOtherPlayback(el: HTMLAudioElement) {
    const players = Array.from(document.getElementsByClassName('audio-player'))
    players.forEach((p) => {
      let playerEl = p as HTMLAudioElement
      if (playerEl.id != el?.id) {
        if (!playerEl.paused) {
          console.log('pause play!')
          playerEl.pause()  
        }
      } 
    })
  }

  return <>
     {showList&&Object.keys(groupedPodcasts)?.length>0 &&
      <ListWindow onClick={(e) => e.preventDefault()}>

          

          {Object.keys(groupedPodcasts).map((keyname: string, i: number) => {
            const thisNode = groupedPodcasts[keyname]
            const { title, image, episodes, timestamp } = thisNode

            
            const selectedEpisode = selectedEpisodes[keyname] ? selectedEpisodes[keyname] : episodes[0]
            const audioUrl: any = selectedEpisode.media_url

            
            const nodeIsSelected = focusedNode?.details?.podcast_title === title

            if (!nodeIsSelected) return null
            
            return <NodePanel key={i + 'ouahsf'} id={title}>
              <Col style={{
                height: 290,
                zIndex:2,
                boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2)'
              }}>
                      <CloseIt onClick={()=>setShowList(false)}>
                      x
                      </CloseIt>
                      
                <Col style={{alignItems:'center'}}>
                      <Title>{title}</Title>
                      <Avatar src={'audio_default.svg'} />
                      <ReactAudioPlayer
                        id={audioUrl}
                        className={'audio-player'}
                        autoPlay
                        onPlay={(e) => {
                          // const el = e.target as HTMLAudioElement
                          // stopAllOtherPlayback(el)
                        }}
                        style={{
                          width: '80%',
                        }}
                        src={audioUrl}
                        onLoadedMetadata={() => {
                          const se: any = { ...selectedEpisodes }
                          se[keyname] = { ...se[keyname], timestamp: selectedEpisode.timestamp, media_url:audioUrl, loaded: true }
                          setSelectedEpisodes(se)
                          startPlayback(title, se[keyname].timestamp, se[keyname].media_url)
                        }}
                        controls
                    />
                </Col>
                </Col>
              
              {/* scrolling list */}  
              
              <Col style={{ height:'calc(100% - 290px)'}}>
                  <Scroller id={title + '_scroller'}>
                  {episodes.filter((f:any, i: number) => {
                    // rendering optimization, 
                    // only render full list for selected node 
                    // if (!nodeIsSelected) {
                    //     if (i > 2) return false
                    // }
                    return true
                    }).map((e: any, ii: number) => {

                      const se: any = { ...selectedEpisodes }
                      
                      const selected = () => {
                        return selectedEpisodes[keyname]?.media_url === e.media_url && selectedEpisodes[keyname]?.timestamp === e.timestamp
                      }

                      const myKey = keyname + '_' + i + '_' + ii

                      const isSelected = selected()

                      return <div key={myKey}>
                        <EpisodePanel className={'tooltip'}  id={title + e.title}
                          onClick={() => {
                            if (isSelected) {
                              startPlayback(e.podcast_title ,e.timestamp, e.media_url, true)
                            } else {
                              se[keyname] = { ...e, media_url: e.media_url, loaded: false }
                              setSelectedEpisodes(se)  
                          }
                        }}
                          style={{
                            fontWeight: isSelected ? 600 : 300}}>
                          <div style={{
                            display: 'flex', alignItems: 'center',
                            justifyContent: 'center', fontSize: 20, marginRight: 10, width: 24, 
                            minWidth: 24
                          }}>
                          {isSelected && selectedEpisodes[keyname]?.loaded === false ? <ClipLoader  loading={true} size={20} /> : <div>{ii + 1}</div>}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <Subtitle>{e.title}</Subtitle>
                        </div>
                        
                        </EpisodePanel>
                          <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
                          <Divider />
                          </div>
                        </div>
                    })}
                    
                  </Scroller>
                </Col>
              </NodePanel>  
          })}

        
    </ListWindow>
      }
    
    <ForceGraph3D
    ref={mapRef}
    graphData={graphData}
    nodeVisibility={() => {
      // hide nodes if not hovered
      return true
    }}
    linkVisibility={() => {
      // hide links if not hovered
      return true
    }}
    rendererConfig={{
      stencil:false,
      powerPreference:'high-performance',
      precision: 'highp',
    }}
    warmupTicks={0}
    // nodeRelSize={8}
      // onEngineTick={() => {
      //   // console.log('tick')
      // }}
      // onEngineStop={() => {
      //   // console.log('sim froze')
      // }}
      // nodePointerAreaPaint={(e) => {
      //   console.log('e',e)
        
      // }}
      // enableNavigationControls={true}
      nodeLabel={'label'}
      enableNodeDrag={false}
      onNodeClick={(node: any) => clickNode(node)}
      backgroundColor={'#f1f1f1'}
      nodeAutoColorBy="type"
      linkThreeObject={linkObject}
      nodeThreeObject={(node:any) => {
       return nodeObject(node)
      }}
  />
  
  
    </>
}



const ListWindow = styled.div`
display:flex;
flex-direction:column;
position:absolute;
left:30px;
top:80px;
height:calc(100% - 100px);
background:#ffffffdd;
min-width:310px;
width:410px;
z-index:30000;
border-radius:10px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
overflow:hidden;

`

const Divider = styled.div`
height:1px;
background:#ccc;
width:95%;
`

const Row = styled.div`
display:flex;
width:100%;
`
const Col = styled.div`
display:flex;
flex-direction:column;
width:100%;
`

const Scroller = styled.div`
display:flex;
flex-direction:column;
width:100%;
overflow: auto;
overflow-x:hidden; 
background: #fff; 
`
const NodePanel = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
height:100%;
overflow:hidden;
&:hover{
  opacity:1;
}
`

const EpisodePanel = styled.div`
display:flex;
align-items:center;
width:100%;
padding:10px;

opacity:0.8;
min-height:36px;
cursor:pointer;
&:hover{
  opacity:1;
  z-index:20;
}
`
const CloseIt = styled.div`
margin:10px 10px 0;
cursor:pointer;
color:#000;
padding:10px;
border-radius:30px;
width:fit-content;
`


const Padding = styled.div`
padding:30px;
overflow:hidden;
`

interface ImgProps {
  src: string;
}
const Avatar = styled.div<ImgProps>`
background-image:url(${p => p.src});
background-size:contain;
min-width:70px;
min-height:70px;
width:100px;
height:100px;
border-radius:5px;
margin:20px 0;
`

const Title = styled.div`
font-size:20px;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
`

const Subtitle = styled.div`
font-size:12px;
overflow: hidden;
padding-right:10px;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
`