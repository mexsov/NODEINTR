import { Strategy as JWTStrategy, ExtractJWT } from "passport-jwt";
import userModel from "../controller/model/userModel.mjs";

const opts = {
    jwtFromRequest: ExtractJWT.fromAutheaderASBearerToken(),
    secretOrKey: "secret"

}

const createJwtStrategy = async () => {
    const JWTStrategy = new JwtStrategy(opts, async(jwt_payload, done ) =>{
    try {
        const user = await userModel.getUserById(jwt_payload.id);
if (user){
    return(null, user);
}


return done(null,user)
}
    } catch (error) {
        return done(null,false)
    })
}
