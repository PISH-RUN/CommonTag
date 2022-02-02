module.exports = {
  routes: [
    {
      method: "POST",
      path: "/category/import",
      handler: "category.import",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};