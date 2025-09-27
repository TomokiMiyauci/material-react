import { md } from "~/.storybook/utils.ts";
import SuggestionChip from "./SuggestionChip.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Example/SuggestionChip/Icon",
  component: SuggestionChip,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {
    label: "Label",
    icon: <span className="material-symbols-outlined">directions_car</span>,
  },
} satisfies Meta<typeof SuggestionChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled = {
  parameters: {
    design: {
      type: "figma",
      url: md.figmaURL("suggestion-chip", { state: "enabled", icon: true }),
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
      url: md.figmaURL("suggestion-chip", { state: "disabled", icon: true }),
    },
  },
} satisfies Story;
