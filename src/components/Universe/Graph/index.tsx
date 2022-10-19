import { useFrame, useThree } from "@react-three/fiber";
import * as d3 from "d3-force-3d";
import { useCallback, useEffect, useMemo } from "react";
import { Vector3 } from "three";
import ThreeForceGraph from "three-forcegraph";
import { useGraphData } from "~/components/DataRetriever";
import { useDataStore } from "~/stores/useDataStore";
import { useAppStore } from "~/stores/useAppStore";
import { NodeExtended } from "~/types";
import { renderLink } from "./renderLink";
import { renderNode } from "./renderNode";
import { useGraphMouseEvents } from "./useGraphMouseEvents";

export const Graph = () => {
  const { scene } = useThree();

  const data = useGraphData();

  const [selectedNode, setSelectedNode, setHoveredNode, setSelectedTimestamp] =
    useDataStore((s) => [
      s.selectedNode,
      s.setSelectedNode,
      s.setHoveredNode,
      s.setSelectedTimestamp,
    ]);

  const relevanceIsSelected = useAppStore((s) => s.relevanceIsSelected);

  const graph = useMemo(
    () =>
      new ThreeForceGraph()
        .nodeThreeObject(renderNode)
        .nodeResolution(20)
        .linkThreeObject(renderLink)
        .d3VelocityDecay(0.2)
        .d3Force("link", d3.forceLink().strength(0.1))
        .d3Force("center", d3.forceCenter().strength(0.1)),
    []
  );

  useEffect(() => {
    graph.refresh();
  }, [selectedNode, graph]);

  useEffect(() => {
    graph.clear().graphData(data);

    const distanceForce = d3
      .forceLink(data)
      .distance((d: { source: NodeExtended; target: NodeExtended }) => {
        const sourceType = d.source.node_type;
        const targetType = d.target.node_type;

        if (sourceType === "show") {
          return 500;
        }

        switch (targetType) {
          case "show":
            return 200;
          case "topic":
            return 1000;
          case "guest":
            return 300;
          case "clip":
            return 100;
          case "episode":
            return 150;
          default:
            return 100;
        }
      })
      .strength(0.4);

    graph.d3Force("link", distanceForce);
  }, [data, graph]);

  useEffect(() => {
    scene.add(graph);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClick = useCallback(
    (node: NodeExtended | null) => {
      setSelectedNode(node);

      if (relevanceIsSelected) {
        setSelectedTimestamp(node);
      }
    },
    [setSelectedNode, setSelectedTimestamp, relevanceIsSelected]
  );

  const onHover = useCallback(
    (node: NodeExtended) => {
      setHoveredNode(node);

      // eslint-disable-next-line no-underscore-dangle
      const scale = node?.__threeObj?.scale || new Vector3(0, 0, 0);

      // eslint-disable-next-line no-underscore-dangle
      node?.__threeObj?.scale.set(scale.x * 1.5, scale.y * 1.5, scale.z * 1.5);
    },
    [setHoveredNode]
  );

  const onNotHover = useCallback(
    (currentNode: NodeExtended | null, previousHoverNode: NodeExtended) => {
      setHoveredNode(currentNode);

      const scale =
        // eslint-disable-next-line no-underscore-dangle
        previousHoverNode?.__threeObj?.scale || new Vector3(0, 0, 0);

      // eslint-disable-next-line no-underscore-dangle
      previousHoverNode?.__threeObj?.scale.set(
        scale.x / 1.5,
        scale.y / 1.5,
        scale.z / 1.5
      );
    },
    [setHoveredNode]
  );

  const { hoverNode } = useGraphMouseEvents(onHover, onNotHover, onClick);

  useFrame(() => {
    if (hoverNode) {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "auto";
    }

    graph.tickFrame();
  });

  return null;
};
