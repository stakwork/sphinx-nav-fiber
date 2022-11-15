import {
  createUseGesture,
  pinchAction,
  WebKitGestureEvent,
  wheelAction,
} from "@use-gesture/react";
import gsap from "gsap";
import { useCallback, useEffect, useRef } from "react";
import * as THREE from "three";
import { useDataStore } from "~/stores/useDataStore";
import { CameraControls } from "./CameraControls";

const useGesture = createUseGesture([pinchAction, wheelAction]);

const p = new THREE.Vector3();

const introAnimationTargetPoisiton = new THREE.Vector3(-1900, -2200, -2800);

export const Controls = () => {
  const [cameraAnimation, setCameraAnimation] = useDataStore((s) => [
    s.cameraAnimation,
    s.setCameraAnimation,
  ]);

  const [selectedNode, data, hoveredNode] = useDataStore((s) => [
    s.selectedNode,
    s.data,
    s.hoveredNode,
  ]);

  const cameraControlsRef = useRef<CameraControls | null>(null);

  const doDollyTransition = useCallback(
    (event: WheelEvent | PointerEvent | TouchEvent | WebKitGestureEvent) => {
      if (!cameraControlsRef.current) {
        return;
      }

      if (cameraControlsRef.current.dampingFactor < 0.1) {
        cameraControlsRef.current.dampingFactor = 0.1;
      }

      const distance = cameraControlsRef.current?.distance;

      let dollyStep = distance < 3000 ? 20 : 60;

      if ("deltaY" in event && event.deltaY > 0) {
        dollyStep *= -1;
      }

      cameraControlsRef.current?.dolly(dollyStep, true);
    },
    []
  );

  const rotateWorld = useCallback(() => {
    cameraAnimation?.kill();

    if (cameraControlsRef.current) {
      const rotateCycle = gsap.to(cameraControlsRef.current?.camera, {
        azimuthAngle:
          (cameraControlsRef?.current?.azimuthAngle || 0) +
          360 * THREE.MathUtils.DEG2RAD,
        duration: 280,
        // https://greensock.com/ease-visualizer/
        ease: "power",
        overwrite: true,
        paused: true,
      });

      rotateCycle.play(0);

      setCameraAnimation(rotateCycle);
    }
  }, [cameraAnimation, setCameraAnimation]);

  const doIntroAnimation = useCallback(() => {
    cameraAnimation?.kill();

    const cameraControls = cameraControlsRef?.current;

    // The start position
    const { x, y, z } = cameraControls?.camera?.position || {
      x: 0,
      y: 0,
      z: 0,
    };

    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(x, y, z),
      introAnimationTargetPoisiton,
    ]);

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

  const hoverSet = useCallback(
    (event: WheelEvent | PointerEvent | TouchEvent | WebKitGestureEvent) => {
      if (!cameraControlsRef.current) {
        return;
      }

      if ("deltaY" in event && event.deltaY > 0) {
        doDollyTransition(event);

        return;
      }

      if (hoveredNode) {
        const { x, y, z } = hoveredNode;

        if (!x || !y || !z) {
          return;
        }

        cameraControlsRef.current?.setLookAt(
          x - 100,
          y - 100,
          z - 100,
          x,
          y,
          z,
          true
        );
      } else {
        doDollyTransition(event);
      }
    },
    [doDollyTransition, hoveredNode]
  );

  useEffect(() => {
    if (cameraControlsRef.current) {
      cameraControlsRef.current.mouseButtons.wheel = 0;

      cameraControlsRef.current.minDistance = 200;
      cameraControlsRef.current.maxDistance = Infinity;
      cameraControlsRef.current.minPolarAngle = -Infinity;
      cameraControlsRef.current.maxPolarAngle = Infinity;
      cameraControlsRef.current.dollySpeed = 0.2;
      cameraControlsRef.current.dampingFactor = 0.1;
      cameraControlsRef.current.infinityDolly = true;
      cameraControlsRef.current.dollyToCursor = true;
    }

    doIntroAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useGesture(
    {
      onPinch: ({ event }) => doDollyTransition(event),
      onWheel: ({ event }) => {
        if (selectedNode) {
          doDollyTransition(event);
        } else {
          hoverSet(event);
        }
      },
    },
    {
      target: document.getElementById("universe-canvas") || undefined,
    }
  );

  useEffect(() => {
    const run = async () => {
      if (cameraControlsRef.current) {
        cameraControlsRef.current.dampingFactor = 0.01;

        if (!selectedNode) {
          await cameraControlsRef.current.setLookAt(
            introAnimationTargetPoisiton.x,
            introAnimationTargetPoisiton.y,
            introAnimationTargetPoisiton.z,
            0,
            0,
            0,
            true
          );

          cameraControlsRef.current.dampingFactor = 0.1;

          return;
        }

        cameraControlsRef.current.dampingFactor = 0.01;

        const mesh = new THREE.Vector3(
          selectedNode.x,
          selectedNode.y,
          selectedNode.z
        );

        p.copy(mesh);

        p.add(
          new THREE.Vector3(
            THREE.MathUtils.randInt(60, 80),
            THREE.MathUtils.randInt(60, 80),
            THREE.MathUtils.randInt(60, 80)
          )
        );

        await cameraControlsRef.current.setLookAt(
          p.x,
          p.y,
          p.z,
          mesh.x,
          mesh.y,
          mesh.z,
          true
        );

        cameraControlsRef.current.dampingFactor = 0.1;
      }
    };

    run();
  }, [selectedNode]);

  useEffect(() => {
    if (!cameraAnimation) {
      rotateWorld();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return <CameraControls ref={cameraControlsRef} autoRotate={!selectedNode} />;
};
