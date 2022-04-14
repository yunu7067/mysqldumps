// @ts-check

/** @type {import('./src/types').ConfigType} */
const config = {
  databases: [
    {
      connection: {
        host: "localhost",
        user: "user_name",
        password: "root_password",
        database: "database_name1",
      },
    },
    {
      connection: {
        host: "localhost",
        user: "user_name",
        password: "root_password",
        database: "database_name2",
      },
    },
  ],
};

export default config;
