import { extend, useFrame, useThree } from "@react-three/fiber";
import { createUseGesture, wheelAction } from "@use-gesture/react";
import CameraControls from "camera-controls";
import gsap from "gsap";
import { useCallback, useEffect, useRef } from "react";
import * as THREE from "three";
import { useDataStore } from "~/stores/useDataStore";

CameraControls.install({ THREE });

extend({ CameraControls });

const useGesture = createUseGesture([wheelAction]);

export const Controls = () => {
  const [cameraAnimation, setCameraAnimation] = useDataStore((s) => [
    s.cameraAnimation,
    s.setCameraAnimation,
  ]);

  const [selectedNode, data] = useDataStore((s) => [s.selectedNode, s.data]);

  const cameraControlsRef = useRef<CameraControls | null>(null);
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);

  const doDollyTransition = useCallback((event: WheelEvent) => {
    if (!cameraControlsRef.current) {
      return;
    }

    if (cameraControlsRef.current.dampingFactor < 0.1) {
      cameraControlsRef.current.dampingFactor = 0.1;
    }

    const distance = cameraControlsRef.current?.distance;

    let dollyStep = distance < 3000 ? 40 : 140;

    if (event.deltaY > 0) {
      dollyStep *= -1;
    }

    cameraControlsRef.current?.dolly(dollyStep, true);
  }, []);

  const rotateWorld = useCallback(() => {
    cameraAnimation?.kill();

    const rotateCycle = gsap.to(camera, {
      azimuthAngle:
        (cameraControlsRef?.current?.azimuthAngle || 0) +
        360 * THREE.MathUtils.DEG2RAD,
      duration: 280,
      // https://greensock.com/ease-visualizer/
      ease: "power",
      overwrite: true,
      paused: true,
    });

    // rotateCycle.eventCallback("onComplete", (e: any) => {});
    rotateCycle.play(0);

    setCameraAnimation(rotateCycle);
  }, [cameraAnimation, camera, setCameraAnimation]);

  const doIntroAnimation = useCallback(() => {
    cameraAnimation?.kill();

    const cameraControls = cameraControlsRef?.current;

    // The start position
    const { x, y, z } = cameraControls?.camera?.position || {
      x: 0,
      y: 0,
      z: 0,
    };

    // for intro fly
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(x, y, z),
      // new THREE.Vector3(x - 1500, y - 5800, z - 900),
      new THREE.Vector3(-1900, -3200, -2800),
    ]);

    // const points = curve.getPoints(50);
    const tempVector = new THREE.Vector3();
    const animationProgress = { value: 0 };

    const moveCycle = gsap.fromTo(
      animationProgress,
      {
        value: 0,
      },
      {
        duration: 4,
        onComplete: () => {
          setCameraAnimation(null);
          rotateWorld();
        },
        onInterrupt() {
          moveCycle.kill();
        },
        onUpdate: ({ value }) => {
          curve.getPoint(value, tempVector);

          const cameraX = tempVector.x;
          const cameraY = tempVector.y;
          const cameraZ = tempVector.z;
          const lookAtX = 0;
          const lookAtY = 0;
          const lookAtZ = 0;

          cameraControls?.setLookAt(
            cameraX,
            cameraY,
            cameraZ,
            lookAtX,
            lookAtY,
            lookAtZ,
            true
          );
        },
        onUpdateParams: [animationProgress],
        overwrite: true,
        paused: true,
        value: 1,
      }
    );

    moveCycle.play();
    setCameraAnimation(moveCycle);
  }, [cameraAnimation, rotateWorld, setCameraAnimation]);

  useEffect(() => {
    if (cameraControlsRef.current) {
      cameraControlsRef.current.mouseButtons.wheel = 0;
      cameraControlsRef.current.minDistance = 200;
      cameraControlsRef.current.maxDistance = Infinity;
      cameraControlsRef.current.minPolarAngle = -Infinity;
      cameraControlsRef.current.maxPolarAngle = Infinity;
      // cameraControlsRef.current.enableTransition = true;
      cameraControlsRef.current.dollySpeed = 0.2;
      cameraControlsRef.current.dampingFactor = 0.1;
      cameraControlsRef.current.infinityDolly = true;
      // cameraControlsRef.current.enableDamping = true;
      cameraControlsRef.current.dollyToCursor = true;
    }

    doIntroAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useGesture(
    {
      onWheel: ({ event }) => doDollyTransition(event),
    },
    {
      target: document.getElementById("universe-canvas") || undefined,
    }
  );

  useEffect(() => {
    if (selectedNode && cameraControlsRef.current) {
      cameraControlsRef.current.dampingFactor = 0.05;

      const { x = 0, y = 0, z = 0 } = selectedNode;

      cameraControlsRef.current?.setTarget(x, y, z, true);
      // cameraControlsRef.current?.zoomTo(10, true);
    }
  }, [selectedNode]);

  useEffect(() => {
    if (!cameraAnimation) {
      rotateWorld();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useFrame((_, delta) => {
    cameraControlsRef.current?.update(delta);
  });

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <cameraControls ref={cameraControlsRef} args={[camera, gl.domElement]} />
  );
};
