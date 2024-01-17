const path = require('path');
const express = require('express');
const app= express();
const PORT = 4700;
//const hbs = require('hbs');
const bodyparser = require('body-parser');//use with axios 
//const mongoose = require('mongoose');

//const { mongoConnect } = require('./database/database.js');
//const session = require('express-session')
//const MongoDBsession = require('connect-mongodb-session')(session);


// app.set('views',path.join(__dirname, 'views'));
//app.set('view engine','hbs');


app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json()); 
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
})