import { Segment as DreiSegment, SegmentObject } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { Vector3 } from "three";
import { useDataStore, useSelectedNode } from "~/stores/useDataStore";
import { Link, NodeExtended } from "~/types";

type Props = {
  link: Link;
};

export const Segment = ({ link }: Props) => {
  const ref = useRef<SegmentObject | null>(null);
  const selectedNode = useSelectedNode()
  const [start, setStart] = useState(new Vector3(0,0,0))
  const [end, setEnd] = useState(new Vector3(0, 0, 0))
  const [color, setColor] = useState(0xcccccc)

  useEffect(() => {
    const refId = selectedNode?.ref_id || ''
    const linkIsSelected = (selectedNode && ((refId === link.target) || (refId === link.source)))
    
    if (!link.onlyVisibleOnSelect || linkIsSelected) {
        setStart(new Vector3(
          link.sourcePosition.x,
          link.sourcePosition.y,
          link.sourcePosition.z)
        )
        setEnd(new Vector3(
          link.targetPosition.x,
          link.targetPosition.y,
          link.targetPosition.z)
        )
      } else {
        setStart(new Vector3(0, 0, 0))
        setEnd(new Vector3(0,0,0))
      }
      
      if (linkIsSelected) {
        setColor(0xfbff00)
      } else {
        setColor(0xcccccc)
      }
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode, link]);

  
  return <DreiSegment ref={ref} start={start} end={end} color={color} />;
};
