import { useState, useRef, useEffect } from 'react';
import { ForceGraph3D } from 'react-force-graph';
import { getFakeGraphData } from './helpers'


export default function KnowledgeMap(props: any) {
    const { graphData, onNodeClicked, searchTerm, mapRef } = props
  console.log('props', props)

  const [data, setData] = useState(graphData)

  useEffect(() => {
    let d = graphData
    if (d?.nodes?.length < 1) {
      d = getFakeGraphData()
    }
    setData(d)
  },[graphData])
    
  return <ForceGraph3D
      ref={mapRef}
      graphData={data}
      nodeLabel={(node:any) => `${node.name}`}
      nodeAutoColorBy="type"
      />
}