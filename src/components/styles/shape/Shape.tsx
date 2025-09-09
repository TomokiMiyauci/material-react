import type { JSX } from "react";
import style from "./style.css.ts";
import Style from "@internal/Style.tsx";

export interface ShapeProps {
  corner: Corner;
}

export interface Corner {
  none: string;
  full: string;
  small: string;
  medium: string;
  large: string;
  extraSmall: string;
  extraLarge: string;
}

export default function Shape(
  props: ShapeProps,
): JSX.Element {
  const { corner } = props;

  return <Style>{style(corner)}</Style>;
}
