import type { Format } from "style-dictionary/types";
import { fileHeader, formattedVariables } from "style-dictionary/utils";

export default {
  name: "css/variables+comment",
  format: async ({ dictionary, file, options }) => {
    const headerStatement = await fileHeader({ file, options });

    const {
      outputReferenceFallbacks,
      outputReferences,
      formatting,
      usesDtcg,
      rootComment,
    } = options;

    const commentStatement = typeof rootComment === "string"
      ? comment(rootComment) + "\n"
      : "";

    return template(
      headerStatement,
      commentStatement + rule(
        ":root",
        formattedVariables({
          format: "css",
          dictionary,
          outputReferenceFallbacks,
          outputReferences,
          formatting,
          usesDtcg,
        }),
      ),
    );
  },
} satisfies Format;

function comment(value: string): `/* ${string} */` {
  return `/* ${value} */`;
}

function template(headerStatement: string, content: string): string {
  return `${headerStatement}${content}
`;
}

function rule(selectorList: string, decl: string): string {
  return `${selectorList} {
${decl}
}`;
}
