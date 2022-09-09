import { extend, useFrame, useThree } from "@react-three/fiber";
import { createUseGesture, wheelAction } from "@use-gesture/react";
import CameraControls from "camera-controls";
import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useDataStore } from "~/stores/useDataStore";
import gsap from 'gsap'

CameraControls.install({ THREE });

extend({ CameraControls });

const useGesture = createUseGesture([wheelAction]);

export const Controls = () => {
  const [selectedNode, data, cameraAnimation, setCameraAnimation]  = useDataStore((s) => [s.selectedNode,s.data,s.cameraAnimation,s.setCameraAnimation]);

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

    let dollyStep = distance < 3000 ? 80 : 140;

    if (event.deltaY > 0) {
      dollyStep = dollyStep * -1;
    }

    cameraControlsRef.current?.dolly(dollyStep, true);
  }, []);

  useEffect(() => {
    if (cameraControlsRef.current) {
      cameraControlsRef.current.mouseButtons.wheel = 0;
      cameraControlsRef.current.minDistance = 200;
      cameraControlsRef.current.maxDistance = Infinity;
      cameraControlsRef.current.minPolarAngle = -Infinity;
      cameraControlsRef.current.maxPolarAngle = Infinity;
      //cameraControlsRef.current.enableTransition = true;
      cameraControlsRef.current.dollySpeed = 0.2;
      cameraControlsRef.current.dampingFactor = 0.1;
      cameraControlsRef.current.infinityDolly = true;
      //cameraControlsRef.current.enableDamping = true;
      cameraControlsRef.current.dollyToCursor = true;
    }

    doIntroAnimation()
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

      // @ts-ignore
      const { x, y, z } = selectedNode;

      cameraControlsRef.current?.setTarget(x, y, z, true);
    }
  }, [selectedNode]);

  useEffect(() => {
    if (!cameraAnimation) rotateWorld()
  },[data])

  useFrame((state, delta) => {
    cameraControlsRef.current?.update(delta);
  });

  function rotateWorld() {
    if (cameraAnimation) {
      cameraAnimation.kill()
      setCameraAnimation(null)
    }

    let rotateCycle = gsap.to(cameraControlsRef.current, {
      // @ts-ignore
      azimuthAngle: cameraControlsRef?.current?.azimuthAngle + 360 * THREE.MathUtils.DEG2RAD,
      duration: 280,
      // https://greensock.com/ease-visualizer/
      ease: "power",
      overwrite: true,
      paused: true,
    });

    rotateCycle.eventCallback("onComplete", (e: any) => {
    });
    rotateCycle.play(0);

    setCameraAnimation(rotateCycle)
  }

  function doIntroAnimation() {
    if (cameraAnimation) {
      cameraAnimation.kill()
      setCameraAnimation(null)
    }

    const cameraControls = cameraControlsRef?.current
    // start position
    // @ts-ignore
    const { x, y, z } = cameraControls?._camera?.position;
    
    // for intro fly
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(x, y, z),
      // new THREE.Vector3(x - 1500, y - 5800, z - 900),
      new THREE.Vector3(-1900, -3200, -2800),
    ]);
    const points = curve.getPoints(50);
    const _tmp = new THREE.Vector3();
    const animationProgress = { value: 0 };

    const moveCycle = gsap.fromTo(
      animationProgress,
      {
        value: 0,
      },
      {
        value: 1,
        duration: 4,
        paused: true,
        onInterrupt() {
          moveCycle.kill();
        },
        overwrite:true,
        onUpdateParams: [animationProgress],
        onUpdate({ value }) {
          curve.getPoint(value, _tmp);
          const cameraX = _tmp.x;
          const cameraY = _tmp.y;
          const cameraZ = _tmp.z;
          const lookAtX = 0;
          const lookAtY = 0;
          const lookAtZ = 0;

          // @ts-ignore
          cameraControls.setLookAt(
            cameraX,
            cameraY,
            cameraZ,
            lookAtX,
            lookAtY,
            lookAtZ,
            true
          );
        },
        onComplete() {
          setCameraAnimation(null)
          rotateWorld();
        },
      }
    );

    moveCycle.play()
    setCameraAnimation(moveCycle)
  }

  return (
    // @ts-ignore
    <cameraControls ref={cameraControlsRef} args={[camera, gl.domElement]} />
  );
};
