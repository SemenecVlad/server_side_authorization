const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const reqireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false});
module.exports = function(app) {
    app.get('/', reqireAuth, function(req, res) {
        res.send({ hi: 'there' });
    });

    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);
}