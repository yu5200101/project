let fs = require('fs'),
    path = require('path');
module.exports = {
    readFile(pathName) {
        let pathFile = `${path.resolve()}/mock/${pathName}`;
        return new Promise((resolve, reject) => {
            fs.readFile(pathFile, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                data = JSON.parse(data);
                resolve(data);
            });
        })
    },
    writeFile(pathName, content) {
        let pathFile = `${path.resolve()}/mock/${pathName}`;
        content = typeof content !== 'string' ? JSON.stringify(content) : null;
        return new Promise((resolve, reject) => {
            fs.writeFile(pathFile, content, 'utf8', (err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        })
    }
};