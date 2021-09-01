import express from 'express'

import JWT from 'jsonwebtoken'
import passport from 'passport'

import { Strategy, ExtractJwt } from 'passport-jwt'

const app = express();


const JWT_SECRET = '2390239847223483439428734'

const user = {
    id: 1,
    name: 'person1'
}

const testToken = JWT.sign(user, JWT_SECRET)


//Mock getting a token from a req
const mockExtractor = (req) => testToken

const jwtStrategyOptions = {
    jwtFromRequest: mockExtractor,
    secretOrKey: JWT_SECRET
}


const jwtStrategy = new Strategy(
    jwtStrategyOptions, (jwt_payload, done) => {
        //console.log(jwt_payload)
        done(null, jwt_payload);
    }
)


passport.use(jwtStrategy)
app.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    console.log('Route hit!')
})


const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}.`))
