import {useState, useCallback, useRef, useEffect } from 'react'
import styled from "styled-components";
import ReactAudioPlayer from 'react-audio-player';
import ClipLoader from "react-spinners/ClipLoader";
import { NodesAndLinks, Node, convertFromISOtoSeconds, sleep } from './helpers';

interface ListContent {
    searchComponent: any,
    graphData: NodesAndLinks,
    visible: boolean,
    close: any,
    focusedNode: any,
    mapRef: any,
    currentSearchTerm: string,
    setFocusedNode:any
}

export default function ContentBrowser(props: ListContent) {
    const { graphData, visible, focusedNode, close, mapRef, searchComponent, currentSearchTerm, setFocusedNode } = props
    const [selectedEpisodes, setSelectedEpisodes]: any = useState({})
    const [showAudioPlayer, setShowAudioPlayer]: any = useState(true)

    // do audio list changes on node select 
    useEffect(() => {
    
        // start async
        (async () => {
            // wait while the render appears
            await sleep(100)
            const se: any = { ...selectedEpisodes }
            let podcastName = focusedNode?.details?.podcast_title
        
            const selected = () => {
                if (!selectedEpisodes[podcastName]) return true
                return selectedEpisodes[podcastName]?.media_url === focusedNode.details.link
            }
  
            const isSelected = selected()
  
            if (focusedNode && focusedNode.details) {
                const nodeElement = document.getElementById(focusedNode.details.podcast_title)
                if (nodeElement) {
                    nodeElement.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'center' })
              
                    const episodeElement = document.getElementById(focusedNode.details.podcast_title + focusedNode.details.episode_title)
                    if (episodeElement) {
                        episodeElement.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'center' })
                    }
                }

                clickTimestamp(focusedNode,podcastName,false)
  
                // if (!isSelected) {
                //     se[podcastName] = {
                //         ...se[podcastName],
                //         media_url: focusedNode.details.link,
                //         timestamp: focusedNode.details.timestamp,
                //         loaded: false
                //     }
                //     setSelectedEpisodes(se)
                // }
                // startPlayback(focusedNode.details.podcast_title, focusedNode.details.timestamp, focusedNode.details.link, true)
            }
        })()
  
        // end async
    }, [focusedNode])

    function resetAudioPlayer(){
        setShowAudioPlayer(false)
        setTimeout(() => {
            setShowAudioPlayer(true)
        },20)
    }

    function startPlayback(podcastpodcastName: string, timestamp: string, audioUrl: string, skipBlock?: boolean) {
        // set audio at correct spot
        let start_time = 0
        let end_time = 0
        
        // if (!skipBlock && (selectedEpisodes[podcastpodcastName]?.media_url !== audioUrl)) {
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
            // audioElement.play()
        }
    }
    
    // function stopAllOtherPlayback(el: HTMLAudioElement) {
    //   const players = Array.from(document.getElementsByClassName('audio-player'))
    //   players.forEach((p) => {
    //     let playerEl = p as HTMLAudioElement
    //     if (playerEl.id != el?.id) {
    //       if (!playerEl.paused) {
    //         console.log('pause play!')
    //         playerEl.pause()
    //       }
    //     }
    //   })
    // }

    async function clickTimestamp(t:any, podcastName:string, isSelected:boolean){
        const se: any = { ...selectedEpisodes }
        // if (isSelected) {
        //     startPlayback(t.podcast_title ,t.timestamp, t.media_url, true)
        //   } else {
            
        // }

        // setFocusedNode()

        se[podcastName] = { ...t, loaded: false }
        setSelectedEpisodes(se)  
        startPlayback(t.podcast_title ,t.timestamp, t.media_url, true)
        resetAudioPlayer()
        console.log('t', t)
        
        // let coords = {
        //     x: t.x,
        //     y: t.y,
        //     z: t.z
        // }

        // mapRef?.current?.zoomToFit(400, 20, (node: any) => {
        //     console.log('node',node)
        //     if (node?.details?.link === t.media_url) return true
        //     return false
        // })
        
    }
    
    
    function formatTimestamp(ts:string) {
        // if (ts.includes('-0')) {
        //  ts = ts.replace('-0','')   
        // }

        return ts
    }


    function renderPodcast() {

        const groupedPodcasts: any = {}
        graphData?.nodes?.filter((d: Node) => {
            // ignore unrelated data
            return focusedNode?.details?.podcast_title === d.details?.podcast_title
        }).forEach((d: Node, i: number) => {

            if (!d.details?.podcast_title) return

            const { podcast_title, episode_title } = d.details

            if (podcast_title && !groupedPodcasts[podcast_title]) {
                groupedPodcasts[podcast_title] = {
                    ...d.details,
                    title: podcast_title,
                    image_url: d.image_url,
                    timestamps: {
                    [episode_title]: [{
                        ...d.details,
                        title: episode_title,
                        media_url: d.details?.link
                    }]
                    }
                }
            } 
            else if (!groupedPodcasts[podcast_title].timestamps[episode_title]) {
                groupedPodcasts[podcast_title].timestamps[episode_title] = [{
                    ...d.details,
                    image_url: d.image_url,
                    title:episode_title,
                    media_url: d.details?.link
                    }]
            }
            else {
                groupedPodcasts[podcast_title].timestamps[episode_title].push({
                ...d.details,
                image_url: d.image_url,
                title: episode_title,
                media_url: d.details?.link
                })
            }
        })
        
        return (<>

            {/* 
                this will only have one object in it,
                supports many, but only one focused for now 
             */}
        {Object.keys(groupedPodcasts).map((podcastName: string, i: number) => {
          const thisPodcast = groupedPodcasts[podcastName]
          const { title, image_url, timestamps } = thisPodcast

          const selectedEpisode = selectedEpisodes[podcastName] ? selectedEpisodes[podcastName] : Object.keys(timestamps)[0]
          const audioUrl: any = selectedEpisode.media_url
            
          const playbackTopics = selectedEpisode?.topics?.map((topic:string) => {
              return topic
          }) || []
            
          
          return <NodePanel key={i + 'ouahsf'} id={title}>
            <Col style={{
              height: 210,
                zIndex: 2,
                  width: '100%',
              alignItems:'center',
              boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2)'
            }}>
                    
                  <Row style={{ alignItems: 'center' }}>
                      <Avatar src={image_url || 'audio_default.svg'} style={{ margin: 20 }} />
                      <Col style={{paddingRight:20}}>
                          <Title>{title}</Title>
                          
                          {showAudioPlayer ? <ReactAudioPlayer
                              id={audioUrl}
                              className={'audio-player'}
                              autoPlay
                              //   onPlay={(e) => {
                              //     const el = e.target as HTMLAudioElement
                              //     stopAllOtherPlayback(el)
                              //   }}
                              style={{
                                  width: '100%',
                                  marginTop: "20px",
                              }}
                              src={audioUrl}
                              onLoadedMetadata={() => {
                                  const se: any = { ...selectedEpisodes }
                                  se[podcastName] = { ...se[podcastName], timestamp: selectedEpisode.timestamp, media_url: audioUrl, loaded: true }
                                  setSelectedEpisodes(se)
                                  startPlayback(title, se[podcastName].timestamp, se[podcastName].media_url)
                              }}
                              controls
                          /> : <div style={{ height: 74 }} />}
                          </Col>
                  </Row>

                  <Divider />
                  
                  <div style={{display:'flex',width:'100%', alignItems:'flex-start'}}>
                      <div style={{padding:20}}>
                          {timestamps && Object.keys(timestamps).length} results containing keyword "<Link style={{}}>{currentSearchTerm}</Link>"
                          <div style={{fontSize:10,marginTop:8,cursor:'pointer'}}>Show all key words...</div>
                      </div>
                  </div>

                  {/* popover showing all related terms */}
              {playbackTopics.length > 0 && false && <div style={{ width: '90%' }}>
                            {playbackTopics.map((tag: string, i: number) => {
                                            let end = ','
                                            if (i === playbackTopics.length -1) end = '.'
                                return <><Link key={i} > {tag}</Link><span>{end}</span></>
                            })} 
                      </div> }
              </Col>
            
            {/* scrolling list */}  
            
            <Col style={{ height:'calc(100% - 210px)'}}>
                <Scroller id={title + '_scroller'}>
                {Object.keys(timestamps).map((episodeName: any, ii: number) => {
                    const thisPodcastTimestamps = timestamps[episodeName]
                    const myKey = episodeName + '_' + i + '_' + ii
                    const defaultTimestamp = thisPodcastTimestamps[0]

                    return <div key={myKey}>
                        <EpisodePanel onClick={() => {
                            clickTimestamp(defaultTimestamp, podcastName,false)
                        }} className={'tooltip'} id={title + episodeName}>

                            <div style={{marginRight:20}}>
                                <Avatar
                                    style={{height:60,width:60}}
                                    src={defaultTimestamp.image_url || 'audio_default.svg'} />
                            </div>
                            
                            <div style={{overflow:'hidden', maxWidth:'70%'}}>
                            <Subtitle>{episodeName}</Subtitle>
                            <TimestampEnv>
                            {thisPodcastTimestamps.map((t: any, ii: number) => {
                                const selected = () => {
                                    return selectedEpisodes[podcastName]?.media_url === t.media_url && selectedEpisodes[podcastName]?.timestamp === t.timestamp
                                }

                                const isSelected = selected()

                                return <Timestamp
                                style={{fontWeight: isSelected ? 500 : 300,width:'100%'}}
                                    key={ii + 'timestamp'}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        clickTimestamp(t, podcastName, isSelected)
                                    }}>
                                     
                                    <div style={{display:'flex',alignItems:'center',marginRight:10}}>
                                    {'' + formatTimestamp(t.timestamp)}
                                    </div>

                                {isSelected && selectedEpisodes[episodeName]?.loaded === false &&
                                    <ClipLoader loading={true} size={15}  />
                                }
                                </Timestamp>
                            })
                            }
                            </TimestampEnv>
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
        </>)
    }  
    
    function renderYoutube() {
        return <div>
            Youtube
        </div>
    }

    function renderTwitter() {
        return <div>
            Youtube
        </div>
    }


    let contentView: any = null
    
    switch (focusedNode?.type) {
        case 'youtube':
            contentView = renderYoutube()
            break;
        case 'twitter':
            contentView = renderTwitter()
            break;
        default:
            contentView = renderPodcast()
      }  
   
      if (!visible) return <div/>

  return(
      <ListWindow onClick={(e) => e.preventDefault()}> 
            <div style={{display:'flex',padding:20, position:'relative'}}>
              {searchComponent}
              
              <CloseIt onClick={()=>close()}>
                    x
                    </CloseIt>
            </div>
            {contentView}
            </ListWindow>
  )
}

const ListWindow = styled.div`
display:flex;
flex-direction:column;
// position:absolute;
// left:0px;
// top:0px;
height:100%;
min-height:100%;
background:#ffffff;
min-width:433px;
width:433px;
z-index:30000;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
overflow:hidden;

`

const Divider = styled.div`
height:1px;
background:#ccc;
width:95%;
`
const Link = styled.span`
color:blue;
cursor:pointer;
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
width:100%;
padding:10px 20px;

opacity:0.8;
min-height:36px;
cursor:pointer;

`
const CloseIt = styled.div`
position:absolute;
right:30px;
top:24px;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
color:#000;
padding:10px;
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
flex-grow:0;
flex-shrink:0;
min-width:70px;
min-height:70px;
width:100px;
height:100px;
border-radius:5px;
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
font-size:16px;
overflow: hidden;
font-style:italic;
font-weight:300;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
// font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
/* or 114% */


/* Primary Text 1 */

color: #292C33;
`

const Timestamp = styled.div`
margin-bottom:5px;
display:flex;
font-size:18px;
width:100%;
&:hover{
  opacity:1;
  z-index:20;
}
`
const TimestampEnv = styled.div`
padding: 10px 5px 0;
`