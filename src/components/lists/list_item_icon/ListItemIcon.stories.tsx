import ListItemIcon from "./ListItemIcon.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Component/ListItemIcon",
  component: ListItemIcon,
  parameters: {
    layout: "centered",
    chromatic: { disableSnapshot: false },
  },
  tags: ["autodocs"],
  args: {
    children: <span className="material-symbols-outlined">person</span>,
  },
  decorators: [(Story) => {
    return (
      <div data-md="list-item" style={style}>
        <Story />
      </div>
    );
  }],
} satisfies Meta<typeof ListItemIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled = {} satisfies Story;

const style = {
  display: "flex",
  alignItems: "center",
};

export const Disabled = {
  decorators: [(Story) => {
    return (
      <div
        data-md="list-item"
        data-disabled=""
        style={style}
      >
        <Story />
      </div>
    );
  }],
} satisfies Story;

export const Selected = {
  decorators: [(Story) => {
    return (
      <div style={style} data-md="list-item" data-selected="">
        <Story />
      </div>
    );
  }],
} satisfies Story;

export const SelectedDisabled = {
  decorators: [(Story) => {
    return (
      <div style={style} data-md="list-item" data-selected="" data-disabled="">
        <Story />
      </div>
    );
  }],
  name: "Selected/Disabled",
} satisfies Story;
