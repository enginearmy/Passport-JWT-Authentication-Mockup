import './dotenvConfig.js'
import express from 'express'

import passport from 'passport'
import jwtStrategyInitializer from './passport/jwtStrategyInitializer.js'

const app = express();
app.use(passport.initialize())
jwtStrategyInitializer(passport);

app.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    console.log(req.user.name)
})


const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}.`))
