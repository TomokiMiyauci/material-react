/**
 * @see https://github.com/style-dictionary/style-dictionary/blob/main/lib/common/formatHelpers/createPropertyFormatter.js
 */

import type {
  Config,
  Dictionary,
  Format,
  LocalOptions,
  TransformedToken,
} from "style-dictionary/types";
import { getReferences, usesReferences } from "style-dictionary/utils";

export default {
  name: "css/property",
  format: (arg) => {
    const { dictionary, options } = arg;
    const globalInherits =
      "inherits" in options && typeof options["inherits"] === "boolean"
        ? options["inherits"]
        : false;

    const expr = dictionary.allTokens.map((token) => {
      const { name, attributes } = token;
      const value = compileTokenValue(token, options, dictionary);
      const syntax = getSyntax(attributes) ?? "*";
      const inherits = getInherits(attributes) ?? globalInherits;

      const propertyAtRule = render({
        propertyName: name,
        initValue: value,
        syntax,
        inherits,
      });

      return propertyAtRule;
    }).join("\n\n");

    return expr;
  },
} satisfies Format;

const compileTokenValue = (
  token: TransformedToken,
  options: Config & LocalOptions,
  dictionary: Dictionary,
): string => {
  const { tokens, unfilteredTokens } = dictionary;
  const { usesDtcg, outputReferenceFallbacks } = options;
  const original = `${token.original.value}`;
  let value = usesDtcg ? token.$value : token.value;
  const originalValue = usesDtcg ? token.original.$value : token.original.value;

  const shouldOutputRef = usesReferences(originalValue) &&
    (typeof options.outputReferences === "function"
      ? options.outputReferences(token, {
        dictionary,
        usesDtcg: options.usesDtcg,
      })
      : options.outputReferences);

  if (shouldOutputRef) {
    value = original;
    const refs = getReferences(originalValue, tokens, {
      unfilteredTokens,
      warnImmediately: false,
    }, []);

    const originalIsObject = typeof originalValue === "object" &&
      originalValue !== null;

    if (!originalIsObject) {
      // TODO: find a better way to deal with object-value tokens and outputting refs
      // e.g. perhaps it is safer not to output refs when the value is transformed to a non-object
      // for example for CSS-like formats we always flatten to e.g. strings

      // when original is object value, we replace value by matching ref.value and putting a var instead.
      // Due to the original.value being an object, it requires transformation, so undoing the transformation
      // by replacing value with original.value is not possible. (this is the early v3 approach to outputting refs)

      // when original is string value, we replace value by matching original.value and putting a var instead
      // this is more friendly to transitive transforms that transform the string values (v4 way of outputting refs)
      value = originalValue;
    }

    refs.forEach((ref) => {
      if (
        Object.hasOwn(ref, `${usesDtcg ? "$" : ""}value`) &&
        Object.hasOwn(ref, "name")
      ) {
        const refVal = usesDtcg ? ref.$value : ref.value;
        const replaceFunc = function () {
          if (outputReferenceFallbacks) {
            return `var(${prefix}${ref.name}, ${refVal})`;
          } else {
            return `var(${prefix}${ref.name})`;
          }
        };

        // TODO: add test
        // technically speaking a reference can be made to a number or boolean token, in this case we stringify it first
        value = `${value}`.replace(
          originalIsObject
            ? refVal
            : new RegExp(`{${ref.path.join("\\.")}(\\.\\$?value)?}`, "g"),
          replaceFunc,
        );
      }
    });
    return value;
  }

  return value;
};

const prefix = "--";

function getSyntax(
  attrs: object | undefined,
): string | undefined {
  if (!attrs) return;

  if ("syntax" in attrs && typeof attrs.syntax === "string") {
    return attrs.syntax;
  }

  return;
}

function getInherits(
  attrs: object | undefined,
): boolean | undefined {
  if (!attrs) return;

  if ("inherits" in attrs && typeof attrs.inherits === "boolean") {
    return attrs.inherits;
  }

  return;
}

interface PropertyWithSyntax {
  propertyName: string;
  syntax: string;
  inherits?: boolean;
  initValue: string;
}

const render = t<PropertyWithSyntax>`@property --${({ propertyName }) =>
  propertyName} {
  syntax: "${({ syntax }) => syntax}";
  inherits: ${({ inherits = false }) => inherits};
  initial-value: ${({ initValue }) => initValue};
}`;

export function t<T>(
  strings: TemplateStringsArray,
  ...expr: ((vars: T) => unknown)[]
): (vars: T) => string {
  return (vars: T) =>
    strings.map((s, i) => s + (expr[i] ? expr[i](vars) : "")).join("");
}
