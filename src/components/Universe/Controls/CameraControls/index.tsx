/* eslint-disable */
import {
  extend,
  ReactThreeFiber,
  useFrame,
  useThree,
} from "@react-three/fiber";
import CameraControlsDefault from "camera-controls";
import {
  ForwardedRef,
  forwardRef,
  MutableRefObject,
  useEffect,
  useRef,
} from "react";
import {
  Box3,
  MathUtils,
  Matrix4,
  MOUSE,
  Quaternion,
  Raycaster,
  Sphere,
  Spherical,
  Vector2,
  Vector3,
  Vector4,
} from "three";
import { useControlsEvents } from "~/components/Universe/Controls/useControlsEvents";
import { useDataStore } from "~/stores/useDataStore";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      cameraControlsDefault: ReactThreeFiber.Node<
        CameraControlsDefault,
        typeof CameraControlsDefault
      >;
    }
  }
}

const subsetOfTHREE = {
  MOUSE: MOUSE,
  Vector2: Vector2,
  Vector3: Vector3,
  Vector4: Vector4,
  Quaternion: Quaternion,
  Matrix4: Matrix4,
  Spherical: Spherical,
  Box3: Box3,
  Sphere: Sphere,
  Raycaster: Raycaster,
  MathUtils: {
    DEG2RAD: MathUtils.DEG2RAD,
    clamp: MathUtils.clamp,
  },
};

CameraControlsDefault.install({ THREE: subsetOfTHREE });
extend({ CameraControlsDefault });

type Props = {
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

export const CameraControls = forwardRef<CameraControlsDefault, Props>(
  ({ autoRotate, autoRotateSpeed = 1.5 }, ref) => {
    const cameraControls = useRef<CameraControlsDefault | null>(null);

    const disableCameraRotation = useDataStore((s) => s.disableCameraRotation);

    const camera = useThree((state) => state.camera);

    const renderer = useThree((state) => state.gl);

    const { disableAutoRotate } = useControlsEvents(cameraControls.current);

    useFrame((_, delta) => {
      if (cameraControls.current) {
        if (!disableCameraRotation && !disableAutoRotate && autoRotate) {
          cameraControls.current.azimuthAngle +=
            autoRotateSpeed * delta * MathUtils.DEG2RAD;
        }

        cameraControls.current.update(delta);
      }
    });

    useEffect(() => () => cameraControls.current?.dispose(), []);

    return (
      <cameraControlsDefault
        ref={mergeRefs<CameraControlsDefault>(cameraControls, ref)}
        args={[camera, renderer.domElement]}
      />
    );
  }
);

export type CameraControls = CameraControlsDefault;

function mergeRefs<T>(...refs: (MutableRefObject<T> | ForwardedRef<T>)[]) {
  return (instance: T): void => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(instance);
      } else if (ref) {
        ref.current = instance;
      }
    }
  };
}
