import { checkSchema, param } from "express-validator";
import {userModel} from "../controller/model/userModel.mjs"


export const userValidationSchema = checkSchema({
    username:{
        isLength:{
            options:{min: 6, max:32},
            errorMessage: "Username must be at least 6 characters and max characters is 32 letters"
        },
        notEmpty:{
            errorMessage: "Username cannot be empty"
        },
        isString:{
            errorMessage:"Username must be a string"
        }
    },
    password:{
        isLength:{
            options:{min: 8, max:128 },
            errorMessage:"password must be between 8 and 128 symbols"
        },
        matches: {
            options: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&~#^_+=\-';,./|":<>])[A-Za-z\d@$!%*?&~#^_+=\-';,./|":<>]{8,128}$/,
            errorMessage: "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:"
        },
        notEmpty:{
            errorMessage:"password cannot be empty"
        },

    },
    email:{
        isEmail:{
            errorMessage:"email must be valid"
        },
        notEmpty:{
            errorMessage:"email cannot be empty"
        },
        customs:{
            options: async (value)=>{
                const existingUser = await userModel.getUserByEmail({email: value})
                if(existingUser){
                    throw new Error( " Email already exists");
                    
                }
            }
        }
    }
});

export const updateUserValidationSchema = checkSchema({
    username:{
        isLength:{
            options:{min: 6, max:32},
            errorMessage: "Username must be at least 6 characters and max characters is 32 letters"
        },
        notEmpty:{
            errorMessage: "Username cannot be empty"
        },
        isString:{
            errorMessage:"Username must be a string"
        }
    },
    password:{
        isLength:{
            options:{min: 8, max:128 },
            errorMessage:"password must be between 8 and 128 symbols"
        },
        matches: {
            options: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&~#^_+=\-';,./|":<>])[A-Za-z\d@$!%*?&~#^_+=\-';,./|":<>]{8,128}$/,
            errorMessage: "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:"
        },
        notEmpty:{
            errorMessage:"password cannot be empty"
        },

    },
    email:{
        isEmail:{
            errorMessage:"email must be valid"
        },
        notEmpty:{
            errorMessage:"email cannot be empty"
        },
    }
});

export const validateUserId = [
    param("id")
    .isInt()
    .withMessage("ID must be an integer")
];


export const validateReservationParams = [
    param("userId")
    .isInt()
    .withMessage("user ID must be an integer"),
    param("bookId")
    .isInt()
    .withMessage("user ID must be an integer")
];