import { expandGlob } from "@std/fs";
import { toFileUrl } from "@std/path";
import {
  Builder,
  Css2TsTransformer,
  CssTransformer,
  DenoIO,
  Items2Toekns,
  parseBuildConfig,
  Tokens2Css,
} from "~/resources/builder/mod.ts";

if (import.meta.main) {
  const iter = expandGlob("src/**/build.json");

  for await (const entry of iter) {
    if (entry.isFile) {
      const contents = await Deno.readTextFile(entry.path);
      const config = parseBuildConfig(contents);

      const builder = new Builder({
        build: config,
        io: new DenoIO(),
        base: toFileUrl(entry.path),
        transformers: [
          new Items2Toekns(),
          new Tokens2Css(),
          new CssTransformer(),
          new Css2TsTransformer(),
        ],
      });

      await builder.build();
    }
  }
}
