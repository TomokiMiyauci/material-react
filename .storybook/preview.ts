/// <reference lib="dom" />

import type { Preview } from "@storybook/react-vite";
import { createElement } from "react";

import "./global.css";
import "@/styles/style_light.css";

export default {
  parameters: {
    chromatic: { disableSnapshot: true },
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
