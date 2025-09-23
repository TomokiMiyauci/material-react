import SuggestionChip from "./SuggestionChip.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Example/SuggestionChip",
  component: SuggestionChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    label: "Suggestion chip",
  },
} satisfies Meta<typeof SuggestionChip>;

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
    pseudo: { hover: true },
  },
} satisfies Story;

export const Focused = {
  parameters: {
    pseudo: { focusVisible: true },
  },
  args: {
    tabIndex: 0,
  },
} satisfies Story;

export const Pressed = {
  parameters: {
    pseudo: { active: true },
  },
} satisfies Story;

export const WithIcon = {
  args: {
    icon: <span className="material-symbols-outlined">directions_car</span>,
  },
} satisfies Story;

export const Elevated = {
  args: {
    elevated: true,
  },
} satisfies Story;
