import Switch from "./Switch.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { md } from "~/resources/figma.ts";

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

export const Enabled = {
  parameters: {
    design: md.figma("switch", {
      state: "enabled",
      icon: true,
      selected: true,
    }),
  },
} satisfies Story;
export const Disabled = {
  args: {
    disabled: true,
  },
  parameters: {
    design: md.figma("switch", {
      state: "disabled",
      icon: true,
      selected: true,
    }),
  },
} satisfies Story;

export const Hovered = {
  parameters: {
    pseudo: {
      hover: true,
    },
    design: md.figma("switch", {
      state: "hovered",
      icon: true,
      selected: true,
    }),
  },
} satisfies Story;

export const Focused = {
  parameters: {
    pseudo: {
      focusVisible: true,
    },
    design: md.figma("switch", {
      state: "focused",
      icon: true,
      selected: true,
    }),
  },
} satisfies Story;

export const Pressed = {
  parameters: {
    pseudo: {
      active: true,
    },
    design: md.figma("switch", {
      state: "pressed",
      icon: true,
      selected: true,
    }),
  },
} satisfies Story;
