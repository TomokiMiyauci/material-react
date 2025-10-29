import type { JSX, ReactNode } from "react";
import { bool } from "@/utils/convert.ts";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";

export interface SuggestionChipProps {
  elevated?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
}

/**
 * Suggestion chips help narrow a user’s intent by presenting dynamically generated suggestions, such as suggested responses or search filters.
 *
 * @example Basic
 * ```tsx
 * import { SuggestionChip } from "@miyauci/material-react";
 *
 * <SuggestionChip>
 *   Label
 * </SuggestionChip>;
 * ```
 *
 * @example With Icon
 * ```tsx
 * import { SuggestionChip } from "@miyauci/material-react";
 *
 * <SuggestionChip icon={<span className="my-icon" />}>
 *   Label
 * </SuggestionChip>;
 * ```
 */
export default function SuggestionChipProps(
  props: SuggestionChipProps & JSX.IntrinsicElements["span"],
): JSX.Element {
  const { elevated, disabled, icon, children, ...rest } = props;
  return (
    <>
      <span
        data-md="suggestion-chip"
        data-elevated={bool(elevated)}
        data-disabled={bool(disabled)}
        {...rest}
      >
        {icon && <span data-icon="">{icon}</span>}
        {children && <span data-label="">{children}</span>}
      </span>

      <Style href="suggestion-chip">{style}</Style>
    </>
  );
}
