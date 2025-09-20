export interface Transformer {
  name: string;
  transform(
    contents: string,
    options: TransformContexts,
  ): Promise<string> | string;
}

export interface TransformContexts {
  from: URL;
  to: URL;
  options: Record<string, unknown>;
}

export interface IO {
  read(url: URL): Promise<string>;
  write(url: URL, contents: string): Promise<void>;
}

export interface BuildConfig {
  steps: Step[];
}

export interface Step {
  use: string;
  input: string;
  output: string;
  options: Record<string, unknown>;
}
