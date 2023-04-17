import { Segment as DreiSegment, SegmentObject } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useDataStore } from "~/stores/useDataStore";
import { Link, NodeExtended } from "~/types";
import { NODE_RELATIVE_HIGHLIGHT_COLORS } from '../Cubes/index'

type Props = {
  link: Link<NodeExtended>;
};

export const Segment = ({ link }: Props) => {
  const ref = useRef<SegmentObject | null>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.start.set(
        link.source.x || 0,
        link.source.y || 0,
        link.source.z || 0
      );

      ref.current.end.set(
        link.target.x || 0,
        link.target.y || 0,
        link.target.z || 0
      );

      const { selectedNode } = useDataStore.getState();

      if (
        selectedNode &&
        (selectedNode?.id === link.target.id ||
          selectedNode?.id === link.source.id)
      ) {
        // color children segments 
        if (selectedNode.children?.length
          && ((link?.target?.id && selectedNode.children.includes(link.target.id)) || (link?.source?.id && selectedNode.children.includes(link.source.id)))) {
            
          ref.current.color.setHex(NODE_RELATIVE_HIGHLIGHT_COLORS.children.segmentColor);
        }
        // color other linked segments 
        else {
          ref.current.color.setHex(NODE_RELATIVE_HIGHLIGHT_COLORS.source.segmentColor);
        }
      } else {
        ref.current.color.setHex(0xcccccc);
      }
    }
  });

  return <DreiSegment ref={ref} end={[0, 0, 0]} start={[0, 0, 0]} />;
};
