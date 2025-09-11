import type { JSX, ReactNode } from "react";
import style from "./_generated/style.ts";
import Style from "@internal/Style.tsx";

export type NavigationBarItemProps = {
  label?: ReactNode;
  active?: boolean;
  icon?: ReactNode;
};

export default function NavigationBarItem(
  props: NavigationBarItemProps & JSX.IntrinsicElements["div"],
): JSX.Element {
  const { label, active, icon, ...rest } = props;
  return (
    <>
      <div
        data-md="navigation-bar-item"
        data-active={active}
        {...rest}
      >
        <div data-indicator="">
          <span data-icon="">
            {icon}
          </span>
        </div>

        <span data-label-text="">
          {label}
        </span>
      </div>

      <Style href="navigation-bar-item">{style}</Style>
    </>
  );
}
