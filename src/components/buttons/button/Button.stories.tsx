import { type AxisNode, renderGallary } from "~/resources/gallary/mod.ts";
import Button, {
  type ButtonColor,
  type ButtonProps,
  type ButtonShape,
  type ButtonSize,
} from "./Button.tsx";
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

const sizeNodes = [
  { label: "XSmall" },
  { label: "Small" },
  { label: "Medium" },
  { label: "Large" },
  { label: "XLarge" },
] satisfies AxisNode[];

const shapeNodes = [
  { label: "Round", children: sizeNodes },
  { label: "Square", children: sizeNodes },
] satisfies AxisNode[];

const colorNodes = [
  { label: "Elevated", children: shapeNodes },
  { label: "Filled", children: shapeNodes },
  { label: "Tonal", children: shapeNodes },
  { label: "Outlined", children: shapeNodes },
  { label: "Text", children: shapeNodes },
] satisfies AxisNode[];

const xAxis = [
  { "label": "No Icon", children: colorNodes },
  { "label": "Icon", children: colorNodes },
] satisfies AxisNode[];

const yAxis = [
  { label: "Enabled" },
  { label: "Disabled" },
  { label: "Hovered" },
  { label: "Focused" },
  { label: "Pressed" },
] satisfies AxisNode[];

type State = "enabled" | "hovered" | "disabled" | "focused" | "pressed";

interface Item {
  state: State;
  shape: ButtonShape;
  size: ButtonSize;
  color: ButtonColor;
  icon: boolean;
}

const states = [
  "enabled",
  "disabled",
  "hovered",
  "focused",
  "pressed",
] satisfies State[];
const sizes = [
  "xsmall",
  "small",
  "medium",
  "large",
  "xlarge",
] satisfies ButtonSize[];
const shapes = [
  "round",
  "square",
] satisfies ButtonShape[];
const colors = [
  "elevated",
  "filled",
  "tonal",
  "outlined",
  "text",
] satisfies ButtonColor[];

const matrix = states.map((state) =>
  [false, true].flatMap((icon) =>
    colors.flatMap((color) =>
      shapes.flatMap((shape) =>
        sizes.flatMap((size) => ({ size, shape, color, state, icon }))
      )
    )
  )
) satisfies Item[][];

interface PseudoData {
  "data-hover"?: "";
  "data-focus-visible"?: "";
  "data-active"?: "";
}

function getProps(item: Item): ButtonProps & PseudoData {
  const { state, icon, ...rest } = item;
  const base = {
    ...rest,
    label: "Label",
    icon: icon && (
      <span
        style={{ "fontVariationSettings": "'FILL' 1" }}
        className="material-symbols-outlined"
      >
        stars
      </span>
    ),
  } satisfies ButtonProps;

  switch (state) {
    case "enabled":
      return base;
    case "disabled":
      return { ...base, disabled: true };
    case "hovered":
      return { ...base, "data-hover": "" };
    case "focused":
      return { ...base, "data-focus-visible": "" };
    case "pressed":
      return { ...base, "data-active": "" };
  }
}

export const Gallary = {
  render: () =>
    renderGallary({ xAxis, yAxis, matrix }, {
      renderData: (item) => {
        if (!item) return;

        const props = getProps(item);

        return <Button {...props} />;
      },
    }),
  parameters: {
    pseudo: {
      hover: ["[data-hover]"],
      focusVisible: ["[data-focus-visible]"],
      active: ["[data-active]"],
    },
    chromatic: { disableSnapshot: false },
  },
  tags: ["!autodocs"],
} satisfies Story;

export const Default = {} satisfies Story;
