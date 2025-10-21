import type { JSX, ReactNode } from "react";
import style from "./_generated/style.ts";
import Style from "@internal/Style.tsx";
import { Divider } from "@/components/divider/mod.ts";
import { bool } from "@/utils/convert.ts";

export interface ListItemProps {
  leading?: ReactNode;
  headline?: ReactNode;
  supporingText?: ReactNode;
  trailing?: ReactNode;

  /**
   * @default "two-lines"
   */
  size?: ListItemSize;
  selected?: boolean;
  disabled?: boolean;
  divider?: boolean;
}

export type ListItemSize = "one-line" | "two-lines" | "three-lines";

export default function ListItem(
  props: ListItemProps & JSX.IntrinsicElements["div"],
): JSX.Element {
  const {
    headline,
    supporingText,
    leading,
    trailing,
    size = "two-lines",
    selected,
    disabled,
    divider,
    ...rest
  } = props;
  return (
    <>
      <div
        role="listitem"
        data-md="list-item"
        data-size={size}
        data-selected={bool(selected)}
        data-disabled={bool(disabled)}
        {...rest}
      >
        <div data-container="">
          {leading}

          <div data-label-text-container="">
            <div data-headline="">{headline}</div>
            <div data-supporting-text="">{supporingText}</div>
          </div>

          {trailing}
        </div>

        {divider && <Divider />}
      </div>

      <Style href="list-item">{style}</Style>
    </>
  );
}
