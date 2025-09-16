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

    if (
      "$extensions" in token &&
      typeof token["$extensions"] === "object" &&
      "unit" in token["$extensions"]
    ) {
      const unit = token["$extensions"].unit;

      switch (unit) {
        case "pt": {
          return {
            syntax: "*",
          };
        }

        case "dp": {
          return {
            syntax: "<length>",
          };
        }
      }
    }

    return {};
  },
} satisfies Transform;
