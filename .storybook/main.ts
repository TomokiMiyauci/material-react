import { type InlineConfig, mergeConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import type { StorybookConfig } from "@storybook/react-vite";
import { join } from "node:path";

export default {
  "stories": ["../src/**/*.stories.tsx"],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "storybook-addon-pseudo-states",
    "@storybook/addon-designs",
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {},
  },
  async viteFinal(config) {
    /** @see https://github.com/tailwindlabs/tailwindcss/issues/13216 */
    const { default: tailwindcss } = await import("@tailwindcss/vite");
    const { default: deno } = await import("@deno/vite-plugin");

    const extend = {
      plugins: [
        react({
          jsxRuntime: "automatic",
        }) as Plugin[],
        tailwindcss(),
        deno(),
      ],
      "resolve": {
        "alias": {
          "@internal": join(__dirname, "..", "src", "components", "_internal"),
          "@": join(__dirname, "..", "src"),
          "@miyauci/material-react": join(__dirname, "..", "src", "mod.ts"),
          "~": join(__dirname, ".."),
          // TODO(miyauci): remove on fix @deno/vite-plugin bug @see https://github.com/denoland/deno-vite-plugin/pull/59
          "npm:react@^19.2.0/jsx-runtime": "react/jsx-runtime",
        },
      },
    } satisfies InlineConfig;
    return mergeConfig(config, extend);
  },
} satisfies StorybookConfig;
