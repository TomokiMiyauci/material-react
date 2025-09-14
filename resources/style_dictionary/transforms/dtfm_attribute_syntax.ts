import type { Transform } from "style-dictionary/types";

export default {
  name: "dtfm/attribute/syntax",
  type: "attribute",
  transform: (token) => {
    const type = token.$type;

    if (typeof type === "string" && isDtcmType(type)) {
      const syntax = syntaxMap[type];

      return { syntax };
    }

    return {};
  },
} satisfies Transform;

const dtcmTypes = [
  "color",
  "dimension",
  "fontFamily",
  "fontWeight",
  "number",
] satisfies $type[];

function isDtcmType(type: string): type is $type {
  return dtcmTypes.includes(type as $type);
}

const syntaxMap = {
  color: "<color>",
  dimension: "*",
  fontFamily: "*",
  fontWeight: "<integer>",
  number: "<number>",
} satisfies Record<$type, string>;

type DtfmToken =
  | ColorToken
  | DimensionToken
  | FontFamilyToken
  | FontWeightToken
  | NumberToken;

type $type = DtfmToken["$type"];

interface ColorToken {
  "$type": "color";
}

interface DimensionToken {
  "$type": "dimension";
}

interface FontFamilyToken {
  "$type": "fontFamily";
}

interface FontWeightToken {
  "$type": "fontWeight";
}

interface NumberToken {
  "$type": "number";
}
