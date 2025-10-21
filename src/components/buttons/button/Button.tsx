import type { JSX, ReactNode } from "react";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";
import { bool } from "@/utils/convert.ts";
import { Template } from "react-dsd";

export interface ButtonProps {
  /**
   * @default "small"
   */
  size?: ButtonSize;

  shape?: ButtonShape;
  color?: ButtonColor;
  disabled?: boolean;
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
        <span data-host="">
          <Template shadowrootmode="open">
            <slot name="icon" part="icon" />
            <slot part="label" />
          </Template>

          {children}
        </span>
      </button>

      <Style href="button">{style}</Style>
    </>
  );
}
