export interface ItemTokenConfig {
  segments?: string[];
  exclude?: Exclude;
  path?: PathConfig;
}

export interface Exclude {
  matches?: string[];
}

export interface PathConfig {
  exclude?: Exclude;
  heads?: string[];
  tails?: string[];
}

export interface Item {
  name: string;
  value: string;
}
