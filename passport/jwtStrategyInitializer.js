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
    new Strategy(jwtStrategyOptions, (decoded_jwt_payload, done) => {

        //Usually we would use the decoded_jwt_payload here to look up a user or something more significant
        //In this case we just pass it along to the next middleware
        if(decoded_jwt_payload){
            console.log(`SUCCESS ===> Payload: ${decoded_jwt_payload.name}`)
            done(null, decoded_jwt_payload)
        }
    })

//Add the strategy to passport
const jwtStrategyInitializer = (passport) =>
    passport.use(jwtStrategy);


export default jwtStrategyInitializer;