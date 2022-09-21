import styled, { css } from "styled-components";
import { ColorName, colors } from "~/utils/colors";

const fontSizes: Record<TextKind, number> = {
  bigHeading: 30,
  bigHeadingBold: 30,
  heading: 24,
  headingBold: 24,
  medium: 16,
  mediumBold: 16,
  regular: 14,
  regularBold: 14,
  tiny: 12,
  tinyBold: 12,
};

const fontWeights: Record<TextKind, number> = {
  bigHeading: 400,
  bigHeadingBold: 700,
  heading: 400,
  headingBold: 700,
  medium: 500,
  mediumBold: 600,
  regular: 500,
  regularBold: 600,
  tiny: 300,
  tinyBold: 500,
};

type TextKindRegular = "bigHeading" | "heading" | "regular" | "medium" | "tiny";

type TextKindBold = `${TextKindRegular}Bold`;

type TextKind = TextKindRegular | TextKindBold;

type Props = {
  color?: ColorName;
  kind?: TextKind;
};

const style = css<Props>`
  ${({ kind = "regular" }) => `
      font-size: ${fontSizes[kind]}px;
      font-weight: ${fontWeights[kind]};
    `}
`;

export const Text = styled.span<Props>`
  ${style}

  ${({ color = "black" }) => `color: ${colors[color]};`}
`;
