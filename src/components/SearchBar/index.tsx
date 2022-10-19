import { useState } from "react";
import styled, { css } from "styled-components";
import { useAppStore } from "~/stores/useAppStore";
import { useDataStore } from "~/stores/useDataStore";
import { colors } from "~/utils/colors";

type Props = {
  loading?: boolean;
};

const Input = styled.input<{ loading?: boolean }>`
  pointer-events: auto;
  border-radius: 100px;
  min-width: 300px;
  height: 50px;
  padding: 0 20px;
  z-index: 2;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 100%;
  color: #fff;
  background-color: rgba(19, 24, 29, 1);
  box-shadow: none;
  border: none;

  &:focus {
    outline: 1px solid ${colors.lightBlue100};
  }

  &:placeholder {
    color: ${colors.textPlaceholder};
  }

  ${({ loading }) =>
    loading
      ? css`
          background-image: url("https://i.gifer.com/ZZ5H.gif");
          background-size: 25px 25px;
          background-position: right center;
          background-position-x: 95%;
          background-repeat: no-repeat;
        `
      : ""}
`;

export const SearchBar = ({ loading }: Props) => {
  const [search, setSearch, setRelevanceSelected] = useAppStore((s) => [
    s.currentSearch,
    s.setCurrentSearch,
    s.setRelevanceSelected,
  ]);

  const setSelectedNode = useDataStore((s) => s.setSelectedNode);

  const [tempSearch, setTempSearch] = useState(() => search);

  return (
    <Input
      disabled={loading}
      loading={loading}
      onChange={(e) => {
        const { value } = e.target;

        setTempSearch(value);
      }}
      onKeyPress={(event) => {
        if (event.key === "Enter" && !!tempSearch) {
          setSelectedNode(null);
          setRelevanceSelected(false);
          setSearch(tempSearch);
        }
      }}
      placeholder="Search (10 sats)"
      type="text"
      value={tempSearch || ""}
    />
  );
};
