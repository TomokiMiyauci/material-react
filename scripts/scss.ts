import { ensureDir, expandGlob } from "@std/fs";
import { join, parse } from "@std/path";
import { compile } from "sass";

const iter = expandGlob("src/**/*.scss", {
  "exclude": ["**/_generated"],
});

for await (const entry of iter) {
  if (entry.isFile) {
    const path = entry.path;

    const result = compile(path, { style: "compressed" });
    const { dir, name } = parse(path);
    const filePath = join(dir, "_generated", name + ".css");

    await ensureDir(dir);
    await Deno.writeTextFile(filePath, result.css);
  }
}
