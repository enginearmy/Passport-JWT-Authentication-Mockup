import JWT from 'jsonwebtoken'
import passport from 'passport'

import JwtStrategy, { ExtractJwt } from 'passport-jwt'


const JWT_SECRET = '2390239847223483439428734'

const user = {
    id: 1,
    name: 'person1'
}

const testToken = JWT.sign(user, JWT_SECRET)


//Mock getting a token from a req
const mockExtractor = (req) => {
    return testToken
}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';


const jwtStrategyOptions = {
    jwtFromRequest = mockExtractor,
    secretOrKey = JWT_SECRET
}


const jwtStrategy = new JwtStrategy(

    jwtStrategyOptions, (jwt_payload, done) => {
        if(err){
            return done(err, false)
        }
        if(user){

        }
    }
)


passport.use(new JwtStrategy)