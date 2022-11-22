import {
  createUseGesture,
  pinchAction,
  WebKitGestureEvent,
  wheelAction,
} from "@use-gesture/react";
import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useDataStore } from "~/stores/useDataStore";
import { CameraControls } from "./CameraControls";

const useGesture = createUseGesture([pinchAction, wheelAction]);

const p = new THREE.Vector3();

const introAnimationTargetPosition = new THREE.Vector3(-1900, -2200, -2800);

const initialLoadTargetPosition = new THREE.Vector3(-144, 173, 0);

export const Controls = () => {

  const initialLoad = useRef(true);

  const [cameraAnimation, setCameraAnimation] = useDataStore((s) => [
    s.cameraAnimation,
    s.setCameraAnimation,
  ]);

  const [selectedNode, data] = useDataStore((s) => [s.selectedNode, s.data]);

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

      let dollyStep = distance < 3000 ? 40 : 140;

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

    const animationProgress = {value: -244};




    const moveCycle = gsap.to(
      animationProgress, {
      keyframes: {
        '0%': {value: 10},
        '100%': {value: -340, delay: 2 ,ease: 'Power4.easeIn'}
      },
      duration: 5,
      onComplete: () => {
        setCameraAnimation(null);
        rotateWorld();
      },
      onInterrupt() {
        moveCycle.kill();
      },
      onUpdate: () => {
        const { value } = animationProgress;

        cameraControls?.dolly(value, false);
      },
    });


    moveCycle.play();
    setCameraAnimation(moveCycle);
  }, [cameraAnimation, rotateWorld, setCameraAnimation]);

  useEffect(() => {
    if (cameraControlsRef.current) {
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
    },
    {
      target: document.getElementById("universe-canvas") || undefined,
    }
  );

  useEffect(() => {
    const run = async () => {
      if (cameraControlsRef.current) {
        cameraControlsRef.current.dampingFactor = 0.01;

        const target = initialLoad ? initialLoadTargetPosition : introAnimationTargetPosition;

        if (!selectedNode) {
          await cameraControlsRef.current.setLookAt(
            target.x,
            target.y,
            target.z,
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

    if (initialLoad.current) {
      initialLoad.current = false;
    }

  }, [selectedNode, initialLoad]);

  useEffect(() => {
    if (!cameraAnimation) {
      rotateWorld();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return <CameraControls ref={cameraControlsRef} autoRotate={!selectedNode} />;
};
