import AssistChip from "./AssistChip.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { md } from "~/.storybook/utils.ts";

const meta = {
  title: "Example/AssistChip",
  component: AssistChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    label: "Assist chip",
  },
} satisfies Meta<typeof AssistChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled = {
  args: {
    label: "Enabled",
  },
  parameters: {
    design: {
      url: md.figmaURL("assist-chip", { state: "enabled" }),
      type: "figma",
    },
  },
} satisfies Story;
export const Disabled = {
  args: {
    disabled: true,
    label: "Disabled",
  },
  parameters: {
    design: {
      url: md.figmaURL("assist-chip", { state: "disabled" }),
      type: "figma",
    },
  },
} satisfies Story;
export const Hovered = {
  parameters: {
    pseudo: { hover: true },
    design: {
      url: md.figmaURL("assist-chip", { state: "hovered" }),
      type: "figma",
    },
  },
  args: {
    label: "Hovered",
  },
} satisfies Story;

export const Focused = {
  parameters: {
    pseudo: { focusVisible: true },
    design: {
      url: md.figmaURL("assist-chip", { state: "focused" }),
      type: "figma",
    },
  },
  args: {
    label: "Focused",
  },
} satisfies Story;

export const Pressed = {
  parameters: {
    pseudo: { active: true },
    design: {
      url: md.figmaURL("assist-chip", { state: "pressed" }),
      type: "figma",
    },
  },
  args: {
    label: "Pressed",
  },
} satisfies Story;
