import type { JSX, ReactNode } from "react";
import style from "./_generated/style.ts";
import Style from "@internal/Style.tsx";
import { bool } from "@/utils/convert.ts";

export interface SwitchProps {
  disabled?: boolean;
  selected?: boolean;
  icon?: ReactNode;
}

/**
 * Switches toggle the selection of an item on or off.
 */
export default function Switch(
  props: SwitchProps & JSX.IntrinsicElements["button"],
): JSX.Element {
  const { selected, disabled, icon, ...rest } = props;

  return (
    <>
      <button
        data-md="switch"
        data-selected={bool(selected)}
        data-disabled={bool(disabled)}
        role="switch"
        aria-checked={selected ?? false}
        {...rest}
      >
        <span data-handle-container="">
          <span data-handle="">
            {icon && <span data-icon="">{icon}</span>}
          </span>
        </span>
      </button>

      <Style href="switch">{style}</Style>
    </>
  );
}
