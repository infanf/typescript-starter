const path = require('path');
const os = require('os');

const tmpDir = os.tmpdir();

module.exports = {
  dataPath: path.join(tmpDir, '/data/'),
  logPath: path.join(tmpDir, '/data/logs/'),
};
