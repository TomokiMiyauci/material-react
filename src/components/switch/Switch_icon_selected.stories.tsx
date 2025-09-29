import Switch from "./Switch.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Example/Switch/Icon/Selected",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  args: {
    selected: true,
    icon: <span className="material-symbols-outlined">close</span>,
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled = {} satisfies Story;
export const Disabled = {
  args: {
    disabled: true,
  },
} satisfies Story;

export const Hovered = {
  parameters: {
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
  },
} satisfies Story;

export const Pressed = {
  parameters: {
    pseudo: {
      active: true,
    },
  },
} satisfies Story;
