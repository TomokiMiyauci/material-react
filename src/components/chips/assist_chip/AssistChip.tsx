import type { JSX, ReactNode } from "react";
import { bool } from "@/utils/convert.ts";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";

export interface AssitChipProps {
  elevated?: boolean;
  disabled?: boolean;
  label?: ReactNode;
  icon?: ReactNode;
}

export default function AssistChip(
  props: AssitChipProps & JSX.IntrinsicElements["span"],
): JSX.Element {
  const { elevated, disabled, label, icon, ...rest } = props;
  return (
    <>
      <span
        data-md="assist-chip"
        data-elevated={bool(elevated)}
        data-disabled={bool(disabled)}
        {...rest}
      >
        {icon && <span data-icon="">{icon}</span>}
        <span data-label="">{label}</span>
      </span>

      <Style href="assist-chip">{style}</Style>
    </>
  );
}
