import type { Transform } from "style-dictionary/types";

export const NAME = "dcgc/dimension";

export default {
  name: NAME,
  type: "value",
  filter: (token) => {
    return !!token.$type && token.$type === "dimension";
  },
  transform: (token) => {
    const { $value } = token;

    if (!validateDimensionValue($value)) {
      throw new Error("Invalid value: dimension");
    }

    const { unit, value } = $value;

    if (unit === "dp") {
      return rem(value);
    }

    return `${value}${unit}`;
  },
} satisfies Transform;

function toRem(value: number): number {
  return value / 16;
}

function rem(value: number): string {
  const v = toRem(value);

  return `${v}rem`;
}

interface DimensionValue {
  value: number;
  unit: DimensionUnit;
}

function validateDimensionValue(value: unknown): value is DimensionValue {
  return !!value && typeof value === "object" &&
    validateDimentionValueObject(value);
}

function validateDimentionValueObject(value: object): value is DimensionValue {
  return "value" in value && typeof value.value === "number" &&
    "unit" in value && isDimensionUnit(value.unit);
}

const units = ["px", "rem", "dp"];

type DimensionUnit = "px" | "rem" | "dp";

function isDimensionUnit(value: unknown): value is DimensionUnit {
  return typeof value === "string" && new Set(units).has(value);
}
