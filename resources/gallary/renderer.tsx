import { type AxisNode, Matrix } from "../matrix/mod.ts";
import type { JSX, ReactNode } from "react";

export interface GallaryArgs<T> {
  xAxis: AxisNode[];
  yAxis: AxisNode[];
  matrix: T[][];
}

export interface GallaryOptions<T> {
  renderData?(item: T | undefined): ReactNode;
}

export function renderGallary<T>(
  args: GallaryArgs<T>,
  options?: GallaryOptions<T>,
): JSX.Element {
  const { xAxis, yAxis, matrix } = args;
  const { renderData } = options ?? {};

  return (
    <Matrix
      className="w-full border-collapse font-roboto text-zinc-900 whitespace-nowrap"
      data={matrix}
      xAxis={xAxis}
      yAxis={yAxis}
      renderData={renderData}
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
