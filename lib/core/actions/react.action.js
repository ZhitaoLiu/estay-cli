const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

const downloadRepo = promisify(require('download-git-repo'));
const program = require('commander');

const { commandSpawn } = require('../../utils/terminal');
const { compile } = require('../../utils/compiler');
const { hump2underline } =  require('../../utils/format');
const { createDirSync } = require('../../utils/filehandle');

const {
    reactGitRepo,
} = require('../../config/repo_config');

// 创建react项目
const createReactProject = async (project) => {
   
}

// 创建react页面
const addReactPage = async (page, dest) => {

}

// 创建react组件
const addReactComponent = async (name, dest) => {
    
}

module.exports = {
    createReactProject,
    addReactPage,
    addReactComponent
}