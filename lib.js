const ora = require('ora');
const { promisify } = require('util');
const download = promisify(require('download-git-repo'));

const clone = async (repo, dest) => {
  const process = ora('downloading node-server template...');
  process.start();
  try {
    await download(repo, dest);
    process.succeed();
  } catch (e) {
    process.fail();
  }
};

module.exports = { clone };
