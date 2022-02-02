module.exports = {
  routes: [
    {
      method: "POST",
      path: "/hint/import",
      handler: "hint.import",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};