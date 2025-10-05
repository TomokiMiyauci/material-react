export interface ItemTokenConfig {
  segments?: string[];
  exclude?: Exclude;
  include?: Include;
  renames?: Record<string, string>;
  path?: PathConfig;
}

export interface Exclude {
  matches?: string[];
}

export interface Include {
  matches?: string[];
}

export interface PathConfig {
  exclude?: Exclude;
  renames?: Record<string, string>;
  heads?: string[];
  tails?: string[];
}

export interface Item {
  name: string;
  value: string;
}
