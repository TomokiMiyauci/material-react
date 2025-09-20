import type { BuildConfig, IO, Transformer } from "./types.ts";

export interface BuilderConfig {
  build: BuildConfig;
  io: IO;
  base: URL;
  transformers: Transformer[];
}

export class Builder {
  constructor(public config: BuilderConfig) {}

  async build(): Promise<void> {
    for (const step of this.config.build.steps) {
      const transformer = this.resolveTransformer(step.use);

      const inURL = new URL(step.input, this.config.base);
      const outURL = new URL(step.output, this.config.base);
      const contents = await this.config.io.read(inURL);

      if (!transformer) throw Error(`unknown use ${step.use}`);

      const transformed = await transformer.transform(contents, {
        from: inURL,
        to: outURL,
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
}
export {
  Css2TsTransformer,
  CssTransformer,
  Items2Toekns,
  Tokens2Css,
} from "./transformer.ts";
export { DenoIO } from "./io.ts";
export { parseBuildConfig } from "./parser.ts";
