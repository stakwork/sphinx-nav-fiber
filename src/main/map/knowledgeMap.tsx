
import { useState, useRef, useEffect } from 'react';
import { ForceGraph2D } from 'react-force-graph';
import { getFakeGraphData, getHugeDataSet } from './helpers'


export default function KnowledgeMap(props: any) {
    const { graphData, onNodeClicked, searchTerm, mapRef } = props
  console.log('props', props)

  const [data, setData] = useState(graphData)

  useEffect(() => {
    let d = graphData
    if (d?.nodes?.length < 1) {
      d = getHugeDataSet()
    }
    setData(d)
    
  }, [graphData])
  
    
  return <ForceGraph2D
    ref={mapRef}
    // cooldownTime={0}
    onNodeDrag={(node: any) => {
      console.log('node',node)
      // node.fx = node.x;
      // node.fy = node.y;
      // node.fz = node.z;
    }}
    backgroundColor={'#f1f1f1'}
    linkDirectionalParticles={1}
    graphData={data}
    nodeLabel={(node:any) => `${node.name}`}
    nodeAutoColorBy="type"
      />
}