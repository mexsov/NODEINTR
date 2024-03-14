

import express from "express";
// import { validate} from "../middleware/schemaValidator.mjs"
import userController from "../controller/userController.mjs";
// import { userValidationSchema, updateUserValidationSchema, validateUserId, validateReservationParams } from "../validators/userValidator.mjs"





const router = express.Router();
 
router.get("/", userController.getUsers);
 
// router.post("/register",validate(userValidationSchema), userController.createUser);
 
// router.post("/login", userController.login);

// router.post("/logout", userController.logout);

// router.get("/:id",validate(validateUserId), userController.getUsetById);
 
// router.put("/:id",validate(validateUserId),validate(updateUserValidationSchema), userController.updateUser);
 
// router.patch("/:id",validate(validateUserId), validate(updateUserValidationSchema) , userController.updateUserFields);
 
// router.delete("/:id",validate(validateUserId), userController.deleteUser);
 
// router.get("/:id/reservations",validate(validateReservationParams), userController.getUserReservations);
 
// router.post("/:userId/reservations/:bookId", userController.createReservation);
 
// router.delete("/:userId/reservations/:bookId", userController.deleteReservation)
 
export default router;

