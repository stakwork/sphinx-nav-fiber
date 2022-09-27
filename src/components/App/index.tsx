import { useEffect, useState } from "react";
import * as sphinx from "sphinx-bridge-kevkevinpal";
import styled from "styled-components";
import { Flex } from "~/components/common/Flex";
import { Loader } from "~/components/common/Loader";
import { DataRetriever } from "~/components/DataRetriever";
import { GlobalStyle } from "~/components/GlobalStyle";
import { Universe } from "~/components/Universe";
import { useAppStore } from "~/stores/useAppStore";
import { useDataStore, useSelectedNode } from "~/stores/useDataStore";
import { colors } from "~/utils/colors";
import { AppBar } from "./AppBar";
import { SideBar } from "./SideBar";
import { getActiveLsat } from "~/utils/getLSat";


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
  const [isAuthorized, setAuthorized] = useState(false);

  const showSideBar = !!selectedNode || (!!searchTerm && isAuthorized);

  useEffect(() => {
    setSidebarOpen(showSideBar);
  }, [isAuthorized, selectedNode, setSidebarOpen, showSideBar]);

  useEffect(() => {
    const run = async () => {
      if (searchTerm) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        await sphinx.enable();

        setAuthorized(true);
      }

      fetchData(searchTerm);
    };

    run();
  }, [fetchData, searchTerm, setSidebarOpen]);

  useEffect(() => {
    const lsat = localStorage.getItem("lsat");
    
    if (!lsat) {
      getActiveLsat();
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper direction="row">
        <DataRetriever loader={<Loader />}>
          <SideBar />

          <Universe />
        </DataRetriever>

        <AppBar />
      </Wrapper>
    </>
  );
};
