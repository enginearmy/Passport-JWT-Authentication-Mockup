import JWT from 'jsonwebtoken'
import { Strategy } from 'passport-jwt'

const JWT_SECRET = process.env.JWT_SECRET