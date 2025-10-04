import Divider from "./Divider.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

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

export const Full = {} satisfies Story;
export const Inset = {
  args: {
    variant: "inset",
  },
} satisfies Story;

export const MiddleInset = {
  args: {
    variant: "middle-inset",
  },
} satisfies Story;
