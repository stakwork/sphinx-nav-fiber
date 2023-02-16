import { Line, Segments } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import {
  forceCenter,
  forceLink,
  forceManyBody,
  forceSimulation,
} from "d3-force-3d";
import { useEffect, useRef } from "react";
import { Line2 } from "three/examples/jsm/lines/Line2";
import { useGraphData, usePathway } from "~/components/DataRetriever";
import { useAppStore } from "~/stores/useAppStore";
import { useDataStore } from "~/stores/useDataStore";
import { GraphData, NodeExtended } from "~/types";
import { Cubes } from "./Cubes";
import { Segment } from "./Segment";

const layout = forceSimulation()
  .numDimensions(3)
  .force(
    "link",
    forceLink()
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
      .strength(0.4)
  )
  .force("center", forceCenter().strength(0.1))
  .force("charge", forceManyBody())
  .force("dagRadial", null)
  .velocityDecay(0.2)
  .stop();

const maxTicks = 200;
let currentTick: number;

// Time in seconds
const timeLimit = 3;

const PathwayLine = () => {
  const { pathway } = usePathway();
  const ref = useRef<Line2>(null);

  useFrame(() => {
    if (!ref.current) {
      return;
    }

    const points = pathway.map(
      (node) => [node.x || 0, node.y || 0, node.z || 0] as const
    );

    ref.current.geometry.setPositions(points.flat());
  });

  return (
    <>
      <Line
        ref={ref}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        color="green"
        dashed={false}
        lineWidth={1}
        points={[[0, 0, 0]]}
      />
    </>
  );
};

export const Graph = () => {
  const data = useGraphData();
  const searchTerm = useAppStore((s) => s.currentSearch);
  const isLoading = useDataStore((s) => s.isFetching);

  const { clock } = useThree();

  useEffect(() => {
    clock.stop();

    layout.stop().nodes(data.nodes);

    layout
      .force("link")
      .id((d: NodeExtended) => d.id)
      .links(data.links);

    if (searchTerm) {
      // re-heat the simulation
      layout.alpha(1).restart();
    } else {
      layout.alpha(0).restart();
    }

    clock.start();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clock, data]);

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();

    if (elapsedTime > timeLimit) {
      currentTick = 0;

      return;
    }

    if (layout.alpha() > 1e-2 && currentTick < maxTicks) {
      layout.tick();
      currentTick += 1;
    }
  });

  return (
    <>
      <Cubes />

      {searchTerm && !isLoading && <PathwayLine />}

      <Segments
        /** NOTE: using the key in this way the segments re-mounts
         *  everytime the data.links count changes
         * */
        key={`links-${data.links.length}`}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        fog
        limit={data.links.length}
        lineWidth={0.15}
      >
        {(data.links as unknown as GraphData<NodeExtended>["links"]).map(
          (link, index) => (
            <Segment
              // eslint-disable-next-line react/no-array-index-key
              key={index.toString()}
              link={link}
            />
          )
        )}
      </Segments>
    </>
  );
};

Segments.displayName = "Segments";
