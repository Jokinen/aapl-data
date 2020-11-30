![Deploy to Amazon ECS](https://github.com/Jokinen/aapl-data/workflows/Deploy%20to%20Amazon%20ECS/badge.svg)

# AAPL-data

Displays a history of AAPL stock price by using HighCharts.

## Development

This service consists of a backend server and an UI. You need to run both services separately.

### Server

You can start the service directly by using `npm` or by running it with docker. In either case you need to provide an environment as is described in `server/.env.example`. The easiest way to do so is to add an `.env` file.

**With npm**

```bash
npm i && npm start
```

**With docker**

```bash
docker-compose up --build
```

### UI

You can start the service directly by using `npm` or by running it with docker. In either case you need to provide an environment as is described in `ui/.env.example`. The easiest way to do so is to add an `.env` file.

**With npm**

```bash
npm i && npm start
```

**With docker**

```bash
docker-compose up --build
```

## Deployment

The both the server and UI packages are deployed to AWS whenever new commits are merged into `main`.
