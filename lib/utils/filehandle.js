const fs = require('fs');
const path = require('path');

const createDirSync = (pathName) => {
    if(fs.existsSync(pathName)) {
        return true;
    } else {
        if(createDirSync(path.dirname(pathName))) {
            fs.mkdirSync(pathName);
            return true;
        }
    }
}

module.exports = {
    createDirSync,
}