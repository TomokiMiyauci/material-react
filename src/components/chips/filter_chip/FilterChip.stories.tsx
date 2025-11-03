import { type AxisNode, renderGallary } from "~/resources/gallary/mod.ts";
import FilterChip, { type FilterChipProps } from "./FilterChip.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Component/FilterChip",
  component: FilterChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Label",
  },
} satisfies Meta<typeof FilterChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Leading = {
  args: {
    leading: <span className="material-symbols-outlined">check</span>,
  },
} satisfies Story;

export const Trailing = {
  args: {
    trailing: (
      <span className="material-symbols-outlined">
        arrow_drop_down
      </span>
    ),
  },
} satisfies Story;

export const Icons = {
  args: {
    leading: <span className="material-symbols-outlined">check</span>,
    trailing: (
      <span className="material-symbols-outlined">
        arrow_drop_down
      </span>
    ),
  },
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
const selectNodes = [
  { label: "Non Selected", children: variantNodes },
  { label: "Selected", children: variantNodes },
] satisfies AxisNode[];
const yAxis = [
  { label: "Label", children: selectNodes },
  { label: "Leading", children: selectNodes },
  { label: "Trailing", children: selectNodes },
  { label: "Icons", children: selectNodes },
] satisfies AxisNode[];
const states = [
  "enabled",
  "disabled",
  "hovered",
  "focused",
  "pressed",
] satisfies State[];
const variants = [false, true] as const;
const selects = [false, true] as const;
const icons = [false, "leading", "trailing", "icons"] as const;
const matrix: Item[][] = icons.flatMap((icon) =>
  selects.flatMap((selected) =>
    variants.map((elevated) =>
      states.map((state) => {
        const props = !icon
          ? {}
          : icon === "leading"
          ? { leading: true }
          : icon === "trailing"
          ? { trailing: true }
          : { leading: true, trailing: true };
        return {
          state,
          elevated,
          selected,
          ...props,
        };
      })
    )
  )
);

type State = "enabled" | "disabled" | "hovered" | "focused" | "pressed";

interface Item {
  state: State;
  leading?: boolean;
  trailing?: boolean;
  elevated?: boolean;
  selected?: boolean;
}

interface PseudoProps {
  "data-hover"?: "";
  "data-active"?: "";
  "data-focus-visible"?: "";
}

function getProps(item: Item): FilterChipProps & PseudoProps {
  const { state, leading, elevated, trailing, selected } = item;
  const base = {
    children: "Label",
    leading: leading && (
      <span className="material-symbols-outlined">
        check
      </span>
    ),
    trailing: trailing && (
      <span className="material-symbols-outlined">
        arrow_drop_down
      </span>
    ),
    elevated,
    selected,
  } satisfies FilterChipProps;

  switch (state) {
    case "enabled":
      return base;
    case "disabled":
      return { ...base, state: "disabled" };
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

        return <FilterChip {...props} />;
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
