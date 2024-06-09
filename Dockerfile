FROM node:20-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app
RUN corepack enable
COPY /volunteer-management /app

RUN pnpm install --prod --frozen-lockfile
RUN pnpm install --frozen-lockfile
RUN pnpm run build

EXPOSE 5173
CMD [ "pnpm", "run", "dev"]