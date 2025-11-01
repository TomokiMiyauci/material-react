import type { JSX, ReactNode } from "react";
import { bool } from "@/utils/convert.ts";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";
import type { StateDisabledProps } from "@/components/types.ts";

export interface InputChipProps extends StateDisabledProps {
  selected?: boolean;
  leading?: ReactNode;
  trailing?: ReactNode;
  children?: ReactNode;
}

/**
 * Input chips represent discrete pieces of information entered by a user, such as Gmail contacts or filter options within a search field.
 */
export default function InputChip(
  props: InputChipProps & JSX.IntrinsicElements["span"],
): JSX.Element {
  const {
    selected,
    state,
    leading,
    trailing,
    children,
    ...rest
  } = props;

  return (
    <>
      <span
        data-md="input-chip"
        data-selected={bool(selected)}
        data-disabled={bool(state === "disabled")}
        {...rest}
      >
        {leading && <span data-leading="">{leading}</span>}

        {children && <span data-label="">{children}</span>}

        {trailing && <span data-trailing="">{trailing}</span>}
      </span>

      <Style href="filter-chip">{style}</Style>
    </>
  );
}
