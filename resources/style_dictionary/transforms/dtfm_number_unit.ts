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
          const value = rem($value);
          return value;
        }

        case "dp": {
          return `${$value}px`;
        }
      }
    }

    return;
  },
} satisfies Transform;

function roundTo(num: number, digits = 0): number {
  const factor = 10 ** digits;
  return Math.round(num * factor) / factor;
}

function rem(value: number): string {
  const v = roundTo(toRem(value), 4);

  return `${v}rem`;
}

function toRem(value: number): number {
  return value / 16;
}
