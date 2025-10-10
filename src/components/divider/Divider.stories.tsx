import Divider from "./Divider.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Example/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[200px] h-[200px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
