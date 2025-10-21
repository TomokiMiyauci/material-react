import {
  formats as defaultFormats,
  transformGroups,
} from "style-dictionary/enums";
import type { Config } from "style-dictionary";
import { fromFileUrl } from "@std/path";
import instance, { transformers } from "~/resources/style_dictionary/mod.ts";

const config = {
  source: [fromFileUrl(import.meta.resolve("~/resources/tokens.json"))],
  platforms: {
    css: {
      transformGroup: transformGroups.css,
      buildPath: fromFileUrl(
        import.meta.resolve("~/src/styles/"),
      ),
      files: [
        {
          destination: "ref/typeface.css",
          format: defaultFormats.cssVariables,
          options: {
            showFileHeader: false,
            outputReferences: true,
          },
          filter: ({ path }) => path.includes("typeface"),
        },
        {
          destination: "ref/palette.css",
          format: defaultFormats.cssVariables,
          options: {
            showFileHeader: false,
            outputReferences: true,
            inherits: true,
          },
          filter: ({ path }) => path.includes("palette"),
        },
        {
          destination: "sys/shape.css",
          format: defaultFormats.cssVariables,
          options: {
            showFileHeader: false,
            outputReferences: true,
            inherits: true,
          },
          filter: (arg) => {
            const { path } = arg;

            return path.includes("shape");
          },
        },
        {
          destination: "sys/typescale.css",
          format: defaultFormats.cssVariables,
          options: {
            showFileHeader: false,
            outputReferences: true,
          },
          filter: (arg) => {
            const { path } = arg;

            return path.includes("typescale");
          },
        },
        {
          destination: "sys/elevation.css",
          format: defaultFormats.cssVariables,
          options: {
            showFileHeader: false,
            outputReferences: true,
            inherits: true,
          },
          filter: (arg) => {
            const { path } = arg;

            return path.includes("elevation");
          },
        },
        {
          destination: "sys/states/state_layer.css",
          format: defaultFormats.cssVariables,
          options: {
            showFileHeader: false,
            outputReferences: true,
            inherits: true,
          },
          filter: (arg) => {
            const { path } = arg;

            return path.includes("state layer");
          },
        },
        {
          destination: "sys/states/focus_indicator.css",
          format: defaultFormats.cssVariables,
          options: {
            showFileHeader: false,
            outputReferences: true,
            inherits: true,
          },
          filter: (arg) => {
            const { path } = arg;

            return path.includes("focus indicator");
          },
        },
        {
          destination: "sys/colors/light.css",
          format: defaultFormats.cssVariables,
          options: {
            showFileHeader: false,
            outputReferences: true,
          },
          filter: ({ path }) =>
            path.includes("$light") && path.includes("$default"),
        },
        {
          destination: "sys/colors/dark.css",
          format: defaultFormats.cssVariables,
          options: {
            showFileHeader: false,
            outputReferences: true,
          },
          filter: ({ path }) =>
            path.includes("$dark") && path.includes("$default"),
        },
        {
          destination: "sys/colors/light_hc.css",
          format: defaultFormats.cssVariables,
          options: {
            showFileHeader: false,
            outputReferences: true,
          },
          filter: ({ path }) =>
            path.includes("$light") && path.includes("$high"),
        },
        {
          destination: "sys/colors/dark_hc.css",
          format: defaultFormats.cssVariables,
          options: {
            showFileHeader: false,
            outputReferences: true,
          },
          filter: ({ path }) =>
            path.includes("$dark") && path.includes("$high"),
        },
        {
          destination: "sys/colors/light_mc.css",
          format: defaultFormats.cssVariables,
          options: {
            showFileHeader: false,
            outputReferences: true,
          },
          filter: ({ path }) =>
            path.includes("$light") && path.includes("$medium"),
        },
        {
          destination: "sys/colors/dark_mc.css",
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
        transformers.dtfmAttributeSyntax,
        transformers.dtfmNumberAsRadio,
        transformers.dtfmExtensionsAttributeSyntax,
        transformers.dtfmNumberUnit,
        transformers.dtfmFontFamily,
      ],
    },
  },
  log: { verbosity: "silent" },
} satisfies Config;

if (import.meta.main) {
  const sd = await instance.extend(config);
  await sd.buildAllPlatforms();
}
