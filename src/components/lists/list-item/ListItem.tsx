import type { JSX, ReactNode } from "react";
import style from "./_generated/style.ts";
import Style from "@internal/Style.tsx";

export interface ListItemProps {
  leading?: LeadingListItem;
  headline?: ReactNode;
  supporingText?: ReactNode;
  trailing?: TrailingListItem;

  /**
   * @default "two-lines"
   */
  size?: ListItemSize;
}

export type ListItemSize = "one-line" | "two-lines" | "three-lines";

export default function ListItem(props: ListItemProps): JSX.Element {
  const { headline, supporingText, leading, trailing, size = "two-lines" } =
    props;
  return (
    <>
      <div
        role="listitem"
        data-md="list-item"
        data-size={size}
      >
        {leading && <ListItemLeading {...leading} />}

        <div data-label-text-container="">
          <div data-headline="">{headline}</div>
          <div data-supporting-text="">{supporingText}</div>
        </div>

        {trailing && <ListItemTrailing {...trailing} />}
      </div>

      <Style href="list-item">{style}</Style>
    </>
  );
}

function ListItemLeading(props: LeadingListItem): JSX.Element {
  const { children, type } = props;

  return (
    <div data-leading={type}>
      {children}
    </div>
  );
}

function ListItemTrailing(props: TrailingListItem): JSX.Element {
  const { children, type } = props;

  return (
    <div data-trailing={type}>
      {children}
    </div>
  );
}

interface LeadingListItem {
  type: "icon" | "avatar" | "image" | "video";
  children: ReactNode;
}

interface TrailingListItem {
  type: "icon" | "supportingText";
  children: ReactNode;
}
