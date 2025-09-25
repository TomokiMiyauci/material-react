import type { JSX, ReactNode } from "react";
import { bool } from "@/utils/convert.ts";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";

export interface FilterChipProps {
  selected?: boolean;
  elevated?: boolean;
  disabled?: boolean;
  label?: ReactNode;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

/**
 * Filter chips use tags or descriptive words to filter content. They can be a good
 * alternative to toggle buttons or checkboxes.
 */
export default function FilterChip(
  props: FilterChipProps & JSX.IntrinsicElements["span"],
): JSX.Element {
  const {
    selected,
    elevated,
    disabled,
    label,
    leadingIcon,
    trailingIcon,
    ...rest
  } = props;

  return (
    <>
      <span
        data-md="filter-chip"
        data-selected={bool(selected)}
        data-elevated={bool(elevated)}
        data-disabled={bool(disabled)}
        {...rest}
      >
        {leadingIcon && <span data-icon="leading">{leadingIcon}</span>}
        <span data-label="">{label}</span>
        {trailingIcon && <span data-icon="trailing">{trailingIcon}</span>}
      </span>

      <Style href="filter-chip">{style}</Style>
    </>
  );
}
