import PlainTooltip from "./PlainTooltip.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { md } from "~/resources/figma.ts";

const meta = {
  title: "Component/PlainTooltip",
  component: PlainTooltip,
  parameters: {
    layout: "centered",
    chromatic: { disableSnapshot: false },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PlainTooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Short = {
  args: {
    children: "Supporting text",
  },
  parameters: {
    design: md.figma("plain-tooltip", { line: "single" }),
  },
} satisfies Story;

export const Long = {
  args: {
    children:
      "Supporting text Body text string goes here psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",

    style: { maxWidth: "200px" },
  },
  parameters: {
    design: md.figma("plain-tooltip", { line: "multi" }),
  },
} satisfies Story;
