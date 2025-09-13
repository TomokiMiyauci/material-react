import StyleDictionary from "style-dictionary";
import {
  colorTransform,
  dimensitonTransform,
  dtcmAttributeSyntax,
  flattenKababTransform,
  tokenTransform,
  typographyTransform,
} from "./transforms/mod.ts";
import cssVariableWithComment from "./fomatters/css_variables_comment.ts";
import cssPropertyFormat from "./fomatters/css_property.ts";

const sd = new StyleDictionary();

sd.registerTransform(tokenTransform);
sd.registerTransform(dimensitonTransform);
sd.registerTransform(typographyTransform);
sd.registerTransform(colorTransform);
sd.registerTransform(flattenKababTransform);
sd.registerTransform(dtcmAttributeSyntax);
sd.registerFormat(cssVariableWithComment);
sd.registerFormat(cssPropertyFormat);

export enum transformers {
  token = "md/token",
  typography = "typography/token",
  dimension = "dcgc/dimension",
  color = "dtfm/color",
  nameKebabFlat = "name/kebab+flatten",
  dtcmAttributeSyntax = "dtcm/attribute/syntax",
}

export enum formats {
  cssVariablesWithComment = "css/variables+comment",
  cssProperty = "css/property",
}

export default sd;
