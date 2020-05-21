const express = require('express');
const expressBars = require('express-handlebars');
const path = require('path');

const app = express();

const users = [
    {name: 'Nick', surname: 'Nickson', email: 'nn@gmail.com', password: '123456'},
    {name: 'Jack', surname: 'Jackson', email: 'jj@gmail.com', password: '654321'}
];

app.use(express.static(path.join(__dirname, 'static', 'views')));
app.use(express.json());
app.use(express.urlencoded());

app.engine('.hbs', expressBars({
    extname: '.hbs',
    defaultLayout: false
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static', 'views'));

app.get('/users', (req, res) => {
    res.render('users', {users})
});

app.get('/register', (req, res) => {
    res.render('register')
});

app.post('/reg', (req, res) => {
    const requestBody = req.body;
    const emailExists = users.find(el => {
       return  el.email === requestBody.email
    });
    if (emailExists) {
        res.end('User with such an email already exists. Register, please, with another one.')
    } else {
        users.push(req.body);
        res.end('Hurray! You\'re successfully registered!')
    }
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.post('/log', (req, res) => {
    const requestBody = req.body;
    const userMatch = users.find(el => {
        return el.email === requestBody.email && el.password === requestBody.password
    });
    userMatch ?
        res.end('Hurray!!! You are logged in :)') :
        res.end('Sorry! You can\'t log in. You need to register.')
});

app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Listen 5000...');
    }
});
