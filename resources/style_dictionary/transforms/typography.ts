import StyleDictionary from "style-dictionary";
import type { Transform } from "style-dictionary/types";
import { transforms } from "style-dictionary/enums";
import { tokenToCssVarriable } from "./md_token.ts";

const { nameKebab } = transforms;
const seperator = "\n  ";

const kebabTransformer = StyleDictionary.hooks.transforms[nameKebab];
export default {
  name: "typography/token",
  type: "value",
  filter: (token) => {
    return !!token.$type && token.$type === "typography/token";
  },
  transform: (token) => {
    const { $value, name } = token;
    console.log($value);

    if (!validateTypographyValue($value)) {
      throw new Error("Invalid value: typography");
    }

    const { fontFamily, fontSize, fontWeight, letterSpacing, lineHeight } =
      $value;

    const normalized = {
      fontFamily: tokenToCssVarriable(fontFamily),
      fontSize: tokenToCssVarriable(fontSize),
      fontWeight: tokenToCssVarriable(fontWeight),
      letterSpacing: tokenToCssVarriable(letterSpacing),
      lineHeight: tokenToCssVarriable(lineHeight),
    };

    const typographyCssShorthand = stringifyTypographyValue(normalized) + `;`;
    const variables = Object.entries(normalized).map(([key, v]) => {
      const kebabName = kebabTransformer?.transform(
        { filePath: "", isSource: false, name: "", original: {}, path: [key] },
        {},
        {},
      );

      return `--${name}-${kebabName}: ${v}`;
    });

    // Do not add a semicolon to the last element.
    const typograohyFamilyVariables = mapExceptLast(
      variables,
      (item) => item + ";",
    ).join(seperator);

    return typographyCssShorthand + seperator + typograohyFamilyVariables;
  },
} satisfies Transform;

interface TypographyValue {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  letterSpacing: string;
  lineHeight: string;
}

function mapExceptLast<T, U>(
  array: T[],
  fn: (item: T, index: number, array: T[]) => U,
): (T | U)[] {
  return array.map((item, index, array) =>
    index === array.length - 1 ? item : fn(item, index, array)
  );
}

function validateTypographyValue(value: unknown): value is TypographyValue {
  return !!value && typeof value === "object" &&
    validateTypographyValueObject(value);
}

function stringifyTypographyValue(value: TypographyValue): string {
  const { fontFamily, fontSize, fontWeight, lineHeight } = value;

  return `${fontWeight} ${fontSize}/${lineHeight} ${fontFamily}`;
}

function validateTypographyValueObject(
  value: object,
): value is TypographyValue {
  return "fontFamily" in value && typeof value.fontFamily === "string" &&
    "fontSize" in value && typeof value.fontSize === "string" &&
    "fontWeight" in value && typeof value.fontWeight === "string" &&
    "letterSpacing" in value && typeof value.letterSpacing === "string" &&
    "lineHeight" in value && typeof value.lineHeight === "string";
}
