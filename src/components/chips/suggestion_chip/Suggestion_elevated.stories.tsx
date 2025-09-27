import SuggestionChip from "./SuggestionChip.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { md } from "~/.storybook/utils.ts";

const meta = {
  title: "Example/SuggestionChip/Elevated",
  component: SuggestionChip,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {
    label: "Label",
    elevated: true,
  },
} satisfies Meta<typeof SuggestionChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled = {
  parameters: {
    design: {
      type: "figma",
      url: md.figmaURL("suggestion-chip", { state: "enabled", elevated: true }),
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
      url: md.figmaURL("suggestion-chip", {
        state: "disabled",
        elevated: true,
      }),
    },
  },
} satisfies Story;
export const Hovered = {
  parameters: {
    pseudo: { hover: true },
    design: {
      type: "figma",
      url: md.figmaURL("suggestion-chip", { state: "hovered", elevated: true }),
    },
  },
} satisfies Story;

export const Focused = {
  parameters: {
    pseudo: { focusVisible: true },
    design: {
      type: "figma",
      url: md.figmaURL("suggestion-chip", { state: "focused", elevated: true }),
    },
  },
} satisfies Story;

export const Pressed = {
  parameters: {
    pseudo: { active: true },
    design: {
      type: "figma",
      url: md.figmaURL("suggestion-chip", { state: "pressed", elevated: true }),
    },
  },
} satisfies Story;
