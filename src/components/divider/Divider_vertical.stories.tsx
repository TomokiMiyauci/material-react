import { md } from "~/resources/figma.ts";
import Divider from "./Divider.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Example/Divider/Vertical",
  component: Divider,
  parameters: {
    layout: "centered",
    chromatic: { disableSnapshot: false },
  },
  decorators: [
    (Story) => (
      <div className="w-[200px] h-[200px]">
        <Story />
      </div>
    ),
  ],
  args: {
    orientation: "vertical",
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Full = {
  parameters: {
    design: md.figma("divider", { orientation: "vertical", variant: "full" }),
  },
} satisfies Story;
export const Inset = {
  args: {
    variant: "inset",
  },
  parameters: {
    design: md.figma("divider", { orientation: "vertical", variant: "inset" }),
  },
} satisfies Story;

export const MiddleInset = {
  args: {
    variant: "middle-inset",
  },
  parameters: {
    design: md.figma("divider", {
      orientation: "vertical",
      variant: "middle-inset",
    }),
  },
} satisfies Story;
