import type { BuildConfig } from "./types.ts";

export function parseBuildConfig(contents: string): BuildConfig {
  return JSON.parse(contents);
}
