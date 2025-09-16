import type { Transform } from "style-dictionary/types";

export default {
  name: "dtfm/number+unit",
  type: "value",
  filter: (token) => {
    return !!token.$type &&
      token.$type === "number" &&
      "$extensions" in token &&
      typeof token["$extensions"] === "object" &&
      "unit" in token["$extensions"];
  },
  transform: (token) => {
    const { $value } = token;
    const unit = token["$extensions"].unit;

    if (typeof $value === "number") {
      switch (unit) {
        case "pt": {
          const value = $value / 16;
          return `${value}rem`;
        }

        case "dp": {
          return `${$value}px`;
        }
      }
    }

    return;
  },
} satisfies Transform;
