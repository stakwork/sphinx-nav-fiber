import { Segments, Select } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  forceCenter,
  forceLink,
  forceManyBody,
  forceSimulation,
} from "d3-force-3d";
import { useEffect, useRef } from "react";
import { Cube } from "~/components/Universe/NewGraph/Cube";
import { GraphData, NodeExtended } from "~/types";
import { Segment } from "./Segment";

const layout = forceSimulation()
  .numDimensions(3)
  .force("link", forceLink().strength(0.1))
  .force("center", forceCenter().strength(0.1))
  .force("charge", forceManyBody().strength(-40))
  .force("dagRadial", null)
  .velocityDecay(0.2)
  .alphaDecay(0.0228)
  .alphaTarget(0)
  .stop();

const cooldownTime = 10;
const alphaMin = 0;

export const NewGraph = ({ data }: { data: GraphData }) => {
  const pauseRef = useRef<boolean>(false);

  useEffect(() => {
    pauseRef.current = true;

    layout
      .stop()
      .alpha(1) // re-heat the simulation
      .nodes(data.nodes);

    const linkForce = layout.force("link");

    if (linkForce) {
      linkForce.id((d: NodeExtended) => d.id).links(data.links);
    }

    pauseRef.current = false;
  }, [data]);

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();

    if (!pauseRef.current) {
      layout.tick();
    }

    if (
      elapsedTime > cooldownTime ||
      (alphaMin > 0 && layout.alpha() < alphaMin)
    ) {
      pauseRef.current = true;
    } else {
      pauseRef.current = false;
    }
  });

  return (
    <>
      <Select>
        {data.nodes.map((node, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Cube key={`${node.id}-${index}`} node={node} />
        ))}
      </Select>

      <Segments
        /** NOTE: using the key in this way the segments re-mounts
         *  everytime the data.links count changes
         * */
        key={data.links.length}
        limit={data.links.length}
        lineWidth={0.3}
      >
        {(data.links as unknown as GraphData<NodeExtended>["links"]).map(
          (link, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Segment key={index.toString()} link={link} />
          )
        )}
      </Segments>
    </>
  );
};
