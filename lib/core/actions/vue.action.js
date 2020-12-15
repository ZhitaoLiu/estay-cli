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
    vueGitRepo,
} = require('../../config/repo_config');

// 创建Vue项目
const createVueProject = async (project) => {
   
}

// 创建Vue页面
const addVuePage = async (page, dest) => {

}

// 创建Vue组件
const addVueComponent = async (name, dest) => {
    
}

module.exports = {
    createVueProject,
    addVuePage,
    addVueComponent
}