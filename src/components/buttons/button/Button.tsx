import type { JSX, ReactNode } from "react";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";
import { bool } from "@/utils/convert.ts";
import type { StateDisabledProps } from "@/components/types.ts";

export interface ButtonProps extends StateDisabledProps {
  /**
   * @default "small"
   */
  size?: ButtonSize;

  /**
   * @default "round"
   */
  shape?: ButtonShape;

  /**
   * @default "filled"
   */
  color?: ButtonColor;

  /**
   * Icon for button
   */
  icon?: ReactNode;

  /**
   * Label for button
   */
  children?: ReactNode;
}

export type ButtonSize = "xsmall" | "small" | "medium" | "large" | "xlarge";
export type ButtonShape = "round" | "square";
export type ButtonColor = "elevated" | "filled" | "tonal" | "outlined" | "text";

/**
 * Buttons prompt most actions in a UI.
 */
export default function Button(
  props: ButtonProps & JSX.IntrinsicElements["button"],
): JSX.Element {
  const {
    size = "small",
    shape = "round",
    color = "filled",
    state,
    icon,
    children,
    ...rest
  } = props;

  return (
    <>
      <button
        data-md="button"
        data-size={size}
        data-shape={shape}
        data-color={color}
        data-disabled={bool(state === "disabled")}
        {...rest}
      >
        {icon && <span data-icon="">{icon}</span>}
        {children && <span data-label="">{children}</span>}
      </button>

      <Style href="button">{style}</Style>
    </>
  );
}
