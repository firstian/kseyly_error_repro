"use server";
import { NoResultError } from "kysely";
import {DB} from "./db";

export type formState = {
	result: string;
}

export async function serverAction(prevState: formState, formData: FormData) {
	const key = formData.get("row_key") as string;
	try {
		const result = await DB
			.selectFrom("test")
			.selectAll()
			.where("key", "=", key)
			.executeTakeFirstOrThrow();
		console.log(result);
		return {result: result.value };
	} catch(e) {
		console.log(e);
		if (e instanceof NoResultError) {
			return { result: `No result for key ${key}` };
		} else {
			return {result: `Generic error: ${e.message}` };
		};
	}
}
