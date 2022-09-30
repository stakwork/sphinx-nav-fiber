import { useEffect } from "react";
import styled from "styled-components";
import { AppBar } from "~/components/App/AppBar";
import { SideBar } from "~/components/App/SideBar";
import { Flex } from "~/components/common/Flex";
import { Loader } from "~/components/common/Loader";
import { DataRetriever } from "~/components/DataRetriever";
import { Universe } from "~/components/Universe";
import { useAppStore } from "~/stores/useAppStore";
import { useDataStore, useSelectedNode } from "~/stores/useDataStore";
import { colors } from "~/utils/colors";

const Wrapper = styled(Flex)`
  height: 100%;
  width: 100%;
  background-color: ${colors.gray500};
`;

export const App = () => {
  const selectedNode = useSelectedNode();
  const setSidebarOpen = useAppStore((s) => s.setSidebarOpen);
  const searchTerm = useAppStore((s) => s.currentSearch);
  const fetchData = useDataStore((s) => s.fetchData);

  const showSideBar = !!selectedNode;

  useEffect(() => {
    setSidebarOpen(showSideBar);
  }, [setSidebarOpen, showSideBar]);

  useEffect(() => {
    setSidebarOpen(false);
    fetchData(searchTerm);

    if (searchTerm) {
      setSidebarOpen(true);
    }
  }, [fetchData, searchTerm, setSidebarOpen]);

  return (
    <Wrapper direction="row">
      <DataRetriever loader={<Loader />}>
        <SideBar />

        <Universe />
      </DataRetriever>

      <AppBar />
    </Wrapper>
  );
};
