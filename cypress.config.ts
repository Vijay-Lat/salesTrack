export default {
  e2e: {
    setupNodeEvents(on:unknown, config:unknown) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
};
