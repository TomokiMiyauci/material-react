import { transformGroups } from "style-dictionary/enums";
import { formats, transformers } from "~/resources/style_dictionary/mod.ts";

export default {
  platforms: {
    css: {
      transformGroup: transformGroups.css,
      files: [
        {
          destination: "style.css",
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
        transformers.dtfmNumberUnit,
      ],
    },
  },
};
