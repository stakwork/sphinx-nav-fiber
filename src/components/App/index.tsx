import { useCallback, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

export const App = () => {
  const [isAuthorized, setAuthorized] = useState(false);

  const { open } = useModal("budgetExplanation");

  const selectedNode = useSelectedNode();
  const setSidebarOpen = useAppStore((s) => s.setSidebarOpen);

  const [
    searchTerm,
    setCurrentSearch,
    setRelevanceSelected,
    setTranscriptOpen,
  ] = useAppStore((s) => [
    s.currentSearch,
    s.setCurrentSearch,
    s.setRelevanceSelected,
    s.setTranscriptOpen,
  ]);

  const hasBudgetExplanationModalBeSeen = useAppStore(
    (s) => s.hasBudgetExplanationModalBeSeen
  );

  const fetchData = useDataStore((s) => s.fetchData);
  const setSphinxModalOpen = useDataStore((s) => s.setSphinxModalOpen);
  const setSelectedNode = useDataStore((s) => s.setSelectedNode);
  const setCategoryFilter = useDataStore((s) => s.setCategoryFilter);

  const form = useForm<{ search: string }>({ mode: "onChange" });

  const handleSubmit = form.handleSubmit(({ search }) => {
    setTranscriptOpen(false);
    setSelectedNode(null);
    setRelevanceSelected(false);
    setCurrentSearch(search);
    setCategoryFilter(null);
  });

  const showSideBar = !!selectedNode || isAuthorized;

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
    // if (searchTerm) {
    //   if (!hasBudgetExplanationModalBeSeen) {
    //     open();

    //     return;
    //   }
    // }

    runSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, runSearch, hasBudgetExplanationModalBeSeen]);

  return (
    <>
      <GlobalStyle />

      <Wrapper direction="row">
        <DataRetriever loader={<Preloader />}>
          <FormProvider {...form}>
            <SideBar onSubmit={handleSubmit} />

            <Universe />

            <AppBar onSubmit={handleSubmit} />
          </FormProvider>
        </DataRetriever>

        <AddNodeModal />

        <StyledToast />

        <BudgetExplanationModal />
      </Wrapper>
    </>
  );
};

const Wrapper = styled(Flex)`
  height: 100%;
  width: 100%;
  background-color: ${colors.black};
`;

const StyledToast = styled(ToastContainer)`
  .Toastify__toast {
    background-color: ${colors.body};
  }
  .Toastify__toast-body {
    background-color: ${colors.body};
    color: ${colors.white};
  }
  .Toastify__close-button {
    color: ${colors.white};
  }
  .Toastify__progress-bar--error {
    background-color: ${colors.primaryRed};
  }
  .Toastify__progress-bar--success {
    background-color: ${colors.primaryGreen};
  }
`;
