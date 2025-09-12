import { formats, transformGroups, transforms } from "style-dictionary/enums";
import type { Config } from "style-dictionary";
import type { File, Transform } from "style-dictionary/types";
import StyleDictionary from "style-dictionary";
import { fromFileUrl } from "@std/path";
import instance, { transformers } from "~/resources/style_dictionary/mod.ts";

type Theme = "light" | "dark";
type Contrust = "default";

const themes = ["light", "dark"] satisfies Theme[];
const contrusts = ["default"] satisfies Contrust[];

const kebabFlatternTransformer = {
  type: "name",
  name: "name/kebab+flatten",
  transform: (token, config, options, vol) => {
    const kebabTransformer =
      StyleDictionary.hooks.transforms[transforms.nameKebab];
    const newToken = {
      ...token,
      path: token.path.filter((value) => !value.startsWith("$")),
    };

    const result = kebabTransformer?.transform(newToken, config, options, vol);

    if (typeof result === "string") return result;

    throw new Error();
  },
} satisfies Transform;

const baseFile = {
  format: formats.cssVariables,
  options: {
    showFileHeader: false,
    outputReferences: true,
  },
} satisfies Pick<File, "format" | "options">;

function makeFile(theme: Theme, contrust: Contrust): File {
  const base = {
    ...baseFile,
    format: formats.cssVariables,
    options: {
      showFileHeader: false,
      outputReferences: true,
    },
    filter: ({ path }) => {
      return path.includes(`$${theme}`) && path.includes(`$${contrust}`);
    },
  } satisfies Pick<File, "format" | "options" | "filter">;

  switch (contrust) {
    case "default": {
      return {
        ...base,
        destination: `${theme}.css`,
      };
    }

    default: {
      return {
        ...base,
        destination: "hoge",
      };
    }
  }
}

const config = {
  source: [fromFileUrl(import.meta.resolve("~/resources/token.json"))],
  platforms: {
    css: {
      transformGroup: transformGroups.css,
      buildPath: fromFileUrl(import.meta.resolve("~/examples/")),
      files: themes.flatMap((theme) =>
        contrusts.map((contrust) => makeFile(theme, contrust))
      ).concat({
        ...baseFile,
        destination: "material_design.css",
        filter: ({ path }) => {
          return path.every((value) => !value.startsWith("$"));
        },
      }),
      transforms: [
        transformers.typography,
        transformers.token,
        transformers.dimension,
        transformers.color,
        kebabFlatternTransformer.name,
      ],
    },
  },
  log: { verbosity: "silent" },
} satisfies Config;

if (import.meta.main) {
  const sd = await instance.extend(config);
  sd.registerTransform(kebabFlatternTransformer);
  await sd.buildAllPlatforms();
}
