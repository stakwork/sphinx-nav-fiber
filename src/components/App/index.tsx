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
        if (isAuthorized) {
          fetchData(searchTerm);

          return;
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const res = await sphinx.enable();

        if (res) {
          setAuthorized(true);
        } else if (res === null) {
          console.log("budget not set");

          return;
        }
      }

      fetchData(searchTerm);
    };

    run();
  }, [fetchData, searchTerm, setSidebarOpen, isAuthorized]);

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
