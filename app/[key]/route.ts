import { NextResponse } from "next/server";
import { NoResultError } from "kysely";
import {DB} from "../db";

export async function GET(
	req: Requuest,
	{ params }: { params: { key: string } }
) {
	let resp = null;
	try {
		const result = await DB
			.selectFrom("test")
			.selectAll()
			.where("key", "=", params.key)
			.executeTakeFirstOrThrow();
		console.log("API route: ", result);
		resp = {result: result.value };
	} catch(e) {
		console.log(e);
		if (e instanceof NoResultError) {
			resp = { result: `API No result for key ${key}` };
		} else {
			resp = {result: `API Generic error: ${e.message}` };
		};
	}
	return NextResponse.json(resp);
}
