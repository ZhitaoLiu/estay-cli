const path = require('path');
const fs = require('fs');

const ejs = require('ejs');


const compile = (templateName, data, frameworkName) => {
    const templatePath = path.resolve(__dirname, `../template/${frameworkName}/${templateName}`)
    return new Promise((resolve, reject) => {
        ejs.renderFile(templatePath, {data: data}, {}, (err, result) => {
            if(err) {
                console.log('compile 出错');
                console.log(err);
                reject(err);
                return;
            }

            resolve(result);
        })
    })
}

module.exports = {
    compile
}