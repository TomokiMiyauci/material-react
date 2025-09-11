import { formats, transformGroups } from "style-dictionary/enums";
import type { Config } from "style-dictionary";
import { fromFileUrl } from "@std/path";
import instance, { transformers } from "~/resources/style_dictionary/mod.ts";

const resource = {
  from: fromFileUrl(import.meta.resolve("~/resources/token.json")),
  to: fromFileUrl(import.meta.resolve("~/examples/material_design.css")),
};

const config = {
  source: [resource.from],
  platforms: {
    css: {
      transformGroup: transformGroups.css,
      files: [{
        destination: resource.to,
        format: formats.cssVariables,
        options: {
          showFileHeader: false,
          outputReferences: true,
        },
      }],
      transforms: [
        transformers.typography,
        transformers.token,
        transformers.dimension,
        transformers.color,
      ],
    },
  },
} satisfies Config;

if (import.meta.main) {
  const sd = await instance.extend(config);
  await sd.buildAllPlatforms();
}
