import styled from "styled-components";

type Props = {
  showList?: boolean;
  loading?: boolean;
  value?: string;
  onChange: (value: string) => void;
  onEnter?: () => void;
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

export const SearchBar = ({
  loading,
  onEnter,
  onChange,
  value = "",
  showList,
}: Props) => {
  return (
    <Input
      showList={showList}
      className={loading ? "loading" : ""}
      disabled={loading}
      type="text"
      value={value}
      placeholder="Search ..."
      onKeyPress={(event: any) => {
        if (event.key === "Enter") {
          onEnter?.();
        }
      }}
      onChange={(e) => {
        const value = e.target.value;
        onChange(value);
      }}
    />
  );
};
