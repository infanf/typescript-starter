const path = require('path');

module.exports = {
  logNamespace: 'app',
  dataPath: path.join(process.cwd(), 'data/'),
  logPath: path.join(process.cwd(), 'data/logs/'),
};
