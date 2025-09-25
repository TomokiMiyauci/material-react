import NavigationRail from "./NavigationRail.tsx";
import NavigationRailItem from "..//navigation_rail_item/NavigationRailItem.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Example/NavigationRail",
  component: NavigationRail,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof NavigationRail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  "args": {
    children: (
      <>
        <NavigationRailItem
          label="Home"
          icon={
            <span className="icon-[material-symbols--home-outline-rounded] w-full h-full" />
          }
          active
        />
        <NavigationRailItem
          label="Home"
          icon={
            <span className="icon-[material-symbols--home-outline-rounded] w-full h-full" />
          }
        />
        <NavigationRailItem
          label="Home"
          icon={
            <span className="icon-[material-symbols--home-outline-rounded] w-full h-full" />
          }
        />
      </>
    ),
  },
} satisfies Story;
