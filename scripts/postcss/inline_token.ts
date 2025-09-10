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

      root.walkDecls((decl) => {
        const parsed = valueParser(decl.value);

        parsed.walk((node) => {
          if (node.type === "function" && node.value === "var") {
            const varName = node.nodes[0]?.value;

            if (varName && tokens.has(varName)) {
              const value = tokens.get(varName)!;
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
