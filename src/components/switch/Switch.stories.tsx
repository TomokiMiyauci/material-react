import Switch, { type SwitchProps } from "./Switch.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { md } from "~/resources/figma.ts";
import { type AxisNode, renderGallary } from "~/resources/gallary/mod.ts";

const meta = {
  title: "Component/Switch",
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
    { state: "disabled" },
    { state: "hovered" },
    { state: "focused" },
    { state: "pressed" },
  ],
  [
    { state: "enabled", selected: true },
    { state: "disabled", selected: true },
    { state: "hovered", selected: true },
    { state: "focused", selected: true },
    { state: "pressed", selected: true },
  ],
  [
    { state: "enabled", icon: true },
    { state: "disabled", icon: true },
    { state: "hovered", icon: true },
    { state: "focused", icon: true },
    { state: "pressed", icon: true },
  ],
  [
    { state: "enabled", icon: true, selected: true },
    { state: "disabled", icon: true, selected: true },
    { state: "hovered", icon: true, selected: true },
    { state: "focused", icon: true, selected: true },
    { state: "pressed", icon: true, selected: true },
  ],
];
const yAxis = [{ label: "Default" }, { label: "Selected" }, { label: "Icon" }, {
  label: "Icon Selected",
}] satisfies AxisNode[];
const xAxis = [
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
      return { state: "disabled", ...base };

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

export const Default = {
  parameters: {
    design: md.figma("switch", "all"),
  },
} satisfies Story;

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
