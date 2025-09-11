import type { JSX, ReactNode } from "react";
import style from "./_generated/style.ts";
import Style from "@internal/Style.tsx";
import BadgePositioner from "@internal/badge_positioner/BadgePositioner.tsx";
import { bool } from "@/utils/convert.ts";

export type NavigationBarItemProps = {
  label?: ReactNode;
  active?: boolean;
  icon?: ReactNode;
  badge?: ReactNode;
};

export default function NavigationBarItem(
  props: NavigationBarItemProps & JSX.IntrinsicElements["div"],
): JSX.Element {
  const { label, active, icon, badge, ...rest } = props;

  return (
    <>
      <div
        data-md="navigation-bar-item"
        data-active={bool(active)}
        {...rest}
      >
        <div data-indicator="">
          <span data-icon="">
            {icon}
            {badge && <BadgePositioner>{badge}</BadgePositioner>}
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
