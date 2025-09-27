import AssistChip from "./AssistChip.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { md } from "~/.storybook/utils.ts";

const meta = {
  title: "Example/AssistChip/Icon",
  component: AssistChip,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {
    label: "Enabled",
    icon: <span className="material-symbols-outlined">directions_car</span>,
  },
} satisfies Meta<typeof AssistChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled = {
  parameters: {
    design: {
      url: md.figmaURL("assist-chip", { state: "enabled", icon: true }),
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
      url: md.figmaURL("assist-chip", { state: "disabled", icon: true }),
      type: "figma",
    },
  },
} satisfies Story;
