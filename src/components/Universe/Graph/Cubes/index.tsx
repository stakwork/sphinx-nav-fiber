import { Select } from "@react-three/drei";
import { memo, useCallback } from "react";
import { Object3D } from "three";
import { useGraphData } from "~/components/DataRetriever";
import { useAppStore } from "~/stores/useAppStore"
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { NodeExtended } from "~/types";
import { Cube } from "./Cube";

type NodeTypeColors = Record<string, string>;

const NODE_TYPE_COLORS: NodeTypeColors = {
  data_series: "red",
  tweet: "aqua",
};

// const NODE_TYPE_HIGHLIGHT_COLORS: NodeTypeColors = {
//   children: "0x3dff85",
//   tweet: "aqua",
// };

export const Cubes = memo(() => {
  const data = useGraphData();

  const selectedNode = useSelectedNode()

  const searchTerm = useAppStore((s) => s.currentSearch);

  const handleSelect = useCallback((nodes: Object3D[]) => {
    const node = nodes?.[0];

    useDataStore
      .getState()
      .setSelectedNode((node?.userData as NodeExtended) || null);
  }, []);

  const shouldHighlightPartial =
    searchTerm &&
    !data.nodes.some(
      (i) =>
        i.node_type === "guest" &&
        searchTerm.toLowerCase() === i?.label?.toLowerCase()
    );
  
    console.log('selectedNode',selectedNode)

  return (
    <Select onChange={handleSelect}>
      {data.nodes.map((node, index) => {
        let highlight = false;

        if (searchTerm && node.node_type === "guest") {
          if (shouldHighlightPartial) {
            highlight = searchTerm
              .split(" ")
              .some(
                (i) =>
                  node?.label
                    .toLowerCase()
                    .match(new RegExp(`\\b${i.toLowerCase()}\\b`)) !== null
              );
          } else {
            highlight = node?.label.toLowerCase() === searchTerm.toLowerCase();
          }
        }

        let relationHighlightColor: string | undefined 

        // highlight node exists in children of selected
        if (node?.ref_id && selectedNode?.children?.length && selectedNode.children.includes(node.ref_id)) {
          highlight = true
          relationHighlightColor = 'green'
        } else if (selectedNode?.guests?.length && node.type === 'guest' && selectedNode?.guests.find(f => {
  
          if (typeof f !== 'string') {
            return f?.ref_id && f.ref_id === node.ref_id
          }

          return false

        })) {
          highlight = true
          relationHighlightColor = 'purple'
        }

        return (
          <Cube
          // eslint-disable-next-line react/no-array-index-key
            key={`${node.id}-${index}`}
            highlight={highlight || !!NODE_TYPE_COLORS[node.node_type]}
            highlightColor={relationHighlightColor || NODE_TYPE_COLORS[node.node_type] || 'green'}
            node={node}
          />
        );
      })}
    </Select>
  );
});

Cubes.displayName = "Cubes";
