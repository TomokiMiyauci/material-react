import NavigationBar from "./NavigationBar.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Example/NavigationBars/NavigationBar",
  component: NavigationBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  decorators: [(Children) => (
    <div className="w-[300px]">
      <Children />
    </div>
  )],
} satisfies Meta<typeof NavigationBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled = {
  "args": {},
} satisfies Story;
