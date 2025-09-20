import type { IO } from "./types.ts";

export class DenoIO implements IO {
  read(url: URL): Promise<string> {
    return Deno.readTextFile(url);
  }
  write(url: URL, contents: string): Promise<void> {
    return Deno.writeTextFile(url, contents);
  }
}
