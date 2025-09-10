import type { JSX } from "react";
import style from "./_generated/style.ts";
import Style from "@internal/Style.tsx";

export interface BadgeProps {
  size?: BadgeSize;
}

type BadgeSize = "small" | "large";

export default function Badge(
  props: BadgeProps & JSX.IntrinsicElements["span"],
): JSX.Element {
  const { size, children, ...rest } = props;

  return (
    <>
      <span data-md="badge" data-size={size} {...rest}>
        {size === "large" && children}
      </span>

      <Style href="badge">{style}</Style>
    </>
  );
}
