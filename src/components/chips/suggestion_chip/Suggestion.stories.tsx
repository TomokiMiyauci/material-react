import SuggestionChip from "./SuggestionChip.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { md } from "~/.storybook/utils.ts";

const meta = {
  title: "Example/SuggestionChip",
  component: SuggestionChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    label: "Label",
  },
} satisfies Meta<typeof SuggestionChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled = {
  parameters: {
    design: {
      type: "figma",
      url: md.figmaURL("suggestion-chip", { state: "enabled" }),
    },
  },
} satisfies Story;
export const Disabled = {
  args: {
    disabled: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: md.figmaURL("suggestion-chip", { state: "disabled" }),
    },
  },
} satisfies Story;
export const Hovered = {
  parameters: {
    pseudo: { hover: true },
    design: {
      type: "figma",
      url: md.figmaURL("suggestion-chip", { state: "hovered" }),
    },
  },
} satisfies Story;

export const Focused = {
  parameters: {
    pseudo: { focusVisible: true },
    design: {
      type: "figma",
      url: md.figmaURL("suggestion-chip", { state: "hovered" }),
    },
  },
} satisfies Story;

export const Pressed = {
  parameters: {
    pseudo: { active: true },
    design: {
      type: "figma",
      url: md.figmaURL("suggestion-chip", { state: "pressed" }),
    },
  },
} satisfies Story;
