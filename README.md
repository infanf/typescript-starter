# `@elunic/typescript-starter`

The elunic TypeScript starter

#### Table of Contents

- [Usage](#usage)
- [`npm` scripts](#npm-scripts)
- [Docker shell](#docker-shell)


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

`npm run shell`

Inside the shell, the `ng` command will be available inside, you will be in the project root, 
and all `npm` scripts (such as `npm run dev`) will be available.
