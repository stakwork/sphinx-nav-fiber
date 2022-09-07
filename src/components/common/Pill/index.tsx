import styled from "styled-components";

type PillProps = {
  selected?: boolean;
};

export const Pill = styled.div<PillProps>`
  align-items: center;
  background: ${({ selected }) => (selected ? "#CDE0FF" : "#F2F3F5")};
  border-radius: 20px;
  color: ${({ selected }) => (selected ? "#5D8FDD" : "#8E969C")};
  cursor: pointer;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 500;
  justify-content: center;
  line-height: 14px;
  margin-right: 10px;
  padding: 10px 20px;
`;
