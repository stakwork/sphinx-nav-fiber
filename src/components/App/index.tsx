import { useEffect } from "react";
import styled from "styled-components";
import { AppBar } from "~/components/App/AppBar";
import { SideBar } from "~/components/App/SideBar";
import { Loader } from "~/components/common/Loader";
import { DataRetriever } from "~/components/DataRetriever";
import { Universe } from "~/components/Universe";
import { useAppStore } from "~/stores/useAppStore";
import { useDataStore, useSelectedNode } from "~/stores/useDataStore";
import { colors } from "~/utils/colors";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: ${colors.gray500};
`;

export const App = () => {
  const selectedNode = useSelectedNode();
  const setSidebarOpen = useAppStore((s) => s.setSidebarOpen);
  const searchTerm = useAppStore((s) => s.currentSearch);

  const fetchData = useDataStore((s) => s.fetchData);

  const showSideBar = !!(selectedNode || searchTerm);

  useEffect(() => {
    setSidebarOpen(showSideBar);
  }, [setSidebarOpen, showSideBar]);

  useEffect(() => {
    fetchData(searchTerm);
  }, [fetchData, searchTerm]);

  return (
    <Wrapper>
      <DataRetriever loader={<Loader />}>
        <SideBar />
        <Universe />
      </DataRetriever>

      <AppBar />
    </Wrapper>
  );
};
