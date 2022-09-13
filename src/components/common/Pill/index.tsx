import styled from "styled-components";
import { Flex } from "~/components/common/Flex";

type PillProps = {
  selected?: boolean;
};

export const Pill = styled(Flex).attrs({
  align: "center",
  direction: "row",
  grow: 0,
  shrink: 0,
  justify: "center",
})<PillProps>`
  background: ${({ selected }) => (selected ? "#CDE0FF" : "#F2F3F5")};
  border-radius: 20px;
  color: ${({ selected }) => (selected ? "#5D8FDD" : "#8E969C")};
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  margin-right: 10px;
  padding: 10px 20px;
`;
