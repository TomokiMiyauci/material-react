import { transformGroups } from "style-dictionary/enums";
import { expandGlob } from "@std/fs";
import StyleDictionary, { type Config } from "style-dictionary";
import { join, parse } from "@std/path";
import tokenTransform, {
  NAME as tokenTransformName,
} from "./transforms/md_token.ts";
import dimensitonTransform, {
  NAME as dimenstionName,
} from "./transforms/dimension.ts";

const iter = expandGlob("src/**/token.json", {
  exclude: ["src/**/_generated"],
});

for await (const entry of iter) {
  if (entry.isFile) {
    const config = defineConfig(entry.path);

    const sd = new StyleDictionary(config);
    sd.registerTransform(tokenTransform);
    sd.registerTransform(dimensitonTransform);
    await sd.buildAllPlatforms();
  }
}

function defineConfig(path: string): Config {
  const { dir, name } = parse(path);
  const destination = join(dir, "_generated", `${name}.scss`);

  return {
    source: [path],
    platforms: {
      scss: {
        transformGroup: transformGroups.scss,
        files: [
          {
            destination,
            "format": "scss/variables",
          },
        ],
        transforms: [tokenTransformName, dimenstionName],
      },
    },
  };
}
