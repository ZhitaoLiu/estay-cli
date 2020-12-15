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
    mpGitRepo,
} = require('../../config/repo_config');

// 创建mp项目
const createMPProject = async (project) => {
   
}

// 创建mp页面
const addMPPage = async (page, dest) => {

}

// 创建mp组件
const addMPComponent = async (name, dest) => {
    
}

module.exports = {
    createMPProject,
    addMPPage,
    addMPComponent
}