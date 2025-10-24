import { type AxisNode, renderGallary } from "~/resources/gallary/mod.ts";
import Fab, { type FabColor, type FabProps, type FabSize } from "./Fab.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Component/Fab",
  component: Fab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: (
      <span
        className="material-symbols-outlined"
        style={{ fontVariationSettings: `'FILL' 1` }}
      >
        edit
      </span>
    ),
  },
} satisfies Meta<typeof Fab>;

export default meta;

type Story = StoryObj<typeof meta>;

const xAxis = [
  { label: "Enabled" },
  { label: "Hovered" },
  { label: "Focused" },
  { label: "Pressed" },
] satisfies AxisNode[];
const colorNodes = [
  { label: "Primary" },
  { label: "Primary Container" },
  { label: "Secondary" },
  { label: "Secondary Container" },
  { label: "Tertiary" },
  { label: "Tertiary Container" },
] satisfies AxisNode[];
const yAxis = [
  { label: "Baseline", children: colorNodes },
  { label: "Medium", children: colorNodes },
  { label: "Large", children: colorNodes },
] satisfies AxisNode[];

const colors = [
  "primary",
  "primary-container",
  "secondary",
  "secondary-container",
  "tertiary",
  "tertiary-container",
] satisfies FabColor[];
const sizes = ["baseline", "medium", "large"] satisfies FabSize[];
const states = [
  "enabled",
  "hovered",
  "focused",
  "pressed",
] satisfies State[];
const matrix: Item[][] = sizes.flatMap((size) => {
  return colors.map((color) =>
    states.flatMap((state) => ({ size, color, state }))
  );
});

type State = "enabled" | "hovered" | "focused" | "pressed";

interface Item extends FabProps {
  state: State;
}

interface PseudoData {
  "data-hover"?: "";
  "data-active"?: "";
  "data-focus-visible"?: "";
}

function getProps(item: Item): FabProps & PseudoData {
  const base = {
    color: item.color,
    size: item.size,
    children: (
      <span
        className="material-symbols-outlined"
        style={{ fontVariationSettings: `'FILL' 1` }}
      >
        edit
      </span>
    ),
  } satisfies FabProps;

  switch (item.state) {
    case "enabled":
      return base;
    case "hovered":
      return { "data-hover": "", ...base };
    case "focused":
      return { "data-active": "", ...base };
    case "pressed":
      return { "data-focus-visible": "", ...base };
  }
}

export const Default = {} satisfies Story;

export const Gallary = {
  render: () =>
    renderGallary({ xAxis, yAxis, matrix }, {
      renderData: (item) => {
        if (!item) return;
        const props = getProps(item);

        return <Fab {...props} />;
      },
    }),

  parameters: {
    pseudo: {
      hover: "[data-hover]",
      active: "[data-active]",
      focusVisible: "[data-focus-visible]",
    },
    chromatic: { disableSnapshot: false },
    a11y: {
      test: "off",
    },
  },
  tags: ["!autodocs"],
} satisfies Story;
