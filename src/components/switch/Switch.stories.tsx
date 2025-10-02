import Switch, { type SwitchProps } from "./Switch.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { md } from "~/resources/figma.ts";
import { type AxisNode, renderGallary } from "~/resources/gallary/mod.ts";

const meta = {
  title: "Example/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    a11y: {
      options: {
        rules: {
          "button-name": { enabled: false },
        },
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

type State = "enabled" | "hovered" | "disabled" | "focused" | "pressed";

interface Item {
  state: State;
  selected?: boolean;
  icon?: boolean;
}

const matrix: Item[][] = [
  [
    { state: "enabled" },
    { state: "enabled", selected: true },
    { state: "enabled", icon: true },
    { state: "enabled", icon: true, selected: true },
  ],
  [
    { state: "disabled" },
    { state: "disabled", selected: true },
    { state: "disabled", icon: true },
    { state: "disabled", icon: true, selected: true },
  ],
  [
    { state: "hovered" },
    { state: "hovered", selected: true },
    { state: "hovered", icon: true },
    { state: "hovered", icon: true, selected: true },
  ],
  [
    { state: "focused" },
    { state: "focused", selected: true },
    { state: "focused", icon: true },
    { state: "focused", icon: true, selected: true },
  ],
  [
    { state: "pressed" },
    { state: "pressed", selected: true },
    { state: "pressed", icon: true },
    { state: "pressed", icon: true, selected: true },
  ],
];
const xAxis = [{ label: "Default" }, { label: "Selected" }, { label: "Icon" }, {
  label: "Icon Selected",
}] satisfies AxisNode[];
const yAxis = [
  { label: "Enabled" },
  { label: "Disabled" },
  { label: "Hovered" },
  { label: "Focused" },
  { label: "Pressed" },
] satisfies AxisNode[];

function getProps(item: Item): SwitchProps & DataStates {
  const base = {
    selected: item.selected,
    icon: item.icon
      ? <span className="material-symbols-outlined">close</span>
      : undefined,
  } satisfies SwitchProps;

  switch (item.state) {
    case "disabled":
      return { disabled: true, ...base };

    case "hovered":
      return { "data-hover": "", ...base };

    case "focused":
      return { "data-focus-visible": "", ...base };

    case "enabled":
      return { ...base };

    case "pressed":
      return { "data-active": "", ...base };
  }
}

interface DataStates {
  "data-hover"?: "";
  "data-focus-visible"?: "";
  "data-active"?: "";
}

export const Gallary = {
  render: () =>
    renderGallary({ xAxis, yAxis, matrix }, {
      renderData: (item) => {
        if (item) {
          const props = getProps(item);

          return <Switch {...props} />;
        }

        return;
      },
    }),
  parameters: {
    pseudo: {
      hover: ["[data-hover]"],
      focusVisible: ["[data-focus-visible]"],
      active: ["[data-active]"],
    },
    design: md.figma("switch", { state: "disabled" }),
    chromatic: { disableSnapshot: false },
    a11y: { test: "off" },
  },
  tags: ["!autodocs"],
} satisfies Story;

export const Enabled = {
  parameters: {
    design: md.figma("switch", "all"),
  },
} satisfies Story;
export const Disabled = {
  args: {
    disabled: true,
  },
  parameters: {
    design: md.figma("switch", { state: "disabled" }),
  },
} satisfies Story;

export const Hovered = {
  parameters: {
    design: md.figma("switch", { state: "hovered" }),
    pseudo: {
      hover: true,
    },
  },
} satisfies Story;

export const Focused = {
  parameters: {
    pseudo: {
      focusVisible: true,
    },
    design: md.figma("switch", { state: "focused" }),
  },
} satisfies Story;

export const Pressed = {
  parameters: {
    pseudo: {
      active: true,
    },
    design: md.figma("switch", { state: "pressed" }),
  },
} satisfies Story;
