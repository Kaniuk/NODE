// 1. /login, поля які треба відрендерити в файлі hbs: firstName, lastName, email(унікальне поле), password, age,
// просто зробити темплейт з цим усім і вводити свої дані які будуть пушитися в масив і редірект робити на сторінку з усіма
// юзерами /users і перевірка чи такий імейл не існує, якщо існує то редірект на еррор пейдж
// 2. /users просто сторінка з усіма юзерами, але можна по квері параметрам їх фільтрувати по age і city
// 3. /user/:id сторінка з інфою про одного юзера
// 4. зробити якщо не відпрацюють ендпоінти то на сторінку notFound редірект

// - додайте ендпоінт signIn який буде приймати email і password і якщо все вірно то редірект на сторінку цього
// * хто хоче складніше реалізуйте видалення користувача. Кнопка повинна знаходитись на сторінці з інфою про одного юзера.
//     Після видалення редірект на "/users"


const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');

const users = [
    {
        firstName: 'Ivan',
        lastName: 'Petrov',
        email: 'ivan@.net',
        password: '111',
        age: 22,
        city: 'Lviv',

    },
    {
        firstName: 'Vasyl',
        lastName: 'Rebrov',
        email: 'vasya@.net',
        password: '22',
        age: 50,
        city: 'Kyiv'

    },
    {
        firstName: 'Nazar',
        lastName: 'Verba',
        email: 'nazar@.net',
        password: 'zdgf',
        age: 30,
        city: 'Lviv'

    },
];


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', 'hbs');
app.engine('hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/users', (req, res) => {
    const query = req.query;
    let usersArray = [...users];
    if (query.city) {
        usersArray = usersArray.filter(user => user.city === query.city);
    }

    if (query.age) {
        usersArray = usersArray.filter(user => user.age === +query.age);
    }
    res.render('users', {users: usersArray});
});

app.get('/users/:userId', (req, res) => {
    const {userId} = req.params;
    // res.json(users[userId-1]);
    res.render('user', users[userId - 1]);
});

app.get('/signIn', (req, res) => {
    res.render('signIn');
});

app.post('/login', (req, res) => {
    const user = req.body;

    const isEmailExist = users.some((registerUser) => registerUser.email === user.email);
    if (isEmailExist) {
        res.redirect('/notFound');
    } else {
        users.push(user);
        res.redirect('/users');
    }
});

app.post('/signIn', (req, res) => {
    const userInfo = req.body;

    const dbUserIndex = users.findIndex((user) => user.email === userInfo.email);
    if (dbUserIndex === -1) {
        res.redirect('/notFound');
        return;
    }
    const dbUser = users[dbUserIndex];

    if (userInfo.password !== dbUser.password) {
        res.redirect('/notFound');
        return;
    }

    res.redirect(`/users/${dbUserIndex + 1}`);
});


app.use((req, res) => {
    res.render('notFound');
});


app.listen(5100, () => {
    console.log('Server has started on PORT 5100');
});