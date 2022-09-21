export const colors = {
  black: "rgb(0, 0, 0)",
  gray100: "rgba(51, 51, 51, 0.2)",
  gray200: "rgba(51, 51, 51, 0.4)",
  gray300: "rgba(51, 51, 51, 0.6)",
  gray400: "rgba(51, 51, 51, 0.8)",
  gray500: "rgb(51, 51, 51)",
  green100: "rgba(73, 201, 152, 0.2)",
  green200: "rgba(73, 201, 152, 0.4)",
  green300: "rgba(73, 201, 152, 0.6)",
  green400: "rgba(73, 201, 152, 0.8)",
  green500: "rgba(73, 201, 152, 1)",
  lightBlue100: "rgba(93, 143, 221, 0.2)",
  lightBlue200: "rgba(93, 143, 221, 0.4)",
  lightBlue300: "rgba(93, 143, 221, 0.6)",
  lightBlue400: "rgba(93, 143, 221, 0.8)",
  lightBlue500: "rgba(93, 143, 221, 1)",
  white: "rgb(255, 255, 255)",
} as const;

export type ColorName = keyof typeof colors;
