import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  JSX,
  ReactNode,
} from "react";
import style from "./_generated/style.ts";
import Style from "../_internal/Style.tsx";

export interface IconButtonProps extends
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /**
   * @default "sm"
   */
  size?: ButtonSize;

  /**
   * @default "round"
   */
  shape?: ButtonShape;

  /**
   * @default "default"
   */
  width?: ButtonWidth;

  /**
   * @default "filled"
   */
  color?: ButtonColor;

  icon?: ReactNode;
}

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export type ButtonShape = "round" | "square";

export type ButtonColor = "filled" | "tonal" | "outlined" | "standard";

export type ButtonWidth = "default" | "narrow" | "wide";

const NAME = "icon-button";

const DEFAULT_PROPS = {
  size: "sm",
  shape: "round",
  width: "default",
  color: "filled",
} satisfies IconButtonProps;

/**
 * Icon buttons help people take minor actions with one tap.
 */
export default function IconButton(props: IconButtonProps): JSX.Element {
  const {
    size = DEFAULT_PROPS.size,
    shape = DEFAULT_PROPS.shape,
    width = DEFAULT_PROPS.width,
    color = DEFAULT_PROPS.color,
    icon,
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
        <span data-icon="">{icon}</span>
      </button>

      <Style href={NAME}>{style}</Style>
    </>
  );
}
