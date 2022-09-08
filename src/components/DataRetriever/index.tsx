import invariant from "invariant";
import { PropsWithChildren, ReactNode, useEffect } from "react";
import { useDataStore } from "~/stores/useDataStore";

type Props = PropsWithChildren<{
  loader?: ReactNode;
}>;

export const DataRetriever = ({ children, loader }: Props) => {
  const [data, fetchData] = useDataStore((s) => [s.data, s.fetchData]);
  const setLoadingData = useDataStore((s) => s.setLoadingData);

  useEffect(() => {
    
    fetchData();
  }, [fetchData]);

  if (data === null && loader) {
    return <>{loader}</>;
  }

  if (data === null) {
    return null;
  }

  return <>{children}</>;
};

export const useGraphData = () => {
  const data = useDataStore((s) => s.data);

  invariant(
    data !== null,
    "This hook is meant to be used inside a DataRetriever component"
  );

  return data;
};
