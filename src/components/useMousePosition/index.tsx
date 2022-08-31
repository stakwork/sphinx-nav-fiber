import { useEffect, useState } from "react";

type MouseCoords = [number, number];

export const useMousePosition = () => {
  const [pointer, setPointer] = useState<MouseCoords>([0, 0]);

  useEffect(() => {
    const handleMove = (e: any) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;

      setPointer([x, y]);
    };

    document.addEventListener("mousemove", handleMove);

    return () => document.removeEventListener("mousemove", handleMove);
  }, []);

  return pointer;
};
