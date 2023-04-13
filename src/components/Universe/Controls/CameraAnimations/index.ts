/* eslint-disable no-param-reassign */
import type { CameraControls } from "@react-three/drei";
import { MathUtils } from "three";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import { RefObject, useCallback, useEffect, useState } from "react";
import * as THREE from "three";
import { useDataStore } from "~/stores/useDataStore";
import { useControlStore } from "~/stores/useControlStore";
import { useAutoNavigate } from "./useAutoNavigate";

const autoRotateSpeed = 1;

const p = new THREE.Vector3();

const introAnimationTargetPosition = new THREE.Vector3(-1900, -2200, -2800);

export const useCameraAnimations = (
  cameraControlsRef: RefObject<CameraControls | null>,
  { enabled }: { enabled: boolean }
) => {

  useAutoNavigate(cameraControlsRef)

  const { isUserDragging } = useControlStore();
  const disableCameraRotation = useDataStore((s) => s.disableCameraRotation);
  
  const [cameraAnimation, setCameraAnimation] =
    useState<gsap.core.Tween | null>(null);

  const data = useDataStore((s) => s.data);
  const graphRadius = useDataStore((s) => s.graphRadius);

  const rotateWorld = useCallback(() => {
    cameraAnimation?.kill();

    const cameraControls = cameraControlsRef.current;

    if (cameraControls) {
      const rotateCycle = gsap.to(cameraControls.camera, {
        azimuthAngle:
          (cameraControls.azimuthAngle || 0) + 360 * THREE.MathUtils.DEG2RAD,
        duration: 280,
        // https://greensock.com/ease-visualizer/
        ease: "power",
        overwrite: true,
        paused: true,
      });

      rotateCycle.play(0);

      setCameraAnimation(rotateCycle);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cameraAnimation]);

  const doIntroAnimation = useCallback(() => {
    cameraAnimation?.kill();

    const animationProgress = { value: -244 };

    const moveCycle = gsap.to(animationProgress, {
      duration: 5,
      keyframes: {
        "0%": { value: 10 },
        "100%": { delay: 2, ease: "Power4.easeIn", value: -200 },
      },
      onComplete: () => {
        setCameraAnimation(null);
        rotateWorld();
      },
      onInterrupt() {
        moveCycle.kill();
      },
      onUpdate: () => {
        const { value } = animationProgress;

        cameraControlsRef.current?.dolly(value, false);
      },
    });

    moveCycle.play();

    setCameraAnimation(moveCycle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cameraAnimation, rotateWorld]);

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

    if (enabled) {
      doIntroAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graphRadius]);

  useEffect(() => {
    if (enabled && !cameraAnimation) {
      rotateWorld();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useFrame((_, delta) => {
    if (cameraControlsRef.current) {
      //  do camera rotation
      if (!disableCameraRotation && !isUserDragging) {
        cameraControlsRef.current.azimuthAngle +=
          autoRotateSpeed * delta * MathUtils.DEG2RAD;
      }

      cameraControlsRef.current.update(delta);
    }
  });

  return null;
};
