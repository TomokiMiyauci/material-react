import type { JSX } from "react";
import Elevation from "./elevation/Elevation.tsx";
import FocusIndicator from "./focus_indicator/FocusIndicator.tsx";
import Shape from "./shape/Shape.tsx";
import StateLayer from "./state_layer/StateLayer.tsx";
import Typescale from "./typescale/Typescale.tsx";
import Light from "./colors/light/Light.tsx";

export default function SysTokens(): JSX.Element {
  return (
    <>
      <Elevation />
      <FocusIndicator />
      <Shape />
      <StateLayer />
      <Typescale />
      <Light />
    </>
  );
}
