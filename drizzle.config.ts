import { defineConfig } from 'drizzle-kit';

console.log(process.env.DATABASE_URL, 'HELP');

export default defineConfig({
	dialect: 'sqlite', // "mysql" | "sqlite" | "postgresql"
	schema: './src/lib/db/schema.ts',
	out: './drizzle',
	driver: 'turso',
	dbCredentials: {
		url: process.env.DATABASE_URL ?? '',
		authToken: process.env.DATABASE_AUTH_TOKEN ?? ''
	}
});
