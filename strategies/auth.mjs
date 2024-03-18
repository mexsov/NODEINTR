import passport from "passport";
import localStrategy from "./localStrategy.mjs";

const initializePassport = async ()=>{
    passport.use(localStrategy)
}

initializePassport()
return passport;

export default passport;