import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useAppStore } from "~/stores/useAppStore";

type Props = {
  showList?: boolean;
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

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

  }, [setSearch, tempSearch]);

  return (
    <Input
      loading={loading}
      disabled={loading}
      type="text"
      value={tempSearch || ""}
      placeholder="Search (10 sats)"
      onChange={(e) => {
        const value = e.target.value;

        setTempSearch(value);
      }}
      onKeyPress={(event: any) => {
        if (event.key === "Enter" && !!tempSearch) {
         setSearch(tempSearch) 
        }
      }}
    />
  );
};
