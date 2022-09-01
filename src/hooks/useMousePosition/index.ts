import { useEffect, useState } from "react";
import { useDataStore } from '../../components/GraphDataRetriever'

type MouseCoords = [number, number];

export const useMousePosition = () => {
  const [pointer, setPointer] = useState<MouseCoords>([0, 0]);
  const xOffset = useDataStore(s => s.xOffset);
  const canvasElement:any = document.getElementById('universe-canvas')

  useEffect(() => {
    // const canvasElement = document.getElementById('universe-canvas') || document
    canvasElement.addEventListener("mousemove", handleMove);
    return () => canvasElement.removeEventListener("mousemove", handleMove);
  }, [xOffset]);

  const handleMove = (e: any) => {
    const canvasWidth = canvasElement?.offsetWidth || 0
    const x = ((e.clientX - xOffset) / canvasWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;
    setPointer([x, y]);
  };

  return pointer;
};
