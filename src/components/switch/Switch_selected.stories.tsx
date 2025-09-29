import Switch from "./Switch.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { md } from "~/.storybook/utils.ts";

const meta = {
  title: "Example/Switch/Selected",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  args: {
    selected: true,
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled = {
  parameters: {
    design: md.figma("switch", { state: "enabled", selected: true }),
  },
} satisfies Story;
export const Disabled = {
  args: {
    disabled: true,
  },
  parameters: {
    design: md.figma("switch", { state: "disabled", selected: true }),
  },
} satisfies Story;

export const Hovered = {
  parameters: {
    pseudo: {
      hover: true,
    },
    design: md.figma("switch", { state: "hovered", selected: true }),
  },
} satisfies Story;

export const Focused = {
  parameters: {
    pseudo: {
      focusVisible: true,
    },
    design: md.figma("switch", { state: "focused", selected: true }),
  },
} satisfies Story;

export const Pressed = {
  parameters: {
    pseudo: {
      active: true,
    },
    design: md.figma("switch", { state: "pressed", selected: true }),
  },
} satisfies Story;
