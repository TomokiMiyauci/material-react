import SuggestionChip from "./SuggestionChip.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Example/SuggestionChip/Elevated",
  component: SuggestionChip,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {
    label: "Suggestion chip",
    elevated: true,
  },
} satisfies Meta<typeof SuggestionChip>;

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
