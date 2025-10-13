import type { JSX, ReactNode } from "react";
import style from "./_generated/style.ts";
import Style from "@internal/Style.tsx";
import Template from "@internal/dsd/Template.tsx";

export interface BadgeProps {
  size?: BadgeSize;

  /**
   * The text to be displayed.
   */
  children?: ReactNode;
}

type BadgeSize = "small" | "large";

export default function Badge(
  props: BadgeProps & JSX.IntrinsicElements["span"],
): JSX.Element {
  const { size, children, ...rest } = props;

  return (
    <>
      <span data-md="badge" data-size={size}>
        <Template shadowrootmode="open">
          <span part="container" {...rest}>
            <slot part="text"></slot>
          </span>
        </Template>

        {children}
      </span>

      <Style href="badge">{style}</Style>
    </>
  );
}
