import { type AxisNode, renderGallary } from "~/resources/gallary/mod.ts";
import ExtendedFab, {
  type ExtendedFabColor,
  type ExtendedFabProps,
  type ExtendedFabSize,
} from "./ExtendedFab.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Component/ExtendedFab",
  component: ExtendedFab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Label",
  },
} satisfies Meta<typeof ExtendedFab>;

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
const iconNodes = [
  { label: "No Icon", children: colorNodes },
  { label: "With Icon", children: colorNodes },
] satisfies AxisNode[];
const yAxis = [
  { label: "Small", children: iconNodes },
  { label: "Medium", children: iconNodes },
  { label: "Large", children: iconNodes },
] satisfies AxisNode[];

const colors = [
  "primary",
  "primary-container",
  "secondary",
  "secondary-container",
  "tertiary",
  "tertiary-container",
] satisfies ExtendedFabColor[];
const sizes = ["small", "medium", "large"] satisfies ExtendedFabSize[];
const states = [
  "enabled",
  "hovered",
  "focused",
  "pressed",
] satisfies State[];
const matrix: Item[][] = sizes.flatMap((size) => {
  return [false, true].flatMap((icon) => {
    return colors.map((color) =>
      states.flatMap((state) => ({ size, color, state, icon }))
    );
  });
});

type State = "enabled" | "hovered" | "focused" | "pressed";

interface Item extends ExtendedFabProps {
  state: State;
}

interface PseudoData {
  "data-hover"?: "";
  "data-active"?: "";
  "data-focus-visible"?: "";
}

function getProps(item: Item): ExtendedFabProps & PseudoData {
  const base = {
    color: item.color,
    size: item.size,
    children: "Label",
    icon: item.icon
      ? (
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          stars
        </span>
      )
      : undefined,
  } satisfies ExtendedFabProps;

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

export const Gallary = {
  render: () =>
    renderGallary({ xAxis, yAxis, matrix }, {
      renderData: (item) => {
        if (!item) return;
        const props = getProps(item);

        return <ExtendedFab {...props} />;
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

export const Default = {} satisfies Story;
