/// <reference lib="dom" />

import type { Preview } from "@storybook/react-vite";
import { themes } from "@storybook/theming";
import { createElement } from "react";

import "./global.css";
import "../examples/material_themes/style.css";

const isDark = globalThis.matchMedia("(prefers-color-scheme: dark)").matches;

export default {
  parameters: {
    docs: {
      theme: isDark ? themes.dark : undefined,
    },
  },
  initialGlobals: {
    backgrounds: { value: isDark ? "dark" : undefined },
  },
  decorators: [
    (Story) =>
      createElement(
        "div",
        { style: { "padding": "1rem" } },
        createElement(Story),
      ),
  ],
} satisfies Preview;
