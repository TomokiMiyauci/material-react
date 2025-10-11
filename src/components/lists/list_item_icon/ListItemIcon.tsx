import type { JSX, ReactNode } from "react";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";

export interface ListItemIconProps {
  children?: ReactNode;
}
export default function ListItemIcon(
  props: ListItemIconProps & JSX.IntrinsicElements["span"],
): JSX.Element {
  const { children, ...rest } = props;

  return (
    <>
      <span data-md="list-item-icon" {...rest}>
        {children}
      </span>

      <Style href="list-item-icon">{style}</Style>
    </>
  );
}
