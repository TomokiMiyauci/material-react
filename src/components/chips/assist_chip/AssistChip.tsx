import type { JSX, ReactNode } from "react";
import { bool } from "@/utils/convert.ts";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";

export interface AssitChipProps {
  elevated?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
}

/**
 * Assist chips represent smart or automated actions that can span multiple apps,
 * such as opening a calendar event from the home screen.
 *
 * @example Basic
 * ```tsx
 * import { AssistChip } from "@miyauci/material-react";
 *
 * <AssistChip>
 *   Label
 * </AssistChip>;
 * ```
 *
 * @example With Icon
 * ```tsx
 * import { AssistChip } from "@miyauci/material-react";
 *
 * <AssistChip icon={<span className="my-icon" />}>
 *   Label
 * </AssistChip>;
 * ```
 */
export default function AssistChip(
  props: AssitChipProps & JSX.IntrinsicElements["span"],
): JSX.Element {
  const { elevated, disabled, children, icon, ...rest } = props;
  return (
    <>
      <span
        data-md="assist-chip"
        data-elevated={bool(elevated)}
        data-disabled={bool(disabled)}
        {...rest}
      >
        {icon && <span data-icon="">{icon}</span>}
        {children && <span data-label="">{children}</span>}
      </span>

      <Style href="assist-chip">{style}</Style>
    </>
  );
}
