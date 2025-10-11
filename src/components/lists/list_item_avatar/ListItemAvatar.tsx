import type { JSX, ReactNode } from "react";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";

export interface ListItemAvatarProps {
  children?: ReactNode;
}

export default function ListItemAvatar(
  props: ListItemAvatarProps & JSX.IntrinsicElements["span"],
): JSX.Element {
  const { children, ...rest } = props;

  return (
    <>
      <span data-md="list-item-avatar" {...rest}>{children}</span>

      <Style href="list-item-avatar">{style}</Style>
    </>
  );
}
