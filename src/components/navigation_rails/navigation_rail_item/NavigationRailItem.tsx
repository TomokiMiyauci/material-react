import type { JSX, ReactNode } from "react";
import style from "./_generated/style.ts";
import Style from "@internal/Style.tsx";

export type NavigationRailItemProps = {
  label?: string;
  active?: boolean;
  icon?: ReactNode;
};

export default function NavigationRailItem(
  props: NavigationRailItemProps,
): JSX.Element {
  const { label, active, icon, ...rest } = props;
  return (
    <>
      <div
        data-md="navigation-rail-item"
        data-active={active}
        {...rest}
      >
        <div data-container="">
          <span data-icon="">
            {icon}
          </span>

          <span data-label-text="">
            {label}
          </span>
        </div>
      </div>

      <Style href="navigation-rail-item">{style}</Style>
    </>
  );
}
