import { Select } from "@react-three/drei";
import { memo, useCallback } from "react";
import { Object3D } from "three";
import { useGraphData } from "~/components/DataRetriever";
import { useAppStore } from "~/stores/useAppStore";
import { useDataStore } from "~/stores/useDataStore";
import { NodeExtended } from "~/types";
import { Cube } from "./Cube";

type NodeTypeColors = Record<string, string>;

const NODE_TYPE_COLORS: NodeTypeColors = {
  data_series: "red",
  tweet: "aqua",
};



export const Cubes = memo(() => {
  const data = useGraphData();

  const searchTerm = useAppStore((s) => s.currentSearch);

  const handleSelect = useCallback((nodes: Object3D[]) => {
    const node = nodes?.[0];

    if (node?.userData) {
      useDataStore
      .getState()
      .setSelectedNode((node?.userData as NodeExtended) || null);
    }

  }, []);

  const shouldHighlightPartial =
    searchTerm &&
    !data.nodes.some(
      (i) =>
        i.node_type === "guest" &&
        searchTerm.toLowerCase() === i?.label?.toLowerCase()
    );

  return (
    <Select onChange={handleSelect}>
      {data.nodes.filter(f=>!f.hidden).map((node, index) => {
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

        return (
          <Cube
          // eslint-disable-next-line react/no-array-index-key
            key={`${node.id}-${index}`}
            highlight={highlight || !!NODE_TYPE_COLORS[node.node_type]}
            highlightColor={NODE_TYPE_COLORS[node.node_type] || 'green'}
            node={node}
          />
        );
      })}
    </Select>
  );
});

Cubes.displayName = "Cubes";
