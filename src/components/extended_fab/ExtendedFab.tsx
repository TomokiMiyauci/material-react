import type { JSX, ReactNode } from "react";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";
import { Template } from "@miyauci/react-shadow-dom";

export interface ExtendedFabProps {
  /**
   * @default "small"
   */
  size?: ExtendedFabSize;

  /**
   * @default "primary-container"
   */
  color?: ExtendedFabColor;
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
 * @slot Label text for button
 * @slot icon - Icon for button
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
 * <ExtendedFab>
 *   <span slot="icon" className="my-icon" />
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
        <span data-host="">
          <Template shadowRootMode="open">
            <slot part="icon" name="icon" />
            <slot part="label" />
          </Template>

          {children}
        </span>
      </button>

      <Style href="extended-fab">{style}</Style>
    </>
  );
}
