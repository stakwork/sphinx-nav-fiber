import { useRef, useEffect } from 'react';


export default function KnowledgeMap(props: any) {
    
    const { linksData, nodesData, onNodeClicked, currentTopic } = props

  const containerRef = useRef(null);

//   useEffect(() => {
//     let destroyFn;

//     if (containerRef.current) {
//       const { destroy } = runForceGraph(containerRef.current, linksData, nodesData, onNodeClicked, currentTopic);
//       destroyFn = destroy;
//     }

//     return destroyFn;
//   }, [linksData, nodesData]);
    
    console.log('props',props)
    
    

    return <div ref={containerRef}>
        
        </div>;
}