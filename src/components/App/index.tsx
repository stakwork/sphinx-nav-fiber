import { useCallback, useEffect, useState } from "react";
import * as sphinx from "sphinx-bridge-kevkevinpal";
import styled from "styled-components";
import { AddNodeModal } from "~/components/AddNodeModal";
import { BudgetExplanationModal } from "~/components/BudgetExplanationModal";
import { Flex } from "~/components/common/Flex";
import { DataRetriever } from "~/components/DataRetriever";
import { GlobalStyle } from "~/components/GlobalStyle";
import { Universe } from "~/components/Universe";
import { useAppStore } from "~/stores/useAppStore";
import { useDataStore, useSelectedNode } from "~/stores/useDataStore";
import { useModal } from "~/stores/useModalStore";
import { colors } from "~/utils/colors";
import { Preloader } from "../Universe/Preloader";
import { AppBar } from "./AppBar";
import { SideBar } from "./SideBar";

const Wrapper = styled(Flex)`
  height: 100%;
  width: 100%;
  background-color: ${colors.black};
`;

export const App = () => {
  const selectedNode = useSelectedNode();

  const { open } = useModal("budgetExplanation");
  const setSidebarOpen = useAppStore((s) => s.setSidebarOpen);
  const searchTerm = useAppStore((s) => s.currentSearch);

  const hasBudgetExplanationModalBeSeen = useAppStore(
    (s) => s.hasBudgetExplanationModalBeSeen
  );

  const fetchData = useDataStore((s) => s.fetchData);
  const setSphinxModalOpen = useDataStore((s) => s.setSphinxModalOpen);
  const [isAuthorized, setAuthorized] = useState(false);

  const showSideBar = !!selectedNode || (!!searchTerm && isAuthorized);

  useEffect(() => {
    setSidebarOpen(showSideBar);
  }, [isAuthorized, selectedNode, setSidebarOpen, showSideBar]);

  const runSearch = useCallback(async () => {
    if (searchTerm) {
      setSphinxModalOpen(true);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await sphinx.enable();
      setSphinxModalOpen(false);

      setAuthorized(true);
    }

    fetchData(searchTerm);
  }, [fetchData, searchTerm, setSphinxModalOpen]);

  useEffect(() => {
    if (searchTerm) {
      if (!hasBudgetExplanationModalBeSeen) {
        open();

        return;
      }
    }

    runSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, runSearch, hasBudgetExplanationModalBeSeen]);

  return (
    <>
      <GlobalStyle />

      <Wrapper direction="row">
        <DataRetriever loader={<Preloader />}>
          <SideBar />

          <Universe />

          <AppBar />
        </DataRetriever>

        <AddNodeModal />

        <BudgetExplanationModal
          onClose={() => {
            runSearch();
          }}
        />
      </Wrapper>
    </>
  );
};
