#!/usr/bin/env node

const { program } = require('commander');

const package = require('./package.json');
const helpOptions = require('./lib/core/help');
const createCommands = require('./lib/core/create');

// 脚手架版本
program.version(package.version);

// 帮助手册
helpOptions();

// 创建命令
createCommands();

// 解析
program.parse(process.argv);