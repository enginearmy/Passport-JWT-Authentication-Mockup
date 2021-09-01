import { Strategy,  ExtractJwt } from 'passport-jwt'

const JWT_SECRET = process.env.JWT_SECRET

//Define how the token will be extracted from the req by the jwt strategy
const jwtExtractor = ExtractJwt.fromAuthHeaderAsBearerToken();


//Define options for the strategy
const jwtStrategyOptions = {
    jwtFromRequest: jwtExtractor,
    secretOrKey: JWT_SECRET
}


//Define functionality of jwt-strategy and how the token will be used to authenticate
const jwtStrategy = 
    new Strategy(jwtStrategyOptions, (jwt_payload, done) => {

        if(jwt_payload){
            console.log(`SUCCESS ===> Payload: ${jwt_payload.name}`)
            done(null, jwt_payload)
        }else{
            throw new Error("JWT-Strategy did not find a jwt_payload!")
        }
    })

//Add the strategy to passport
const jwtStrategyInitializer = (passport) =>
    passport.use(jwtStrategy);


export default jwtStrategyInitializer;