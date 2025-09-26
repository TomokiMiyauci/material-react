import AssistChip from "./AssistChip.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Example/AssistChip/Elevated",
  component: AssistChip,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {
    elevated: true,
  },
} satisfies Meta<typeof AssistChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled = {
  args: {
    label: "Enabled",
  },
} satisfies Story;
export const Disabled = {
  args: {
    label: "Disabled",
    disabled: true,
  },
} satisfies Story;
export const Hovered = {
  args: {
    label: "Hovered",
  },
  parameters: {
    pseudo: { hover: true },
  },
} satisfies Story;

export const Focused = {
  args: {
    label: "Focused",
  },
  parameters: {
    pseudo: { focusVisible: true },
  },
} satisfies Story;

export const Pressed = {
  args: {
    label: "Pressed",
  },
  parameters: {
    pseudo: { active: true },
  },
} satisfies Story;
