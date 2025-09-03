import NavigationBar from "./NavigationBar.tsx";
import NavigationBarItem from "../navigation_bar_item/NavigationBarItem.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Example/NavigationBar",
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

export const Default = {
  "args": {
    children: (
      <>
        <NavigationBarItem
          label="Home"
          icon={
            <span className="icon-[material-symbols--home-outline-rounded] w-full h-full" />
          }
          active
        />
        <NavigationBarItem
          label="Home"
          icon={
            <span className="icon-[material-symbols--home-outline-rounded] w-full h-full" />
          }
        />
        <NavigationBarItem
          label="Home"
          icon={
            <span className="icon-[material-symbols--home-outline-rounded] w-full h-full" />
          }
        />
      </>
    ),
  },
} satisfies Story;
