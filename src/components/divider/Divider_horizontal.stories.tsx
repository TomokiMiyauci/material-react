import Divider from "./Divider.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { md } from "~/resources/figma.ts";

const meta = {
  title: "Example/Divider/Horizontal",
  component: Divider,
  parameters: {
    layout: "centered",
    chromatic: { disableSnapshot: false },
  },
  decorators: [
    (Story) => (
      <div className="w-[200px] h-[200px] inline-block">
        <Story />
      </div>
    ),
  ],
  args: {
    orientation: "horizontal",
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Full = {
  parameters: {
    design: md.figma("divider", { orientation: "horizontal", variant: "full" }),
  },
} satisfies Story;
export const Inset = {
  args: {
    variant: "inset",
  },
  parameters: {
    design: md.figma("divider", {
      orientation: "horizontal",
      variant: "inset",
    }),
  },
} satisfies Story;

export const MiddleInset = {
  args: {
    variant: "middle-inset",
  },
  parameters: {
    design: md.figma("divider", {
      orientation: "horizontal",
      variant: "middle-inset",
    }),
  },
} satisfies Story;
