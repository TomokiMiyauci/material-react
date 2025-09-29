import nodeIdJson from "~/resources/node_id.json" with { type: "json" };

class MaterialDesignBuilder {
  #url: URL;
  constructor(baseURL: string) {
    this.#url = new URL(baseURL);
  }

  figmaURL(
    component: "filter-chip",
    options: { state?: State },
  ): string;
  figmaURL(
    component: "switch",
    options: { state?: State },
  ): string;
  figmaURL(
    component: "filter-chip" | "switch",
    options: { state?: State },
  ): string {
    const id = getNodeId(component, options);

    const url = new URL(this.#url);
    url.searchParams.set("node-id", id);

    return url.toString();
  }
}

type State =
  | "enabled"
  | "disabled"
  | "hovered"
  | "focused"
  | "dragged"
  | "pressed";

function getNodeId(
  component: "filter-chip" | "switch",
  options: { state?: State },
): string {
  switch (component) {
    case "filter-chip": {
      const outlined = nodeIdJson.map["filter-chip"].outlined;
      switch (options.state) {
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

      break;
    }

    case "switch": {
      const switc = nodeIdJson.map["switch"];

      if (options.state) {
        return switc.unselected["disabled"];
      }

      break;
    }
  }

  throw new Error("unknown component or options");
}

const BASE_URL =
  "https://www.figma.com/design/Ds7hq56K8TtD6dFDe7ZK3y/Material-3-Design-Kit--Community-";

export const md = new MaterialDesignBuilder(
  BASE_URL,
);
