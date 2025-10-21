import { Children, type JSX, type ReactNode } from "react";

export function getFirstNode<T>(
  fn: (props: T) => JSX.Element,
  props: T,
): ReactNode {
  const children = fn(props).props.children;
  const first = Children.toArray(children)[0];

  return first;
}
