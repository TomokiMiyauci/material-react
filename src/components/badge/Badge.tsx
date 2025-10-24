import type { JSX, ReactNode } from "react";
import style from "./_generated/style.ts";
import Style from "@internal/Style.tsx";
import { Template } from "@miyauci/react-shadow-dom";

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
        <Template shadowRootMode="open">
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
