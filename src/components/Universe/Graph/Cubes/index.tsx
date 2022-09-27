import { Select } from "@react-three/drei";
import { memo, useCallback } from "react";
import { Object3D } from "three";
import { useGraphData } from "~/components/DataRetriever";
import { useDataStore } from "~/stores/useDataStore";
import { NodeExtended } from "~/types";
import { Cube } from "./Cube";

export const Cubes = memo(() => {
  const data = useGraphData();

  const handleSelect = useCallback((nodes: Object3D[]) => {
    const node = nodes?.[0];

    useDataStore
      .getState()
      .setSelectedNode((node?.userData as NodeExtended) || null);
  }, []);

  return (
    <Select onChange={handleSelect}>
      {data.nodes.map((node, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Cube key={`${node.id}-${index}`} node={node} />
      ))}
    </Select>
  );
});

Cubes.displayName = "Cubes";
