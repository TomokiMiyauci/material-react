import Badge from "./Badge.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { md } from "~/.storybook/utils.ts";

const meta = {
  title: "Example/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    chromatic: { disableSnapshot: false },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small = {
  parameters: {
    design: md.figma("badge", { size: "small" }),
  },
} satisfies Story;
export const Large = {
  args: {
    size: "large",
    children: "999+",
  },
  parameters: {
    design: md.figma("badge", { size: "large" }),
  },
} satisfies Story;
