import IconButton, {
  type IconButtonColor,
  type IconButtonProps,
  type IconButtonShape,
  type IconButtonSize,
  type IconButtonWidth,
} from "./IconButton.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { JSX, Key, PropsWithChildren, ReactNode } from "react";

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
      yAxis={[
        { label: "Enabled" },
        { label: "Disabled" },
        { label: "Hovered" },
        { label: "Focused" },
        { label: "Pressed" },
      ]}
      renderXAxisHeader={({ key, ...props }) => (
        <th
          key={key}
          {...props}
          className="p-[1rem] border-1 border-solid bg-neutral-100 border-neutral-300"
        />
      )}
      renderYAxisHeader={({ key, ...props }) => {
        return (
          <th
            key={key}
            {...props}
            className="p-[1rem] border-1 border-solid bg-neutral-100 border-neutral-300"
          />
        );
      }}
      renderCell={({ key, children }) => {
        return (
          <td
            key={key}
            className="text-center p-[1rem] border-1 border-solid border-neutral-300"
          >
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
  yAxis: AxisNode[];
  data: T[][];
  renderData?(item: T): ReactNode;
  renderXAxisHeader?(props: AxisHeaderProps): ReactNode;
  renderYAxisHeader?(props: AxisHeaderProps): ReactNode;
  renderCell?(props: PropsWithChildren & Keyed): ReactNode;
}

interface Keyed {
  key: Key;
}

interface AxisHeaderProps extends Keyed {
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

function buildRowHeaders(
  nodes: AxisNode[],
  depth = 0,
  prefix: Axis[] = [],
): Axis[][] {
  const rows: Axis[][] = [];
  for (const node of nodes) {
    if (node.children) {
      const rowspan = countLeaves(node);
      const childRows = buildRowHeaders(node.children, depth + 1, [...prefix, {
        label: node.label,
        rowspan,
      }]);
      rows.push(...childRows);
    } else {
      rows.push([...prefix, { label: node.label }]);
    }
  }
  return rows;
}

function MatrixTable<T>(
  props: MatrixTableProps<T> & JSX.IntrinsicElements["table"],
) {
  const {
    xAxis,
    yAxis,
    data,
    renderData = defaultRenderData,
    renderXAxisHeader = defaultAxisHeader,
    renderYAxisHeader = defaultAxisHeader,
    renderCell = defaultRenderCell,
    ...rest
  } = props;
  const headerRows = buildHeaderRows(xAxis);
  const yHeaderDepth = getDepth(yAxis);
  const rowHeaders = buildRowHeaders(yAxis);

  return (
    <table {...rest}>
      <thead>
        {headerRows.map((row, i) => (
          <tr key={i}>
            {i === 0 &&
              Array.from({ length: yHeaderDepth }).map((_, j) => (
                <th key={`y-head-${j}`} rowSpan={headerRows.length}></th>
              ))}
            {row.map((cell, i) => {
              return renderXAxisHeader({
                colSpan: cell.colspan,
                rowSpan: cell.rowspan,
                children: cell.label,
                key: i,
              });
            })}
          </tr>
        ))}
      </thead>
      <tbody>
        {rowHeaders.map((headerCells, rowIndex) => (
          <tr key={rowIndex}>
            {headerCells.map((cell, i) => (
              renderYAxisHeader({
                rowSpan: cell.rowspan,
                children: cell.label,
                colSpan: undefined,
                key: i,
              })
            ))}

            {data[rowIndex]?.map((value, i) => (
              renderCell({ children: renderData(value), key: i })
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
