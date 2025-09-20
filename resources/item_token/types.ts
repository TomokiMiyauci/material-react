export interface ItemTokenConfig {
  segments?: string[];
  path?: PathConfig;
}

export interface PathConfig {
  excludes?: string[];
  heads?: string[];
}

export interface Item {
  name: string;
  value: string;
}
