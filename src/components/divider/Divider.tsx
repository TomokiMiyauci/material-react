import type { JSX } from "react";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";

export interface DividerProps {
  variant?: "full" | "inset" | "middle-inset";

  /**
   * @default "horizontal"
   */
  orientation?: "vertical" | "horizontal";
}

/**
 * A divider is a thin line used to group content in lists and layouts.
 */
export default function Divider(
  props: DividerProps & JSX.IntrinsicElements["hr"],
): JSX.Element {
  const { variant, orientation = "horizontal", ...rest } = props;

  return (
    <>
      <hr
        data-md="divider"
        role="separator"
        data-orientation={orientation}
        data-variant={variant}
        {...rest}
      />

      <Style href="divider">{style}</Style>
    </>
  );
}
