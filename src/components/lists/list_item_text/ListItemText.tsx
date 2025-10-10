import type { JSX, ReactNode } from "react";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";

export interface ListItemTextProps {
  children?: ReactNode;
}

export default function ListItemText(
  props: ListItemTextProps & JSX.IntrinsicElements["span"],
): JSX.Element {
  const { children, ...rest } = props;

  return (
    <>
      <span data-md="list-item-text" {...rest}>{children}</span>
      <Style href="list-item-text">{style}</Style>
    </>
  );
}
