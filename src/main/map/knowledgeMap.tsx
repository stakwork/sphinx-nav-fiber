
import { useState, useRef, useEffect } from 'react';
import { ForceGraph3D } from 'react-force-graph';
import { NodesAndLinks, getGraphData, getDefaultDataSet } from './helpers'
import * as three from 'three'
import styled from "styled-components";


let inDebounce:any = null
async function debounce(func:Function, delay:number) {
  clearTimeout(inDebounce)
  inDebounce = setTimeout(() => {
      func()
  }, delay)
}

export default function KnowledgeMap(props: any) {
  const { onNodeClicked, searchTerm, setLoading, mapRef } = props
  const [graphData, setGraphData]: any = useState<NodesAndLinks>({nodes: [], links: []})
  const [lastClicked, setLastClicked] = useState(null)

  // init with default dataset
  useEffect(() => {
    const d = getDefaultDataSet()
    setGraphData(d)
  }, [])

  // refresh after search term is changed
  useEffect(() => {
    debounce(() => getData(),800)
  }, [searchTerm])

  async function getData() {
    if (searchTerm) {
      setLoading(true)
      const d = await getGraphData(searchTerm)  
      setGraphData(d)
      setLoading(false)    
    }
  }

  const nodeObject = () => {
      const geometry = new three.SphereGeometry(5, 32, 32); // (radius, widthSegments, heightSegments)
      const material = new three.MeshBasicMaterial( {color: 'red'} );
      const sphere = new three.Mesh(geometry, material);

      return sphere
  }
  
  const linkObject = () => {
    const material = new three.LineBasicMaterial({color: '#000'});
    const geometry = new three.BufferGeometry();
    const line = new three.Line( geometry, material );

    return line
  }
  
  function clickNode(node: any) {
    if (node.id !== lastClicked) {
      setLastClicked(node.id)

      const thisPoint = {
        x: node.x,
        y: node.y,
        z: node.z
      }

      mapRef.current.cameraPosition({ ...thisPoint, z: node.z - 100 }, thisPoint, 3)
    }
  }

  

  return <>
     {graphData?.nodes?.length>0 &&
        <ListWindow>
      </ListWindow>}
    
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
      // depth:false,
      stencil:false,
      powerPreference:'low-power',
      precision: 'lowp',
      
    }}
    nodeRelSize={8}
    linkOpacity={1}
    nodeOpacity={0.8}
    onNodeDrag={(node: any) => clickNode(node)}
    onNodeClick={(node: any) => clickNode(node)}
    backgroundColor={'#f1f1f1'}
    nodeLabel={(node: any) => `${node.name}`}
    nodeAutoColorBy="type"
    linkThreeObject={linkObject}
    nodeThreeObject={nodeObject}
  />
  
  
    </>
}


const ListWindow = styled.div`
position:absolute;
left:30px;
top:30px;
height:calc(100% - 60px);
background:#000;
width:30%
`
