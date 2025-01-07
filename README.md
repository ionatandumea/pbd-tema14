# Proiect Sincretic (TEMA 14)

## Required software

- docker engine
- docker compose
- node v20.0.0

## Getting started

- install the dependencies

```bash
npm install
```

- run the migrations to create the database schema

```bash
npx prisma migrate dev --name init
```

## Notes

run migrations: npx prisma migrate dev --name <name>

npx prisma generate - generates the Prisma Client

sync prisma schema with the database: `npx prisma db push`
