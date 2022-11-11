import { useCallback, useState } from "react";

export const useRerender = () => {
  const [renderTick, setRenderTick] = useState(0);

  const rerender = useCallback(() => setRenderTick((tick) => tick + 1), []);

  return { rerender, tick: renderTick };
};
