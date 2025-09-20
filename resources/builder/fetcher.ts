import type { Fetcher } from "./types.ts";

export class HttpFetcher implements Fetcher {
  async fetch(url: URL): Promise<string | undefined> {
    if (url.protocol === "http:" || url.protocol === "https:") {
      const response = await fetch(url);

      return response.text();
    }

    return;
  }
}
