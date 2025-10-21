import type { AxisNode } from "./types.ts";
import type { JSX, Key, PropsWithChildren, ReactNode } from "react";

interface Keyed {
  key: Key;
}

interface AxisHeaderProps extends Keyed {
  colSpan: number | undefined;
  rowSpan: number | undefined;
  scope: string;
  children: ReactNode;
}

export interface MatrixProps<T> {
  xAxis: AxisNode[];
  yAxis: AxisNode[];
  data: T[][];
  renderData?(item: T): ReactNode;
  renderXAxisHeader?(props: AxisHeaderProps): ReactNode;
  renderYAxisHeader?(props: AxisHeaderProps): ReactNode;
  renderCell?(props: PropsWithChildren & Keyed): ReactNode;
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

export default function MatrixTable<T>(
  props: MatrixProps<T> & JSX.IntrinsicElements["table"],
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
  const rowDepth = getDepth(xAxis);
  const headerRows = buildXAxis(xAxis, rowDepth);
  const colDepth = getDepth(yAxis);
  const cells: Cell[][] = data.map((row) => {
    return row.map((value) => ({ type: "cell", value }));
  });

  const cols: ColHeader[][] = buildYAxis(yAxis, colDepth, 0).map((row) => {
    return row.map((axis) => {
      return {
        type: "col-header",
        value: axis.label,
        colspan: axis.colspan,
        rowspan: axis.rowspan,
      } satisfies ColHeader;
    });
  });
  const matrix = mergeRows<BodyCell>(cols, cells);

  return (
    <table {...rest}>
      <thead>
        {headerRows.map((row, index) => {
          return (
            <tr key={index}>
              {index === 0 && needCornerCell(rowDepth, colDepth) && (
                <td key="corner-cell" colSpan={colDepth} rowSpan={rowDepth} />
              )}
              {row.map((axis, index) => {
                return renderXAxisHeader({
                  key: index,
                  colSpan: axis.colspan,
                  rowSpan: axis.rowspan,
                  scope: axis.colspan ? "colgroup" : "col",
                  children: axis.label,
                });
              })}
            </tr>
          );
        })}
      </thead>
      <tbody>
        {matrix.map((rows, index) => {
          return (
            <tr key={index}>
              {rows.map((node, index) => {
                if (node.type === "col-header") {
                  return renderYAxisHeader({
                    rowSpan: node.rowspan,
                    colSpan: node.colspan,
                    children: node.value,
                    key: index,
                    scope: node.colspan ? "row" : "rowgroup",
                  });
                }

                return renderCell({
                  children: renderData(node.value as T),
                  key: index,
                });
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function countLeaves(node: AxisNode): number {
  if (!node.children) return 1;
  return node.children.map(countLeaves).reduce((a, b) => a + b, 0);
}

type BodyCell<T = unknown> = ColHeader | Cell<T>;

interface ColHeader {
  type: "col-header";
  colspan?: number;
  rowspan?: number;
  value: string;
}

interface Cell<T = unknown> {
  type: "cell";
  value: T;
}

function needCornerCell(rowDepth: number, colDepth: number): boolean {
  return 0 < rowDepth && 0 < colDepth;
}

function getDepth(nodes: AxisNode[]): number {
  if (!nodes.length) return 0;

  return 1 +
    Math.max(0, ...nodes.map((n) => (n.children ? getDepth(n.children) : 0)));
}

function buildXAxis(nodes: AxisNode[], maxDepth: number, depth = 0): Axis[][] {
  const rowspan = maxDepth - depth;
  const self = nodes.map((node) => {
    if (hasChildren(node)) {
      const colspan = countLeaves(node);

      return { label: node.label, colspan };
    }

    return { label: node.label, rowspan };
  });

  const children = nodes.flatMap((node) => node.children).filter(isNonNullable);

  const nested = children.length
    ? buildXAxis(children, maxDepth, depth + 1)
    : [];

  return [self, ...nested];
}

function hasChildren(node: AxisNode): boolean {
  return !!node.children?.length;
}

interface Axis {
  label: string;
  rowspan?: number;
  colspan?: number;
}

function buildYAxis(
  nodes: AxisNode[],
  maxDepth: number,
  depth: number,
): Axis[][] {
  if (!nodes.length) return [];

  return nodes.flatMap((node) => {
    if (!node.children || node.children.length === 0) {
      const colspan = maxDepth - depth;
      return [[{ label: node.label, colspan }]];
    }

    const childRows = buildYAxis(node.children, maxDepth, depth + 1);

    const rowspan = getMaxWidth(node);
    return childRows.map((row, i) =>
      i === 0 ? [{ label: node.label, rowspan }, ...row] : row
    );
  });
}

function isNonNullable<T>(value: T): value is NonNullable<T> {
  return !!value;
}

function mergeRows<T>(a: T[][], b: T[][]): T[][] {
  const len = Math.max(a.length, b.length);
  return Array.from({ length: len }, (_, i) => [
    ...(a[i] ?? []),
    ...(b[i] ?? []),
  ]);
}

function getMaxWidth(node: AxisNode): number {
  if (!node.children || node.children.length === 0) {
    return 1;
  }

  return node.children.reduce((sum, child) => sum + getMaxWidth(child), 0);
}
