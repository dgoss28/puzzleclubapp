# base node image
FROM node:16-bullseye-slim as base

# set for base and all layer that inherit from it
ENV NODE_ENV production

# Install openssl for Prisma
RUN apt-get update && apt-get install -y openssl sqlite3

# Install all node_modules, including dev dependencies
FROM base as deps

WORKDIR /puzzleclub

ADD package.json package-lock.json .npmrc ./
RUN npm install --production=false

# Setup production node_modules
FROM base as production-deps

WORKDIR /puzzleclub

COPY --from=deps /puzzleclub/node_modules /puzzleclub/node_modules
ADD package.json package-lock.json .npmrc ./
RUN npm prune --production

# Build the app
FROM base as build

WORKDIR /puzzleclub

COPY --from=deps /puzzleclub/node_modules /puzzleclub/node_modules

ADD prisma .
RUN npx prisma generate

ADD . .
RUN npm run build

# Finally, build the production image with minimal footprint
FROM base

ENV DATABASE_URL=file:/data/sqlite.db
ENV PORT="8080"
ENV NODE_ENV="production"

# add shortcut for connecting to database CLI
RUN echo "#!/bin/sh\nset -x\nsqlite3 \$DATABASE_URL" > /usr/local/bin/database-cli && chmod +x /usr/local/bin/database-cli

WORKDIR /puzzleclub

COPY --from=production-deps /puzzleclub/node_modules /puzzleclub/node_modules
COPY --from=build /puzzleclub/node_modules/.prisma /puzzleclub/node_modules/.prisma

COPY --from=build /puzzleclub/build /puzzleclub/build
COPY --from=build /puzzleclub/public /puzzleclub/public
COPY --from=build /puzzleclub/package.json /puzzleclub/package.json
COPY --from=build /puzzleclub/start.sh /puzzleclub/start.sh
COPY --from=build /puzzleclub/prisma /puzzleclub/prisma

ENTRYPOINT [ "./start.sh" ]
