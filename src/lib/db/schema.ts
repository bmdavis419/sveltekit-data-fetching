import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const todos = sqliteTable('todos', {
	id: text('id'),
	name: text('name').notNull(),
	done: integer('done', { mode: 'boolean' }).notNull().default(false)
});
