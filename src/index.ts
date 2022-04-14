import { ConfigType } from "./types";
import { mkdir } from "fs";
import mysqldump, { Options } from "mysqldump";
import config from "../app.config.js";

// const now = new Date().toISOString();
const now = Date.now();

const dumpProcess = async (db: Options) => {
  db.dumpToFile = `./dump/${now}/${db.connection.database}.sql`;
  return mysqldump(db);
};

mkdir(`./dump/${now}`, { recursive: true }, (err) => {
  if (err && err.code !== "EEXIST") {
    console.error(err);
    return;
  }

  const dbs = (config as ConfigType).databases;
  /* Promise.all 쓰면 오류나서 동기로 처리함 */
  async function dumpDBLoop(_dbs: Options[]) {
    for (const db of _dbs) {
      console.log(
        `\n${db.connection.user}@${db.connection.host}/${db.connection.database}\n덤프중...`,
      );
      await dumpProcess(db);
      console.log("덤프 완료.");
    }
  }

  dumpDBLoop(dbs)
    .then(() => {
      console.log("\n전체 덤프 완료.");
    })
    .catch((e) => {
      console.error("\n덤프 도중 오류가 발생했습니다.");
      console.error(e);
    });
});
