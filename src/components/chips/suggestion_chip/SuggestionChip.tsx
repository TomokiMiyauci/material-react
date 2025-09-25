import type { JSX, ReactNode } from "react";
import { bool } from "@/utils/convert.ts";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";

export interface SuggestionChipProps {
  elevated?: boolean;
  disabled?: boolean;
  label?: ReactNode;
  icon?: ReactNode;
}

/**
 * Suggestion chips help narrow a user’s intent by presenting dynamically generated suggestions, such as suggested responses or search filters.
 */
export default function SuggestionChipProps(
  props: SuggestionChipProps & JSX.IntrinsicElements["span"],
): JSX.Element {
  const { elevated, disabled, label, icon, ...rest } = props;
  return (
    <>
      <span
        data-md="suggestion-chip"
        data-elevated={bool(elevated)}
        data-disabled={bool(disabled)}
        {...rest}
      >
        {icon && <span data-icon="">{icon}</span>}
        <span data-label="">{label}</span>
      </span>

      <Style href="suggestion-chip">{style}</Style>
    </>
  );
}
