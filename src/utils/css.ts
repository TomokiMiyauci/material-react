export function css<T>(
  strings: TemplateStringsArray,
  ...expr: ((vars: T) => string)[]
): (vars: T) => string {
  return (vars: T) =>
    strings.map((s, i) => s + (expr[i] ? expr[i](vars) : "")).join("");
}
