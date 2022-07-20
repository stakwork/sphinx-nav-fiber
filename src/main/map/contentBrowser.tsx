import {useState, useEffect } from 'react'
import styled from "styled-components";
import ReactAudioPlayer from 'react-audio-player';
import ClipLoader from "react-spinners/ClipLoader";
import { NodesAndLinks, Node, convertFromISOtoSeconds, sleep } from './helpers';
import Modal from '../sphinxUI/modal';

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
    const [modalContent, setModalContent]: any = useState(null)

    // do audio list changes on node select 
    useEffect(() => {
    
        // start async
        (async () => {
            // wait while the render appears
            await sleep(100)
            let podcastName = focusedNode?.details?.podcast_title
  
            if (focusedNode && focusedNode.details) {
                const nodeElement = document.getElementById(focusedNode.details.podcast_title)
                if (nodeElement) {
                    nodeElement.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'center' })
              
                    const episodeElement = document.getElementById(focusedNode.details.podcast_title + focusedNode.details.episode_title)
                    if (episodeElement) {
                        episodeElement.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'center' })
                    }
                }

                let nodeWithDetails = {
                    ...focusedNode,
                    ...focusedNode.details,
                    media_url: focusedNode.details.link
                }

                clickTimestamp(nodeWithDetails,podcastName)
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

    async function clickTimestamp(t:any, podcastName:string){
        const se: any = { ...selectedEpisodes }

        se[podcastName] = { ...t, loaded: false }
        setSelectedEpisodes(se)  
        resetAudioPlayer()
        console.log('t', t)
        
    }
    
    
    function formatTimestamp(ts: string) {
        const splitStr = ts.split('-')

        const start = splitStr[0]
        const end = splitStr[1]
        
        let formatted = start
        if (end && parseInt(end) !== 0) {
            formatted += ` - ${end}`
        }

        return formatted
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
            
            // console.log('thisPodcast',thisPodcast)
            // const allTopics = Object.keys(thisPodcast.timestamps).map((keyna:string) => {
            //     const ep = thisPodcast.timestamps[keyna]
            //     return ep.topics
            // })
            
          const playbackTopics = selectedEpisode?.topics?.map((topic:string) => {
              return topic
          }) || []
            
            let tsCount = 0
                
            Object.keys(timestamps).map((episodeName: string) => {
                const thisPodcastTimestamps = timestamps[episodeName]
                tsCount += thisPodcastTimestamps.length
            })
            
          
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
                              style={{
                                  width: '100%',
                                  marginTop: "20px",
                              }}
                              src={audioUrl}
                              onError={() => {
                                const se: any = { ...selectedEpisodes }
                                se[podcastName] = { ...se[podcastName], timestamp: selectedEpisode.timestamp, media_url: audioUrl, loaded: true, error: true }
                                setSelectedEpisodes(se)
                            }}
                              onLoadedMetadata={() => {
                                  const se: any = { ...selectedEpisodes }
                                  se[podcastName] = { ...se[podcastName], timestamp: selectedEpisode.timestamp, media_url: audioUrl, loaded: true, error: false }
                                  setSelectedEpisodes(se)
                                  startPlayback(title, se[podcastName].timestamp, se[podcastName].media_url)
                              }}
                              controls
                          /> : <div style={{ height: 74 }} />}
                          </Col>
                  </Row>

                  <Divider />
                  
                  <div style={{display:'flex',width:'100%', alignItems:'flex-start'}}>
                      <div style={{padding:20, color: '#292c33'}}>
                          {tsCount} results containing keyword "<Link style={{}}>{currentSearchTerm}</Link>"
                          <div
                              onClick={() => {
                                  const el = (<div>
                                      {playbackTopics.length > 0 &&
                                          playbackTopics.map((tag: string, i: number) => {
                                                                let end = ','
                                                                if (i === playbackTopics.length -1) end = '.'
                                                    return <span key={i}><Link> {tag}</Link><span>{end}</span></span>
                                                })}
                                  </div>)
                                  setModalContent(el)
                              }}
                              style={{ fontSize: 10, marginTop: 8, cursor: 'pointer' }}>Show all key words...</div>
                      </div>
                  </div>

                  {/* popover showing all related terms */}
              
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
                            clickTimestamp(defaultTimestamp, podcastName)
                        }} className={'tooltip'} id={title + episodeName}
                        style={{alignItems:'center'}}>

                            <div style={{marginRight:20}}>
                                <Avatar
                                    style={{height:40,width:40}}
                                    src={defaultTimestamp.image_url || 'audio_default.svg'} />
                            </div>
                            
                            <div style={{overflow:'hidden', maxWidth:'calc(100% - 90px)'}}>
                            <Subtitle>{episodeName}</Subtitle>
                            </div>
                      
                        </EpisodePanel>
                        
                        <TimestampEnv>
                            {thisPodcastTimestamps.map((t: any, ii: number) => {
                                const selected = () => {
                                    return selectedEpisodes[podcastName]?.media_url === t.media_url && selectedEpisodes[podcastName]?.timestamp === t.timestamp
                                }
                                const isError = () => {
                                    return selectedEpisodes[podcastName]?.media_url === t.media_url && selectedEpisodes[podcastName]?.timestamp === t.timestamp && selectedEpisodes[podcastName]?.error
                                }

                                const isSelected = selected()

                                const errorStyle = isError() ? {
                                    color: 'red'
                                } : {}

                                return <div key={ii + 'timestamp'}><Timestamp
                                style={{fontWeight: isSelected ? 500 : 300,width:'100%', ...errorStyle}}
                                    // key={ii + 'timestamp'}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        clickTimestamp(t, podcastName)
                                    }}>
                                    {isSelected&&selectedEpisodes[podcastName]?.loaded === false ?
                                        <ClipLoader loading={true} size={10} /> :
                                        <span className="material-icons" style={{ fontSize: 15 }}>{isError() ? 'error' : 'access_time'}</span>
                                    }
                                     
                                    <div style={{display:'flex',alignItems:'center',marginLeft:8}}>
                                    {'' + formatTimestamp(t.timestamp)}
                                    </div>

                                </Timestamp>
                                    <Divider style={{width:'100%'}} />
                                    </div>
                            })
                            }
                        </TimestampEnv>
                        
                      </div>
                  })}
                  
                      {/* bottom padding */}
                      <div style={{height:100, minHeight:100}} />
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
                <span className="material-icons" style={{ fontSize: 20 }}>close</span>
                </CloseIt>
          </div>
          
            {contentView}
          
            <Modal
                visible={modalContent ? true : false}
                close={()=>setModalContent(null)}
            >
              {modalContent}
            </Modal>
          
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
font-weight:400;
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

`

const Timestamp = styled.div`
display:flex;
align-items:center;
padding:5px 5px 8px;
display:flex;
font-size:14px;
width:100%;
cursor:pointer;
padding-left:20px;
&:hover{
  background:#f1f1f1;
  opacity:1;
  z-index:20;
}
`
const TimestampEnv = styled.div`
background:#eee;
padding:5px 5px 0;
`