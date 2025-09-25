import type { JSX, ReactNode } from "react";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";

export interface NavigationRailProps {
  /**
   * @default "collapsed"
   */
  variant?: NavigationRailVariant;

  /**
   * @default "standard"
   */
  layout?: NavigationRailExtendedLayout;
  children?: ReactNode;
}

export type NavigationRailExtendedLayout = "standard" | "modal";

export type NavigationRailVariant = "collapsed" | "expanded";

export default function NavigationRail(
  props: NavigationRailProps,
): JSX.Element {
  const { variant = "collapsed", layout = "standard", children, ...rest } =
    props;

  return (
    <>
      <div
        data-md="navigation-rail"
        data-variant={variant}
        data-layout={layout}
        {...rest}
      >
        <div data-navigation-items="">
          {children}
        </div>
      </div>

      <Style href="navigation-rail">{style}</Style>
    </>
  );
}
