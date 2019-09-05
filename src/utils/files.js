const glob = require('glob');
const path = require("path");
const fs = require('fs');


export async function loadModulesDynamically(dir, pattern) {
    const importedFiles = [];
    return new Promise((resolve, reject) => {
        glob(path.resolve(`${__dirname}/${dir}`), function (err, files) {
            if (err)
            return reject(err);
            files.forEach(file => {
                if (new RegExp(`.${pattern}.[js]`).test(file)) {
                    if (fs.lstatSync(file).isFile()) {
                        const importedFile = require(`${file}`);
                        importedFiles.push(importedFile);
                    }
                }
            });
            resolve(importedFiles);
        });
    });

}
