const passport = require('passport');
const LocalStrategy = require('passport-local');

const userModel = require('./../models/userModel')

passport.use(new LocalStrategy({
    usernameField: 'user[ussername]',
    passwordField: 'user[password]',
}, (email, password, done) => {
    userModel.findUser({ username })
        .then((user) => {
            if (!user || !user.validatePassword(password)) {
                return done(null, false, { errors: { 'email or password': 'is invalid' } });
            }
            return done(null, user);
        }).catch(done);
}));