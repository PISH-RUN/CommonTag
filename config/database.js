const path = require("path");

module.exports = ({ env }) => {
  return database(env)[env("NODE_ENV").toLowerCase()];
};

const database = (env) => ({
  development: {
    connection: {
      client: "sqlite",
      connection: {
        filename: path.join(
          __dirname,
          "..",
          env("DATABASE_FILENAME", ".tmp/data.db")
        ),
      },
      useNullAsDefault: true,
    },
  },
  production: {
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME"),
        user: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      "pool": {
        "min": 0,
        "max": 500,
        "idleTimeoutMillis": 300000,
        "createTimeoutMillis": 300000,
        "reapIntervalMillis": 300000,
        "destroyTimeoutMillis": 300000,
        "createRetryIntervalMillis": 300000,
        "acquireTimeoutMillis": 300000
      }
    },
  },
});
