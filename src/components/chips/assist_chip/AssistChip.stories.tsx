import AssistChip from "./AssistChip.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

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
} satisfies Story;
export const Disabled = {
  args: {
    disabled: true,
    label: "Disabled",
  },
} satisfies Story;
export const Hovered = {
  parameters: {
    pseudo: { hover: true },
  },
  args: {
    label: "Hovered",
  },
} satisfies Story;

export const Focused = {
  parameters: {
    pseudo: { focusVisible: true },
  },
  args: {
    label: "Focused",
  },
} satisfies Story;

export const Pressed = {
  parameters: {
    pseudo: { active: true },
  },
  args: {
    label: "Pressed",
  },
} satisfies Story;

export const WithIcon = {
  args: {
    icon: <span className="material-symbols-outlined">directions_car</span>,
  },
} satisfies Story;
