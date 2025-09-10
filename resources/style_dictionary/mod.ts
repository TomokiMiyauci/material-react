import StyleDictionary from "style-dictionary";
import {
  dimensitonTransform,
  tokenTransform,
  typographyTransform,
} from "./transforms/mod.ts";
import cssVariableWithComment from "./fomatters/css_variables_comment.ts";

const sd = new StyleDictionary();

sd.registerTransform(tokenTransform);
sd.registerTransform(dimensitonTransform);
sd.registerTransform(typographyTransform);
sd.registerFormat(cssVariableWithComment);

export enum transformers {
  token = "md/token",
  typography = "typography/token",
  dimension = "dcgc/dimension",
}

export enum formats {
  cssVariablesWithComment = "css/variables+comment",
}

export default sd;
