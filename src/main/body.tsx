import {useState, useRef, useEffect, useLayoutEffect } from 'react'
import styled from "styled-components";
import UniverseBrowser from './map/universeBrowser'
import ContentBrowser from './map/contentBrowser'
import MouseTracker from './map/mouseTracker'
import './body.css'
import { NodesAndLinks, getGraphData, getSampleData } from './map/helpers'

const useRefDimensions = (ref:any) => {
  const [dimensions, setDimensions] = useState({ width: 1, height: 2 })
  useLayoutEffect(() => {
    if (ref.current) {
      const { current } = ref
      const boundingRect = current.getBoundingClientRect()
      const { width, height } = boundingRect
      setDimensions({ width: Math.round(width), height: Math.round(height) })
    }
  }, [ref])
  return dimensions
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
    
  const windowRef: any = useRef(null)
  const dimensions = useRefDimensions(windowRef)

  
  const onNodeClicked = (node: any) => {
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
    if (hoveredNode && hoveredNode.id === node.id) {
      //nothing
    } else {
      setHoveredNode(node)
    }
  }

  async function getData(term?:string) {

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
  onKeyPress={(event) => {
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
  
  return(
    <Body ref={windowRef}>  

      {!showList && <Header>
        <Title style={{ width: 260 }}>
          BitcoinBrain
        </Title>

        {searchComponent}

        <div style={{ display: 'flex', width: 330 }}>
          <Button>Info</Button>
          <Button>Contribute</Button>
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
      
      {/* <div onMouseMove={(e) => {
        if (!hoveredNode) return
        let x = e.pageX
        let y = e.pageY

        if (showList) {
          x = x - menuWidth
        }
        
        setMousePosition({x,y})
      }} style={{ position:'relative' }}>
        
        <div style={{position:'absolute',pointerEvents:'none',width:100,height:100,background:'red',left:mousePosition.x,top:mousePosition.y,zIndex:100}}>

        </div> */}

      <MouseTracker
        subtractWidth={showList ? menuWidth : 0}
        dimensions={dimensions}
        hoveredNode={hoveredNode}
      >
          <UniverseBrowser
            width={showList ? (dimensions.width - menuWidth) : dimensions.width}
            height={dimensions.height}
            key={'universe-browser'}
            id={'universe-browser'}
            onNodeClicked={onNodeClicked}
            onNodeHovered={onNodeHovered}
            graphData={data}
            />
          </MouseTracker>
        
        {/* </div> */}
      
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
  // flex-direction:column;
  height:100%;
  min-height:100%;
  width:100%;
  background:#f1f1f1;
`