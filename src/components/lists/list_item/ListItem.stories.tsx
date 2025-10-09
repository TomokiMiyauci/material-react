import { type AxisNode, renderGallary } from "~/resources/gallary/mod.ts";
import ListItem, {
  type ListItemProps,
  type ListItemSize,
} from "./ListItem.tsx";
import ListItemAvatar from "../list_item_avatar/ListItemAvatar.tsx";
import ListItemIcon from "../list_item_icon/ListItemIcon.tsx";
import { ListItemText } from "../list_item_text/mod.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Example/ListItem",
  component: ListItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    "headline": "Headline that is long enough to fill up single line.",
    "supporingText":
      "Supporting text that is long enough to fill up multiple lines. Lorem ipsum dolor sit amet, consectetur",
  },
} satisfies Meta<typeof ListItem>;
export default meta;

interface Item {
  state: State;
  size?: ListItemSize;
  selected?: boolean;
  leading?: "icon" | "avatar";
  trailing?: "icon" | "text";
}

interface PseudoData {
  "data-hover"?: "";
  "data-focus-visible"?: "";
  "data-active"?: "";
}

const selectNodes = [
  { label: "Unselected" },
  { label: "Selected" },
];

const yAxis = [
  {
    label: "One Line",
    children: [
      {
        label: "Text Only",
        children: selectNodes,
      },
      {
        label: "Leading",
        children: [
          { label: "Avatar", children: selectNodes },
          { label: "Icon", children: selectNodes },
        ],
      },
      {
        label: "Trailing",
        children: [
          { label: "Text", children: selectNodes },
          { label: "Icon", children: selectNodes },
        ],
      },
    ],
  },
  {
    label: "Two Line",
    children: [
      {
        label: "Text Only",
        children: selectNodes,
      },
      {
        label: "Leading",
        children: [
          { label: "Avatar", children: selectNodes },
          { label: "Icon", children: selectNodes },
        ],
      },
      {
        label: "Trailing",
        children: [
          { label: "Text", children: selectNodes },
          { label: "Icon", children: selectNodes },
        ],
      },
    ],
  },
  {
    label: "Three Line",
    children: [
      {
        label: "Text Only",
        children: selectNodes,
      },
      {
        label: "Leading",
        children: [
          { label: "Avatar", children: selectNodes },
          { label: "Icon", children: selectNodes },
        ],
      },
      {
        label: "Trailing",
        children: [
          { label: "Text", children: selectNodes },
          { label: "Icon", children: selectNodes },
        ],
      },
    ],
  },
] satisfies AxisNode[];

const xAxis = [
  { label: "Enabled" },
  { label: "Disabled" },
  { label: "Hovered" },
  { label: "Focused" },
  { label: "Pressed" },
] satisfies AxisNode[];

const states = [
  "enabled",
  "disabled",
  "hovered",
  "focused",
  "pressed",
] satisfies State[];
const selects = [false, true];
const lines = ["one-line", "two-lines", "three-lines"] satisfies ListItemSize[];
const relatedItems = [
  "none",
  "leading.avatar",
  "leading.icon",
  "trailing.text",
  "trailing.icon",
] satisfies AdditionalItem[];

type AdditionalItem =
  | "none"
  | "leading.avatar"
  | "leading.icon"
  | "trailing.text"
  | "trailing.icon";

function toProps(v: AdditionalItem) {
  const prpos: Partial<Item> = v === "trailing.text"
    ? { trailing: "text" }
    : v === "leading.avatar"
    ? { leading: "avatar" }
    : v === "leading.icon"
    ? { leading: "icon" }
    : v === "trailing.icon"
    ? { trailing: "icon" }
    : {};

  return prpos;
}

const matrix: Item[][] = lines.flatMap((size) => {
  return relatedItems.flatMap((v) => {
    const props = toProps(v);

    return selects.map((selected) =>
      states.flatMap((state) => {
        return {
          size,
          selected,
          state,
          ...props,
        };
      })
    );
  });
});

type State = "enabled" | "disabled" | "hovered" | "focused" | "pressed";

function getProps(item: Item): ListItemProps & PseudoData {
  const base = {
    headline: meta.args.headline,
    supporingText: meta.args.supporingText,
    selected: item.selected,
    size: item.size,
    leading: item.leading
      ? item.leading === "icon"
        ? (
          <ListItemIcon>
            <span className="material-symbols-outlined">person</span>
          </ListItemIcon>
        )
        : item.leading === "avatar"
        ? <ListItemAvatar>A</ListItemAvatar>
        : undefined
      : undefined,
    trailing: item.trailing
      ? item.trailing === "icon"
        ? (
          <ListItemIcon>
            <span className="material-symbols-outlined">
              arrow_right
            </span>
          </ListItemIcon>
        )
        : item.trailing === "text"
        ? <ListItemText>100+</ListItemText>
        : undefined
      : undefined,
  } satisfies ListItemProps;

  switch (item.state) {
    case "enabled":
      return base;

    case "disabled":
      return { disabled: true, ...base };

    case "hovered":
      return { "data-hover": "", ...base };

    case "focused":
      return { "data-focus-visible": "", ...base };

    case "pressed":
      return { "data-active": "", ...base };
  }
}

export const Gallary = {
  render: () =>
    renderGallary({
      xAxis,
      yAxis,
      matrix,
    }, {
      renderData: (item) => {
        if (!item) return;

        const props = getProps(item);

        return (
          <div className="w-[260px]">
            <ListItem {...props} />
          </div>
        );
      },
    }),
  parameters: {
    pseudo: {
      hover: ["[data-hover]"],
      focusVisible: ["[data-focus-visible]"],
      active: ["[data-active]"],
    },
    chromatic: { disableSnapshot: false },
  },
  tags: ["!autodocs"],
} satisfies Story;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {},
} satisfies Story;
