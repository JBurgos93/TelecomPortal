const passport = require('passport');
const LocalStrategy = require('./localStrategy');
//const User = require('../../src/app/models/user.model'); // No database access yet

passport.serializeUser((user, done) => {
    done(null, { ...user});
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(LocalStrategy);

module.export = passport;