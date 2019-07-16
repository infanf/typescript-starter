FROM node:12-alpine as builder
ARG BUILD_ENVIRONMENT=staging

RUN mkdir /app
WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
RUN npm ci
COPY . /app
RUN npm run "compile:${BUILD_ENVIRONMENT}"


##
FROM node:12-alpine
ARG BUILD_ENVIRONMENT=staging

RUN mkdir /app
RUN mkdir /data

RUN chown -R node:node /data /app
WORKDIR /app

USER node

COPY --chown=node --from=builder /app/build /app/build
COPY --chown=node --from=builder /app/node_modules /app/node_modules
COPY --chown=node --from=builder /app/package.json /app/package.json
COPY --chown=node --from=builder /app/config /app/config

VOLUME ["/data"]

ENV BUILD_ENVIRONMENT ${BUILD_ENVIRONMENT}
CMD npm run "start:${BUILD_ENVIRONMENT}"
