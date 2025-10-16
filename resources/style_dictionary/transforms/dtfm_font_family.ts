import type { Transform } from "style-dictionary/types";

export default {
  name: "dtfm/font-family",
  type: "value",
  filter: (token) => {
    return !!token.$type && token.$type === "fontFamily";
  },
  transform: (token) => {
    const { $value } = token;

    if (typeof $value === "string") {
      return `"${$value}"`;
    }

    throw new Error(`Invalid fontFamily value: ${$value}`);
  },
} satisfies Transform;
