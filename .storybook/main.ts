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
  viteFinal(config) {
    return mergeConfig(config, {
      plugins: [
        react({
          jsxRuntime: "automatic",
        }),
      ],
    });
  },
} satisfies StorybookConfig;
