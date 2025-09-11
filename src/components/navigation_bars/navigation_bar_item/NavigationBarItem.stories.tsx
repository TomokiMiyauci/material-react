import NavigationBarItem from "./NavigationBarItem.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@miyauci/rmd";

const meta = {
  title: "Example/NavigationBars/NavigationBarItem",
  component: NavigationBarItem,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {},
  args: {
    icon: (
      <span className="material-symbols-outlined">
        home
      </span>
    ),
    label: "Home",
  },
} satisfies Meta<typeof NavigationBarItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled = {} satisfies Story;
export const Hoverd = {
  parameters: {
    pseudo: { hover: true },
  },
} satisfies Story;

export const Pressed = {
  parameters: {
    pseudo: { active: true },
  },
} satisfies Story;
export const Active = {
  args: {
    active: true,
  },
} satisfies Story;

export const WithBadge = {
  args: {
    badge: <Badge />,
  },
} satisfies Story;

export const WithLargeBadge = {
  args: {
    badge: <Badge size="large">999+</Badge>,
  },
} satisfies Story;
