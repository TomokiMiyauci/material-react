import { type AxisNode, renderGallary } from "~/resources/gallary/mod.ts";
import ListItem, {
  type ListItemProps,
  type ListItemSize,
} from "./ListItem.tsx";
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

const xAxis = [
  {
    label: "One Line",
    children: [
      { label: "Unselected" },
      { label: "Selected" },
    ],
  },
  {
    label: "Two Lines",
    children: [
      { label: "Unselected" },
      { label: "Selected" },
    ],
  },
  {
    label: "Three Lines",
    children: [
      { label: "Unselected" },
      { label: "Selected" },
    ],
  },
  {
    label: "Leading",
    children: [
      {
        label: "Icon",
        children: [
          { label: "Unselected" },
          { label: "Selected" },
        ],
      },
      {
        label: "Avatar",
        children: [
          { label: "Unselected" },
          { label: "Selected" },
        ],
      },
    ],
  },
  {
    label: "Leading",
    children: [
      {
        label: "Icon",
        children: [
          { label: "Unselected" },
          { label: "Selected" },
        ],
      },
      {
        label: "Text",
        children: [
          { label: "Unselected" },
          { label: "Selected" },
        ],
      },
    ],
  },
] satisfies AxisNode[];

const yAxis = [
  { label: "Enabled" },
  { label: "Disabled" },
  { label: "Hovered" },
  { label: "Focused" },
  { label: "Pressed" },
] satisfies AxisNode[];

const matrix: Item[][] = [
  [
    { state: "enabled", size: "one-line" },
    { state: "enabled", size: "one-line", selected: true },
    { state: "enabled", size: "two-lines" },
    { state: "enabled", size: "two-lines", selected: true },
    { state: "enabled", size: "three-lines" },
    { state: "enabled", size: "three-lines", selected: true },
    { state: "enabled", leading: "icon" },
    { state: "enabled", leading: "icon", selected: true },
    { state: "enabled", leading: "avatar" },
    { state: "enabled", leading: "avatar", selected: true },
    { state: "enabled", trailing: "icon" },
    { state: "enabled", trailing: "icon", selected: true },
    { state: "enabled", trailing: "text" },
    { state: "enabled", trailing: "text", selected: true },
  ],
  [
    { state: "disabled", size: "one-line" },
    { state: "disabled", size: "one-line", selected: true },
    { state: "disabled", size: "two-lines" },
    { state: "disabled", size: "two-lines", selected: true },
    { state: "disabled", size: "three-lines" },
    { state: "disabled", size: "three-lines", selected: true },
    { state: "disabled", leading: "icon" },
    { state: "disabled", leading: "icon", selected: true },
    { state: "disabled", leading: "avatar" },
    { state: "disabled", leading: "avatar", selected: true },
    { state: "disabled", trailing: "icon" },
    { state: "disabled", trailing: "icon", selected: true },
    { state: "disabled", trailing: "text" },
    { state: "disabled", trailing: "text", selected: true },
  ],
  [
    { state: "hovered", size: "one-line" },
    { state: "hovered", size: "one-line", selected: true },
    { state: "hovered", size: "two-lines" },
    { state: "hovered", size: "two-lines", selected: true },
    { state: "hovered", size: "three-lines" },
    { state: "hovered", size: "three-lines", selected: true },
    { state: "hovered", leading: "icon" },
    { state: "hovered", leading: "icon", selected: true },
    { state: "hovered", leading: "avatar" },
    { state: "hovered", leading: "avatar", selected: true },
    { state: "hovered", trailing: "icon" },
    { state: "hovered", trailing: "icon", selected: true },
    { state: "hovered", trailing: "text" },
    { state: "hovered", trailing: "text", selected: true },
  ],
  [
    { state: "focused", size: "one-line" },
    { state: "focused", size: "one-line", selected: true },
    { state: "focused", size: "two-lines" },
    { state: "focused", size: "two-lines", selected: true },
    { state: "focused", size: "three-lines" },
    { state: "focused", size: "three-lines", selected: true },
    { state: "focused", leading: "icon" },
    { state: "focused", leading: "icon", selected: true },
    { state: "focused", leading: "avatar" },
    { state: "focused", leading: "avatar", selected: true },
    { state: "focused", trailing: "icon" },
    { state: "focused", trailing: "icon", selected: true },
    { state: "focused", trailing: "text" },
    { state: "focused", trailing: "text", selected: true },
  ],
  [
    { state: "pressed", size: "one-line" },
    { state: "pressed", size: "one-line", selected: true },
    { state: "pressed", size: "two-lines" },
    { state: "pressed", size: "two-lines", selected: true },
    { state: "pressed", size: "three-lines" },
    { state: "pressed", size: "three-lines", selected: true },
    { state: "pressed", leading: "icon" },
    { state: "pressed", leading: "icon", selected: true },
    { state: "pressed", leading: "avatar" },
    { state: "pressed", leading: "avatar", selected: true },
    { state: "pressed", trailing: "icon" },
    { state: "pressed", trailing: "icon", selected: true },
    { state: "pressed", trailing: "text" },
    { state: "pressed", trailing: "text", selected: true },
  ],
];

type State = "enabled" | "disabled" | "hovered" | "focused" | "pressed";

function getProps(item: Item): ListItemProps & PseudoData {
  const base = {
    headline: meta.args.headline,
    supporingText: meta.args.supporingText,
    selected: item.selected,
    size: item.size,
    leading: item.leading
      ? item.leading === "icon"
        ? {
          type: "icon",
          children: <span className="material-symbols-outlined">person</span>,
        }
        : item.leading === "avatar"
        ? {
          type: "avatar",
          children: "A",
        }
        : undefined
      : undefined,
    trailing: item.trailing
      ? item.trailing === "icon"
        ? {
          type: "icon",
          children: (
            <span className="material-symbols-outlined">
              arrow_right
            </span>
          ),
        }
        : item.trailing === "text"
        ? {
          type: "text",
          children: "100+",
        }
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
  return base;
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
