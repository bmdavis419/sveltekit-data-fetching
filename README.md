## SvelteKit Data Fetching Example

_To replicate this project locally you will need a free turso account for the database_

### Getting Started

1. Clone the repo
2. Install the deps with `bun install`
3. Fill in your .env with you turso creds (https://docs.turso.tech/quickstart), filling in:

```
DATABASE_AUTH_TOKEN="..."
DATABASE_URL="libsql://..."
```

4. Push your schema `bunx drizzle-kit push`
5. Fill in some fake data from the turso console if you want to
6. Start the dev server `bun run dev`
