import {
  buildPath,
  ExcludesPipeline,
  HeadsPipeline,
  type Pipeline,
} from "./path.ts";
import {
  NumberDpTransformer,
  NumberPercentTransformer,
  PtTransformer,
  RatioTransformer,
  TokenTransformer,
  type Transformer,
} from "./value.ts";
import type { Item, ItemTokenConfig } from "./types.ts";

export class ItemToken {
  transformers: Transformer[];
  pipelines: Pipeline[];
  constructor(public config: ItemTokenConfig) {
    this.transformers = [
      new TokenTransformer(),
      new NumberDpTransformer(),
      new NumberPercentTransformer(),
      new PtTransformer(),
      new RatioTransformer(),
    ];
    this.pipelines = [new ExcludesPipeline(), new HeadsPipeline()];
  }

  toTokens(items: Item[]): Record<string, unknown> {
    const array = items.map((item) => {
      const path = buildPath(item.name, this.config.segments ?? []);
      const transformedPath = this.pipelines.reduce((acc, pipeline) => {
        return pipeline.pipe(acc, { config: this.config.path ?? {} });
      }, path);

      const value = this.transform(item.name, item.value);

      return {
        path: transformedPath,
        value,
      };
    });

    return array.reduce((acc, cur) => {
      const key = cur.path.join(" ");

      acc[key] = cur.value;

      return acc;
    }, {});
  }

  transform(name: string, value: string) {
    for (const transformer of this.transformers) {
      const result = transformer.transform(value, { item: { name, value } });

      if (result) return result;
    }

    throw new Error(`name ${name}, value: ${value}`);
  }
}
export type { Item } from "./types.ts";
