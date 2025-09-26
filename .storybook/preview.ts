/// <reference lib="dom" />

import type { Preview } from "@storybook/react-vite";
import { createElement } from "react";

import "./global.css";
import "./theme.css";

export default {
  parameters: {},

  decorators: [
    (Story) =>
      createElement(
        "div",
        { style: { "padding": "1rem" } },
        createElement(Story),
      ),
  ],
} satisfies Preview;
