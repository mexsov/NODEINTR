import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import userModel from "../controller/model/userModel.mjs";

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}

const createJwtStartegy = async () => {

    const jwtStartegy = new JwtStrategy(opts, async (jwt_payload, done) => {
        try {
            const user = await userModel.getUserById(jwt_payload.id);
            if (user) {
                return (null, user);
            }

            return done(null, user)
        } catch (error) {
            return done(null, false);
        }
    })

    return jwtStartegy;
}

export default createJwtStartegy;