import type { JSX, ReactNode } from "react";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";
import { Template } from "@miyauci/react-shadow-dom";

export interface PlainTooltipProps {
  children?: ReactNode;
}

/**
 * Plain tooltips briefly describe a UI element. They're often used for labelling UI elements with no text, like icon-only buttons and fields.
 *
 * @slot Text for tooltip
 */
export default function PlainTooltip(
  props: PlainTooltipProps & JSX.IntrinsicElements["span"],
): JSX.Element {
  const { children, ...rest } = props;
  return (
    <>
      <span data-md="plain-tooltip" role="tooltip" {...rest}>
        <span data-host="">
          <Template shadowRootMode="open">
            <slot />
          </Template>

          {children}
        </span>
      </span>
      <Style href="plain-tooltip">{style}</Style>
    </>
  );
}
