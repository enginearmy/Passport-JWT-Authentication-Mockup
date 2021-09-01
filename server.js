import JWT from 'jsonwebtoken'
import passport from 'passport'

import JwtStrategy, { ExtractJwt } from 'passport-jwt'


const JWT_SECRET = '2390239847223483439428734'

const user = {
    id: 1,
    name: 'person1'
}

const testToken = JWT.sign(user, JWT_SECRET)

console.log(testToken)
