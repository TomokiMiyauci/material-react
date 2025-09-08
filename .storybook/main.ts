import { type InlineConfig, mergeConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import type { StorybookConfig } from "@storybook/react-vite";
import { join } from "node:path";

export default {
  "stories": [
    "../src/**/*.stories.tsx",
  ],
  "addons": [
    "storybook-addon-pseudo-states",
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {},
  },
  async viteFinal(config) {
    /** @see https://github.com/tailwindlabs/tailwindcss/issues/13216 */
    const { default: tailwindcss } = await import("@tailwindcss/vite");
    const extend = {
      plugins: [
        react({
          jsxRuntime: "automatic",
        }) as Plugin[],
        tailwindcss(),
      ],
      "resolve": {
        "alias": {
          "@internal": join(__dirname, "..", "src", "components", "_internal"),
        },
      },
    } satisfies InlineConfig;
    return mergeConfig(config, extend);
  },
} satisfies StorybookConfig;
