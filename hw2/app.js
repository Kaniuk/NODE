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
const Handlebars = require('handlebars');
const apiRoutes = require('./routes/apiRoutes');

Handlebars.registerHelper('inc', function (value, options) {
    return parseInt(value) + 1;
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', 'hbs');
app.engine('hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.use(apiRoutes);

app.use((req, res) => {
    res.render('notFound');
});

app.listen(5100, () => {
    console.log('Server has started on PORT 5100');
});