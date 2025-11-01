import type { JSX, ReactNode } from "react";
import style from "./_generated/style.ts";
import Style from "@internal/Style.tsx";
import { bool } from "@/utils/convert.ts";

export type NavigationRailItemProps = {
  active?: boolean;
  orientation?: NavigationRailItemOrientation;
  icon?: ReactNode;
  children?: ReactNode;
};

type NavigationRailItemOrientation = "horizontal" | "vertical";

export default function NavigationRailItem(
  props: NavigationRailItemProps,
): JSX.Element {
  const { children, active, icon, orientation, ...rest } = props;
  return (
    <>
      <div
        data-md="navigation-rail-item"
        data-active={bool(active)}
        data-orientation={orientation}
        {...rest}
      >
        <div data-container="">
          {icon && (
            <div data-icon-container="">
              <span data-icon="">{icon}</span>
            </div>
          )}

          {children && <span data-label="">{children}</span>}
        </div>
      </div>

      <Style href="navigation-rail-item">{style}</Style>
    </>
  );
}
