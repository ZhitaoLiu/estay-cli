const program = require('commander');

const {
    createProject,
} = require('./actions/index');

const createCommands = () => {
    program
        .command('create <project>')
        .description('create a new project powered by estay-cli')
        .action(createProject)

}


module.exports = createCommands;