import type { JSX, ReactNode } from "react";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";
import { bool } from "@/utils/convert.ts";

export interface ButtonProps {
  size?: ButtonSize;
  shape?: ButtonShape;
  color?: ButtonColor;
  label?: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
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
    label,
    color = "filled",
    icon,
    disabled,
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
        <span data-label="">{label}</span>
      </button>

      <Style href="button">{style}</Style>
    </>
  );
}
