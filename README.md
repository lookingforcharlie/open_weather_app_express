# Open Weather App Backend: Express/TypeScript

## Setup

- use drizzle-orm and @libsql/client, and use zod for validation the user data

## Endpoint

| Path                            | Description                    |
| ------------------------------- | ------------------------------ |
| GET /                           | API Info                       |
| GET /api/search-history         | List all search history        |
| POST /api/search-history        | Add a new search history entry |
| DELETE /api/search-history/{id} | Delete search history by id    |

## Project Structure

- MVC pattern: Routes → Controllers → Database

## [Drizzle commands](https://orm.drizzle.team/docs/kit-overview)

```
npx drizzle-kit generate
npx drizzle-kit migrate
npx drizzle-kit push
npx drizzle-kit pull
npx drizzle-kit check
npx drizzle-kit up
npx drizzle-kit studio
```
