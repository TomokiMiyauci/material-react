import { mergeConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { StorybookConfig } from "@storybook/react-vite";

export default {
  "stories": [
    "../src/**/*.stories.tsx",
  ],
  "addons": [],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {},
  },
  async viteFinal(config) {
    /** @see https://github.com/tailwindlabs/tailwindcss/issues/13216 */
    const { default: tailwindcss } = await import("@tailwindcss/vite");
    return mergeConfig(config, {
      plugins: [
        react({
          jsxRuntime: "automatic",
        }),
        tailwindcss(),
      ],
    });
  },
} satisfies StorybookConfig;
