FROM node:21-slim as base

RUN npm i -g pnpm

FROM base as dependencies

WORKDIR /app
COPY ./volunteer-management/package.json .
COPY ./volunteer-management/pnpm-lock.yaml .
RUN pnpm install

FROM base as build
WORKDIR /app
COPY ./volunteer-management ./
COPY --from=dependencies /app/node_modules ./node_modules
RUN pnpm build
RUN pnpm prune --prod

FROM base as deploy
COPY --from=build /app/dist ./dist/
COPY --from=build /app/node_modules ./node_modules

EXPOSE 5173

CMD ["pnpm", "run", "dev"]