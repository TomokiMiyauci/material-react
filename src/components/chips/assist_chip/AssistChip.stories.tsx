import type { Meta, StoryObj } from "@storybook/react-vite";
import AssistChip, { type AssitChipProps } from "./AssistChip.tsx";
import { type AxisNode, renderGallary } from "~/resources/gallary/mod.ts";

const meta = {
  title: "Component/AssistChip",
  component: AssistChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Label",
  },
} satisfies Meta<typeof AssistChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
export const WithIcon = {
  args: {
    icon: <span className="material-symbols-outlined">stars</span>,
  },
  parameters: {},
} satisfies Story;

const xAxis = [
  { label: "Enabled" },
  { label: "Disabled" },
  { label: "Hovered" },
  { label: "Focused" },
  { label: "Pressed" },
] satisfies AxisNode[];
const variantNodes = [
  { label: "Default" },
  { label: "Elevated" },
] satisfies AxisNode[];
const yAxis = [
  { label: "Label", children: variantNodes },
  { label: "With Icon", children: variantNodes },
] satisfies AxisNode[];
const states = [
  "enabled",
  "disabled",
  "hovered",
  "focused",
  "pressed",
] satisfies State[];
const variants = ["default", "elevated"] as const;
const icons = [false, true] as const;
const matrix: Item[][] = icons.flatMap((icon) =>
  variants.map((variant) =>
    states.map((state) => {
      return {
        state,
        elevated: variant === "elevated",
        icon,
      };
    })
  )
);

type State = "enabled" | "disabled" | "hovered" | "focused" | "pressed";

interface Item {
  state: State;
  icon?: boolean;
  elevated?: boolean;
}

interface PseudoProps {
  "data-hover"?: "";
  "data-active"?: "";
  "data-focus-visible"?: "";
}

function getProps(item: Item): AssitChipProps & PseudoProps {
  const { state, icon, elevated } = item;
  const base = {
    children: "Label",
    icon: icon && <span className="material-symbols-outlined">stars</span>,
    elevated,
  } satisfies AssitChipProps;

  switch (state) {
    case "enabled":
      return base;
    case "disabled":
      return { ...base, disabled: true };
    case "focused":
      return { ...base, "data-focus-visible": "" };
    case "hovered":
      return { ...base, "data-hover": "" };
    case "pressed":
      return { ...base, "data-active": "" };
  }
}

export const Gallary = {
  render: () =>
    renderGallary({
      xAxis,
      yAxis,
      matrix,
    }, {
      renderData: (item) => {
        if (!item) return;

        const props = getProps(item);

        return <AssistChip {...props} />;
      },
    }),
  parameters: {
    pseudo: {
      hover: "[data-hover]",
      active: "[data-active]",
      focusVisible: "[data-focus-visible]",
    },
    chromatic: { disableSnapshot: false },
  },
  tags: ["!autodocs"],
} satisfies Story;
