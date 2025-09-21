export interface ItemTokenConfig {
  segments?: string[];
  filter?: Filter;
  path?: PathConfig;
}

export interface Filter {
  matches?: string[];
}

export interface PathConfig {
  excludes?: string[];
  heads?: string[];
  tails?: string[];
}

export interface Item {
  name: string;
  value: string;
}
