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
    flutterGitRepo,
} = require('../../config/repo_config');

// 创建flutter项目
const createFlutterProject = async (project) => {
    // 1. 克隆模版项目
    try {
        console.log('正在克隆flutter项目模版...');
        await downloadRepo(flutterGitRepo, project, {clone: true});
    } catch (error) {
        console.log('flutter 克隆出错：')
        console.log(error);
    }
    // 2. 执行终端命令
    console.log('正在安装flutter项目依赖包...');
    await commandSpawn('flutter', ['packages', 'get'], {cwd: `./${project}`});
    // 3. 运行项目
    console.log('正在运行flutter项目...');
    await commandSpawn('flutter', ['run'], {cwd: `./${project}`});
}

// 创建flutter页面
const addFlutterPage = async (page, dest) => {
    // 将模版文件写入项目
    const destDir = dest || 'lib/pages'
    const destPageDir = path.resolve(destDir, hump2underline(page));
    if(createDirSync(destPageDir)) {
        // 创建 page 文件
        const pageResult = await compile(`page.${program.framework}.ejs`, {name: page, underlineName: hump2underline(page)}, program.framework);
        const pageTargetPath = path.resolve(destPageDir, `${hump2underline(page)}_page.dart`);
        fs.promises.writeFile(pageTargetPath, pageResult);
        console.log('pages创建文件成功');
        // 创建 model 文件
        const modelResult = await compile(`model.${program.framework}.ejs`, {name: page, underlineName: hump2underline(page)}, program.framework);
        const modelTargetPath = path.resolve('lib/model', `${hump2underline(page)}_model.dart`);
        fs.promises.writeFile(modelTargetPath, modelResult);
        console.log('model创建文件成功');
        // 创建 页面network 文件
        const requestResult = await compile(`request.${program.framework}.ejs`, {name: page, underlineName: hump2underline(page)}, program.framework);
        const requestTargetPath = path.resolve('lib/services', `${hump2underline(page)}_request.dart`);
        fs.promises.writeFile(requestTargetPath, requestResult);
        console.log('services创建文件成功');
        // 创建 viewmodel 文件
        const viewmodelResult = await compile(`viewmodel.${program.framework}.ejs`, {name: page, underlineName: hump2underline(page)}, program.framework);
        const viewmodelTargetPath = path.resolve('lib/viewmodel', `${hump2underline(page)}_view_model.dart`);
        fs.promises.writeFile(viewmodelTargetPath, viewmodelResult);
        console.log('viewmodel创建文件成功');
        // 往路由文件插入页面路由
        const routerPath = path.resolve('lib/router', 'router.dart');
        const routerPageCode = fs.readFileSync(routerPath, { encoding: 'utf-8'})
        const insertRouterCode1 = `import 'package:estay_flutter_template/pages/${hump2underline(page)}/${hump2underline(page)}_page.dart';`;
        const routerPageCode1 = routerPageCode.replace('// **路由路径插入标志**', `${insertRouterCode1}\n// **路由路径插入标志**`);
        const insertRouterCode2 = `ES${page}Page.routeName: (ctx) => ES${page}Page(),`;
        const routerPageCode2 = routerPageCode1.replace('// **路由页面插入标志**', `${insertRouterCode2}\n   // **路由页面插入标志**'`);
        fs.promises.writeFile(routerPath, routerPageCode2, {encoding: 'utf-8'});
        console.log('router.dart文件引入页面router成功');
        // 引入 provider包裹
        const providerPath = path.resolve('lib', 'main.dart');
        const mainPageCode = fs.readFileSync(providerPath, { encoding: 'utf-8'})
        const insertProviderCode1 = `import 'package:estay_flutter_template/viewmodel/${hump2underline(page)}_view_model.dart';`;
        const mainPageCode1 = mainPageCode.replace('// **viewModel插入标志**', `${insertProviderCode1}\n// **viewModel插入标志**`);
        const insertProviderCode2 = `ChangeNotifierProvider(create: (ctx) => ${page}ViewModel()),`;
        const mainPageCode2 = mainPageCode1.replace('// **Provider插入标志**', `${insertProviderCode2}\n      // **Provider插入标志**'`);
        fs.promises.writeFile(providerPath, mainPageCode2, {encoding: 'utf-8'});
        console.log('main.dart文件引入页面provider成功');
        console.log('页面创建完毕^_^');
    }
}

// 创建flutter组件
const addFlutterComponent = async (name, dest) => {
    // 编译ejs模板
    const result = await compile(`component.${program.framework}.ejs`, {name}, program.framework);
    // 将模版文件写入项目
    const destDir = dest || 'lib/widgets/single'
    const targetPath = path.resolve(destDir, `${hump2underline(name)}.dart`);
    fs.promises.writeFile(targetPath, result);
}

module.exports = {
    createFlutterProject,
    addFlutterPage,
    addFlutterComponent
}