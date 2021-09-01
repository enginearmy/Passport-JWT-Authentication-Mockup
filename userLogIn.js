import JWT from 'jsonwebtoken'


const user = {
    id: 1,
    name: 'person1'
}

const userLogin = () => {
    return JWT(user, process.env.JWT_SECRET)
}

export default userLogin;