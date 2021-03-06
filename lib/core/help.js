const program = require('commander');
const chalk = require('chalk');

const package = require('../../package.json');


const helpOptions = () => {

    // 脚手架版本
    program.version(package.version);
    // 脚手架操作
    program.option('-d --dest <dest>', 'a destination folder, eg: -d src/pages');
    program.option('-f --framework <framework>', 'framework name, eg: -f [flutter | react | vue | koa | express | mp]');

    program.on('--help', () => {
        console.log("");
        console.log(chalk.green("Usage:"));
        console.log(chalk.green("   estay [command] [options]"));
        console.log(chalk.green("   estay create xxx -f react"));
    });
}

module.exports = helpOptions;