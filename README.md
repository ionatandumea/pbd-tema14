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
