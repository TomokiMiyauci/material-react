import type { Plugin } from "postcss";
import valueParser from "postcss-value-parser";

/**
 * A plugin that inlines CSS variables referenced by :root with `@embed` comments and removes that.
 */
export default function inlineTokens(): Plugin {
  return {
    postcssPlugin: "inline-tokens",
    Once(root) {
      const tokens = new Map<string, string>();
      root.walkRules(":root", (rule) => {
        const comment = rule.prev();

        if (comment?.type === "comment") {
          if (flag.test(comment.text)) {
            rule.walkDecls((decl) => {
              if (decl.prop.startsWith("--")) {
                tokens.set(decl.prop, decl.value);
              }
            });

            comment.remove();
            rule.remove();
          }
        }
      });

      const resolvedTokens = resolveVars(tokens);

      root.walkDecls((decl) => {
        const parsed = valueParser(decl.value);

        parsed.walk((node) => {
          if (node.type === "function" && node.value === "var") {
            const varName = node.nodes[0]?.value;

            if (varName && resolvedTokens.has(varName)) {
              const value = resolvedTokens.get(varName)!;
              // deno-lint-ignore no-explicit-any
              node.type = "word" as any;
              node.value = value;
            }
          }
        });

        decl.value = parsed.toString();
      });
    },
  };
}

inlineTokens.postcss = true;

const flag = /^@embed$/;

function resolveVars(vars: Map<string, string>): Map<string, string> {
  function resolveOne(
    key: string,
    vars: Map<string, string>,
    cache: Map<string, string>,
  ): string | undefined {
    if (cache.has(key)) return cache.get(key)!;

    const raw = vars.get(key);
    if (!raw) return;

    const ast = valueParser(raw);

    ast.walk((node) => {
      if (node.type === "function" && node.value === "var") {
        const refName = node.nodes[0]?.value;
        if (!refName) return;

        const resolved = resolveOne(refName, vars, cache);

        if (resolved) {
          // deno-lint-ignore no-explicit-any
          node.type = "word" as any;
          node.value = resolved;
        }
      } else {
        cache.set(key, raw);
      }
    });

    const resolved = ast.toString();

    cache.set(key, resolved);
    return resolved;
  }

  const cache = new Map<string, string>();
  const resolvedVars = new Map<string, string>();

  for (const key of vars.keys()) {
    const value = resolveOne(key, vars, cache);

    if (value) {
      resolvedVars.set(key, value);
    }
  }

  return resolvedVars;
}
