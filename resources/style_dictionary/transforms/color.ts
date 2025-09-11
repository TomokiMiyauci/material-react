import type { Transform } from "style-dictionary/types";

export default {
  name: "dtfm/color",
  type: "value",
  filter: (token) => {
    return !!token.$type && token.$type === "color";
  },
  transform: (token) => {
    const { $value } = token;

    if (!isObject($value)) throw new Error();

    const result = validateColorValue($value);

    if (!result) throw new Error("Invalid color $value field");

    return stringifyColorValue($value);
  },
} satisfies Transform;

interface ColorValue {
  colorSpace: ColorSpace;
  components: [ComponentsItem, ComponentsItem, ComponentsItem];
  alpha?: number;
  hex?: HexString;
}

type ComponentsItem = "none" | number;

type HexString = `#${string}`;

type ColorSpace = "srgb";

function validateColorValue(value: object): value is ColorValue {
  return true;
}

function isObject(value: unknown): value is object {
  return !!value && typeof value === "object";
}

function stringifyColorValue(value: ColorValue): string {
  const { colorSpace, components, alpha, hex } = value;
  const [first, second, third] = components;

  switch (colorSpace) {
    case "srgb":
      return `color(srgb ${first} ${second} ${third})`;
  }
}
