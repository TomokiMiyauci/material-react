import type { Transform } from "style-dictionary/types";

export default {
  name: "dtfm/extensions/attribute/syntax",
  type: "attribute",
  transform: (token) => {
    if (
      "$extensions" in token &&
      typeof token["$extensions"] === "object" &&
      "ratio" in token["$extensions"] &&
      token["$extensions"].ratio === true
    ) {
      return {
        syntax: "<percentage>",
      };
    }

    return {};
  },
} satisfies Transform;
