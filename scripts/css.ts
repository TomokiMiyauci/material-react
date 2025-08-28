import { ensureDir, expandGlob } from "@std/fs";
import { join, parse } from "@std/path";

const iter = expandGlob("src/**/_generated/*.css");

for await (const entry of iter) {
  if (entry.isFile) {
    const path = entry.path;

    const css = await Deno.readTextFile(path);
    const content = `export default \`${css}\`;`;
    const { dir, name } = parse(path);
    const filePath = join(dir, name + ".ts");

    await ensureDir(dir);
    await Deno.writeTextFile(filePath, content);
  }
}
