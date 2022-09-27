import { useEffect } from "react";
import styled from "styled-components";
import { AppBar } from "~/components/App/AppBar";
import { SideBar } from "~/components/App/SideBar";
import { Loader } from "~/components/common/Loader";
import { DataRetriever } from "~/components/DataRetriever";
import { Universe } from "~/components/Universe";
import { useAppStore } from "~/stores/useAppStore";
import { useDataStore } from "~/stores/useDataStore";
import { GRAPH_BACKGROUND_COLOR } from "../../constants";
import { getActiveLsat } from "~/utils/getLSat";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const App = () => {
  const setSidebarOpen = useAppStore((s) => s.setSidebarOpen);
  const selectedNode = useDataStore((s) => s.selectedNode);

  const searchTerm = useAppStore((s) => s.currentSearch);

  const fetchData = useDataStore((s) => s.fetchData);

  const showSideBar = !!(selectedNode || searchTerm);

  useEffect(() => {
    setSidebarOpen(showSideBar);
  }, [setSidebarOpen, showSideBar]);

  useEffect(() => {
    fetchData(searchTerm);
  }, [fetchData, searchTerm]);

  useEffect(() => {
    const lsat = localStorage.getItem("lsat");
    if (!lsat) {
      getActiveLsat();
    }
  }, []);

  return (
    <Wrapper style={{ background: GRAPH_BACKGROUND_COLOR }}>
      <DataRetriever loader={<Loader />}>
        <SideBar />
        <Universe />
      </DataRetriever>

      <AppBar />
    </Wrapper>
  );
};
