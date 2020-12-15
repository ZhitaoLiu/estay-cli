const { spawn } = require('child_process');


const commandSpawn = (...args) => {
    return new Promise((resolve, reject) => {
        const childProcess = spawn(...args);
        childProcess.stdout.pipe(process.stdout);
        childProcess.stderr.pipe(process.stderr);
        childProcess.on('close', (code) => {
            console.log(`子进程退出，退出码 ${code}`);
            resolve();
        });
    })
}

module.exports = {
    commandSpawn,
};