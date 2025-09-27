import FilterChip from "./FilterChip.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { md } from "~/.storybook/utils.ts";

const meta = {
  title: "Example/FilterChip",
  component: FilterChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    label: "Label",
  },
} satisfies Meta<typeof FilterChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled = {
  parameters: {
    design: {
      type: "figma",
      url: md.figmaURL("filter-chip", { state: "enabled" }),
    },
  },
} satisfies Story;

export const Disabled = {
  args: { disabled: true },
  parameters: {
    design: {
      type: "figma",
      url: md.figmaURL("filter-chip", { state: "disabled" }),
    },
  },
} satisfies Story;

export const Hovered = {
  parameters: {
    pseudo: { hover: true },
    design: {
      type: "figma",
      url: md.figmaURL("filter-chip", { state: "hovered" }),
    },
  },
} satisfies Story;

export const Focused = {
  parameters: {
    pseudo: { focusVisible: true },
    design: {
      type: "figma",
      url: md.figmaURL("filter-chip", { state: "focused" }),
    },
  },
} satisfies Story;

export const Pressed = {
  parameters: {
    pseudo: { active: true },
    design: {
      type: "figma",
      url: md.figmaURL("filter-chip", { state: "pressed" }),
    },
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
