# Proiect PBD Tema 14

## Required software

- docker engine
- docker compose
- node v20.0.0

## Getting started

- install the dependencies

```bash
npm install
```

- start the database server using docker compose

```bash
docker compose up -d
```

- run the migrations to create the database schema

```bash
npx prisma migrate dev --name init
```

## Notes

- run migrations: npx prisma migrate dev --name [name]
- npx prisma generate - generates the Prisma Client
- sync prisma schema with the database: `npx prisma db push`

## Plan Transport

1. Form to create a new transport

- select a range of dates the transport is operating
- select a carrier based on the available carriers
- select a number of packaged products to transport (max to select is carrier.maxPackages)

2. List of unavailable carriers in the selected range of dates

3. List of available carriers in the selected range of dates
