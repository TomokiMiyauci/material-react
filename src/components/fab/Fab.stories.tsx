import Fab from "./Fab.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Example/Fab",
  component: Fab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    icon: (
      <span
        className="material-symbols-outlined text-[1em]"
        style={{ fontVariationSettings: `'FILL' 1` }}
      >
        edit
      </span>
    ),
  },
} satisfies Meta<typeof Fab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled = {} satisfies Story;
export const Hovered = {
  parameters: { pseudo: { hover: true } },
} satisfies Story;

export const Pressed = {
  parameters: { pseudo: { active: true } },
} satisfies Story;

export const Focused = {
  parameters: { pseudo: { focusVisible: true } },
} satisfies Story;
export const Primary = {
  args: {
    color: "primary",
  },
} satisfies Story;

export const PrimaryContainer = {
  args: {
    color: "primary-container",
  },
} satisfies Story;

export const Secondary = {
  args: {
    color: "secondary",
  },
} satisfies Story;

export const SecondaryContainer = {
  args: {
    color: "secondary-container",
  },
} satisfies Story;

export const Tertiary = {
  args: {
    color: "tertiary",
  },
} satisfies Story;

export const TertiaryContainer = {
  args: {
    color: "tertiary-container",
  },
} satisfies Story;
export const Medium = {
  args: {
    size: "medium",
  },
} satisfies Story;

export const Large = {
  args: {
    size: "large",
  },
} satisfies Story;
