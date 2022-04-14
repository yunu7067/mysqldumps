# mysqldumps

[bradzacher/mysqldump](https://github.com/bradzacher/mysqldump)를 이용하여 여러 개의 데이터베이스 덤프를 자동화하는 툴.

`./dump/timestamp/database_name.sql` 형식으로 저장됨.

## How to use

1. app.config.js에 덤프를 뜨고자 하는 데이터베이스 기입

```
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
```

2. 빌드

```
yarn install
yarn build
```

2. 실행

```
yarn start
```
