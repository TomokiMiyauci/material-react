import type { IO } from "./types.ts";
import { ensureFile } from "@std/fs";

export class DenoIO implements IO {
  read(url: URL): Promise<string> {
    return Deno.readTextFile(url);
  }
  async write(url: URL, contents: string): Promise<void> {
    await ensureFile(url);
    return Deno.writeTextFile(url, contents);
  }
}
