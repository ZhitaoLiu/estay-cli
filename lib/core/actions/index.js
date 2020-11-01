const { promisify } = require('util');
const downloadRepo = promisify(require('download-git-repo'));

const program = require('commander');

const {
    flutterGitRepo,
    reactGitRepo,
    vueGitRepo,
} = require('../../config/repo_config');

// 创建项目
const createProject = async (project) => {
    console.log('开始创建项目:' + project);

    switch (program.framework) {
        case 'flutter':
            // 克隆模版项目
            await downloadRepo(flutterGitRepo, project, {clone: true});
            // 执行终端命令
            // 运行项目
            break;
        case 'react':
            // 克隆模版项目
            await downloadRepo(reactGitRepo, project, {clone: true});
            break;
        case 'vue':
            // 克隆模版项目
            await downloadRepo(vueGitRepo, project, {clone: true});
            break;
        default:
            // 克隆模版项目
            await downloadRepo(reactGitRepo, project, {clone: true});
            break;
    }
}


module.exports = {
    createProject,
}