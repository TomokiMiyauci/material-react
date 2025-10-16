import NavigationBarItem, {
  type NavigationBarItemProps,
} from "./NavigationBarItem.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@miyauci/material-react";
import { type AxisNode, renderGallary } from "~/resources/gallary/mod.ts";

const meta = {
  title: "Example/NavigationBars/NavigationBarItem",
  component: NavigationBarItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    icon: (
      <span className="material-symbols-outlined">
        home
      </span>
    ),
    label: "Home",
  },
} satisfies Meta<typeof NavigationBarItem>;

export default meta;

type Story = StoryObj<typeof meta>;

const yAxis = [
  {
    label: "Vertical",
    children: [
      { label: "Default" },
      { label: "Active" },
      {
        label: "Badge",
        children: [
          {
            label: "Small",
            children: [
              { label: "Inactive" },
              { label: "Active" },
            ],
          },
          {
            label: "Large",
            children: [
              { label: "Inactive" },
              { label: "Active" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Horizontal",
    children: [
      { label: "Default" },
      { label: "Active" },
      {
        label: "Badge",
        children: [
          {
            label: "Small",
            children: [
              { label: "Inactive" },
              { label: "Active" },
            ],
          },
          {
            label: "Large",
            children: [
              { label: "Inactive" },
              { label: "Active" },
            ],
          },
        ],
      },
    ],
  },
] satisfies AxisNode[];

const xAxis = [
  { label: "Enabled" },
  { label: "Hovered" },
  { label: "Focused" },
  { label: "Pressed" },
] satisfies AxisNode[];

const matrix: Item[][] = [
  [
    { state: "enabled" },
    { state: "hovered" },
    { state: "focused" },
    { state: "pressed" },
  ],
  [
    { state: "enabled", active: true },
    { state: "hovered", active: true },
    { state: "focused", active: true },
    { state: "pressed", active: true },
  ],
  [
    { state: "enabled", badge: { size: "small" } },
    { state: "hovered", badge: { size: "small" } },
    { state: "focused", badge: { size: "small" } },
    { state: "pressed", badge: { size: "small" } },
  ],
  [
    { state: "enabled", active: true, badge: { size: "small" } },
    { state: "hovered", active: true, badge: { size: "small" } },
    { state: "focused", active: true, badge: { size: "small" } },
    { state: "pressed", active: true, badge: { size: "small" } },
  ],
  [
    { state: "enabled", badge: { size: "large" } },
    { state: "hovered", badge: { size: "large" } },
    { state: "focused", badge: { size: "large" } },
    { state: "pressed", badge: { size: "large" } },
  ],
  [
    { state: "enabled", active: true, badge: { size: "large" } },
    { state: "hovered", active: true, badge: { size: "large" } },
    { state: "focused", active: true, badge: { size: "large" } },
    { state: "pressed", active: true, badge: { size: "large" } },
  ],
  [
    { state: "enabled", variant: "horizontal" },
    { state: "hovered", variant: "horizontal" },
    { state: "focused", variant: "horizontal" },
    { state: "pressed", variant: "horizontal" },
  ],
  [
    { state: "enabled", variant: "horizontal", active: true },
    { state: "hovered", variant: "horizontal", active: true },
    { state: "focused", variant: "horizontal", active: true },
    { state: "pressed", variant: "horizontal", active: true },
  ],
  [
    { state: "enabled", variant: "horizontal", badge: { size: "small" } },
    { state: "hovered", variant: "horizontal", badge: { size: "small" } },
    { state: "focused", variant: "horizontal", badge: { size: "small" } },
    { state: "pressed", variant: "horizontal", badge: { size: "small" } },
  ],
  [
    {
      state: "enabled",
      variant: "horizontal",
      active: true,
      badge: { size: "small" },
    },
    {
      state: "hovered",
      variant: "horizontal",
      active: true,
      badge: { size: "small" },
    },
    {
      state: "focused",
      variant: "horizontal",
      active: true,
      badge: { size: "small" },
    },
    {
      state: "pressed",
      variant: "horizontal",
      active: true,
      badge: { size: "small" },
    },
  ],
  [
    { state: "enabled", variant: "horizontal", badge: { size: "large" } },
    { state: "hovered", variant: "horizontal", badge: { size: "large" } },
    { state: "focused", variant: "horizontal", badge: { size: "large" } },
    { state: "pressed", variant: "horizontal", badge: { size: "large" } },
  ],
  [
    {
      state: "enabled",
      active: true,
      variant: "horizontal",
      badge: { size: "large" },
    },
    {
      state: "hovered",
      active: true,
      variant: "horizontal",
      badge: { size: "large" },
    },
    {
      state: "focused",
      active: true,
      variant: "horizontal",
      badge: { size: "large" },
    },
    {
      state: "pressed",
      active: true,
      variant: "horizontal",
      badge: { size: "large" },
    },
  ],
];

type State = "enabled" | "hovered" | "focused" | "pressed";

interface Item {
  state: State;
  active?: boolean;
  badge?: {
    size?: "large" | "small";
  };
  variant?: "horizontal" | "vertical";
}

interface StateProps {
  "data-hover"?: "";
  "data-focus"?: "";
  "data-press"?: "";
}

function getProps(item: Item): NavigationBarItemProps & StateProps {
  const base = {
    icon: (
      <span className="material-symbols-outlined">
        home
      </span>
    ),
    label: "Label",
    active: item.active,
    badge: item.badge
      ? item.badge.size === "small" ? <Badge /> : <Badge size="large">3</Badge>
      : undefined,
    variant: item.variant,
  } satisfies NavigationBarItemProps;

  switch (item.state) {
    case "enabled":
      return base;
    case "hovered":
      return { ...base, "data-hover": "" };
    case "focused":
      return { ...base, "data-focus": "" };
    case "pressed":
      return { ...base, "data-press": "" };
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
        if (item) {
          const props = getProps(item);
          return <NavigationBarItem {...props} />;
        }
        return;
      },
    }),
  parameters: {
    pseudo: {
      hover: ["[data-hover]"],
      active: ["[data-press]"],
      focusVisible: ["[data-focus]"],
    },
    chromatic: { disableSnapshot: false },
  },
  tags: ["!autodocs"],
} satisfies Story;

export const Default = {} satisfies Story;
