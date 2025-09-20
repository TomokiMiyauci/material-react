import { fromFileUrl } from "@std/path/from-file-url";
import type { TransformContexts, Transformer } from "./types.ts";
import { type Item, Spec } from "~/resources/spec/mod.ts";
import instance from "~/resources/style_dictionary/mod.ts";
import config from "~/resources/style_dictionary/style.config.ts";
import memfs from "@bundled-es-modules/memfs";
import postcss from "postcss";
import atImport from "postcss-import";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import inlineToken from "~/resources/postcss/inline_token.ts";
import mustashe from "mustache";
import valueParser from "postcss-value-parser";

export class Items2Toekns implements Transformer {
  name: string = "items2tokens";
  transform(contents: string, ctx: TransformContexts): string {
    const spec = new Spec(ctx.options);

    const items = this.parseItems(contents);
    const tokens = spec.toTokens(items);

    const t = tokens.reduce((acc, cur) => {
      const key = cur.path.join(" ");

      acc[key] = cur.value;

      return acc;
    }, {});

    return JSON.stringify(t, undefined, 2);
  }

  parseItems(contents: string): Item[] {
    return JSON.parse(contents);
  }
}

export class Tokens2Css implements Transformer {
  name: string = "tokens2css";
  async transform(contents: string, ctx: TransformContexts): Promise<string> {
    const { Volume } = memfs;
    const vol = new Volume();
    const path = fromFileUrl(ctx.from);
    vol.fromJSON({ [path]: contents });

    const sd = await instance.extend(config);
    const finalSd = await sd.extend({ source: [path] }, { volume: vol });

    await finalSd.buildAllPlatforms();

    return vol.readFileSync("/style.css").toString();
  }
}

export class CssTransformer implements Transformer {
  name: string = "css";
  async transform(
    contents: string,
    ctx: TransformContexts,
  ): Promise<string> {
    const processor = postcss([
      // deno-lint-ignore no-explicit-any
      atImport as any,
      inlineToken,
      autoprefixer,
      cssnano,
    ]);

    const result = await processor.process(contents, {
      from: fromFileUrl(ctx.from),
    }).async();

    return result.css;
  }
}

export class Css2TsTransformer implements Transformer {
  name: string = "css2ts";
  transform(
    contents: string,
  ): string {
    return `export default \`${contents}\`;`;
  }
}

export class MustacheTransformer implements Transformer {
  name: string = "mustache";
  async transform(
    template: string,
    ctx: TransformContexts,
  ): Promise<string> {
    if (ctx.options && "tokenSource" in ctx.options) {
      const source = ctx.options["tokenSource"];
      if (typeof source !== "string") throw new Error("invalid tokenSource");

      const url = new URL(source, ctx.base);
      const tokenSource = await ctx.io.read(url);
      const tokens = extractCssVariables(tokenSource).filter(isMdToken)
        .toSorted();
      return mustashe.render(template, { tokens });
    }

    return mustashe.render(template, {});
  }
}

function extractCssVariables(value: string): string[] {
  const root = postcss.parse(value);
  const variables = new Set<string>();

  root.walkDecls((decl) => {
    const parsed = valueParser(decl.value);

    parsed.walk((node) => {
      if (node.type === "function" && node.value === "var") {
        node.nodes.forEach((arg) => {
          if (arg.type === "word") {
            variables.add(arg.value);
          }
        });
      }
    });
  });

  return variables.values().toArray();
}

function isMdToken(value: string): value is `--md.${string}` {
  return value.startsWith("--md-");
}
