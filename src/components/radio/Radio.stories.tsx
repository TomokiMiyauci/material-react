import Radio from "./Radio.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Example/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
    chromatic: { disableSnapshot: false },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled = {} satisfies Story;
export const Disabled = {
  args: {
    disabled: true,
  },
} satisfies Story;

export const Hovered = {
  parameters: {
    pseudo: { hover: true },
  },
} satisfies Story;

export const Focused = {
  parameters: {
    pseudo: { focusVisible: true },
  },
} satisfies Story;

export const Pressed = {
  parameters: {
    pseudo: { active: true },
  },
} satisfies Story;

export const CheckedEnabled: Story = {
  args: { checked: true },
  name: "Checked/Enabled",
};

export const CheckedDisabled: Story = {
  args: { checked: true, disabled: true },
  name: "Checked/Disabled",
};

export const CheckedHovered: Story = {
  args: { checked: true },
  name: "Checked/Hovered",
  parameters: {
    pseudo: { hover: true },
  },
};

export const CheckedFoucsed: Story = {
  args: { checked: true },
  name: "Checked/Focused",
  parameters: {
    pseudo: { focusVisible: true },
  },
};

export const CheckedPressed: Story = {
  args: { checked: true },
  name: "Checked/Pressed",
  parameters: {
    pseudo: { active: true },
  },
};
