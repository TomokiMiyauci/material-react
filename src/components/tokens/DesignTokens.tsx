import type { JSX } from "react";
import RefTokens from "./RefTokens.tsx";
import SysTokens from "./SysTokens.tsx";
export default function DesignTokens(): JSX.Element {
  return (
    <>
      <RefTokens />
      <SysTokens />
    </>
  );
}
