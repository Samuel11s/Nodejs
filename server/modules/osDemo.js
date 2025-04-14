const os = require('os');

const systemInfo = {
  platform: os.platform(),              // 'win32', 'linux', etc.
  arch: os.arch(),                      // 'x64', 'arm', etc.
  cpuCores: os.cpus().length,           // number of CPU cores
  totalMemory: os.totalmem(),           // total memory (in bytes)
  freeMemory: os.freemem(),             // free memory (in bytes)
  uptime: os.uptime(),                  // uptime (in seconds)
  hostname: os.hostname(),              // computer name
  homeDir: os.homedir(),                // user home directory path
};

module.exports = systemInfo;