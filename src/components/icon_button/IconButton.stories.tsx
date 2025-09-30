import IconButton, {
  type IconButtonColor,
  type IconButtonProps,
  type IconButtonShape,
  type IconButtonSize,
  type IconButtonWidth,
} from "./IconButton.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ReactNode } from "react";

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

const states = ["Enabled", "Disabled", "Hovered", "Focused", "Pressed"];

const matrix = [
  [
    { state: "enabled" },
    { state: "enabled", size: "xsmall" },
    { state: "enabled", size: "small" },
    { state: "enabled", size: "medium" },
    { state: "enabled", size: "large" },
    { state: "enabled", size: "xlarge" },
    { state: "enabled", shape: "square" },
    { state: "enabled", width: "narrow" },
    { state: "enabled", width: "wide" },
    { state: "enabled", color: "filled" },
    { state: "enabled", color: "tonal" },
    { state: "enabled", color: "outlined" },
    { state: "enabled", color: "standard" },
  ],
  [
    { state: "disabled" },
    { state: "disabled", size: "xsmall" },
    { state: "disabled", size: "small" },
    { state: "disabled", size: "medium" },
    { state: "disabled", size: "large" },
    { state: "disabled", size: "xlarge" },
    { state: "disabled", shape: "square" },
    { state: "disabled", width: "narrow" },
    { state: "disabled", width: "wide" },
    { state: "disabled", color: "filled" },
    { state: "disabled", color: "tonal" },
    { state: "disabled", color: "outlined" },
    { state: "disabled", color: "standard" },
  ],
  [
    { state: "hovered" },
    { state: "hovered", size: "xsmall" },
    { state: "hovered", size: "small" },
    { state: "hovered", size: "medium" },
    { state: "hovered", size: "large" },
    { state: "hovered", size: "xlarge" },
    { state: "hovered", shape: "square" },
    { state: "hovered", width: "narrow" },
    { state: "hovered", width: "wide" },
    { state: "hovered", color: "filled" },
    { state: "hovered", color: "tonal" },
    { state: "hovered", color: "outlined" },
    { state: "hovered", color: "standard" },
  ],
  [
    { state: "focused" },
    { state: "focused", size: "xsmall" },
    { state: "focused", size: "small" },
    { state: "focused", size: "medium" },
    { state: "focused", size: "large" },
    { state: "focused", size: "xlarge" },
    { state: "focused", shape: "square" },
    { state: "focused", width: "narrow" },
    { state: "focused", width: "wide" },
    { state: "focused", color: "filled" },
    { state: "focused", color: "tonal" },
    { state: "focused", color: "outlined" },
    { state: "focused", color: "standard" },
  ],
  [
    { state: "pressed" },
    { state: "pressed", size: "xsmall" },
    { state: "pressed", size: "small" },
    { state: "pressed", size: "medium" },
    { state: "pressed", size: "large" },
    { state: "pressed", size: "xlarge" },
    { state: "pressed", shape: "square" },
    { state: "pressed", width: "narrow" },
    { state: "pressed", width: "wide" },
    { state: "pressed", color: "filled" },
    { state: "pressed", color: "tonal" },
    { state: "pressed", color: "outlined" },
    { state: "pressed", color: "standard" },
  ],
] satisfies Item[][];

const xAxis = [
  "Default",
  "XSmall",
  "Small",
  "Medium",
  "Large",
  "XLarge",
  "Square",
  "Narrow",
  "Wide",
  "Filled",
  "Tonal",
  "Outlined",
  "Standard",
];
import { Matrix } from "~/.storybook/matrix/mod.ts";

type State = "enabled" | "hovered" | "disabled" | "focused" | "pressed";

interface Item {
  state: State;
  shape?: IconButtonShape;
  size?: IconButtonSize;
  width?: IconButtonWidth;
  color?: IconButtonColor;
  icon?: boolean;
}

function withGallary<T>(
  xAxis: string[],
  yAxis: string[],
  matrix: T[][],
  renderData: (item: T | undefined) => ReactNode,
) {
  return () => (
    <Matrix<T>
      className="w-full border-collapse font-roboto text-zinc-900 whitespace-nowrap"
      renderData={renderData}
      data={matrix}
      xAxis={xAxis}
      yAxis={yAxis}
      renderXAxisHeader={({ children }) => (
        <th className="p-[1rem] border-1 border-solid bg-neutral-100 border-neutral-300">
          {children}
        </th>
      )}
      renderYAxisHeader={({ children }) => {
        return (
          <th className="p-[1rem] border-1 border-solid bg-neutral-100 border-neutral-300">
            {children}
          </th>
        );
      }}
      renderCell={({ children }) => {
        return (
          <td className="text-center p-[1rem] border-1 border-solid border-neutral-300">
            {children}
          </td>
        );
      }}
    />
  );
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
  decorators: [withGallary<Item>(xAxis, states, matrix, (item) => {
    if (item) {
      const props = getProps(item);

      return <IconButton {...props} />;
    }

    return;
  })],
  tags: ["!autodocs"],
  parameters: {
    pseudo: {
      hover: ["[data-hover]"],
      focusVisible: ["[data-focus-visible]"],
      active: ["[data-active]"],
    },
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
