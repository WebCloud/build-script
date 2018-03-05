/* eslint-disable no-console, import/no-extraneous-dependencies */
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const {
  cyan,
  red,
  white
} = require('chalk');

const log = (message, color = cyan) => console.log('\n', color(message));
const error = message => console.error('\n', red(message));

const executeWithMessage = (message, command) => async () => {
  if (message && message !== '') log(message);

  const { stdout, stderr } = await exec(command);
  log(stdout, white.dim);
  log(stderr, white.dim);

  return { stdout, stderr };
};

module.exports = {
  log,
  error,
  executeWithMessage
};
