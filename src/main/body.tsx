import {useState, useRef, useEffect, useLayoutEffect } from 'react'
import styled from "styled-components";
import UniverseBrowser from './map/universeBrowser'
import ContentBrowser from './map/contentBrowser'
import MouseTracker from './map/mouseTracker'
import * as sphinx from 'sphinx-bridge-kevkevinpal'
import './body.css'
import { NodesAndLinks, getGraphData, getSampleData } from './map/helpers'

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}


export default function BodyComponent() {

  const [searchTerm, setSearchTerm]: any = useState("");
  const [currentSearchTerm, setCurrentSearchTerm]: any = useState("");
  const [data, setData]: any = useState<NodesAndLinks>({ nodes: [], links: [] })
  const [dataFilter, setDataFilter]: any = useState([])
  const [loading, setLoading]: any = useState(false)
  const [focusedNode, setFocusedNode]: any = useState(null)
  const [hoveredNode, setHoveredNode]: any = useState(null)
  const [showList, setShowList]: any = useState(false)

  const [openingAnimation, setOpeningAnimation]: any = useState(true)

  const dimensions = useWindowSize();

   // cool animation on startup
  // search term should be at center on solar system

  // init 
  useEffect(() => {
    
    setData({
      nodes: [{
        id: 0,
        scale:100,
        name: "FakeData",
        type: "topic",
        fakeData: true,
        noClick: true,
        label: "Search Bitcoin Knowledge"
            }],
      links: []
    })
    
    setTimeout(() => {
      setOpeningAnimation(false)
      const initData = getSampleData()
      setData(initData)
    },3000)
  }, [])



  const onNodeClicked = (node: any) => {
    if (node.noClick) return

    setHoveredNode(null)
    console.log('node', node)
    if (node.type === 'sun') {
      // nothing
    }
    else if (node.type === 'topic') {
      getData(node.label)
    }
    else {
      setFocusedNode({
        ...node
      })
      setShowList(true)
    }
  }


  const onNodeHovered = (node: any, prevNode: any) => {
    if (node?.fakeData) return

    if (hoveredNode && hoveredNode.id === node.id) {
      //nothing
    } else {
      setHoveredNode(node)
    }
  }

  async function getData(term?:string) {

    // @ts-ignore
    await sphinx.enable()
    if (term) setSearchTerm(term)
    let searchWord = term || searchTerm
    
    
    try{
      setLoading(true)
      // setRenderMap(false)
      const d = await getGraphData(searchWord) 
      setCurrentSearchTerm(searchWord)
      setDataFilter([searchWord])
      setData(d)
      // setRenderMap(true)
      setLoading(false)    
    } catch (e) {
      console.log('e',e)
    }
  }

  const searchComponent = <Input
  style={{width:showList?'100%':'40%'}}
  className={loading ? 'loading' : ''}
  disabled={loading}
  type="text"
  value={searchTerm}
  placeholder="Search ..."
  onKeyPress={(event:any) => {
    if (event.key === 'Enter') {
      getData()
    }
  }}
  onChange={e => {
    const value = e.target.value
    setSearchTerm(value)
  }}
  />

  const menuWidth = 433

  function redirect() {
    let a = document.createElement('a')
    a.href = 'https://sphinx.chat/'
    a.target = '_blank'
    a.click()
  }  
  return(
    <Body>  

      {!showList && <Header
        style={{ opacity: openingAnimation ? 0 : 1 }}>
        <Title style={{ fontWeight:300, width: 260 }}>
          <b>Second</b>Brain
        </Title>

        {searchComponent}

        <div style={{ display: 'flex', width: 330 }}>
          <Button onClick={redirect}>Info</Button>
          <Button onClick={redirect}>Contribute</Button>
        </div>

      </Header>
      }

      <ContentBrowser
        dataFilter={dataFilter}
        setDataFilter={setDataFilter}
        currentSearchTerm={currentSearchTerm}
        searchComponent={searchComponent}
        graphData={data}
        visible={showList}
        focusedNode={focusedNode}
        setFocusedNode={setFocusedNode}
        close={() => setShowList(false)}
      />
      <MouseTracker
        subtractWidth={showList ? menuWidth : 0}
        dimensions={dimensions}
        hoveredNode={hoveredNode}
      >
        <UniverseBrowser
            openingAnimation={openingAnimation}
            width={showList ? (dimensions.width - menuWidth) : dimensions.width}
            height={dimensions.height}
            key={'universe-browser'}
            id={'universe-browser'}
            onNodeClicked={onNodeClicked}
            onNodeHovered={onNodeHovered}
            graphData={data}
            />
      </MouseTracker>
    </Body>
  )
}

const Title = styled.div`
font-size:30px;
font-weight:600;
`

const Input = styled.input`
pointer-events:auto;
border-radius: 100px; 
min-width:300px;
height:50px;
padding:0 20px;
border:none;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

:&focus{
  border:none;
}
`

const Button = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:15px 20px;
border:1px solid #000;
background:#f1f1f1;
border-radius:40px;
min-width:100px;
margin-left:20px;
cursor:pointer;
pointer-events:auto;
`

const Header = styled.div`
position: absolute;
top: 0px;
left: 0px;
padding:20px;
display:flex;
align-items:center;
justify-content:space-between;
width:calc(100% - 40px);
pointer-events:none;
transition:opacity 1s;
z-index:100;
`

const SearchFloater = styled.div`
position: absolute;
top: 0px;
left: 0px;
display:flex;
align-items:center;
justify-content:center;
height:100%;
width:100%;
pointer-events:none;
z-index:100;
`

const Body = styled.div`
  flex:1;
  display:flex;
  height:100%;
  min-height:100%;
  width:100%;
  background:#f1f1f1;
`
