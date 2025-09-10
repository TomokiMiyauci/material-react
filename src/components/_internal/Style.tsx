import type { DetailedHTMLProps, JSX, StyleHTMLAttributes } from "react";

export interface StyleProps extends
  DetailedHTMLProps<
    StyleHTMLAttributes<HTMLStyleElement>,
    HTMLStyleElement
  > {}

export default function Style(props: StyleProps): JSX.Element {
  return <style precedence="md" {...props} />;
}
