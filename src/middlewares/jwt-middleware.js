import JWT from 'passport-jwt'
import User from '../models/user.js';
import { JWT_SECRET } from "../config/server-config.js";

const jwtStrategy = JWT.Strategy;
const extractJwt = JWT.ExtractJwt;
const opts = {
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET,
};

async function passportAuth(passport) {
    passport.use(new jwtStrategy(opts, async (jwt_payload, next) => {
        const user = await User.findById(jwt_payload.id);
        if (!user) {
            next(null, false);
        } else {
            next(null, user);
        }
    }));
};

export default passportAuth;