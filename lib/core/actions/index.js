const program = require('commander');


const {
    createFlutterProject,
    addFlutterPage,
    addFlutterComponent
} = require('./flutter.action');
const {
    createReactProject,
    addReactPage,
    addReactComponent
} = require('./react.action');
const {
    createVueProject,
    addVuePage,
    addVueComponent
} = require('./vue.action')
const {
    createMPProject,
    addMPPage,
    addMPComponent
} = require('./mp.action');
const {
    createKoaProject,
} = require('./koa.action');
const {
    createExpressProject
} = require('./express.action');


// 创建项目
const createProject = async (project) => {
    console.log('开始创建项目:' + project);

    switch (program.framework) {
        case 'flutter':
            createFlutterProject(project);
            break;
        case 'react':
            createReactProject(project);
            break;
        case 'vue':
            createVueProject(project);
            break;
        case 'mp':
            createMPProject(project);
            break;
        case 'koa':
            createKoaProject(project);
            break;
        case 'express':
            createExpressProject(project);
            break;
        default:
            console.error('必需指定-f [flutter | react | vue | mp | koa | express]');
            break;
    }
}

// 创建页面
const addPage = async (page, dest) => {
    console.log('开始创建页面：' + page + '以及依赖层...');
    switch(program.framework) {
        case 'flutter':
            addFlutterPage(page, dest);
            break;
        case 'react':
            addReactPage(page, dest);
            break;
        case 'vue':
            addVuePage(page, dest);
            break;
        case 'mp':
            addMPPage(page, dest);
            break;
        default:
            console.error('必需指定-f [flutter | react | vue | mp]');
            break;
    }
}

// 创建组件
const addComponent = async (name, dest) => {
    console.log('开始创建组件：' + name);
    switch(program.framework) {
        case 'flutter':
            addFlutterComponent(name, dest);
            break;
        case 'react':
            addReactComponent(name, dest);
            break;
        case 'vue':
            addVueComponent(name, dest);
            break;
        case 'mp':
            addMPComponent(name, dest);
            break;
        default:
            console.error('必需指定-f [flutter | react | vue | mp]');
            break;
    }
}


module.exports = {
    createProject,
    addPage,
    addComponent,
}