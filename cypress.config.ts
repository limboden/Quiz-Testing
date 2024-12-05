import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    slowTestThreshold: 60000
  },

  e2e: {
    setupNodeEvents(on, config) {
    },
    supportFile: false
  },
});