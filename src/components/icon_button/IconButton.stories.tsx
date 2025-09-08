import IconButton from "./IconButton.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/IconButton",
  component: IconButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    icon: (
      <span className="icon-[material-symbols--settings-outline-rounded] h-full w-full" />
    ),
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Enabled = {} satisfies Story;
export const Disabled = {
  args: {
    disabled: true,
  },
} satisfies Story;

export const Pressed = {
  parameters: {
    pseudo: { active: true },
  },
} satisfies Story;

export const Focused = {
  parameters: {
    pseudo: { focusVisible: true },
  },
} satisfies Story;

export const Hovered = {
  parameters: {
    pseudo: { hover: true },
  },
} satisfies Story;
