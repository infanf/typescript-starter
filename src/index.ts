import { logger } from './core/logger';

logger.info(`Starting up`);
logger.info(`NODE_ENV=${process.env.NODE_ENV}`, `LOG_LEVEL=${process.env.LOG_LEVEL}`);

(async () => {
  // Bootstrap
})().catch(err => {
  logger.error(`Fatal error during startup`, err);
  process.exit(1);
});
