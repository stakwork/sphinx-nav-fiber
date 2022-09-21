import { css } from 'styled-components';

type Border = {
  borderColor: string;
  borderRadius: number;
  borderRadiusBottomLeft: number;
  borderRadiusBottomRight: number;
  borderRadiusTopLeft: number;
  borderRadiusTopRight: number;
  borderSize: number;
};

export type BorderProps = Partial<Border>;

const switchProp = (prop: keyof Border, value: Border[keyof Border]) => {
  switch (prop) {
    case 'borderColor':
      return `border-color: ${value};`;
    case 'borderRadius':
      return `border-radius: ${value}px;`;
    case 'borderRadiusBottomLeft':
      return `border-bottom-left-radius: ${value}px;`;
    case 'borderRadiusBottomRight':
      return `border-bottom-right-radius: ${value}px;`;
    case 'borderRadiusTopLeft':
      return `border-top-left-radius: ${value}px;`;
    case 'borderRadiusTopRight':
      return `border-top-right-radius: ${value}px;`;
    case 'borderSize':
      return `
        border-style: solid;
        border-width: ${value}px;
      `;
    default:
      return '';
  }
};

const getPropStyle = <P extends keyof Border>(prop: P, value?: Border[P]) => {
  if (value === undefined) {
    return '';
  }

  // NOTE: The reason why we call a separate function instead of directly having the switch
  // statement is that the type of `prop` is not narrowed when using `P extends Keys`.
  return switchProp(prop, value);
};

type OverflowHiddenProps = Pick<
  BorderProps,
  | 'borderRadius'
  | 'borderRadiusBottomLeft'
  | 'borderRadiusBottomRight'
  | 'borderRadiusTopLeft'
  | 'borderRadiusTopRight'
>;

const getOverflowHidden = ({
  borderRadius,
  borderRadiusBottomLeft,
  borderRadiusBottomRight,
  borderRadiusTopLeft,
  borderRadiusTopRight,
}: OverflowHiddenProps) => {
  if (
    [
      borderRadius,
      borderRadiusBottomLeft,
      borderRadiusBottomRight,
      borderRadiusTopLeft,
      borderRadiusTopRight,
    ].every(value => value === undefined)
  ) {
    return '';
  }

  return 'overflow: hidden;';
};

type Props = BorderProps;

export const border = css<Props>`
  ${({
    borderColor,
    borderRadius,
    borderRadiusBottomLeft,
    borderRadiusBottomRight,
    borderRadiusTopLeft,
    borderRadiusTopRight,
    borderSize,
  }) => `
    ${getOverflowHidden({
      borderRadius,
      borderRadiusBottomLeft,
      borderRadiusBottomRight,
      borderRadiusTopLeft,
      borderRadiusTopRight,
    })}
    ${getPropStyle('borderColor', borderColor)}
    ${getPropStyle('borderRadius', borderRadius)}
    ${getPropStyle('borderRadiusBottomLeft', borderRadiusBottomLeft)}
    ${getPropStyle('borderRadiusBottomRight', borderRadiusBottomRight)}
    ${getPropStyle('borderRadiusTopLeft', borderRadiusTopLeft)}
    ${getPropStyle('borderRadiusTopRight', borderRadiusTopRight)}
    ${getPropStyle('borderSize', borderSize)}
  `}
`;
