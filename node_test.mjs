import process from "process";
import Database from "better-sqlite3";
import { Kysely, SqliteDialect, NoResultError } from "kysely";

const DB = new Kysely({
  dialect: new SqliteDialect({
    database: new Database("./test.db")
  })
});

async function test_select(key) {
  try {
    const result = await DB
      .selectFrom("test")
      .selectAll()
      .where("key", "=", key)
      .executeTakeFirstOrThrow();
    return {result: result.value };
  } catch(e) {
    if (e instanceof NoResultError) {
      return { result: `NoResultError for key ${key}` };
    } else {
      return {result: `Generic error for key ${key}: ${e.message}` };
    };
  }
}

for (const key of ["key1", "key2", "bad_key"]) {
  console.log(await test_select(key));
}

process.exit();

