import FilterChip from "./FilterChip.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Example/FilterChip",
  component: FilterChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    label: "Filter chip",
  },
} satisfies Meta<typeof FilterChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled = {
  args: {
    label: "Enabled",
  },
} satisfies Story;

export const Disabled = {
  args: { disabled: true, label: "Disabled" },
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

export const LeadingIcon = {
  args: {
    leadingIcon: <span className="material-symbols-outlined">check</span>,
  },
} satisfies Story;

export const TrailingIcon = {
  args: {
    trailingIcon: (
      <span className="material-symbols-outlined">arrow_drop_down</span>
    ),
  },
} satisfies Story;

export const Icons = {
  args: {
    leadingIcon: <span className="material-symbols-outlined">check</span>,
    trailingIcon: (
      <span className="material-symbols-outlined">arrow_drop_down</span>
    ),
  },
} satisfies Story;
