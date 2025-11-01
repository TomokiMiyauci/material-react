import type { JSX, ReactNode } from "react";
import style from "./_generated/style.ts";
import Style from "@internal/Style.tsx";

export interface IconButtonProps {
  /**
   * @default "small"
   */
  size?: IconButtonSize;

  /**
   * @default "round"
   */
  shape?: IconButtonShape;

  /**
   * @default "default"
   */
  width?: IconButtonWidth;

  /**
   * @default "filled"
   */
  color?: IconButtonColor;

  /**
   * Icon for button
   */
  children?: ReactNode;
}

export type IconButtonSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

export type IconButtonShape = "round" | "square";

export type IconButtonColor = "filled" | "tonal" | "outlined" | "standard";

export type IconButtonWidth = "default" | "narrow" | "wide";

const NAME = "icon-button";

const DEFAULT_PROPS = {
  size: "small",
  shape: "round",
  width: "default",
  color: "filled",
} satisfies IconButtonProps;

/**
 * Icon buttons help people take minor actions with one tap.
 */
export default function IconButton(
  props:
    & IconButtonProps
    & JSX.IntrinsicElements["button"],
): JSX.Element {
  const {
    size = DEFAULT_PROPS.size,
    shape = DEFAULT_PROPS.shape,
    width = DEFAULT_PROPS.width,
    color = DEFAULT_PROPS.color,
    children,
    ...rest
  } = props;

  return (
    <>
      <button
        data-md={NAME}
        data-size={size}
        data-shape={shape}
        data-width={width}
        data-color={color}
        {...rest}
      >
        {children && <span data-icon="">{children}</span>}
      </button>

      <Style href={NAME}>{style}</Style>
    </>
  );
}
