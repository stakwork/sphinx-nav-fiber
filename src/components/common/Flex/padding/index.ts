import { css } from 'styled-components';

export type Padding = {
  p: number;
  pb: number;
  pl: number;
  pr: number;
  pt: number;
  px: number;
  py: number;
};

export type PaddingProps = Partial<Padding>;

const switchProp = (prop: keyof Padding, value: Padding[keyof Padding]) => {
  switch (prop) {
    case 'p':
      return `padding: ${value}px;`;
    case 'pb':
      return `padding-bottom: ${value}px;`;
    case 'pl':
      return `padding-left: ${value}px;`;
    case 'pr':
      return `padding-right: ${value}px;`;
    case 'pt':
      return `padding-top: ${value}px;`;
    case 'px':
      return `
        padding-left: ${value}px;
        padding-right: ${value}px;
      `;
    case 'py':
      return `
        padding-bottom: ${value}px;
        padding-top: ${value}px;
      `;
  }
};

const getPropStyle = <P extends keyof Padding>(prop: P, value?: Padding[P]) => {
  if (value === undefined) {
    return '';
  }

  // NOTE: The reason why we call a separate function instead of directly having the switch
  // statement is that the type of `prop` is not narrowed when using `P extends Keys`.
  return switchProp(prop, value);
};

type Props = PaddingProps;

export const padding = css<Props>`
  ${({ p, pb, pl, pr, pt, px, py }) => `
    ${getPropStyle('p', p)}
    ${getPropStyle('px', px)}
    ${getPropStyle('py', py)}
    ${getPropStyle('pb', pb)}
    ${getPropStyle('pl', pl)}
    ${getPropStyle('pr', pr)}
    ${getPropStyle('pt', pt)}
  `}
`;
