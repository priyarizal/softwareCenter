const path = require('path')
const express = require('express');
const routes = require('./controllers/api/index');
const sequelize = require('./config/connection');
const mysql = require('mysql2');
const exphbs = require('express-handlebars');
const bcrypt = require('bcrypt');
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store);

require('dotenv').config();

//initializing express and writing down the port number to listen to + 
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create();
// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use("/api",routes);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
