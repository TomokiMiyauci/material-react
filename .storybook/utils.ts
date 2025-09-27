import nodeIdJson from "~/resources/node_id.json" with { type: "json" };

class MaterialDesignBuilder {
  #url: URL;
  constructor(baseURL: string) {
    this.#url = new URL(baseURL);
  }
  figmaURL(
    component: "filter-chip",
    options: { state?: State; elevated?: boolean; selected?: boolean },
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
  component: "filter-chip",
  options: { state?: State; elevated?: boolean; selected?: boolean },
): string {
  switch (component) {
    case "filter-chip": {
      const filterChip = nodeIdJson.map["filter-chip"];
      const { elevated, selected, state } = options;

      if (selected && elevated && state) {
        return filterChip.selected_elevated[state];
      }

      if (elevated && state) {
        return filterChip.elevated[state];
      }

      if (selected && state) {
        return filterChip.selected[state];
      }

      if (state) return filterChip.outlined[state];

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

export function overrideFigma<
  T extends { parameters: { design: { url: string } } },
>(
  value: T,
  url: string,
): T {
  const { parameters, ...rest } = value;
  const { design, ...restParameters } = parameters;
  const { url: _, ...restDesing } = design;

  return {
    parameters: {
      design: { url, ...restDesing },
      ...restParameters,
    },
    ...rest,
  } as T;
}
