const { response } = require('express');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const favicon = require('serve-favicon');
const parser = require('body-parser');
const app = express();
const path = require('path');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Ant',
    password: 'a-2006-C!',
    database: 'Antrant'
});

connection.connect((error) => {
    if(error) {throw error;}
    console.log("Database connected!");
});

app.use(morgan("common"));
app.use(helmet());

app.use(express.static(path.join(__dirname, 'public')));
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());
app.use('/Images', express.static('images'));
app.use(favicon(path.join('D:/Programs/AntRant/Images/favicon.ico')));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {res.render("D:/Programs/AntRant/views/index.ejs");});
app.get('/about', (req, res) => {res.render("D:/Programs/AntRant/views/About.ejs");});
app.get('/login', (req, res) => {res.render("D:/Programs/AntRant/views/Log-in.ejs");});
app.get('/register', (req, res) => {res.render("D:/Programs/AntRant/views/Register.ejs");});
app.get('/11-22', (req, res) => {res.render("D:/Programs/AntRant/views/11.22Post.ejs");});
app.get('/11-29', (req, res) => {res.render("D:/Programs/AntRant/views/11.29Post.ejs");});

app.post('/signup', (req, res) => {
    const details = req.body;

    const signedup = "INSERT INTO Accounts SET ?";
    connection.query(signedup, details, (error, data) => {
        if(error) {
            if(error.code == 'ER_DUP_ENTRY') {
                res.status(400).send("Email already in use.");
                
            }
        }
        console.log("Signed up!");
    });
    res.redirect('/login');
});
app.listen(3000, () => {console.log("Port 3000 is running...")});