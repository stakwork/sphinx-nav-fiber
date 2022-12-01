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
  shape?: "rounded" | "squared";
  textColor?: ColorName;
  type?: "submit" | "button";
};

const getButtonKindDimensions = ({
  kind,
  shape,
}: Pick<Props, "kind" | "shape">) => {
  switch (kind) {
    case "small":
      return css`
        padding: 4px 8px;
        border-radius: ${shape === "rounded" ? "16px" : "8px"};
        height: 32px;
      `;
    case "big":
      return css`
        padding: 16px 24px;
        border-radius: ${shape === "rounded" ? "24px" : "8px"};
        height: 48px;
      `;
    default:
      return css`
        padding: 8px 16px;
        border-radius: ${shape === "rounded" ? "32px" : "8px"};
        height: 64px;
      `;
  }
};

const getTextKind = ({ kind }: Pick<Props, "kind">): TextKind => {
  switch (kind) {
    case "small":
      return "regularBold";
    case "big":
      return "mediumBold";
    default:
      return "regularBold";
  }
};

const Wrapper = styled(Flex).attrs({
  align: "center",
  justify: "center",
})<Pick<Props, "kind" | "disabled" | "shape">>`
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
  shape = "squared",
  textColor = "white",
  type,
}: Props) => (
  <Wrapper
    as="button"
    background={background}
    disabled={disabled}
    kind={kind}
    onClick={onClick}
    shape={shape}
    type={type}
  >
    <Text color={textColor} kind={getTextKind({ kind })}>
      {children}
    </Text>
  </Wrapper>
);
