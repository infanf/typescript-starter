import * as Logger from '@elunic/logger';

import { Config } from './config';

export const logger = Logger.createLogger(Config.logNamespace, {
  consoleLevel: (process.env.LOG_LEVEL || 'info') as Logger.LogLevels,
  logPath: Config.logPath,
});

export const createLogger = (namespace: string) => logger.createLogger(namespace);
