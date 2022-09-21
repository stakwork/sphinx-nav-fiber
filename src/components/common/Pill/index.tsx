import styled, { css } from "styled-components";
import { Flex } from "~/components/common/Flex";
import { colors } from "~/utils/colors";

type PillProps = {
  disabled?: boolean;
  selected?: boolean;
};

export const Pill = styled(Flex).attrs({
  align: "center",
  direction: "row",
  grow: 0,
  justify: "center",
  shrink: 0,
})<PillProps>`
  background: ${({ selected }) => (selected ? colors.gray200 : colors.gray100)};
  border-radius: 20px;
  color: ${colors.gray400};
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  margin-right: 10px;

  opacity: ${({ disabled }) => (disabled ? "0.7" : "1")};

  padding: 10px 20px;

${({ disabled }) =>
  disabled &&
  css`
    cursor: none;
    opacity: 0.5;
  `}
    
  }

  &:hover {
    background: ${({ selected }) =>
      selected ? colors.gray300 : colors.gray200};
  }
`;
