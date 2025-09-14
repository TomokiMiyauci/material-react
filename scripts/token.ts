import { transformGroups } from "style-dictionary/enums";
import { expandGlob } from "@std/fs";
import type { Config } from "style-dictionary";
import { join, parse } from "@std/path";
import instance, {
  formats,
  transformers,
} from "~/resources/style_dictionary/mod.ts";

if (import.meta.main) {
  const iter = expandGlob("src/**/token.json", {
    exclude: ["src/**/_generated"],
  });

  for await (const entry of iter) {
    if (entry.isFile) {
      const config = defineConfig(entry.path);
      const sd = await instance.extend(config);
      await sd.buildAllPlatforms();
    }
  }
}

function defineConfig(path: string): Config {
  const { dir, name } = parse(path);
  const destination = join(dir, "_generated", `${name}.css`);

  return {
    source: [path],
    platforms: {
      css: {
        transformGroup: transformGroups.css,
        files: [
          {
            destination,
            format: formats.cssVariablesWithComment,
            options: {
              rootComment: "@embed",
            },
          },
        ],
        transforms: [
          transformers.dtfmNumberAsRadio,
          transformers.typography,
          transformers.token,
          transformers.dimension,
        ],
      },
    },
  };
}
