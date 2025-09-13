import {
  formats as defaultFormats,
  transformGroups,
} from "style-dictionary/enums";
import type { Config } from "style-dictionary";
import { fromFileUrl } from "@std/path";
import instance, {
  formats,
  transformers,
} from "~/resources/style_dictionary/mod.ts";

const config = {
  source: [fromFileUrl(import.meta.resolve("~/resources/token.json"))],
  platforms: {
    css: {
      transformGroup: transformGroups.css,
      buildPath: fromFileUrl(
        import.meta.resolve("~/examples/material_design/"),
      ),
      files: [
        {
          destination: "ref.css",
          format: formats.cssProperty,
          options: {
            showFileHeader: false,
            outputReferences: true,
            inherits: true,
          },
          filter: ({ path }) => path.includes("ref"),
        },
        {
          destination: "sys.css",
          format: formats.cssProperty,
          options: {
            showFileHeader: false,
            outputReferences: true,
            inherits: true,
          },
          filter: (arg, options) => {
            const { path } = arg;
            const type = options.usesDtcg ? arg.$type : arg.type;

            return type && type !== "token" && path.includes("sys") &&
              path.every((value) => !value.startsWith("$"));
          },
        },
        {
          destination: "base.css",
          format: defaultFormats.cssVariables,
          options: {
            showFileHeader: false,
            outputReferences: true,
          },
          filter: (arg, options) => {
            const { path } = arg;
            const type = options.usesDtcg ? arg.$type : arg.type;

            return (!type || type === "token") && path.includes("sys") &&
              path.every((value) => !value.startsWith("$"));
          },
        },
        {
          destination: "light.css",
          format: defaultFormats.cssVariables,
          options: {
            showFileHeader: false,
            outputReferences: true,
          },
          filter: ({ path }) =>
            path.includes("$light") && path.includes("$default"),
        },
        {
          destination: "dark.css",
          format: defaultFormats.cssVariables,
          options: {
            showFileHeader: false,
            outputReferences: true,
          },
          filter: ({ path }) =>
            path.includes("$dark") && path.includes("$default"),
        },
        {
          destination: "light_hc.css",
          format: defaultFormats.cssVariables,
          options: {
            showFileHeader: false,
            outputReferences: true,
          },
          filter: ({ path }) =>
            path.includes("$light") && path.includes("$high"),
        },
        {
          destination: "dark_hc.css",
          format: defaultFormats.cssVariables,
          options: {
            showFileHeader: false,
            outputReferences: true,
          },
          filter: ({ path }) =>
            path.includes("$dark") && path.includes("$high"),
        },
        {
          destination: "light_mc.css",
          format: defaultFormats.cssVariables,
          options: {
            showFileHeader: false,
            outputReferences: true,
          },
          filter: ({ path }) =>
            path.includes("$light") && path.includes("$medium"),
        },
        {
          destination: "dark_mc.css",
          format: defaultFormats.cssVariables,
          options: {
            showFileHeader: false,
            outputReferences: true,
          },
          filter: ({ path }) =>
            path.includes("$dark") && path.includes("$medium"),
        },
      ],

      transforms: [
        transformers.typography,
        transformers.token,
        transformers.dimension,
        transformers.color,
        transformers.nameKebabFlat,
        transformers.dtcmAttributeSyntax,
      ],
    },
  },
  log: { verbosity: "silent" },
} satisfies Config;

if (import.meta.main) {
  const sd = await instance.extend(config);
  await sd.buildAllPlatforms();
}
