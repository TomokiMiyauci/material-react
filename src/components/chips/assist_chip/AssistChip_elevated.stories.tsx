import AssistChip from "./AssistChip.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { md } from "~/.storybook/utils.ts";

const meta = {
  title: "Example/AssistChip/Elevated",
  component: AssistChip,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {
    label: "Label",
    elevated: true,
  },
} satisfies Meta<typeof AssistChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled = {
  parameters: {
    design: {
      url: md.figmaURL("assist-chip", { state: "enabled", elevated: true }),
      type: "figma",
    },
  },
} satisfies Story;

export const Disabled = {
  args: {
    disabled: true,
  },
  parameters: {
    design: {
      url: md.figmaURL("assist-chip", { state: "disabled", elevated: true }),
      type: "figma",
    },
  },
} satisfies Story;
export const Hovered = {
  parameters: {
    pseudo: { hover: true },
    design: {
      url: md.figmaURL("assist-chip", { state: "hovered", elevated: true }),
      type: "figma",
    },
  },
} satisfies Story;

export const Focused = {
  parameters: {
    pseudo: { focusVisible: true },
    design: {
      url: md.figmaURL("assist-chip", { state: "focused", elevated: true }),
      type: "figma",
    },
  },
} satisfies Story;

export const Pressed = {
  parameters: {
    pseudo: { active: true },
    design: {
      url: md.figmaURL("assist-chip", { state: "pressed", elevated: true }),
      type: "figma",
    },
  },
} satisfies Story;
