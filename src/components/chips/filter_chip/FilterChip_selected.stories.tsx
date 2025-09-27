import FilterChip from "./FilterChip.tsx";
import type { Meta } from "@storybook/react-vite";
import * as base from "./FilterChip.stories.tsx";
import { md, overrideFigma } from "~/.storybook/utils.ts";

const meta = {
  title: "Example/FilterChip/Selected",
  component: FilterChip,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {
    selected: true,
    label: "Label",
    leadingIcon: <span className="material-symbols-outlined">check</span>,
  },
} satisfies Meta<typeof FilterChip>;

export default meta;

export const Enabled = overrideFigma(
  base.Enabled,
  md.figmaURL("filter-chip", { state: "enabled", selected: true }),
);

console.log(Enabled);

export const Disabled = overrideFigma(
  base.Disabled,
  md.figmaURL("filter-chip", { state: "disabled", selected: true }),
);

export const Hovered = overrideFigma(
  base.Hovered,
  md.figmaURL("filter-chip", { state: "hovered", selected: true }),
);

export const Pressed = overrideFigma(
  base.Pressed,
  md.figmaURL("filter-chip", { state: "pressed", selected: true }),
);

export const Focused = overrideFigma(
  base.Focused,
  md.figmaURL("filter-chip", { state: "focused", selected: true }),
);
