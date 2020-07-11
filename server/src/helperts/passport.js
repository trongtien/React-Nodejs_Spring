const passportJWT = require('passport-jwt');

let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'wowwow';


let strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
  console.log('payload received', jwt_payload);
  let user_id = jwt_payload.id
  let user = findUserId(user_id);

  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});

module.exports = {
  jwtOptions,
  strategy
}