import { useFrame, useThree } from "@react-three/fiber";
import {
  forceCenter,
  forceLink,
  forceManyBody,
  forceSimulation,
} from "d3-force-3d";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useGraphData } from "~/components/DataRetriever";
import { useRerender } from "~/hooks/useRerender";
import { NodeExtended } from "~/types";

const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
const material = new THREE.MeshBasicMaterial({ color: "yellow" });
const tempObject = new THREE.Object3D();
const tempLineObject = new THREE.Object3D();

const layout = forceSimulation()
  .numDimensions(3)
  .force("link", forceLink().strength(0.1))
  .force("center", forceCenter().strength(0.1))
  .force("charge", forceManyBody())
  .force("dagRadial", null)
  .velocityDecay(0.2)
  .alphaDecay(0.0228)
  .alphaTarget(0)
  .stop();

const cooldownTime = 15000;
const alphaMin = 0;

export const NewGraph = () => {
  const data = useGraphData();

  const pauseRef = useRef<boolean>(false);
  const meshRef = useRef<THREE.InstancedMesh | null>(null);
  const linesMeshRef = useRef<THREE.InstancedMesh | null>(null);
  const lineGeometry = useRef<THREE.InstancedBufferGeometry | null>(null);

  const tickTimeRef = useRef(new Date());
  const { rerender } = useRerender();

  const { scene } = useThree();

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

    rerender();

    pauseRef.current = false;
  }, [data, rerender]);

  // useFrame(() => {
  //   if (!pauseRef.current) {
  //     layout.tick();

  //     rerender();
  //   }

  //   if (
  //     new Date().getTime() - tickTimeRef.current.getTime() > cooldownTime ||
  //     (alphaMin > 0 && layout.alpha() < alphaMin)
  //   ) {
  //     pauseRef.current = true;
  //   } else {
  //     pauseRef.current = false;
  //   }
  // });

  useFrame(() => {
    if (!pauseRef.current) {
      layout.tick();

      // rerender();
    }

    if (
      new Date().getTime() - tickTimeRef.current.getTime() > cooldownTime ||
      (alphaMin > 0 && layout.alpha() < alphaMin)
    ) {
      pauseRef.current = true;
    } else {
      pauseRef.current = false;
    }

    data.nodes.forEach((node, index) => {
      tempObject.position.set(node.x || 0, node.y || 0, node.z || 0);
      tempObject.updateMatrix();
      tempObject.name = node.id;
      meshRef.current?.setMatrixAt(index, tempObject.matrix);
    });

    data.links.forEach(({ source, target }: any, index) => {
      const { x, y, z } = source; // scene.getObjectByName(source.id)?.position;
      const { x: tx, y: ty, z: tz } = target; // scene.getObjectByName(source.id)?.position;

      const vstart = new THREE.Vector3(x, y, z);

      const vend = new THREE.Vector3(tx, ty, tz);

      lineGeometry.current?.setFromPoints([vstart, vend]);

      tempLineObject.updateMatrix();
      linesMeshRef.current?.setMatrixAt(index, tempLineObject.matrix);
    });

    if (meshRef.current) {
      meshRef.current.instanceMatrix.needsUpdate = true;
    }

    if (linesMeshRef.current) {
      linesMeshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <>
      <instancedMesh
        ref={meshRef}
        args={[undefined, undefined, data.nodes.length]}
        geometry={boxGeometry}
        material={material}
      />

      <instancedMesh
        ref={linesMeshRef}
        args={[undefined, undefined, data.links.length]}
      >
        <instancedBufferGeometry attach="geometry" />
        <meshBasicMaterial color="white" />
      </instancedMesh>
      {/* {data.nodes.map((node, index) => (
          <mesh
            // eslint-disable-next-line react/no-array-index-key
            key={node.id + index}
            geometry={boxGeometry}
            material={material}
            name={node.id}
            // onPointerOver={(e) => console.log(e)}
            position={[node.x || 0, node.y || 0, node.z || 0]}
            userData={node}
          />
        ))} */}

      {/* {(data.links as any).map((link: any, index: number) => (
        <Line
          // eslint-disable-next-line react/no-array-index-key
          key={`${link.index}-${index}`}
          end={link.target.id}
          start={link.source.id}
        />
      ))} */}
    </>
  );
};
