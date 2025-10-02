import type { JSX, ReactNode } from "react";
import style from "./_generated/style.ts";
import Style from "@internal/Style.tsx";
import BadgePositioner from "@internal/badge_positioner/BadgePositioner.tsx";
import { bool } from "@/utils/convert.ts";
import type { NavigationBarVariant } from "../types.ts";

export type NavigationBarItemProps = {
  label?: ReactNode;
  active?: boolean;
  icon?: ReactNode;
  badge?: ReactNode;
  variant?: NavigationBarVariant;
};

export default function NavigationBarItem(
  props: NavigationBarItemProps & JSX.IntrinsicElements["div"],
): JSX.Element {
  const { label, active, icon, badge, variant, ...rest } = props;

  return (
    <>
      <div
        data-md="navigation-bar-item"
        data-active={bool(active)}
        data-variant={variant}
        {...rest}
      >
        <div data-container="">
          <div data-icon-container="">
            <span data-icon="">
              {icon}
              {badge && <BadgePositioner>{badge}</BadgePositioner>}
            </span>
          </div>

          <span data-label-text="">
            {label}
          </span>
        </div>
      </div>

      <Style href="navigation-bar-item">{style}</Style>
    </>
  );
}
