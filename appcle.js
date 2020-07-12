#!/usr/bin/env node
// const TEMPLATE_NODE_SERVER_GIT = 'github:weapon-master/template-node-server';
// const DEST = 'test';

// clone(TEMPLATE_NODE_SERVER_GIT, DEST);

const program = require('commander');

program
  .version(require('./package.json').version, '-v', '--version')
  .command('init <name>', 'init project');

program.parse(process.argv);
