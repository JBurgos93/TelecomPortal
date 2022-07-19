//const User = require('../../src/app/models/user.model'); // No database access yet

const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
    (username, password, done) => {
        console.log(`Username = ${username}, Password = ${password}`);
        if(username === "admin" && password === "admin"){
            return done(null, username);
        } else {
            return done("unauthorized access", false);
        }
    }
);

module.exports = strategy;