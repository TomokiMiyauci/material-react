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
export const Primary = {
  args: {
    tone: "primary",
  },
} satisfies Story;

export const PrimaryContainer = {
  args: {
    tone: "primary-container",
  },
} satisfies Story;

export const Secondary = {
  args: {
    tone: "secondary",
  },
} satisfies Story;

export const SecondaryContainer = {
  args: {
    tone: "secondary-container",
  },
} satisfies Story;

export const Tertiary = {
  args: {
    tone: "tertiary",
  },
} satisfies Story;

export const TertiaryContainer = {
  args: {
    tone: "tertiary-container",
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
