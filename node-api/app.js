const express = require('express');
const passport = require('passport');

const logger = require('./logger');
const cors = require('cors');
const session = require ('express-session');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use( // We'll put our MySQL connection in here at some point
    session({
      secret: 'RANDOM STRING',
      resave: false,
      saveUninitialized: false,
    })
  );

app.use(passport.initialize());
app.use(passport.session());


app.use(routes);

app.listen(3000, () => {
    console.log('App running at 3000')
})