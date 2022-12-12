import { Select } from "@react-three/drei";
import { memo, useCallback } from "react";
import { Object3D } from "three";
import { useGraphData } from "~/components/DataRetriever";
import { useAppStore } from "~/stores/useAppStore";
import { useDataStore } from "~/stores/useDataStore";
import { NodeExtended } from "~/types";
import { Cube } from "./Cube";

export const Cubes = memo(() => {
  const data = useGraphData();

  const searchTerm = useAppStore((s) => s.currentSearch);

  const handleSelect = useCallback((nodes: Object3D[]) => {
    const node = nodes?.[0];

    useDataStore.getState().setSelectedNode((node?.userData as NodeExtended) || null);
  }, []);

  const shouldHighlightPartial =
    searchTerm && !data.nodes
      .some((i) => i.node_type === "guest" && searchTerm.toLowerCase() === i.label.toLowerCase());

  return (
    <Select onChange={handleSelect}>
      {data.nodes.map((node, index) => {
        let highlight = false;

        if (searchTerm && node.node_type === "guest") {
          if (shouldHighlightPartial) {
            highlight = searchTerm
              .split(" ")
                .some((i) => node.label.toLowerCase()
                  .match(new RegExp(`\\b${i.toLowerCase()}\\b`)) !== null);
          } else {
            highlight = node.label.toLowerCase() === searchTerm.toLowerCase();
          }
        }

        return (
          // eslint-disable-next-line react/no-array-index-key
          <Cube key={`${node.id}-${index}`} highlight={highlight} node={node} />
        );
      })}
    </Select>
  );
});

Cubes.displayName = "Cubes";
