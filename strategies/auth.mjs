import passport from "passport";
import localStrategy from "../strategies/localStrategy.mjs";
import createJwtStartegy from "./jwtStrategy.mjs";

const initializePassport = async () => {
    passport.use(localStrategy)
    const jwtStrategy = await createJwtStartegy();
    passport.use(jwtStrategy)
};

initializePassport();

export default passport;