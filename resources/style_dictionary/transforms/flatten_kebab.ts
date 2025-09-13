import { transforms } from "style-dictionary/enums";
import type { Transform } from "style-dictionary/types";
import StyleDictionary from "style-dictionary";

const kebabTransformer = StyleDictionary.hooks.transforms[transforms.nameKebab];

export default {
  type: "name",
  name: "name/kebab+flatten",
  transform: (token, config, options, vol) => {
    const newToken = {
      ...token,
      path: token.path.filter((value) => !value.startsWith("$")),
    };

    const result = kebabTransformer?.transform(newToken, config, options, vol);

    if (typeof result === "string") return result;

    throw new Error();
  },
} satisfies Transform;
