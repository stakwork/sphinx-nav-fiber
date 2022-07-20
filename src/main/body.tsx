import {useState, useRef, useEffect, useLayoutEffect } from 'react'
import styled from "styled-components";
import KnowledgeMap from './map/knowledgeMap'
import ContentBrowser from './map/contentBrowser'
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

  const [searchTerm, setSearchTerm]: any = useState("btc");
  const [currentSearchTerm, setCurrentSearchTerm]: any = useState("btc");
  const [data, setData]: any = useState<NodesAndLinks>({ nodes: [], links: [] })
  const [loading, setLoading]: any = useState(false)
  const [focusedNode, setFocusedNode]: any = useState(null)
  const [showList, setShowList]: any = useState(false)
  const mapRef: any = useRef(null)
  
  const windowRef: any = useRef(null)
  const dimensions = useRefDimensions(windowRef)

  useEffect(() => {
    const d = getSampleData()
    setData(d)  
  }, [])
  
  const onNodeClicked = (node: any) => {
    console.log('node',node)
    if (node.type === 'topic') {
      getData(node.label)
    }
    else {
      setFocusedNode({
        ...node
      })
      setShowList(true)
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
        currentSearchTerm={currentSearchTerm}
        searchComponent={searchComponent}
        mapRef={mapRef}
        graphData={data}
        visible={showList}
        focusedNode={focusedNode}
        setFocusedNode={setFocusedNode}
        close={() => setShowList(false)}
    />
      
      <KnowledgeMap
        width={showList ? (dimensions.width - 433) : dimensions.width}
        height={dimensions.height}
        mapRef={mapRef}
        getData={getData}
        data={data}
        loading={loading}
        onNodeClicked={(e: any) => onNodeClicked(e)}
      />
      
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