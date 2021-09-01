import './dotenvConfig.js'
import express from 'express'

import passport from 'passport'
import jwtStrategyInitializer from './passport/jwtStrategyInitializer.js'

import loginUser from './auth/loginUser.js'
import path from 'path'


const app = express();
app.use(passport.initialize())
app.use(express.static('public'))
jwtStrategyInitializer(passport);

app.post('/login', loginUser, (req, res, next) => {
    console.log(`Controller Has: ${res.token}`)
    res.json({
        name: 'Billy',
        token: res.token
    })
})


const moduleURL = new URL(import.meta.url)
const dirname = path.dirname(moduleURL.pathname)
app.get('/', (req, res) => {
    res.sendFile(path.join(dirname, '/index.html'))
})

app.get('/protected/data', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.status(200).json({
        message: 'YOu GOT THE DATA!'
    })
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}.`))
