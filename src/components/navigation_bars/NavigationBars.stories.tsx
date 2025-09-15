import NavigationBar from "./navigation_bar/NavigationBar.tsx";
import NavigationBarItem from "./navigation_bar_item/NavigationBarItem.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Example/NavigationBars",
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

const icon = <span className="material-symbols-outlined">stars</span>;

export const Enabled = {
  "args": {
    children: (
      <>
        <NavigationBarItem
          label="Label"
          icon={icon}
          active
        />
        <NavigationBarItem
          label="Label"
          icon={icon}
        />
        <NavigationBarItem
          label="Label"
          icon={icon}
        />
      </>
    ),
  },
} satisfies Story;
