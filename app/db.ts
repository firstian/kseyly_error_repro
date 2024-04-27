import Database from "better-sqlite3";
import { Kysely, SqliteDialect } from "kysely"

function createDB() {
	const database = new Kysely({
		dialect: new SqliteDialect({
			database: new Database("./test.db")
		})
	});

	return database;
}

declare global {
	let DB;
}

export const DB = globalThis.DB || createDB();
global.DB = DB;

