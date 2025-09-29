import nodeIdJson from "~/resources/node_id.json" with { type: "json" };

interface IdConfigMap {
  "filter-chip": { state: State };
  switch: {
    state: WithoutDraggedState;
    selected?: boolean;
    icon?: boolean;
  } | "all";
}

type WithoutDraggedState = Exclude<State, "dragged">;

const idBuilders = {
  switch: (options) => {
    const switchMap = nodeIdJson.map["switch"];

    if (options === "all") return switchMap.all;

    const { state, selected, icon } = options;

    if (icon && selected) {
      return switchMap.icon.selected[state];
    }

    if (selected) {
      return switchMap.selected[state];
    }

    if (icon) {
      return switchMap.icon.unselected[state];
    }

    return switchMap.unselected[state];
  },
  "filter-chip": ({ state }) => {
    const outlined = nodeIdJson.map["filter-chip"].outlined;
    switch (state) {
      case "enabled":
        return outlined.enabled;

      case "hovered":
        return outlined.hovered;

      case "pressed":
        return outlined.pressed;

      case "focused":
        return outlined.focused;

      case "dragged":
        return outlined.disabled;

      case "disabled":
        return outlined.disabled;
    }
  },
} satisfies {
  [K in keyof IdConfigMap]: (options: IdConfigMap[K]) => string;
};

class MaterialDesignBuilder {
  #url: URL;
  constructor(baseURL: string) {
    this.#url = new URL(baseURL);
  }

  figmaURL<K extends keyof IdConfigMap>(
    category: K,
    options: IdConfigMap[K],
  ): string {
    const id = this.getId(category, options);
    const url = new URL(this.#url);
    url.searchParams.set("node-id", id);

    return url.toString();
  }

  figma<K extends keyof IdConfigMap>(
    category: K,
    options: IdConfigMap[K],
  ) {
    const url = this.figmaURL(category, options);

    return { type: "figma", url };
  }

  getId<K extends keyof IdConfigMap>(
    category: K,
    options: IdConfigMap[K],
  ): string {
    // deno-lint-ignore no-explicit-any
    return idBuilders[category](options as any);
  }
}

type State =
  | "enabled"
  | "disabled"
  | "hovered"
  | "focused"
  | "dragged"
  | "pressed";

const BASE_URL =
  "https://www.figma.com/design/Ds7hq56K8TtD6dFDe7ZK3y/Material-3-Design-Kit--Community-";

export const md = new MaterialDesignBuilder(BASE_URL);
