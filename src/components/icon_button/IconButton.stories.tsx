import IconButton, {
  type IconButtonColor,
  type IconButtonProps,
  type IconButtonShape,
  type IconButtonSize,
  type IconButtonWidth,
} from "./IconButton.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { JSX, PropsWithChildren, ReactNode } from "react";

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

const children = [
  {
    label: "Round",
    children: [
      {
        label: "Default",
        children: [
          { label: "Filled" },
          { label: "Tonal" },
          { label: "Outlined" },
          { label: "Standard" },
        ],
      },
      {
        label: "Narrow",
        children: [
          { label: "Filled" },
          { label: "Tonal" },
          { label: "Outlined" },
          { label: "Standard" },
        ],
      },
      {
        label: "Wide",
        children: [
          { label: "Filled" },
          { label: "Tonal" },
          { label: "Outlined" },
          { label: "Standard" },
        ],
      },
    ],
  },
  {
    label: "Square",
    children: [
      {
        label: "Default",
        children: [
          { label: "Filled" },
          { label: "Tonal" },
          { label: "Outlined" },
          { label: "Standard" },
        ],
      },
      {
        label: "Narrow",
        children: [
          { label: "Filled" },
          { label: "Tonal" },
          { label: "Outlined" },
          { label: "Standard" },
        ],
      },
      {
        label: "Wide",
        children: [
          { label: "Filled" },
          { label: "Tonal" },
          { label: "Outlined" },
          { label: "Standard" },
        ],
      },
    ],
  },
];

const xAxis = [
  { label: "XSmall", children },
  { label: "Small", children },
  { label: "Medium", children },
  { label: "Large", children },
  { label: "XLarge", children },
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

function withGallary<T>(
  xAxis: AxisNode[],
  matrix: T[][],
  renderData: (item: T | undefined) => ReactNode,
) {
  return () => (
    <MatrixTable<T>
      className="w-full border-collapse font-roboto text-zinc-900 whitespace-nowrap"
      renderData={renderData}
      data={matrix}
      xAxis={xAxis}
      renderXAxisHeader={(props) => (
        <th
          {...props}
          className="p-[1rem] border-1 border-solid bg-neutral-100 border-neutral-300"
        />
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
  decorators: [withGallary<Item>(xAxis, matrix, (item) => {
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

interface MatrixTableProps<T> {
  xAxis: AxisNode[];
  data: T[][];
  renderData?(item: T): ReactNode;
  renderXAxisHeader?(props: AxisHeaderProps): ReactNode;
  renderYAxisHeader?(props: PropsWithChildren): ReactNode;
  renderCell?(props: PropsWithChildren): ReactNode;
}

interface AxisHeaderProps {
  colSpan: number | undefined;
  rowSpan: number | undefined;
  children: ReactNode;
}

interface AxisNode {
  label: string;
  children?: AxisNode[];
}

function defaultRenderData(item: unknown): ReactNode {
  return String(item);
}

function defaultAxisHeader(props: PropsWithChildren): JSX.Element {
  return <th>{props.children}</th>;
}

function defaultRenderCell(props: PropsWithChildren): JSX.Element {
  return <td>{props.children}</td>;
}

function MatrixTable<T>(
  props: MatrixTableProps<T> & JSX.IntrinsicElements["table"],
) {
  const {
    xAxis,
    data,
    renderData = defaultRenderData,
    renderXAxisHeader = defaultAxisHeader,
    renderCell = defaultRenderCell,
    ...rest
  } = props;
  const headerRows = buildHeaderRows(xAxis);

  return (
    <table {...rest}>
      <thead>
        {headerRows.map((row, i) => (
          <tr key={i}>
            {row.map((cell) => {
              return renderXAxisHeader({
                colSpan: cell.colspan,
                rowSpan: cell.rowspan,
                children: cell.label,
              });
            })}
          </tr>
        ))}
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((value) => (
              renderCell({ children: renderData(value) })
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function countLeaves(node: AxisNode): number {
  if (!node.children) return 1;
  return node.children.map(countLeaves).reduce((a, b) => a + b, 0);
}

function getDepth(nodes: AxisNode[]): number {
  return 1 +
    Math.max(0, ...nodes.map((n) => (n.children ? getDepth(n.children) : 0)));
}

interface Axis extends AxisNode {
  rowspan?: number;
  colspan?: number;
}

function buildHeaderRows(
  nodes: AxisNode[],
  depth = 0,
  maxDepth?: number,
  rows: Axis[][] = [],
): Axis[][] {
  if (!maxDepth) maxDepth = getDepth(nodes);
  if (!rows[depth]) rows[depth] = [];

  for (const node of nodes) {
    if (node.children) {
      const colspan = countLeaves(node);
      rows[depth].push({ label: node.label, colspan });
      buildHeaderRows(node.children, depth + 1, maxDepth, rows);
    } else {
      const rowspan = maxDepth - depth;
      rows[depth].push({ label: node.label, rowspan });
    }
  }
  return rows;
}
