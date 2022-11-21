import styled, { css } from "styled-components";
import { Flex } from "~/components/common/Flex";
import { Text, TextKind } from "~/components/common/Text";
import { ColorName } from "~/utils/colors";

type Props = {
  background?: ColorName;
  children: string;
  disabled?: boolean;
  kind?: ButtonKind;
  onClick?: () => void;
  textColor?: ColorName;
  type?: "submit";
};

const getButtonKindDimensions = ({ kind }: Pick<Props, "kind">) => {
  switch (kind) {
    case "small":
      return css`
        padding: 4px 8px;
        border-radius: 8px;
      `;
    case "big":
      return css`
        padding: 16px 24px;
        border-radius: 8px;
      `;
    default:
      return css`
        padding: 8px 16px;
        border-radius: 8px;
      `;
  }
};

const getTextKind = ({ kind }: Pick<Props, "kind">): TextKind => {
  switch (kind) {
    case "small":
      return "tinyBold";
    case "big":
      return "mediumBold";
    default:
      return "regularBold";
  }
};

const Wrapper = styled(Flex)<Pick<Props, "kind" | "disabled">>`
  border: none;
  cursor: pointer;

  ${getButtonKindDimensions}

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.5 : 0.9)};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`;

type ButtonKind = "small" | "regular" | "big";

export const Button = ({
  background = "primaryButton",
  children,
  disabled,
  kind = "regular",
  onClick,
  textColor = "white",
  type,
}: Props) => (
  <Wrapper
    as="button"
    background={background}
    disabled={disabled}
    kind={kind}
    onClick={onClick}
    type={type}
  >
    <Text color={textColor} kind={getTextKind({ kind })}>
      {children}
    </Text>
  </Wrapper>
);
