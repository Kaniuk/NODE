// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший
// файл, в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так


const fs = require('fs');
const path = require('path');
/*
const textPath = path.join(__dirname, 'file.txt');
const newTextPath = path.join(__dirname, 'nawFile.txt');

fs.writeFile(textPath, 'SOMETHING NEW', (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
    fs.readFile(textPath, 'utf8', (err, textData) => {
        if (err) {
            console.log(err);
            throw (err);
        }
        console.log(textData);
        fs.writeFile(newTextPath, textData, () => {

        });
    });
});*/

// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл видаліть після
// того як все завершиться. Також вийде callback hell
//

let onlineUsers = [
    {name: "Andrii", age: 22, city: "Lviv"},
    {name: "Sergii", age: 33, city: "Kyiv"},
    {name: "Vasyl", age: 20, city: "Rivne"}
];


const secondTextPath = path.join(__dirname, 'files', 'file1.txt');
const newFolderPath = path.join(__dirname, 'new', 'newFolder');
let userStr = '';
for (const user of onlineUsers) {
    userStr += `NAME:${user.name},AGE:${user.age},CITY:${user.city}\n`;
}
fs.appendFile(secondTextPath,
    userStr,
    (err) => {
        if (err) {
            console.log(err);
            throw (err);
        }
        fs.readFile(secondTextPath, 'utf8', (err, textData) => {
            if (err) {
                console.log(err);
                throw (err);
            }
            fs.mkdir(newFolderPath, {recursive: true}, (err) => {
                if (err) {
                    console.log(err);
                    throw (err);
                }
                fs.appendFile(path.join(__dirname, 'new', 'newFolder', 'new.txt'), textData, {flag: 'w'},
                    (err) => {
                        if (err) {
                            console.log(err);
                            throw (err);
                        }
                        fs.unlink(secondTextPath, () => {
                        });
                    });
            });
        });
    });


// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли
// запишіть якусь дату) ) і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли
// тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до
// назви префікс _new

/*
fs.mkdir(path.join(__dirname, 'data', 'data1', 'data2'), {recursive: true}, (err) => {
    if (err) {
        console.log(err);
        throw (err);
    }
    fs.appendFile(path.join(__dirname, 'data', 'data.txt'), 'SOMETHING', (err) => {
        if (err) {
            console.log(err);
            throw (err);
        }
        fs.readdir(path.join(__dirname, 'data'), (err, data) => {
            console.log(data);
            for (const item of data) {
                const currentPath = path.join(__dirname, 'data', item);
                if (fs.statSync(currentPath).isFile()) {
                    fs.truncate(currentPath, () => {
                    });
                } else {
                    const newPath = path.join(__dirname, 'data', `new_${item}`);
                    fs.rename(currentPath, newPath, () => {

                    });
                }
            }
        });
    });
});
*/
