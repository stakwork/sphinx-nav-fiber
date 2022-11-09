import { cssWithMediaQuery } from "./utils/cssWithMediaQuery";

export const breakpoints = {
  large: 1024,
  medium: 640,
  small: 0,
} as const;

export type BreakpointName = keyof typeof breakpoints;

export const media = {
  large: cssWithMediaQuery(`(min-width: ${breakpoints.large}px)`),
  medium: cssWithMediaQuery(`(min-width: ${breakpoints.medium}px)`),
  mediumOnly: cssWithMediaQuery(
    `(min-width: ${breakpoints.medium}px) and (max-width: ${
      breakpoints.large - 1
    }px)`
  ),
  small: cssWithMediaQuery(`(min-width: ${breakpoints.small}px)`),
  smallOnly: cssWithMediaQuery(
    `(min-width: ${breakpoints.small}px) and (max-width: ${
      breakpoints.medium - 1
    }px)`
  ),
};
