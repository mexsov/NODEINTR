// import express from "express";
// // import session from "./middleware/session.mjs";

// import { connectDB } from "./db/postgresConnection.mjs";

// // import usersRouter from "./routes/index.mjs"
// import cookies from "./middleware/cookies.mjs"
// //serverio sukurimas/registravimas

// const app = express();
// app.use(session)


// const logger = function (req, res, next){
//     console.log('next');
//     const requestTime = Date.now()
// next()
// }


// app.get('/next', (req, res)=>{
//     res.send("hello world")
// })


// app.use("/api/v1/library",logger, usersRouter);

// req=request; res=response
// app.get('/', (req, res) =>{
//     res.send('hello auksini kary');
// })

// app.METHOD
//GET, POST, DELETE, PATCH

// //Serverio indentifikavimas


// const startServer = async()=>{
//   try {
//    const message = await connectDB()
// console.log(message);

// const PORT = 8888;


// app.use("/api/v1/library", usersRouter);

// app.use(cookies)
// app.use(express.json());
// //aplikacijos paleidimas
// app.listen(PORT, () => {
//   console.log("server is listening on port 8888");
// });


//   } catch (error) {
    
//   }
// }

// startServer()


import express from 'express';

import usersRouter from "./routes/index.mjs"
import authorsRouter from "./routes/author.mjs"
import cookies from './middleware/cookies.mjs'
import booksRouter from "./routes/index.mjs"
import { connectDB } from './db/postgresConnection.mjs';

// Server registravimas
const app = express();

const startServer = async () => {
    try {
        const message = await connectDB()
        console.log(message);

        

        const PORT = 3000

        app.use(cookies)
        app.use(express.json());

        app.use('/api/v1/library', usersRouter, authorsRouter, booksRouter)

        app.listen(PORT, () => {
            console.log('Server is listening on port 3000')
        });

    } catch (error) {
        console.error('Failed to connect to the server or database', error);
    }
}

startServer()