import { useDataStore } from "~/stores/useDataStore";

export const IntroAnimation = () => {
  const data = useDataStore((s) => s.data);

  console.log(data);

  return null;
};
