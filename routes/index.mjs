import  express  from "express";

import usersRouter from "./users.mjs";

import booksRouter from "../routes/books.mjs"
import authorsRouter from "./author.mjs"
const router = express.Router();

router.use('/users', usersRouter);
router.use("/authors", authorsRouter);
router.use("/books", booksRouter);
export default router;