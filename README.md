# `@elunic/typescript-starter`

The elunic TypeScript starter

#### Table of Contents

- [Usage](#usage)
- [`npm` scripts](#npm-scripts)
- [Docker shell](#docker-shell)
- [Framework augmentations](#framework-augmentations)
  - [NestJS](#nestjs)
    - [TypeORM](#typeorm)


## Usage

When adapting for your own project, don't forget to:

* change the image and host for the "app" service name in
  `docker/shell/docker-compose.yml`, or you WILL have issues with your Docker container


## npm scripts

This is not a complete list. Check the `package.json` to see the complete list.

**Note** see [Docker shell](#docker-shell) for the Docker shell-related scripts

* `npm run dev`: watch mode
* `npm run dev:watch:debug`: watch mode with `--inspect-brk`
* `npm run check`: run linting and formatting checks
* `npm run fix`: run linting and formatting checks and fix errors automatically, where possible
* `npm run test`: run tests in watch mode
* `npm run test:watch:debug`: run tests in watch mode with `--inspect-brk`
* `npm run test:once`: run tests
* `npm run test:ci`: run tests in CI mode
* `npm run integration-test`: run integration tests in watch mode
* `npm run integration-test:once`: run integration tests
* `npm run integration-test:ci`: run integration tests in CI mode


## Docker shell

To drop into a shell inside a Docker container, run:

```shell
$ npm run shell
```

Inside the shell, the `ng` command will be available inside, you will be in the project root, 
and all `npm` scripts (such as `npm run dev`) will be available.


## Framework augmentations

### NestJS
 
To add basic NestJS functionality, run:

```shell
$ npm i --save @nestjs/core @nestjs/common rxjs reflect-metadata @nestjs/platform-express @nestjs/testing
```

`nest-cli.json` is required to make sure the `nest` cli works properly:

`nest-cli.json`
```json
{
 "language": "ts",
 "collection": "@nestjs/schematics",
 "sourceRoot": "src"
}
```

To add Swagger support, run:

```shell
$ npm i -s @nestjs/swagger swagger-ui-express
```

#### TypeORM

The recommended way to connect a database with nest.js is using _TypeORM_. To add support run

```shell
$ npm i -s @nestjs/typeorm typeorm mysql typeorm-naming-strategies
```

and import the TypeORM Module with configuration into your NestJS module:

```javascript
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
...
@Module({
  imports: [
    ...,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.APP_DB_HOST,
      port: process.env.APP_DB_PORT || 3306,
      username: process.env.APP_DB_USER,
      password: process.env.APP_DB_PASSWORD,
      database: process.env.APP_DB_NAME,
      extra: { insecureAuth: true },
      synchronize: true,
      namingStrategy: new SnakeNamingStrategy(),
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.js,.ts}'],
    }),
  ],
  ...
})
export class AppModule {}
```
