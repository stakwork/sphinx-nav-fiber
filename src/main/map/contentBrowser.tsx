import {useState, useCallback, useRef, useEffect } from 'react'
import styled from "styled-components";
import ReactAudioPlayer from 'react-audio-player';
import ClipLoader from "react-spinners/ClipLoader";
import { NodesAndLinks, Node, convertFromISOtoSeconds, sleep } from './helpers';

interface ListContent {
    graphData: NodesAndLinks,
    visible: boolean,
    close: any,
    focusedNode: any,
}

export default function ContentBrowser(props: ListContent) {
    const { graphData, visible, focusedNode, close } = props
    const [selectedEpisodes, setSelectedEpisodes]: any = useState({})
    const [selectedNode, setSelectedNode]: any = useState(null)

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
  
                if (!isSelected) {
                    se[podcastName] = {
                        ...se[podcastName],
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
            audioElement.play()
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
    
    
    function formatTimestamp(ts:string) {
        if (ts.includes('-0')) {
         ts = ts.replace('-0','')   
        }

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
          const { title, image_url, timestamps, timestamp } = thisPodcast

          const selectedEpisode = selectedEpisodes[podcastName] ? selectedEpisodes[podcastName] : Object.keys(timestamps)[0]
          const audioUrl: any = selectedEpisode.media_url
          
          return <NodePanel key={i + 'ouahsf'} id={title}>
            <Col style={{
              height: 290,
              zIndex:2,
              boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2)'
            }}>
                    <CloseIt onClick={()=>close()}>
                    x
                    </CloseIt>
                    
              <Col style={{alignItems:'center'}}>
                      <Title>{title}</Title>
                      
                      <Avatar src={image_url || 'audio_default.svg'} style={{margin:20}} />
                    <ReactAudioPlayer
                      id={audioUrl}
                      className={'audio-player'}
                      autoPlay
                    //   onPlay={(e) => {
                    //     const el = e.target as HTMLAudioElement
                    //     stopAllOtherPlayback(el)
                    //   }}
                      style={{
                        width: '80%',
                      }}
                      src={audioUrl}
                      onLoadedMetadata={() => {
                        const se: any = { ...selectedEpisodes }
                        se[podcastName] = { ...se[podcastName], timestamp: selectedEpisode.timestamp, media_url:audioUrl, loaded: true }
                        setSelectedEpisodes(se)
                        startPlayback(title, se[podcastName].timestamp, se[podcastName].media_url)
                      }}
                      controls
                  />
              </Col>
              </Col>
            
            {/* scrolling list */}  
            
            <Col style={{ height:'calc(100% - 290px)'}}>
                <Scroller id={title + '_scroller'}>
                {Object.keys(timestamps).map((episodeName: any, ii: number) => {
                    const thisPodcastTimestamps = timestamps[episodeName]
                    const se: any = { ...selectedEpisodes }
                    const myKey = episodeName + '_' + i + '_' + ii
                    const defaultTimestamp = thisPodcastTimestamps[0]

                    return <div key={myKey}>
                        <EpisodePanel onClick={() => {
                            // choose first timestamp
                            se[podcastName] = { ...defaultTimestamp, loaded: false }
                            setSelectedEpisodes(se)  
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
                                style={{fontWeight: isSelected ? 500 : 300,}}
                                    key={ii + 'timestamp'}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        if (isSelected) {
                                          startPlayback(t.podcast_title ,t.timestamp, t.media_url, true)
                                        } else {
                                          se[podcastName] = { ...t, loaded: false }
                                          setSelectedEpisodes(se)  
                                      }
                                    }}>
                                    {isSelected && selectedEpisodes[episodeName]?.loaded === false &&
                                        <ClipLoader loading={true} size={20} />
                                    }
                                    <div style={{display:'flex',alignItems:'center'}}>
                                    {'' + formatTimestamp(t.timestamp)}
                                    </div>
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
   

  return(
      <div>
          {visible&&
              <ListWindow onClick={(e) => e.preventDefault()}> 
                  {contentView}
            </ListWindow>
            }
          
    </div>
  )
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
width:100%;
padding:10px 20px;

opacity:0.8;
min-height:36px;
cursor:pointer;

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