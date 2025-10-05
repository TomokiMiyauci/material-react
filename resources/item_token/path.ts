import type { PathConfig } from "./types.ts";

class Scanner {
  cursor: number;
  constructor(public input: string) {
    this.cursor = 0;
  }

  get current(): string {
    const current = this.input[this.cursor];

    if (typeof current !== "string") throw new Error("something wrong");

    return current;
  }

  peek(len = 1): string {
    return this.input.slice(this.cursor, this.cursor + len);
  }

  consume(len = 1): void {
    this.cursor += len;
  }

  consumeWhile(predicate: (char: string) => boolean) {
    const start = this.cursor;
    while (!this.eof() && predicate(this.current)) {
      this.consume();
    }
    return this.input.slice(start, this.cursor);
  }

  eof(): boolean {
    return this.cursor >= this.input.length;
  }
}

export function buildPath(str: string, segments: string[]): string[] {
  const scanner = new Scanner(str);
  const result = [];

  while (!scanner.eof()) {
    if (/\s/.test(scanner.current)) {
      scanner.consume();
      continue;
    }

    let matched = false;
    for (const segment of segments) {
      if (scanner.peek(segment.length) === segment) {
        result.push(segment);
        scanner.consume(segment.length);
        matched = true;
        break;
      }
    }

    if (!matched) {
      result.push(scanner.consumeWhile((c) => !/\s/.test(c)));
    }
  }

  return result;
}

export interface Pipeline {
  pipe(path: Path, ctx: PathContext): Path;
}

type Path = string[];

interface PathContext {
  config: PathConfig;
}

export class ExcludePipeline implements Pipeline {
  pipe(path: Path, ctx: PathContext): Path {
    const set = new Set(ctx.config.exclude?.matches);

    return path.filter((segment) => !set.has(segment));
  }
}

export class HeadsPipeline implements Pipeline {
  pipe(path: Path, ctx: PathContext): Path {
    const heads = ctx.config.heads ?? [];

    const order = new Map(heads.map((val, i) => [val, i]));

    return path.toSorted((a, b) => {
      const ai = order.has(a) ? order.get(a)! : Infinity;
      const bi = order.has(b) ? order.get(b)! : Infinity;
      return ai - bi;
    });
  }
}

export class TailsPipeline implements Pipeline {
  pipe(path: Path, ctx: PathContext): Path {
    const tails = ctx.config.tails ?? [];

    const order = new Map(tails.map((val, i) => [val, i]));

    return path.toSorted((a, b) => {
      const ai = order.has(a) ? order.get(a)! : Infinity;
      const bi = order.has(b) ? order.get(b)! : Infinity;
      return bi - ai;
    });
  }
}

export class RenamesPipeline implements Pipeline {
  pipe(path: Path, ctx: PathContext): Path {
    const { renames } = ctx.config;

    if (!renames) return path;

    return path.map((segment) => {
      const renamedSegment = renames[segment];

      if (typeof renamedSegment === "string") return renamedSegment;

      return segment;
    });
  }
}
