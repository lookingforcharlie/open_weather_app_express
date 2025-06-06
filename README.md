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
