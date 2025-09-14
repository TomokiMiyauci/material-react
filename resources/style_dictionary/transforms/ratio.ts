import type { Transform } from "style-dictionary/types";

export default {
  name: "dtfm/number+ratio",
  type: "value",
  filter: (token) => {
    return !!token.$type &&
      token.$type === "number" &&
      "$extensions" in token &&
      typeof token["$extensions"] === "object" &&
      "ratio" in token["$extensions"] &&
      token["$extensions"]["ratio"] === true;
  },
  transform: (token) => {
    const { $value } = token;

    if (typeof $value === "number") {
      const ratio = $value * 100;

      return `${ratio}%`;
    }

    return;
  },
} satisfies Transform;
