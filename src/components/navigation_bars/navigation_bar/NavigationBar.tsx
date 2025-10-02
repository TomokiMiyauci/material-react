import type { JSX } from "react";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";
import type { NavigationBarVariant } from "../types.ts";

export interface NavigationBarProps {
  /**
   * @default "vertical"
   */
  variant?: NavigationBarVariant;
}

export default function NavigationBar(
  props: NavigationBarProps & JSX.IntrinsicElements["div"],
): JSX.Element {
  const { variant = "vertical", ...rest } = props;

  return (
    <>
      <div data-md="navigation-bar" data-variant={variant} {...rest} />

      <Style href="navigation-bar">{style}</Style>
    </>
  );
}
