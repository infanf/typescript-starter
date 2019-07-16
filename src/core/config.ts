/* tslint:disable:variable-name (allow Config to be written in all caps to distinguish it from the config module and make it easier to read [wh]) */

import * as config from 'config';
import { cloneDeep, fromPairs } from 'lodash';

interface ConfigInterface {
  logNamespace: 'app';
  dataPath: string;
  logPath: string;
}

export const Config: ConfigInterface = (fromPairs(
  Object.getOwnPropertyNames(config).map(key => [key, cloneDeep(config.get<unknown>(key))]),
) as unknown) as ConfigInterface;
