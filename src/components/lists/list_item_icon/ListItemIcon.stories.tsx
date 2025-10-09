import ListItemIcon from "./ListItemIcon.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Example/ListItemIcon",
  component: ListItemIcon,
  parameters: {
    layout: "centered",
    chromatic: { disableSnapshot: false },
  },
  tags: ["autodocs"],
  args: {
    children: <span className="material-symbols-outlined">person</span>,
  },
} satisfies Meta<typeof ListItemIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled = {} satisfies Story;

export const Disabled = {
  decorators: [(Story) => {
    return (
      <div data-md="list-item" data-disabled="">
        <Story />
      </div>
    );
  }],
} satisfies Story;

export const Selected = {
  decorators: [(Story) => {
    return (
      <div data-md="list-item" data-selected="">
        <Story />
      </div>
    );
  }],
} satisfies Story;

export const SelectedDisabled = {
  decorators: [(Story) => {
    return (
      <div data-md="list-item" data-selected="" data-disabled="">
        <Story />
      </div>
    );
  }],
  name: "Selected/Disabled",
} satisfies Story;
