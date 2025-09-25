import Button from "./Button.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    label: "Label",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled = {} satisfies Story;
export const WithIcon = {
  args: {
    icon: <span className="material-symbols-outlined">add</span>,
  },
} satisfies Story;
