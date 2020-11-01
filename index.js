#!/usr/bin/env node

const { program } = require('commander')

const package = require('./package.json');

// 脚手架版本
program.version(package.version);

// 解析
program.parse(process.argv);