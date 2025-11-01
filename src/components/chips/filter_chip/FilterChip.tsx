import type { JSX, ReactNode } from "react";
import { bool } from "@/utils/convert.ts";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";
import type { StateDisabledProps } from "@/components/types.ts";

export interface FilterChipProps extends StateDisabledProps {
  selected?: boolean;
  elevated?: boolean;
  leading?: ReactNode;
  trailing?: ReactNode;
  children?: ReactNode;
}

/**
 * Filter chips use tags or descriptive words to filter content. They can be a good
 * alternative to toggle buttons or checkboxes.
 *
 * @example Basic
 * ```tsx
 * import { FilterChip } from "@miyauci/material-react";
 *
 * <FilterChip>
 *   Label
 * </FilterChip>;
 * ```
 * @example With Leading
 * ```tsx
 * import { FilterChip } from "@miyauci/material-react";
 *
 * <FilterChip leading={<span className="my-icon" />}>
 *   Label
 * </FilterChip>;
 * ```
 *
 * @example With Trailing
 * ```tsx
 * import { FilterChip } from "@miyauci/material-react";
 *
 * <FilterChip trailing={<span className="my-icon" />}>
 *   Label
 * </FilterChip>;
 * ```
 */
export default function FilterChip(
  props: FilterChipProps & JSX.IntrinsicElements["span"],
): JSX.Element {
  const {
    selected,
    elevated,
    state,
    children,
    leading,
    trailing,
    ...rest
  } = props;

  return (
    <>
      <span
        data-md="filter-chip"
        data-selected={bool(selected)}
        data-elevated={bool(elevated)}
        data-disabled={bool(state === "disabled")}
        {...rest}
      >
        {leading && <span data-icon="leading">{leading}</span>}
        {children && <span data-label="">{children}</span>}
        {trailing && <span data-icon="trailing">{trailing}</span>}
      </span>

      <Style href="filter-chip">{style}</Style>
    </>
  );
}
