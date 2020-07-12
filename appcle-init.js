#!/usr/bin/env node
const { clone } = require('./lib');
const TEMPLATE_NODE_SERVER_GIT = 'github:weapon-master/template-node-server';
const { log } = console;
const program = require('commander');
const chalk = require('chalk');
program.action(async ({ args: [name] }) => {
  log(chalk.blueBright(`init ${name}`));
  await clone(TEMPLATE_NODE_SERVER_GIT, name);
});
program.parse(process.argv);
