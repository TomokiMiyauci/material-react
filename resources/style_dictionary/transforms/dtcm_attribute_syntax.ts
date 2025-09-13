import type { Transform } from "style-dictionary/types";

export default {
  name: "dtcm/attribute/syntax",
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
] satisfies $type[];

function isDtcmType(type: string): type is $type {
  return dtcmTypes.includes(type as $type);
}

const syntaxMap = {
  color: "<color>",
  dimension: "*",
  fontFamily: "*",
  fontWeight: "<integer>",
} satisfies Record<$type, string>;

type DtfmToken =
  | ColorToken
  | DimensionToken
  | FontFamilyToken
  | FontWeightToken;

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
