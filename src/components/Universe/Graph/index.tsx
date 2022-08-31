import { useFrame, useThree } from "@react-three/fiber";
import * as d3 from "d3-force-3d";
import { memo, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import ThreeForceGraph from "three-forcegraph";
import { useMousePosition } from "../../useMousePosition";
import { renderLink } from "./renderLink";
import { renderNode } from "./renderNode";

type Props = {
  data: any;
};

export const Graph = memo(({ data }: Props) => {
  const { camera, scene } = useThree();
  const raycasterRef = useRef(new THREE.Raycaster());
  const pointer = useMousePosition();

  const graph = useMemo(() => {
    return new ThreeForceGraph()
      .nodeThreeObject(renderNode)
      .nodeResolution(20)
      .linkThreeObject(renderLink)
      .linkResolution(20)
      .d3Force("link", d3.forceLink().strength(0.1))
      .d3Force("center", d3.forceCenter().strength(0.1));
  }, []);

  useEffect(() => {
    graph.clear().graphData(data);
  }, [data]);

  useEffect(() => {
    scene.add(graph);
  }, []);

  useEffect(() => {
    const [x, y] = pointer;

    raycasterRef.current.setFromCamera({ x, y }, camera);

    const intersects = raycasterRef.current.intersectObjects(scene.children);

    const nodeIndex = intersects.findIndex(
      (f: any) =>
        f.object && !f.object.isLine && f.object.__data?.type !== "topic"
    );

    const labelIndex = intersects.findIndex(
      (f: any) =>
        f.object && !f.object.isLine && f.object.__data?.type === "topic"
    );

    let hoveredObject: any = null;

    if (nodeIndex > -1) {
      // @ts-ignore
      hoveredObject = intersects[nodeIndex].object.__data;
    } else if (labelIndex > -1) {
      // @ts-ignore
      hoveredObject = intersects[labelIndex].object.__data;
      // intersects[labelIndex].object.scale.set(40, 40, 1);
    } else {
      hoveredObject = null;
    }

    if (hoveredObject) {
      const gotData = graph.graphData();
      gotData.nodes
        .filter((f: any) => f.type !== "topic")
        .forEach((n: any) => {
          const index = gotData.nodes.findIndex((f: any) => f.id === n.id);

          //let [scale, enlarge] = getNodeScale(n.details?.node_type);
          let scale = 1.5;
          if (hoveredObject.id === n.id) {
            scale = 2;
          }
          const currentScale = n.__threeObj?.scale?.x;

          if (currentScale !== scale) {
            // @ts-ignore
            gotData.nodes[index].__threeObj.scale.set(scale, scale, scale);
          }
        });
    }
  }, [pointer]);

  useFrame(() => graph.tickFrame());

  return null;
});
