import type { JSX, ReactNode } from "react";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";

export interface ExtendedFabProps {
  /**
   * @default "small"
   */
  size?: ExtendedFabSize;

  /**
   * @default "primary-container"
   */
  color?: ExtendedFabColor;

  /**
   * Icon for button
   */
  icon?: ReactNode;

  /**
   * Label text for button
   */
  children?: ReactNode;
}

export type ExtendedFabSize = "small" | "medium" | "large";

export type ExtendedFabColor =
  | "primary"
  | "primary-container"
  | "secondary"
  | "secondary-container"
  | "tertiary"
  | "tertiary-container";

/**
 * Extended FABs help people take primary actions. They're wider than FABs to accommodate a text label and larger target area.
 *
 * @example Basic
 * ```tsx
 * import { ExtendedFab } from "@miyauci/material-react";
 * <ExtendedFab>
 *   Label
 * </ExtendedFab>;
 * ```
 *
 * @example With Icon
 * ```tsx
 * import { ExtendedFab } from "@miyauci/material-react";
 *
 * <ExtendedFab icon={<span className="my-icon" />}>
 *   Label
 * </ExtendedFab>;
 * ```
 */
export default function ExtendedFab(
  props: ExtendedFabProps & JSX.IntrinsicElements["button"],
): JSX.Element {
  const {
    size = "small",
    color = "primary-container",
    icon,
    children,
    ...rest
  } = props;

  return (
    <>
      <button
        type="button"
        data-md="extended-fab"
        data-size={size}
        data-color={color}
        {...rest}
      >
        {icon && <span data-icon="">{icon}</span>}

        {children && <span data-label="">{children}</span>}
      </button>

      <Style href="extended-fab">{style}</Style>
    </>
  );
}
