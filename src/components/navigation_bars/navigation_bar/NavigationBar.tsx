import type { JSX, ReactNode } from "react";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";

export interface NavigationBarProps {
  /**
   * @default "vertical"
   */
  variant?: NavigationBarVariant;
  children?: ReactNode;
}

export type NavigationBarVariant = "vertical" | "horizontal";

export default function NavigationBar(
  props: NavigationBarProps,
): JSX.Element {
  const { variant = "vertical", children, ...rest } = props;

  return (
    <>
      <div data-md="navigation-bar" data-variant={variant} {...rest}>
        {children}
      </div>

      <Style href="navigation-bar">{style}</Style>
    </>
  );
}
