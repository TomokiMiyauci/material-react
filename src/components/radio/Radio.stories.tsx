import { md } from "~/resources/figma.ts";
import Radio from "./Radio.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Example/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
    chromatic: { disableSnapshot: false },
    a11y: {
      options: {
        rules: {
          label: { enabled: false },
        },
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled = {
  parameters: {
    design: md.figma("radio", { state: "enabled" }),
  },
} satisfies Story;
export const Disabled = {
  args: {
    disabled: true,
  },
  parameters: {
    design: md.figma("radio", { state: "disabled" }),
  },
} satisfies Story;

export const Hovered = {
  parameters: {
    pseudo: { hover: true },
    design: md.figma("radio", { state: "hovered" }),
  },
} satisfies Story;

export const Focused = {
  parameters: {
    pseudo: { focusVisible: true },
    design: md.figma("radio", { state: "focused" }),
  },
} satisfies Story;

export const Pressed = {
  parameters: {
    pseudo: { active: true },
    design: md.figma("radio", { state: "pressed" }),
  },
} satisfies Story;

export const CheckedEnabled: Story = {
  args: { checked: true },
  name: "Checked/Enabled",
  parameters: {
    design: md.figma("radio", { state: "enabled", checked: true }),
  },
};

export const CheckedDisabled: Story = {
  args: { checked: true, disabled: true },
  name: "Checked/Disabled",
  parameters: {
    design: md.figma("radio", { state: "disabled", checked: true }),
  },
};

export const CheckedHovered: Story = {
  args: { checked: true },
  name: "Checked/Hovered",
  parameters: {
    pseudo: { hover: true },
    design: md.figma("radio", { state: "hovered", checked: true }),
  },
};

export const CheckedFoucsed: Story = {
  args: { checked: true },
  name: "Checked/Focused",
  parameters: {
    pseudo: { focusVisible: true },
    design: md.figma("radio", { state: "focused", checked: true }),
  },
};

export const CheckedPressed: Story = {
  args: { checked: true },
  name: "Checked/Pressed",
  parameters: {
    pseudo: { active: true },
    design: md.figma("radio", { state: "pressed", checked: true }),
  },
};
