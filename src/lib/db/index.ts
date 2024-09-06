import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { DATABASE_AUTH_TOKEN, DATABASE_URL } from '$env/static/private';
import * as schema from './schema';

const client = createClient({ url: DATABASE_URL, authToken: DATABASE_AUTH_TOKEN });

export const db = drizzle(client, { schema });
