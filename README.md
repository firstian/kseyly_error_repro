Repo to show NoResultError in Kysely is not recognized by instanceof in Next.js 14.

The data is in a small sqlite3 file test.db. Only has one table with 2 rows and 2 columns.

1. Run `pnpm install` to install the package.
2. Run `node node_test.mjs` to demonstrate that in a straight node application, it works fine.
3. Run `pnpm dev` to start the Next.js server. Enter the key in the UI to see that it NoResultError is thrown but instanceof doesn't recognize it.

