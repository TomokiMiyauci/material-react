import { expandGlob } from "@std/fs";
import { basename, join, parse } from "@std/path";
import postcss from "postcss";
import valueParser from "postcss-value-parser";
import mustashe from "mustache";

const EXT = ".mustache";

function extractCssVariables(value: string): string[] {
  const root = postcss.parse(value);
  const variables = new Set<string>();

  root.walkDecls((decl) => {
    const parsed = valueParser(decl.value);

    parsed.walk((node) => {
      if (node.type === "function" && node.value === "var") {
        node.nodes.forEach((arg) => {
          if (arg.type === "word") {
            variables.add(arg.value);
          }
        });
      }
    });
  });

  return variables.values().toArray();
}

if (import.meta.main) {
  const iter = expandGlob(`src/**/*${EXT}`, {
    exclude: ["src/**/_generated"],
  });

  for await (const entry of iter) {
    if (entry.isFile) {
      const { dir, name } = parse(entry.path);
      const template = await Deno.readTextFile(entry.path);

      const generatedCssGlob = join(dir, "_generated", "*.css");
      const generatedCssEntries = await Array.fromAsync(
        expandGlob(generatedCssGlob, { exclude: ["**/*/token.css"] }),
      );

      const promises = generatedCssEntries.map(async (entry) => {
        const css = await Deno.readTextFile(entry.path);

        return extractCssVariables(css);
      });

      const allTokens = await Promise.all(promises);
      const tokens = new Set(allTokens.flat()).values().toArray().toSorted();

      const fileName = basename(name, EXT);
      const contents = mustashe.render(template, { tokens });
      const outPath = join(dir, fileName);

      await Deno.writeTextFile(outPath, contents);
    }
  }
}
