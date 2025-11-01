import type { JSX } from "react";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";

export default function ShapeTokens(
  props: JSX.IntrinsicElements["style"],
): JSX.Element {
  return <Style href="shape" {...props}>{style}</Style>;
}
