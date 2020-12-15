#!/usr/bin/env node

const { program } = require('commander');

const helpOptions = require('./lib/core/help');
const createCommands = require('./lib/core/create');

// 帮助手册
helpOptions();

// 创建命令
createCommands();

// 解析终端指令
program.parse(process.argv);