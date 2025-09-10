import { ensureDir, expandGlob } from "@std/fs";
import { join, parse } from "@std/path";
import postcss from "postcss";
import atImport from "postcss-import";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import inlineToken from "./postcss/inline_token.ts";

const iter = expandGlob("src/**/*.css", {
  exclude: ["src/**/_generated"],
});

const processor = postcss([
  // deno-lint-ignore no-explicit-any
  atImport as any,
  inlineToken,
  autoprefixer,
  cssnano,
]);

for await (const entry of iter) {
  if (entry.isFile) {
    const path = entry.path;

    const css = await Deno.readTextFile(path);

    const result = await processor.process(css, { from: path }).async();
    const { dir, base } = parse(path);
    const generatedDir = join(dir, "_generated");
    const filePath = join(generatedDir, base);

    await ensureDir(generatedDir);
    await Deno.writeTextFile(filePath, result.css);
  }
}
