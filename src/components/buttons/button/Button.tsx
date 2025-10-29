import type { JSX, ReactNode } from "react";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";
import { bool } from "@/utils/convert.ts";

export interface ButtonProps {
  /**
   * @default "small"
   */
  size?: ButtonSize;

  shape?: ButtonShape;
  color?: ButtonColor;
  disabled?: boolean;

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
    disabled,
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
        data-disabled={bool(disabled)}
        {...rest}
      >
        {icon && <span data-icon="">{icon}</span>}
        {children && <span data-label="">{children}</span>}
      </button>

      <Style href="button">{style}</Style>
    </>
  );
}
