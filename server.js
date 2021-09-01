import './dotenvConfig.js'
import express from 'express'

import passport from 'passport'
import jwtStrategyInitializer from './passport/jwtStrategyInitializer.js'

import loginUser from './auth/loginUser.js'

const app = express();
app.use(passport.initialize())
jwtStrategyInitializer(passport);

app.post('/login', loginUser, (req, res, next) => {
    console.log(`Controller Has: ${res.token}`)
    res.json({
        name: 'Billy',
        token: res.token
    })
})


app.get('/', (req, res) => {
    res.send(<h1>Simple Express API - Passport App</h1>)
})

app.get('/protected/data', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.status(200).json({
        message: 'YOu GOT THE DATA!'
    })
})


const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}.`))
