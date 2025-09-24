import type { JSX, ReactNode } from "react";
import { bool } from "@/utils/convert.ts";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";

export interface InputChipProps {
  selected?: boolean;
  disabled?: boolean;
  label?: ReactNode;
  leadingType?: LeadingType;
  leading?: ReactNode;
  trailing?: ReactNode;
}

export type LeadingType = "avatar" | "icon";

export default function InputChip(
  props: InputChipProps & JSX.IntrinsicElements["span"],
): JSX.Element {
  const {
    selected,
    disabled,
    label,
    leading,
    trailing,
    leadingType = "icon",
    ...rest
  } = props;

  return (
    <>
      <span
        data-md="input-chip"
        data-selected={bool(selected)}
        data-disabled={bool(disabled)}
        {...rest}
      >
        {leading && leadingType && (
          <span data-leading={leadingType}>{leading}</span>
        )}

        <span data-label="">{label}</span>

        {trailing && <span data-trailing="">{trailing}</span>}
      </span>

      <Style href="filter-chip">{style}</Style>
    </>
  );
}
