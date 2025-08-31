import ListItem from "./ListItem.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Example/ListItem",
  component: ListItem,
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
    "leading": {
      type: "avatar",
      children: "A",
    },
    "headline": "Headline",
    "supporingText": "Supporing text",
  },
} satisfies Meta<typeof ListItem>;
export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const OneLine = {
  args: {
    size: "one-line",
  },
} satisfies Story;

export const TwoLines = {} satisfies Story;
export const ThreeLines = {
  args: {
    size: "three-lines",
    supporingText:
      "Supporting text that is long enough to fill up multiple lines",
  },
} satisfies Story;
