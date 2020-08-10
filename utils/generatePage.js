const fs = require('fs');

//function to write the final HTML
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                console.log(err)
                reject(err);
                return;
            } 
            resolve ({
                ok: true,
                message: "File created!"
            });
        });
    });
};

module.exports = writeFile;