import CameraControls from "camera-controls";
import { useEffect, useRef } from "react";

export const useControlsEvents = (cameraControls: CameraControls | null) => {
  const userIsDragging = useRef(false);
  const disableAutoRotate = useRef(false);

  useEffect(() => {
    const onRest = () => {
      cameraControls?.removeEventListener("rest", onRest);
      userIsDragging.current = false;
      disableAutoRotate.current = false;
    };

    cameraControls?.addEventListener("controlstart", () => {
      cameraControls?.removeEventListener("rest", onRest);
      userIsDragging.current = true;
      disableAutoRotate.current = true;
    });

    cameraControls?.addEventListener("controlend", () => {
      if (cameraControls?.active) {
        cameraControls?.addEventListener("rest", onRest);
      } else {
        onRest();
      }
    });

    cameraControls?.addEventListener("transitionstart", () => {
      if (userIsDragging.current) {
        return;
      }

      disableAutoRotate.current = true;
      cameraControls?.addEventListener("rest", onRest);
    });

    return () => {
      cameraControls?.removeAllEventListeners();
    };
  });

  return {
    disableAutoRotate: disableAutoRotate.current,
    userIsDragging: userIsDragging.current,
  };
};
