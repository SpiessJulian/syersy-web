var JwtStrategy = require('passport-jwt').Strategy,
 ExtractJwt = require('passport-jwt').ExtractJwt;
const sqlUsers = require('../Controllers/sqlUsers.js');

// load up the user model
var settings = require('./settings'); // get settings file

module.exports = function(passport) {
  try{
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("JWT");
    opts.secretOrKey = settings.secret;
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
      sqlUsers.AUser(jwt_payload.iduser, function(err, user) {
            if (err) {
              return done(err, false);
            }
            if (user) {
              return done(null, user);
            } else {
              return done(null, false);
            }
        });
    }));
  }catch(e){
    console.error(e);
  }
};
