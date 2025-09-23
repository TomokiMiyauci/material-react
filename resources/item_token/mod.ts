import {
  buildPath,
  ExcludePipeline,
  HeadsPipeline,
  type Pipeline,
  RenamesPipeline,
  TailsPipeline,
} from "./path.ts";
import {
  NumberDpTransformer,
  NumberPercentTransformer,
  PtTransformer,
  RatioTransformer,
  TokenTransformer,
  type Transformer,
  ZeroTransformer,
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
      new ZeroTransformer(),
    ];
    this.pipelines = [
      new ExcludePipeline(),
      new RenamesPipeline(),
      new HeadsPipeline(),
      new TailsPipeline(),
    ];
  }

  toTokens(items: Item[]): Record<string, unknown> {
    const { exclude, include } = this.config;

    const array = items.filter(({ name }) => {
      if (include) {
        if (include.matches) {
          return include.matches.some((match) => name.includes(match));
        }
      }

      return true;
    }).filter(({ name }) => {
      if (exclude && exclude.matches) {
        return !exclude.matches.some((match) => name.includes(match));
      }

      return true;
    }).map((item) => {
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

    return array.map(({ path, value }) => ({ path: path.join(" "), value }))
      .toSorted(({ path: a }, { path: b }) => a.localeCompare(b))
      .reduce<Record<string, unknown>>(
        (acc, cur) => {
          acc[cur.path] = cur.value;

          return acc;
        },
        {},
      );
  }

  transform(name: string, value: string) {
    for (const transformer of this.transformers) {
      const result = transformer.transform(value, { item: { name, value } });

      if (result) return result;
    }

    throw new Error(`name ${name}, value: ${value}`);
  }
}
export type { Item, ItemTokenConfig } from "./types.ts";
