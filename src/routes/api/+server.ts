import { db } from '$lib/db';
import { todos } from '$lib/db/schema';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const userTodos = await db.select().from(todos);

	console.log('called api');

	return json({ userTodos });
};
