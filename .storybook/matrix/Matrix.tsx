import type { JSX, PropsWithChildren, ReactNode } from "react";

export interface MatrixProps<T> {
  data: T[][];
  xAxis: string[];
  yAxis: string[];
  renderCell?(props: PropsWithChildren): ReactNode;
  renderData?(value?: T): ReactNode;
  renderXAxisHeader?(props: PropsWithChildren): ReactNode;
  renderYAxisHeader?(props: PropsWithChildren): ReactNode;
}

function defaultRenderCell(props: PropsWithChildren): JSX.Element {
  return <td>{props.children}</td>;
}

function defaultRenderData(value: unknown): ReactNode {
  return String(value);
}

function defaultAxisHeader(props: PropsWithChildren): JSX.Element {
  return <th>{props.children}</th>;
}

export default function Matrix<T>(
  props: MatrixProps<T> & JSX.IntrinsicElements["table"],
): JSX.Element {
  const {
    data,
    xAxis,
    yAxis,
    renderCell = defaultRenderCell,
    renderData = defaultRenderData,
    renderXAxisHeader = defaultAxisHeader,
    renderYAxisHeader = defaultAxisHeader,
    ...rest
  } = props;

  return (
    <table {...rest}>
      <thead>
        <tr>
          <th></th>
          {xAxis.map((children) => renderXAxisHeader({ children }))}
        </tr>
      </thead>
      <tbody>
        {yAxis.map((children, yIndex) => (
          <tr key={children}>
            {renderYAxisHeader({ children })}

            {xAxis.map((_, xIndex) => {
              const item = data[yIndex]?.[xIndex];
              const children = renderData(item);

              return renderCell({ children });
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// style={{
//   borderCollapse: "collapse",
//   width: "100%",
//   tableLayout: "fixed",
// }}
