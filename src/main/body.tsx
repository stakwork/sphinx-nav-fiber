import {useState, useCallback, useRef } from 'react'
import styled from "styled-components";
import KnowledgeMap from './map/knowledgeMap'
import './body.css'



export default function BodyComponent() {

  const [searchTerm, setSearchTerm]: any = useState("");
  const [loading, setLoading]: any = useState(false)
  const mapRef: any = useRef(null)
  
  const onNodeClicked = (event: PointerEvent, data: any) => {
    console.log('onNodeClicked.data: ', data) 
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
          // onSubmit={(e) => e.preventDefault()}
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
        searchTerm={searchTerm}
        setLoading={setLoading}
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