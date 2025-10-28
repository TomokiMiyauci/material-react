import type { JSX, ReactNode } from "react";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";
import { Template } from "@miyauci/react-shadow-dom";

export interface FabProps {
  size?: FabSize;

  /**
   * @default "primary-container"
   */
  color?: FabColor;
  children?: ReactNode;
}

export type FabSize = "baseline" | "medium" | "large";

export type FabColor =
  | "primary"
  | "primary-container"
  | "secondary"
  | "secondary-container"
  | "tertiary"
  | "tertiary-container";

/**
 * Floating action buttons (FABs) help people take primary actions
 *
 * @slot Icon for button
 */
export default function Fab(
  props: FabProps & JSX.IntrinsicElements["button"],
): JSX.Element {
  const { size, color = "primary-container", children, ...rest } = props;

  return (
    <>
      <button
        type="button"
        data-md="fab"
        data-size={size}
        data-color={color}
        {...rest}
      >
        <span data-host="">
          <Template shadowRootMode="open">
            <slot />
          </Template>
          {children}
        </span>
      </button>

      <Style href="fab">{style}</Style>
    </>
  );
}
