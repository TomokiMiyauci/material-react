import type { JSX } from "react";
import Style from "@internal/Style.tsx";
import style from "./_generated/style.ts";

/**
 * Radio buttons let people select one option from a set of options.
 */
export default function Radio(
  props: JSX.IntrinsicElements["input"],
): JSX.Element {
  return (
    <>
      <input data-md="radio" type="radio" {...props} />
      <Style href="radio">{style}</Style>
    </>
  );
}
