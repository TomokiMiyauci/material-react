import StyleDictionary from "style-dictionary";
import {
  colorTransform,
  dimensitonTransform,
  dtfmAttributeSyntax,
  dtfmExtensionsAttributeSyntax,
  dtfmNumberAsRadio,
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
sd.registerTransform(dtfmAttributeSyntax);
sd.registerTransform(dtfmNumberAsRadio);
sd.registerTransform(dtfmExtensionsAttributeSyntax);
sd.registerFormat(cssVariableWithComment);
sd.registerFormat(cssPropertyFormat);

export enum transformers {
  token = "md/token",
  typography = "typography/token",
  dimension = "dcgc/dimension",
  color = "dtfm/color",
  nameKebabFlat = "name/kebab+flatten",
  dtfmAttributeSyntax = "dtfm/attribute/syntax",
  dtfmExtensionsAttributeSyntax = "dtfm/extensions/attribute/syntax",
  dtfmNumberAsRadio = "dtfm/number+ratio",
}

export enum formats {
  cssVariablesWithComment = "css/variables+comment",
  cssProperty = "css/property",
}

export default sd;
