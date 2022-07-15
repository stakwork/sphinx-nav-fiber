import {useState, useCallback, useRef, useEffect } from 'react'
import styled from "styled-components";
import KnowledgeMap from './map/knowledgeMap'
import './body.css'
import { NodesAndLinks, getGraphData, getSampleData } from './map/helpers'


export default function BodyComponent() {

  const [searchTerm, setSearchTerm]: any = useState("btc");
  const [data, setData]: any = useState<NodesAndLinks>({ nodes: [], links: [] })
  const [loading, setLoading]: any = useState(false)
  const mapRef: any = useRef(null)

  useEffect(() => {
    const d = getSampleData()
    setData(d)  
  },[])
  
  
  const onNodeClicked = (event: PointerEvent, data: any) => {
    console.log('onNodeClicked.data: ', data) 
  }

  async function getData(term?:string) {

    if (term) setSearchTerm(term)
    let searchWord = term || searchTerm
    
    try{
      setLoading(true)
      const d = await getGraphData(searchWord)  
      setData(d)
      setLoading(false)    
    } catch (e) {
      console.log('e',e)
    }
    
  }
  
  return(
    <Body>  

      <Header>
        <Title style={{width:260}}>
          BitcoinBrain
        </Title>

        
        <Input
          style={{width:'40%'}}
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

        <div style={{display:'flex', width:330}}>
          <Button>Info</Button>
          <Button>Contribute</Button>
        </div>

      </Header>
      
      <KnowledgeMap
        mapRef={mapRef}
        getData={getData}
        data={data}
        loading={loading}
        onNodeClicked={(e:any,data:any) => onNodeClicked(e, data)}
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
  flex-direction:column;
  height:100%;
  width:100%;
  overflow:auto;
  background:#272c4b;
  
  
`