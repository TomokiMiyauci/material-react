import type { JSX } from "react";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";

export interface PlainTooltipProps {
  text: string;
}

/**
 * Plain tooltips briefly describe a UI element. They're often used for labelling UI elements with no text, like icon-only buttons and fields.
 */
export default function PlainTooltip(
  props: PlainTooltipProps & JSX.IntrinsicElements["span"],
): JSX.Element {
  const { text } = props;
  return (
    <>
      <span data-md="plain-tooltip" role="tooltip" {...props}>{text}</span>
      <Style href="plain-tooltip">{style}</Style>
    </>
  );
}
