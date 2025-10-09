import ListItemAvatar from "./ListItemAvatar.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Example/ListItemAvatar",
  component: ListItemAvatar,
  parameters: {
    layout: "centered",
    chromatic: { disableSnapshot: false },
  },
  tags: ["autodocs"],
  args: {
    children: "A",
  },
} satisfies Meta<typeof ListItemAvatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
export const TwoChars = {
  args: {
    children: "AB",
  },
} satisfies Story;
export const Overflow = {
  args: {
    children: "ABCDEF",
  },
} satisfies Story;
