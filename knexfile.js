// Update with your config settings.

module.exports = {

  development: {
    client: "mysql",
    connection: {
      database: "Scheduler",
      user: "PedroH",
      password: "Iron@870"
    }
  },

  staging: {
    client: "mysql",
    connection: {
      database: "Scheduler",
      user: "PedroH",
      password: "Iron@870"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "mysql",
    connection: {
      database: "Scheduler",
      user: "PedroH",
      password: "Iron@870"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};
