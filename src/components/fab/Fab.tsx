import type { JSX, ReactNode } from "react";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";

export interface FabProps {
  size?: FabSize;
  tone?: FabTone;
  icon?: ReactNode;
}

export type FabSize = "baseline" | "medium" | "large";

export type FabTone =
  | "primary"
  | "primary-container"
  | "secondary"
  | "secondary-container"
  | "tertiary"
  | "tertiary-container";

export default function Fab(
  props: FabProps & JSX.IntrinsicElements["button"],
): JSX.Element {
  const { size, tone, icon, ...rest } = props;

  return (
    <>
      <button
        type="button"
        data-md="fab"
        data-size={size}
        data-tone={tone}
        {...rest}
      >
        <span data-icon="">{icon}</span>
      </button>
      <Style href="fab">{style}</Style>
    </>
  );
}
