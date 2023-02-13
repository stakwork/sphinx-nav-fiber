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

const initialLoadTargetPosition = new THREE.Vector3(0, 0, 0);

export const Controls = () => {
  const initialLoad = useRef(true);
  const canvasElement = useRef<HTMLElement | null>(null);

  const [
    graphRadius,
    cameraAnimation,
    setCameraAnimation,
    disableCameraRotation,
    setDisableCameraRotation,
  ] = useDataStore((s) => [
    s.graphRadius,
    s.cameraAnimation,
    s.setCameraAnimation,
    s.disableCameraRotation,
    s.setDisableCameraRotation,
  ]);

  const [selectedNode, data] = useDataStore((s) => [s.selectedNode, s.data]);

  const cameraControlsRef = useRef<CameraControls | null>(null);

  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  useEffect(() => {
    canvasElement.current = document.getElementById("universe-canvas");

    const getDimensions = () => ({
      height: canvasElement.current?.offsetHeight || 0,
      width: canvasElement.current?.offsetWidth || 0,
    });

    const handleResize = () => {
      setDimensions(getDimensions());
    };

    if (canvasElement.current) {
      setDimensions(getDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [canvasElement]);

  const doDollyTransition = useCallback(
    (event: WheelEvent | PointerEvent | TouchEvent | WebKitGestureEvent) => {
      if (!disableCameraRotation) {
        setDisableCameraRotation(true);
      }

      const { width, height } = dimensions;

      if (!cameraControlsRef.current) {
        return;
      }

      if (cameraControlsRef.current.dampingFactor < 0.1) {
        cameraControlsRef.current.dampingFactor = 0.1;
      }

      const distance = cameraControlsRef.current?.distance;

      if (graphRadius && distance > graphRadius) {
        const direction = (event as any).deltaY < 0 ? 1 : -1;
        const deltaX = (event as any).layerX - width / 2;
        const deltaY = (event as any).layerY - height / 2;

        const coeffX =
          ((direction * deltaX * distance) / graphRadius / graphRadius) * 4;

        const coeffY =
          ((direction * deltaY * distance) / graphRadius / graphRadius) * 4;

        cameraControlsRef.current.rotate(
          coeffX * THREE.MathUtils.DEG2RAD,
          coeffY * THREE.MathUtils.DEG2RAD,
          true
        );

        cameraControlsRef.current?.setTarget(0, 0, 0);

        cameraControlsRef.current.dollyToCursor = false;
      } else {
        cameraControlsRef.current.dollyToCursor = true;
      }
    },
    [dimensions, graphRadius, disableCameraRotation, setDisableCameraRotation]
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

    const animationProgress = { value: -244 };

    const moveCycle = gsap.to(animationProgress, {
      keyframes: {
        "0%": { value: 10 },
        "100%": { value: -200, delay: 2, ease: "Power4.easeIn" },
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
    // graphRadius is calculated from initial graph render
    if (cameraControlsRef.current && graphRadius) {
      cameraControlsRef.current.maxDistance =
        cameraControlsRef.current.getDistanceToFitSphere(graphRadius + 200);

      cameraControlsRef.current.minDistance = 1;
      cameraControlsRef.current.minPolarAngle = -Math.PI;
      cameraControlsRef.current.maxPolarAngle = Math.PI;
      cameraControlsRef.current.dollySpeed = 0.2;
      cameraControlsRef.current.dampingFactor = 0.1;
      cameraControlsRef.current.infinityDolly = false;
      cameraControlsRef.current.dollyToCursor = true;
      cameraControlsRef.current.boundaryEnclosesCamera = true;
    }

    doIntroAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graphRadius]);

  useGesture(
    {
      onPinch: ({ event }) => doDollyTransition(event),
      onWheel: ({ event }) => doDollyTransition(event),
    },
    {
      target: document.getElementById("universe-canvas") || undefined,
    }
  );

  useEffect(() => {
    const run = async () => {
      if (cameraControlsRef.current) {
        cameraControlsRef.current.dampingFactor = 0.01;

        const target = initialLoad
          ? initialLoadTargetPosition
          : introAnimationTargetPosition;

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

    if (disableCameraRotation) {
      setDisableCameraRotation(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <CameraControls
      ref={cameraControlsRef}
      autoRotate={!disableCameraRotation && !selectedNode}
    />
  );
};
