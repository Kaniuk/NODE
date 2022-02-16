// Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user
// ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
// але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.
// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// (ті, що були в папці inPerson будуть в папці online)

const fs = require('fs');
const path = require('path');

/*

fs.mkdir(path.join(__dirname, 'main', 'online'), (err) => {
    if (err) {
        console.log(err);
        throw (err);
    }
});
fs.mkdir(path.join(__dirname, 'main','inPerson'), (err) => {
    if (err) {
        console.log(err);
        throw (err);
    }
});
*/

let onlineUsers = [
    {name: "Andrii", age: 22, city: "Lviv"},
    {name: "Sergii", age: 33, city: "Kyiv"},
    {name: "Vasyl", age: 20, city: "Rivne"}
];
let inPersonUsers = [
    {name: "Anya", age: 22, city: "Lviv"},
    {name: "Ihor", age: 33, city: "Lviv"},
    {name: "Oleg", age: 20, city: "Lviv"}
];

function appendUsersToFile(path, users) {
    for (const user of users) {
        fs.appendFile(
            path,
            `NAME:${user.name},AGE:${user.age},CITY:${user.city}\n`,
            (err) => {
                if (err) {
                    console.log(err);
                    throw (err);
                }
            }
        );
    }
}

/*
appendUsersToFile(path.join(__dirname, 'main', 'online', 'online.txt'), onlineUsers);
appendUsersToFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), inPersonUsers);
*/


const inPersonPath = path.join(__dirname, 'main', 'inPerson', 'inPerson.txt');
const onlinePath = path.join(__dirname, 'main', 'online', 'online.txt');
fs.readFile(inPersonPath, 'utf8', (err, inPersonData) => {
    if (err) {
        console.log(err);
        throw (err);
    }
    // console.log(inPersonData);

    fs.readFile(onlinePath, 'utf8', (err, onlineData) => {
        if (err) {
            console.log(err);
            throw (err);
        }
        // console.log(onlineData);

        fs.writeFile(onlinePath, inPersonData, () => {
        });
        fs.writeFile(inPersonPath, onlineData, () => {
        });
    });

});
