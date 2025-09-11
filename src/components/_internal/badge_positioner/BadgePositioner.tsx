import type { JSX, ReactNode } from "react";
import style from "./_generated/style.ts";
import Style from "@internal/Style.tsx";

export interface BadgePositionerProps {
  children?: ReactNode;
}

export default function BadgePositioner(
  props: BadgePositionerProps,
): JSX.Element {
  return (
    <>
      <div data-md="badge-positioner">
        {props.children}
      </div>

      <Style href="badge-positioner">{style}</Style>
    </>
  );
}
