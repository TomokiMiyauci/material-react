import FilterChip from "./FilterChip.tsx";
import type { Meta } from "@storybook/react-vite";
import * as base from "./FilterChip.stories.tsx";
import { md, overrideFigma } from "~/.storybook/utils.ts";

const meta = {
  title: "Example/FilterChip/Elevated+Selected",
  component: FilterChip,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {
    elevated: true,
    selected: true,
    label: "Label",
    leadingIcon: <span className="material-symbols-outlined">check</span>,
  },
} satisfies Meta<typeof FilterChip>;

export default meta;

export const Enabled = overrideFigma(
  base.Enabled,
  md.figmaURL("filter-chip", {
    state: "enabled",
    elevated: true,
    selected: true,
  }),
);

export const Disabled = overrideFigma(
  base.Disabled,
  md.figmaURL("filter-chip", {
    state: "disabled",
    elevated: true,
    selected: true,
  }),
);

export const Hovered = overrideFigma(
  base.Hovered,
  md.figmaURL("filter-chip", {
    state: "hovered",
    elevated: true,
    selected: true,
  }),
);

export const Pressed = overrideFigma(
  base.Pressed,
  md.figmaURL("filter-chip", {
    state: "pressed",
    elevated: true,
    selected: true,
  }),
);

export const Focused = overrideFigma(
  base.Focused,
  md.figmaURL("filter-chip", {
    state: "focused",
    elevated: true,
    selected: true,
  }),
);
