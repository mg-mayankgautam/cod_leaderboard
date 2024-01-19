const path = require('path');
const express = require('express');
const app= express();
const PORT = 4700;
const hbs = require('hbs');
const bodyparser = require('body-parser');//use with axios 
const mongoose = require('mongoose');

const { mongoConnect } = require('./database/database.js');
//const session = require('express-session')
//const MongoDBsession = require('connect-mongodb-session')(session);


// app.set('views',path.join(__dirname, 'views'));
app.set('view engine','hbs');


app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json()); 
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));


const landingpageRouter = require('./routes/landingpage.js');


app.use('/', landingpageRouter);

const adminpageRouter = require('./routes/adminpage.js');

app.use('/admin', adminpageRouter);

// app.get('/rankings', (req, res ) =>{

//     console.log('inside get');
//     res.send('some ranking data')
// })



// app.listen(PORT, () => {
//     console.log(`http://localhost:` + PORT);
// })

mongoose.connect('mongodb+srv://mansha02:mnm1234@cluster0.5ta8qjf.mongodb.net/?retryWrites=true&w=majority',{
   // useNewUrlParser: true,
   // useUnifiedTopology: true,
   // useCreateIndex: true
})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        })
    })
    .catch(err => {console.error(err);});