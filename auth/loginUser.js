import JWT from 'jsonwebtoken'

const fakeUser = {
    name: 'Billy'
}

const loginUser = (req, res, next) => {
    const token = JWT.sign(fakeUser, process.env.JWT_SECRET)
    res.token = token

    console.log(`SUCCESS ===> Token created: ${token}`)
    next();  
}

export default loginUser