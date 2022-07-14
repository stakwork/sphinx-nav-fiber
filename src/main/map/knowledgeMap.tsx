
import { useState, useRef, useEffect } from 'react';
import { ForceGraph3D } from 'react-force-graph';
import { getFakeGraphData, getHugeDataSet } from './helpers'
import * as three from 'three'


export default function KnowledgeMap(props: any) {
    const { graphData, onNodeClicked, searchTerm, mapRef } = props


  const [data, setData] = useState(graphData)
  const [lastClicked, setLastClicked] = useState(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    let d = graphData
    if (d?.nodes?.length < 1) {
      d = getHugeDataSet()
    }
    setData(d)
    
  }, [graphData])

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

      console.log('thisPoint',thisPoint)
      mapRef.current.cameraPosition({ ...thisPoint, z: node.z - 100 }, thisPoint, 3)
      mapRef.current.pauseAnimation()
      mapRef.current.resumeAnimation()
    }
  }
    
  return <>
    <ForceGraph3D
    ref={mapRef}
    graphData={data}
    nodeVisibility={() => {
      // hide nodes if not hovered
      return true
    }}
    linkVisibility={() => {
      // hide links if not hovered
      return true
    }}
    rendererConfig={{
      // canvas:canvasRef?.current,
      // depth:false,
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
  
  <canvas ref={canvasRef}></canvas>
    </>
}