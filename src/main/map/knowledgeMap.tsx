
import { useState, useEffect } from 'react';

import { NodesAndLinks } from './helpers'

import styled from "styled-components";
import ContentBrowser from './contentBrowser'
import UniverseBrowser from './universeBrowser';

export default function KnowledgeMap(props: any) {
  const { onNodeClicked, mapRef } = props
  const [graphData, setGraphData]: any = useState<NodesAndLinks>({ nodes: [], links: [] })
  const [focusedNode, setFocusedNode]:any = useState(null)
  const [showList, setShowList]: any = useState(true)

   // update dataset
  useEffect(() => {
      setGraphData(props.data)
    setShowList(false)
    setTimeout(() => {
      mapRef?.current?.zoomToFit(600,100)
    },400)
  }, [props.data])


  
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

  

  return <>

    <ContentBrowser
      graphData={graphData}
      visible={showList}
      focusedNode={focusedNode}
      close={() => setShowList(false)}
    />

    <UniverseBrowser
      key={'universe-browser'}
      id={'universe-browser'}
      clickNode={clickNode}
      mapRef={mapRef}
      graphData={graphData}
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