import type { Transform } from "style-dictionary/types";

export function dotToHyphen(input: string): string {
  return input.replace(/\./g, "-");
}

export function tokenToCssVarriable(token: string): `var(${string})` {
  const hypened = dotToHyphen(token);
  const variable = `--${hypened}`;
  return `var(${variable})`;
}

export default {
  name: "token/string",
  type: "value",
  filter: (token) => {
    return !!token.$type && token.$type === "string";
  },
  transform: (token) => {
    const { $value } = token;

    if (typeof $value !== "string") throw new Error();

    if (
      typeof token["$extensions"] === "object" &&
      token["$extensions"].type === "token"
    ) {
      return tokenToCssVarriable($value);
    }

    return $value;
  },
} satisfies Transform;
