/// <reference lib="dom" />

import type { Preview } from "@storybook/react-vite";
import "./global.css";
import "../examples/material.css";

const isDark = globalThis.matchMedia("(prefers-color-scheme: dark)").matches;

export default {
  initialGlobals: {
    backgrounds: { value: isDark ? "dark" : undefined },
  },
} satisfies Preview;
