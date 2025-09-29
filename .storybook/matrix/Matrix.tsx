import type { JSX, ReactNode } from "react";

export interface MatrixProps<V = unknown> {
  data: V[][];
  xAxis: string[];
  yAxis: string[];
  renderCell?: (node: ReactNode) => ReactNode;
  renderData?: (value?: V) => ReactNode;
  renderXAxisHeader?: (x: string) => ReactNode;
  renderYAxisHeader?: (y: string) => ReactNode;
}

function defaultValueRender(value: ReactNode): JSX.Element {
  return <td>{value}</td>;
}

function defaultRenderData(value: unknown): ReactNode {
  return String(value);
}

function defaultXAxisHeader(x: string): JSX.Element {
  return <th>{x}</th>;
}

function defaultYAxisHeader(x: string): JSX.Element {
  return <th>{x}</th>;
}

export default function Matrix<V = unknown>(
  props: MatrixProps<V>,
): JSX.Element {
  const {
    data,
    xAxis,
    yAxis,
    renderCell = defaultValueRender,
    renderData = defaultRenderData,
    renderXAxisHeader = defaultXAxisHeader,
    renderYAxisHeader = defaultYAxisHeader,
  } = props;

  return (
    <table
      style={{
        borderCollapse: "collapse",
        width: "100%",
        tableLayout: "fixed",
      }}
    >
      <thead>
        <tr>
          <th></th>
          {xAxis.map((x) => (
            renderXAxisHeader(x)
          ))}
        </tr>
      </thead>
      <tbody>
        {yAxis.map((y, yIndex) => (
          <tr key={y}>
            {renderYAxisHeader(y)}

            {xAxis.map((_, xIndex) => {
              const item = data[yIndex]?.[xIndex];
              const node = renderData(item);

              return renderCell(node);
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
