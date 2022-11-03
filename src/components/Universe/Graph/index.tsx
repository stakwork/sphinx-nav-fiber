import { Segments } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import {
  forceCenter,
  forceLink,
  forceManyBody,
  forceSimulation,
} from "d3-force-3d";
import { useEffect } from "react";
import { useGraphData } from "~/components/DataRetriever";
import { GraphData, NodeExtended } from "~/types";
import { Cubes } from "./Cubes";
import { Segment } from "./Segment";

const layout = forceSimulation()
  .numDimensions(3)
  .force("link", forceLink().strength(0.1))
  .force("center", forceCenter().strength(0.1))
  .force("charge", forceManyBody())
  .force("dagRadial", null)
  .velocityDecay(0.2)
  .alphaDecay(0.0228)
  .stop();

let maxTicks: number;

// Time in seconds
const timeLimit = 5;

export const Graph = () => {
  const data = useGraphData();

  const { clock } = useThree();

  useEffect(() => {
    clock.stop();

    layout.stop().nodes(data.nodes);

    layout
      .force("link")
      .id((d: NodeExtended) => d.id)
      .links(data.links);

    // re-heat the simulation
    layout.alpha(1).restart();

    clock.start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clock, data]);

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();

    if (elapsedTime > timeLimit) {
      maxTicks = 0;

      return;
    }

    if (layout.alpha() > 1e-2 && maxTicks < 150) {
      layout.tick();
      maxTicks += 1;
    }
  });

  return (
    <>
      <Cubes />

      <Segments
        /** NOTE: using the key in this way the segments re-mounts
         *  everytime the data.links count changes
         * */
        key={`links-${data.links.length}`}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        fog
        limit={data.links.length}
        lineWidth={0.2}
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
