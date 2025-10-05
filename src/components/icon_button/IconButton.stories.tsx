import IconButton, {
  type IconButtonColor,
  type IconButtonProps,
  type IconButtonShape,
  type IconButtonSize,
  type IconButtonWidth,
} from "./IconButton.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { type AxisNode, renderGallary } from "~/resources/gallary/mod.ts";

const meta = {
  title: "Example/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    icon: <span className="material-symbols-outlined">settings</span>,
  },
} satisfies Meta<typeof IconButton>;

export default meta;

interface DataStates {
  "data-hover"?: "";
  "data-focus-visible"?: "";
  "data-active"?: "";
  disabled?: boolean;
}

type Story = StoryObj<typeof meta>;

const colorNodes = [
  { label: "Filled" },
  { label: "Tonal" },
  { label: "Outlined" },
  { label: "Standard" },
] satisfies AxisNode[];

const widthNodes = [
  {
    label: "Default",
    children: colorNodes,
  },
  {
    label: "Narrow",
    children: colorNodes,
  },
  {
    label: "Wide",
    children: colorNodes,
  },
] satisfies AxisNode[];
const shapeNodes = [
  {
    label: "Round",
    children: widthNodes,
  },
  {
    label: "Square",
    children: widthNodes,
  },
] satisfies AxisNode[];

const xAxis = [
  { label: "XSmall", children: shapeNodes },
  { label: "Small", children: shapeNodes },
  { label: "Medium", children: shapeNodes },
  { label: "Large", children: shapeNodes },
  { label: "XLarge", children: shapeNodes },
] satisfies AxisNode[];

const yAxis = [
  { label: "Enabled" },
  { label: "Disabled" },
  { label: "Hovered" },
  { label: "Focused" },
  { label: "Pressed" },
] satisfies AxisNode[];

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
] satisfies IconButtonSize[];
const shapes = ["round", "square"] satisfies IconButtonShape[];
const widths = ["default", "narrow", "wide"] satisfies IconButtonWidth[];
const colors = [
  "filled",
  "tonal",
  "outlined",
  "standard",
] satisfies IconButtonColor[];

const matrix = states.map((state) => {
  return sizes.flatMap((size) => {
    return shapes.flatMap((shape) => {
      return widths.flatMap((width) => {
        return colors.flatMap((color) => {
          return {
            state,
            size,
            width,
            shape,
            color,
          } satisfies Item;
        });
      });
    });
  });
}) satisfies Item[][];

type State = "enabled" | "hovered" | "disabled" | "focused" | "pressed";

interface Item {
  state: State;
  shape?: IconButtonShape;
  size?: IconButtonSize;
  width?: IconButtonWidth;
  color?: IconButtonColor;
  icon?: boolean;
}

function getProps(item: Item): IconButtonProps & DataStates {
  const base = {
    icon: <span className="material-symbols-outlined">settings</span>,
    size: item.size,
    shape: item.shape,
    width: item.width,
    color: item.color,
  } satisfies IconButtonProps;

  switch (item.state) {
    case "disabled":
      return { disabled: true, ...base };

    case "hovered":
      return { "data-hover": "", ...base };

    case "focused":
      return { "data-focus-visible": "", ...base };

    case "enabled":
      return { ...base };

    case "pressed":
      return { "data-active": "", ...base };
  }
}

export const Gallary = {
  render: () =>
    renderGallary({ matrix, xAxis, yAxis }, {
      renderData: (item) => {
        if (item) {
          const props = getProps(item);

          return <IconButton {...props} />;
        }

        return;
      },
    }),
  tags: ["!autodocs"],
  parameters: {
    pseudo: {
      hover: ["[data-hover]"],
      focusVisible: ["[data-focus-visible]"],
      active: ["[data-active]"],
    },
    chromatic: { disableSnapshot: false },
  },
} satisfies Story;

export const Enabled = {} satisfies Story;
export const Disabled = {
  args: {
    disabled: true,
  },
} satisfies Story;

export const Pressed = {
  parameters: {
    pseudo: { active: true },
  },
} satisfies Story;

export const Focused = {
  parameters: {
    pseudo: { focusVisible: true },
  },
} satisfies Story;

export const Hovered = {
  parameters: {
    pseudo: { hover: true },
  },
} satisfies Story;
