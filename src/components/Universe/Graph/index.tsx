import { useFrame, useThree } from "@react-three/fiber";
import * as d3 from "d3-force-3d";
import { useCallback, useEffect, useMemo } from "react";
import ThreeForceGraph from "three-forcegraph";
import { Color } from "three";
import { useGraphData } from "~/components/DataRetriever";
import { useDataStore } from "~/stores/useDataStore";
import { Node } from "~/types";
import { renderLink } from "./renderLink";
import { renderNode } from "./renderNode";
import { useGraphMouseEvents } from "./useGraphMouseEvents";
import { GRAPH_BACKGROUND_COLOR } from "~/constants";

const SCALE = 1;
const HOVER_SCALE = 1.5;

export const Graph = () => {
  const { scene } = useThree();

  const data = useGraphData();
  const setSelectedNode = useDataStore((s) => s.setSelectedNode);

  const graph = useMemo(() => {
    return new ThreeForceGraph()
      .nodeThreeObject(renderNode)
      .nodeResolution(20)
      .linkThreeObject(renderLink)
      .linkResolution(20)
      .d3VelocityDecay(0.2)
      .d3Force("link", d3.forceLink().strength(0.1))
      .d3Force("center", d3.forceCenter().strength(0.1));
  }, []);

  useEffect(() => {
    graph.clear().graphData(data);
    const distanceForce = d3.forceLink(data).distance((d: any) => {
      let distance = 30;
      const sourceType = d.source.node_type;
      const targetType = d.target.node_type;

      switch (targetType) {
        case "show":
          distance = 200;
          break;
        case "topic":
          distance = 1000;
          break;
        case "guest":
          distance = 300;
          break;
        case "clip":
          distance = 100;
          break;
        case "episode":
          distance = 150;
          break;
        default:
          distance = 100;
      }

      if (sourceType === "show") distance = 500;

      return distance;
    }).strength(0.4);

    graph.d3Force("link", distanceForce)

  }, [data, graph]);

  useEffect(() => {
    scene.add(graph);
    scene.background = new Color(GRAPH_BACKGROUND_COLOR)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClick = useCallback(
    (node: Node) => setSelectedNode(node),
    [setSelectedNode]
  );

  const onHover = useCallback((node: Node) => {
    node?.__threeObj?.scale.set(HOVER_SCALE, HOVER_SCALE, HOVER_SCALE);
  }, []);

  const onNotHover = useCallback((previousHoverNode: Node) => {
    previousHoverNode?.__threeObj?.scale.set(SCALE, SCALE, SCALE);
  }, []);

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