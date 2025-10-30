import NavigationRailItem, {
  type NavigationRailItemProps,
} from "./NavigationRailItem.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { type AxisNode, renderGallary } from "~/resources/gallary/mod.ts";

const meta = {
  title: "Component/NavigationRailItem",
  component: NavigationRailItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Home",
    orientation: "vertical",
  },
} satisfies Meta<typeof NavigationRailItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const WithIcon = {
  args: {
    icon: <span className="material-symbols-outlined">home</span>,
  },
} satisfies Story;

interface DataStates {
  "data-hover"?: "";
  "data-focus-visible"?: "";
  "data-press"?: "";
}

const xAxis = [
  { label: "Enabled" },
  { label: "Hovered" },
  { label: "Focused" },
  { label: "Pressed" },
] satisfies AxisNode[];

const activeNodes = [
  { label: "Non Active" },
  { label: "Active" },
] satisfies AxisNode[];
const orientationNodes = [
  { label: "Horizontal", children: activeNodes },
  { label: "Vertical", children: activeNodes },
] satisfies AxisNode[];
const yAxis = [
  { label: "Label", children: orientationNodes },
  { label: "With Icon", children: orientationNodes },
] satisfies AxisNode[];

const states = [
  "enabled",
  "hovered",
  "focused",
  "pressed",
] satisfies State[];
const active = [false, true] as const;
const icon = [false, true] as const;
const orientation = ["horizontal", "vertical"] as const;
const matrix = icon.flatMap((icon) => {
  return orientation.flatMap((orientation) => {
    return active.map((active) => {
      return states.flatMap((state) => {
        return {
          state,
          icon,
          active,
          orientation,
        } satisfies Item;
      });
    });
  });
}) satisfies Item[][];

type State = "enabled" | "hovered" | "focused" | "pressed";

interface Item {
  icon?: boolean;
  state: State;
  active?: boolean;
  orientation?: "horizontal" | "vertical";
}

function getProps(item: Item): NavigationRailItemProps & DataStates {
  const base = {
    icon: item.icon && <span className="material-symbols-outlined">home</span>,
    active: item.active,
    children: "Home",
    orientation: item.orientation,
  } satisfies NavigationRailItemProps;

  switch (item.state) {
    case "hovered":
      return { "data-hover": "", ...base };

    case "focused":
      return { "data-focus-visible": "", ...base };

    case "enabled":
      return { ...base };

    case "pressed":
      return { "data-press": "", ...base };
  }
}

export const Gallary = {
  render: () =>
    renderGallary({ matrix, xAxis, yAxis }, {
      renderData: (item) => {
        if (item) {
          const props = getProps(item);

          return <NavigationRailItem {...props} />;
        }

        return;
      },
    }),
  tags: ["!autodocs"],
  parameters: {
    pseudo: {
      hover: "[data-hover]",
      focusVisible: "[data-focus-visible]",
      active: "[data-press]",
    },
    chromatic: { disableSnapshot: false },
  },
} satisfies Story;
