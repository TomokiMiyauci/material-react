import type { Item } from "./types.ts";

export interface Transformer<T = unknown> {
  transform(value: string, ctx: TransformerContext): T;
}

interface TransformerContext {
  item: Item;
}

export class TokenTransformer implements Transformer {
  transform(value: string, ctx: TransformerContext): unknown {
    if (value.startsWith("md")) {
      return {
        "$type": "string",
        "$value": value,
        "$description": ctx.item.name,
        "$extensions": { type: "token" },
      };
    }

    return;
  }
}

export class NumberDpTransformer implements Transformer {
  transform(value: string, ctx: TransformerContext): unknown {
    if (value.endsWith("dp")) {
      return {
        "$type": "number",
        "$value": Number.parseFloat(value),
        "$description": ctx.item.name,
        "$extensions": { unit: "dp" },
      };
    }

    return;
  }
}

export class NumberPercentTransformer implements Transformer {
  transform(value: string, ctx: TransformerContext): unknown {
    if (value.endsWith("%")) {
      return {
        "$type": "number",
        "$value": Number.parseInt(value) / 100,
        "$description": ctx.item.name,
        "$extensions": { ratio: true },
      };
    }
    return;
  }
}

export class RatioTransformer implements Transformer {
  transform(value: string, ctx: TransformerContext): unknown {
    const float = Number.parseFloat(value);

    if (!Number.isNaN(float) && 0 < float && float <= 1) {
      return {
        "$type": "number",
        "$value": float,
        "$description": ctx.item.name,
        "$extensions": { ratio: true },
      };
    }
    return;
  }
}

export class ZeroTransformer implements Transformer {
  transform(value: string, ctx: TransformerContext): unknown {
    if (value === "0") {
      return {
        "$type": "number",
        "$value": 0,
        "$description": ctx.item.name,
      };
    }
    return;
  }
}

export class PtTransformer implements Transformer {
  transform(value: string, ctx: TransformerContext): unknown {
    if (value.endsWith("pt")) {
      return {
        "$type": "number",
        "$value": Number.parseFloat(value),
        "$description": ctx.item.name,
        "$extensions": { unit: "pt" },
      };
    }

    return;
  }
}
