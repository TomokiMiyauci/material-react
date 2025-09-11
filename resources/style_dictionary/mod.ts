import StyleDictionary from "style-dictionary";
import {
  colorTransform,
  dimensitonTransform,
  tokenTransform,
  typographyTransform,
} from "./transforms/mod.ts";
import cssVariableWithComment from "./fomatters/css_variables_comment.ts";

const sd = new StyleDictionary();

sd.registerTransform(tokenTransform);
sd.registerTransform(dimensitonTransform);
sd.registerTransform(typographyTransform);
sd.registerTransform(colorTransform);
sd.registerFormat(cssVariableWithComment);

export enum transformers {
  token = "md/token",
  typography = "typography/token",
  dimension = "dcgc/dimension",
  color = "dtfm/color",
}

export enum formats {
  cssVariablesWithComment = "css/variables+comment",
}

export default sd;
