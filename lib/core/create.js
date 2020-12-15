const program = require('commander');

const {
    createProject,
    addPage,
    addComponent,
} = require('./actions/index');

const createCommands = () => {
    // 创建项目
    program
        .command('create <project>')
        .description('create a new project powered by estay-cli')
        .action((project) => {
            createProject(project);
        });
    // 创建页面
    program
        .command('addpage <page>')
        .description('add page, eg: estay addpage pageName -f flutter [-d lib/pages]')
        .action((page) => {
            addPage(page, program.dest);
        })
    // 创建组件
    program
        .command('addcpn <name>')
        .description('add component, eg: estay addcpn componentName -f react [-d src/components]')
        .action((name) => {
            addComponent(name, program.dest);
        });
    
}


module.exports = createCommands;