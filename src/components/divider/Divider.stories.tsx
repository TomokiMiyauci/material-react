import Divider from "./Divider.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { md } from "~/resources/figma.ts";

const meta = {
  title: "Component/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[200px] h-[200px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const VerticalFull = {
  parameters: {
    design: md.figma("divider", { orientation: "vertical", variant: "full" }),
  },
  args: {
    orientation: "vertical",
  },
  name: "Vertical/Full",
} satisfies Story;
export const VerticalInset = {
  args: {
    variant: "inset",
    orientation: "vertical",
  },
  parameters: {
    design: md.figma("divider", { orientation: "vertical", variant: "inset" }),
  },
  name: "Vertical/Inset",
} satisfies Story;

export const VerticalMiddleInset = {
  args: {
    variant: "middle-inset",
    orientation: "vertical",
  },
  parameters: {
    design: md.figma("divider", {
      orientation: "vertical",
      variant: "middle-inset",
    }),
  },
  name: "Vertical/MiddleInset",
} satisfies Story;

export const HorizontalFull = {
  parameters: {
    design: md.figma("divider", { orientation: "horizontal", variant: "full" }),
  },
  args: {
    orientation: "horizontal",
  },
  name: "Horizontal/Full",
} satisfies Story;
export const HorizontalInset = {
  args: {
    variant: "inset",
    orientation: "horizontal",
  },
  parameters: {
    design: md.figma("divider", {
      orientation: "horizontal",
      variant: "inset",
    }),
  },
  name: "Horizontal/Inset",
} satisfies Story;

export const HorizontalMiddleInset = {
  args: {
    variant: "middle-inset",
    orientation: "horizontal",
  },
  parameters: {
    design: md.figma("divider", {
      orientation: "horizontal",
      variant: "middle-inset",
    }),
  },
  name: "Horizontal/MiddleInset",
} satisfies Story;
