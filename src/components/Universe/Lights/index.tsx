import {
  GRAPH_FOG_COLOR,
  GRAPH_GROUND_COLOR,
  GRAPH_LIGHT_INTENSITY,
} from "~/constants";
import { colors } from "~/utils/colors";

export const Lights = () => (
  <>
    <hemisphereLight
      args={[colors.white, GRAPH_GROUND_COLOR, GRAPH_LIGHT_INTENSITY]}
    />

    <fog attach="fog" args={[GRAPH_FOG_COLOR, 1500, 4000]} />
  </>
);
