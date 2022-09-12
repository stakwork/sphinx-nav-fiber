import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { DataRetriever } from "~/components/DataRetriever";
import { Universe } from "~/components/Universe";
import { useDataStore } from "~/stores/useDataStore";
import { colors } from "~/utils/colors";
import ContentBrowser from "./map/contentBrowser";

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const Content = () => {
  const fetchData = useDataStore((s) => s.fetchData);

  const [searchTerm, setSearchTerm]: any = useState("");
  const [currentSearchTerm, setCurrentSearchTerm]: any = useState("");

  const [dataFilter, setDataFilter]: any = useState([]);
  const [loading, setLoading]: any = useState(false);
  const [focusedNode, setFocusedNode]: any = useState(null);
  const [hoveredNode, setHoveredNode]: any = useState(null);
  const [showList, setShowList]: any = useState(false);

  const [openingAnimation, setOpeningAnimation] = useState(false);

  // const setXOffset = useDataStore((s) => s.setXOffset);

  // useEffect(() => {
  //   let offset = 0;
  //   if (currentSearchTerm) offset = MENU_WIDTH;
  //   setXOffset(offset);
  // }, [currentSearchTerm]);

  // const dimensions = useWindowSize();

  // cool animation on startup
  // search term should be at center on solar system

  // init
  // useEffect(() => {
  //   setTimeout(() => {
  //     setOpeningAnimation(false);
  //     const initData = getSampleData();
  //     setData(initData);
  //   }, 1000);
  // }, []);

  // const onNodeClicked = (node: any) => {
  //   if (node.noClick) return;

  //   setHoveredNode(null);
  //   console.log("[dd] node", node);
  //   if (node.type === "sun") {
  //     console.log("[dd] sun");
  //     return;
  //   }

  //   if (node.type === "topic") {
  //     getData(node.label);
  //   } else {
  //     setFocusedNode({
  //       ...node,
  //     });
  //     setShowList(true);
  //   }
  // };

  // function onNodeHovered(node: any, prevNode: any) {
  //   // console.log('node', node)
  //   // console.log('hoveredNode', hoveredNode)
  //   if (node?.fakeData) return;

  //   if (!node?.details && node?.type !== "guest") {
  //     setHoveredNode(null);
  //   } else if (hoveredNode && hoveredNode.id === node.id) {
  //     // nothing
  //     // console.log("SAME NODE", node)
  //   } else {
  //     // console.log("****SET NODE****", node)
  //     setHoveredNode(node);
  //   }
  // }

  useEffect(() => {
    console.log("[dd] mount");
    return () => console.log("[dd] unmount");
  }, []);

  const handleSearch = useCallback(
    async (search: string) => {
      console.log("[dd] handleSearch");
      setCurrentSearchTerm(search);

      await fetchData(search);
      // setFocusedNode(null);
      // setShowList(true);
      // setLoading(true);

      // try {
      // } catch (e) {
      //   console.log("e", e);
      // }
      // setCurrentSearchTerm(search);
      // setDataFilter([search]);
      // setLoading(false);
    },
    [fetchData]
  );

  function redirect() {
    let a = document.createElement("a");
    a.href = "https://sphinx.chat/";
    a.target = "_blank";
    a.click();
  }

  // const sharedSearchBar = useMemo(
  //   () => <SearchBar showList={!!currentSearchTerm} onChange={handleSearch} />,
  //   [handleSearch, currentSearchTerm]
  // );

  return (
    <Wrapper>
      {!currentSearchTerm && (
        <Header style={{ opacity: openingAnimation ? 0 : 1 }}>
          <Title style={{ fontWeight: 300, width: 260 }}>
            <b>Second</b>Brain
          </Title>

          <div style={{ display: "flex", width: 330 }}>
            <Button onClick={redirect}>Info</Button>
            <Button onClick={redirect}>Contribute</Button>
          </div>
        </Header>
      )}

      {currentSearchTerm && (
        <ContentBrowser
          loading={loading}
          dataFilter={dataFilter}
          setDataFilter={setDataFilter}
          currentSearchTerm={currentSearchTerm}
          searchComponent={null}
          focusedNode={focusedNode}
          setFocusedNode={setFocusedNode}
          close={() => {
            if (focusedNode) setFocusedNode(null);
            else if (searchTerm) setSearchTerm("");
            else setShowList(false);
          }}
        />
      )}

      <Universe />
    </Wrapper>
  );
};

export default function Body() {
  return (
    <DataRetriever>
      <Content />
    </DataRetriever>
  );
}

const Cover = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  user-select: none;
  align-items: center;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: #f1f1f1;
  font-size: 60px;
  font-weight: 400;
  z-index: 200000;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  border: 1px solid #000;
  background: #f1f1f1;
  border-radius: 40px;
  min-width: 100px;
  margin-left: 20px;
  cursor: pointer;
  pointer-events: auto;
`;

const Header = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 40px);
  pointer-events: none;
  transition: opacity 1s;
  z-index: 100;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  min-height: 100%;
  width: 100%;
  background: #f1f1f1;
  overflow: hidden;
  background-color: ${colors.gray500};
`;
