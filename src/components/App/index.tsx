import { useEffect, useState } from "react";
import * as sphinx from "sphinx-bridge-kevkevinpal";
import styled from "styled-components";
import { AddNodeModal } from "~/components/AddNodeModal";
import { Flex } from "~/components/common/Flex";
import { Preloader } from "../Universe/Preloader";
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
  background-color: ${colors.black};
`;

export const App = () => {
  const selectedNode = useSelectedNode();

  const setSidebarOpen = useAppStore((s) => s.setSidebarOpen);
  const searchTerm = useAppStore((s) => s.currentSearch);
  const fetchData = useDataStore((s) => s.fetchData);
  const [isAuthorized, setAuthorized] = useState(false);
  const [isEnabling, setEnabling] = useState(false);

  const showSideBar = !!selectedNode || (!!searchTerm && isAuthorized);

  useEffect(() => {
    setSidebarOpen(showSideBar);
  }, [isAuthorized, selectedNode, setSidebarOpen, showSideBar]);

  useEffect(() => {
    const run = async () => {
      if (searchTerm) {
        setEnabling(true);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        await sphinx.enable();
        setEnabling(false);

        setAuthorized(true);
      }

      fetchData(searchTerm);
    };

    run();
  }, [fetchData, searchTerm, setSidebarOpen]);

  return (
    <>
      <GlobalStyle />

      <Wrapper direction="row">
        <DataRetriever loader={<Preloader />}>
          <SideBar />

          <Universe />
          <AppBar isEnabling={isEnabling} setEnabling={setEnabling} />
        </DataRetriever>

        <AddNodeModal />
      </Wrapper>
    </>
  );
};
