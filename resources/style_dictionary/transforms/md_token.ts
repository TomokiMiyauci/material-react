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
  name: "md/token",
  type: "value",
  filter: (token) => {
    return !!token.$type && token.$type === "token";
  },
  transform: (token) => {
    const { $value } = token;

    if (typeof $value !== "string") throw new Error();

    return tokenToCssVarriable($value);
  },
} satisfies Transform;
