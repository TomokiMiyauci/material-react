import InputChip from "./InputChip.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Example/InputChip",
  component: InputChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    label: "Input chip",
  },
} satisfies Meta<typeof InputChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled = {} satisfies Story;
export const Pressed = {
  parameters: {
    pseudo: { active: true },
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
export const Disabled = {
  args: { disabled: true },
} satisfies Story;

export const Selected = {
  args: {
    selected: true,
  },
} satisfies Story;

export const LeadingAvatar = {
  args: {
    leadingType: "avatar",
    leading: (
      <img
        className="w-full"
        src="https://avatar.iran.liara.run/public?size=64&username=Maria"
      />
    ),
  },
} satisfies Story;
export const LeadingIcon = {
  args: {
    leading: <span className="material-symbols-outlined">image</span>,
  },
} satisfies Story;

export const TrailingIcon = {
  args: {
    trailing: <span className="material-symbols-outlined">close</span>,
  },
} satisfies Story;

export const Icons = {
  args: {
    leading: <span className="material-symbols-outlined">image</span>,
    trailing: <span className="material-symbols-outlined">close</span>,
  },
} satisfies Story;
