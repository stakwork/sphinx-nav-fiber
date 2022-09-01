import { DependencyList, useEffect, useRef, useState } from "react";
import styled from "styled-components";

type Props = {
  showList?: boolean;
  loading?: boolean;
  onChange: (value: string) => void;
};

const Input = styled.input<{ showList?: boolean }>`
  pointer-events: auto;
  border-radius: 100px;
  min-width: 300px;
  height: 50px;
  padding: 0 20px;
  z-index: 2;
  border: 1px solid #d0d5d8;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  &:focus {
    border: none;
  }

  width: ${({ showList }) => (showList ? "100%" : "40%")};
`;

function useDidUpdateEffect(fn: React.EffectCallback, inputs: DependencyList) {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      return fn();
    }
    didMountRef.current = true;
  }, inputs);
}

export const SearchBar = ({ loading, onChange, showList }: Props) => {
  const [search, setSearch] = useState<string>();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (search !== undefined) {
        onChange(search);
      }
    }, 500);
  }, [search]);

  return (
    <Input
      showList={showList}
      className={loading ? "loading" : ""}
      disabled={loading}
      type="text"
      value={search || ""}
      placeholder="Search..."
      onChange={(e) => {
        const value = e.target.value;

        setSearch(value);
      }}
    />
  );
};
