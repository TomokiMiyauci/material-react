import { ensureDir, exists, expandGlob } from "@std/fs";
import { join, parse } from "@std/path";

const iter = expandGlob("src/**/*.css", {
  exclude: ["src/**/_generated"],
});

for await (const entry of iter) {
  if (entry.isFile) {
    const { dir, base, name } = parse(entry.path);
    const generatedDirPath = join(dir, "_generated");
    const compiledCssPath = join(generatedDirPath, base);
    const tsPath = join(generatedDirPath, name + ".ts");

    if (await exists(compiledCssPath)) {
      const css = await Deno.readTextFile(compiledCssPath);
      const content = `export default \`${css}\`;`;

      await ensureDir(dir);
      await Deno.writeTextFile(tsPath, content);
    }
  }
}
