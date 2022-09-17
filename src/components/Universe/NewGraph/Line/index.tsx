import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type Props = {
  start: string;
  end: string;
};

const material = new THREE.LineBasicMaterial({ color: "#9c88ff" });

export const Line = ({ end, start }: Props) => {
  const ref = useRef<THREE.Line | null>(null);

  const scene = useThree((s) => s.scene);

  const startPosition = scene.getObjectByName(start)?.position;

  const endPosition = scene.getObjectByName(end)?.position;

  useFrame(() => {
    if (startPosition && endPosition) {
      ref.current?.geometry.setFromPoints([startPosition, endPosition]);
    }
  });

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <line ref={ref} material={material} />
  );
};
