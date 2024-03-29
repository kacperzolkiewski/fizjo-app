import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:3000",
    viewportWidth: 1400,
    viewportHeight: 720,
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
