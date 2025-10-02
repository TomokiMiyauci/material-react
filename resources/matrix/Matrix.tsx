import type { AxisNode } from "./types.ts";
import type { JSX, Key, PropsWithChildren, ReactNode } from "react";

interface Keyed {
  key: Key;
}

interface AxisHeaderProps extends Keyed {
  colSpan: number | undefined;
  rowSpan: number | undefined;
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
