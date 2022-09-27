import { useState } from "react";
import styled, { css } from "styled-components";
import { useAppStore } from "~/stores/useAppStore";

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
  border: 1px solid #d0d5d8;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 100%;

  &:focus {
    border: none;
  }

  ${({ loading }) =>
    loading
      ? css`
          background-color: #ffffff;
          background-image: url("https://i.gifer.com/ZZ5H.gif");
          background-size: 25px 25px;
          background-position: right center;
          background-position-x: 95%;
          background-repeat: no-repeat;
        `
      : ""}
`;

export const SearchBar = ({ loading }: Props) => {
  const [search, setSearch] = useAppStore((s) => [
    s.currentSearch,
    s.setCurrentSearch,
  ]);

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
          setSearch(tempSearch);
        }
      }}
      placeholder="Search (10 sats)"
      type="text"
      value={tempSearch || ""}
    />
  );
};
