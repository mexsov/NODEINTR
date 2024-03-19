

import express from "express";
import { validate} from "../middleware/schemaValidator.mjs"
import userController from "../controller/userController.mjs";
import { userValidationSchema, updateUserValidationSchema, validateUserId, validateReservationParams, loginValidationSchema } from "../validators/userValidator.mjs"
import { validationResult } from "express-validator";
import  passport  from "../strategies/auth.mjs";
import { isUser } from "../middleware/roleCheck.mjs";
import jwt from "jsonwebtoken";






const router = express.Router();
 
router.get("/", userController.getUsers);
 
router.post("/register",userValidationSchema,(req, res, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }
    next()
} , 
userController.createUser);
 
router.post('/login',validate(loginValidationSchema), passport.authenticate('local', {session: false}), (req, res) => {
    const token = jwt.sign({ id: req.user.id, role: req.user.role }, 'secret', { expiresIn: '1h' });
    res.status(200).json({ message: 'Logged', token })
} , userController.login)

// router.post("/logout", userController.logout);

// router.get("/:id",validate(validateUserId), userController.getUsetById);
 
// router.put("/:id",validate(validateUserId),validate(updateUserValidationSchema), userController.updateUser);
 
// router.patch("/:id",validate(validateUserId), validate(updateUserValidationSchema) , userController.updateUserFields);
 
// router.delete("/:id",validate(validateUserId), userController.deleteUser);
 
// router.get("/:id/reservations",validate(validateReservationParams), userController.getUserReservations);
 
router.post("/:userId/reservations/:bookId",validate(validateReservationParams),passport.authenticate('jwt', { session: false }),isUser, userController.createReservation);
 
// router.delete("/:userId/reservations/:bookId", userController.deleteReservation)
 
export default router;

