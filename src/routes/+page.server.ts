import { db } from '$lib/db';
import { todos } from '$lib/db/schema';

export const load = async ({ fetch }) => {
	const userTodos = await db.select().from(todos);

	// ANOTHER WAY TO DO IT
	const res = await fetch('/api');
	const data = (await res.json()) as {
		userTodos: {
			id: string | null;
			name: string;
			done: boolean;
		}[];
	};
	console.log('from page.server.ts', data);

	const randomStrings = getRandomStrings();

	return { userTodos, randomStrings };
};

async function getRandomStrings(count: number = 5): Promise<string[]> {
	await delay(5000);

	const randomStrings: string[] = [];
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const stringLength = 10;

	for (let i = 0; i < count; i++) {
		let result = '';
		for (let j = 0; j < stringLength; j++) {
			result += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		randomStrings.push(result);
	}

	return randomStrings;
}

function delay(ms: number): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}
