import type { BuildConfig, Fetcher, IO, Transformer } from "./types.ts";

export interface BuilderConfig {
  build: BuildConfig;
  io: IO;
  base: URL;
  transformers: Transformer[];
  fetchers?: Fetcher[];
}

export class Builder {
  #fetchers: Fetcher[];
  constructor(public config: BuilderConfig) {
    this.#fetchers = config.fetchers ?? [];
  }

  async build(): Promise<void> {
    for (const step of this.config.build.steps) {
      const transformer = this.resolveTransformer(step.use);

      const inURL = this.resolve(step.input, this.config.base);
      const outURL = this.resolve(step.output, this.config.base);

      if (step.run?.skipIfExists) {
        try {
          await this.fetch(outURL);
          continue;
        } catch {
          // output is not exists.
        }
      }
      const contents = await this.fetch(inURL);

      if (!transformer) throw Error(`unknown use ${step.use}`);

      const transformed = await transformer.transform(contents, {
        from: inURL,
        to: outURL,
        base: this.config.base,
        io: this.config.io,
        options: step.options,
      });

      await this.config.io.write(outURL, transformed);
    }
  }

  resolveTransformer(name: string): Transformer | undefined {
    return this.config.transformers.find((transformer) =>
      transformer.name === name
    );
  }

  resolve(specifier: string, referrer: URL): URL {
    if (
      specifier.startsWith("./") ||
      specifier.startsWith("../") ||
      specifier.startsWith("/")
    ) {
      return new URL(specifier, referrer);
    }

    const parsed = URL.parse(specifier);

    if (!parsed) throw new Error("invalid specifier");
    return parsed;
  }

  async fetch(url: URL): Promise<string> {
    if (url.protocol === "file:") {
      return this.config.io.read(url);
    }

    for (const fetcher of this.#fetchers) {
      const result = await fetcher.fetch(url);

      if (typeof result === "string") return result;
    }

    throw new Error(`not found fetcher ${url}`);
  }
}
export {
  Css2TsTransformer,
  CssTransformer,
  Items2Toekns,
  MustacheTransformer,
  Spec2Tokens,
  Tokens2Css,
} from "./transformer.ts";
export { DenoIO } from "./io.ts";
export { parseBuildConfig } from "./parser.ts";
export { HttpFetcher } from "./fetcher.ts";
