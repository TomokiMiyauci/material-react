import { type AxisNode, renderGallary } from "~/resources/gallary/mod.ts";
import InputChip, { type InputChipProps } from "./InputChip.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Component/InputChip",
  component: InputChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Label",
  },
} satisfies Meta<typeof InputChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
export const Leading = {
  args: {
    leading: <span className="material-symbols-outlined">image</span>,
  },
} satisfies Story;

export const Trailing = {
  args: {
    trailing: <span className="material-symbols-outlined">close</span>,
  },
} satisfies Story;

export const Icons = {
  args: {
    leading: <span className="material-symbols-outlined">image</span>,
    trailing: <span className="material-symbols-outlined">close</span>,
  },
} satisfies Story;

const xAxis = [
  { label: "Enabled" },
  { label: "Disabled" },
  { label: "Hovered" },
  { label: "Focused" },
  { label: "Pressed" },
] satisfies AxisNode[];

const selectNodes = [
  { label: "Non Selected" },
  { label: "Selected" },
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
const selects = [false, true] as const;
const icons = [false, "leading", "trailing", "icons"] as const;
const matrix: Item[][] = icons.flatMap((icon) =>
  selects.map((selected) =>
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
        selected,
        ...props,
      };
    })
  )
);

type State = "enabled" | "disabled" | "hovered" | "focused" | "pressed";

interface Item {
  state: State;
  leading?: boolean;
  trailing?: boolean;
  selected?: boolean;
}

interface PseudoProps {
  "data-hover"?: "";
  "data-active"?: "";
  "data-focus-visible"?: "";
}

function getProps(item: Item): InputChipProps & PseudoProps {
  const { state, leading, trailing, selected } = item;
  const base = {
    children: "Label",
    leading: leading && (
      <span className="material-symbols-outlined">
        image
      </span>
    ),
    trailing: trailing && (
      <span className="material-symbols-outlined">
        close
      </span>
    ),
    selected,
  } satisfies InputChipProps;

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

        return <InputChip {...props} />;
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
