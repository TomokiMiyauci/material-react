import type { JSX } from "react";
import Typeface from "./typeface/Typeface.tsx";
import Palette from "./palette/Palette.tsx";

export default function RefTokens(): JSX.Element {
  return (
    <>
      <Typeface />
      <Palette />
    </>
  );
}
