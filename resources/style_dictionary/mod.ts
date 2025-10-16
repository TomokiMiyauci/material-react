import StyleDictionary from "style-dictionary";
import {
  colorTransform,
  dimensitonTransform,
  dtfmAttributeSyntax,
  dtfmExtensionsAttributeSyntax,
  dtfmFontFamily,
  dtfmNumberAsRadio,
  dtfmNumberUnit,
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
sd.registerTransform(dtfmNumberUnit);
sd.registerTransform(dtfmFontFamily);
sd.registerFormat(cssVariableWithComment);
sd.registerFormat(cssPropertyFormat);

export enum transformers {
  token = "token/string",
  typography = "typography/token",
  dimension = "dcgc/dimension",
  color = "dtfm/color",
  nameKebabFlat = "name/kebab+flatten",
  dtfmAttributeSyntax = "dtfm/attribute/syntax",
  dtfmExtensionsAttributeSyntax = "dtfm/extensions/attribute/syntax",
  dtfmNumberAsRadio = "dtfm/number+ratio",
  dtfmNumberUnit = "dtfm/number+unit",
  dtfmFontFamily = "dtfm/font-family",
}

export enum formats {
  cssVariablesWithComment = "css/variables+comment",
  cssProperty = "css/property",
}

export default sd;
