import userModel from "./model/userModel.mjs";



const userController = {
  getUsers: async (req, res) => {
    try {
      const users = await userModel.getUsers(req.query.paginate, req.query.page, req.query.limit);
res.status(200).json(users);
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error occured while retrieving users" });
    }
  },
 
//   createUser: async (req, res) => {
//     try {
//       const newUser = {
//         ...req.body,
//         registered_on: new Date().toISOString().split("T")[0],
//         reservation: [],
//       };
//       users.push(newUser);
//       users.forEach((user, index) => {
//         user.id = index + 1;
//       });
 
//       await fs.promises.writeFile(
//         path.join(__dirname, "../db/users.json"),
//         JSON.stringify(users, null, 2)
//       );
//       res.status(201).json(newUser);
//     } catch (error) {
//       console.error(error);
//       res
//         .status(500)
//         .json({ message: "An error occured while retrieving users" });
//     }
//   },
 

//   login: async(req,res)=>{
//     try {
//       const { username, password, email } = req.body;
//       const user = users.find(user => user.username === username || user.email === email);
//       if(!user){
//         res.status(404).json({ message: "user not found"})
//         return;
//       }

// if (user.password !== password){
//   res.status(401).json({ message: "Invalid password"});
//   return;
// }

// req.session.userId = user.id;
// res.status(200).json({message: "user logged in successfully"})


//     } catch (error) {
//       res
//         .status(500)
//         .json({ message: "An error occured while logging in" });
//     }
//   },

// logout:(req,res)=>{
//   try {
//     if (!req.session.userId) {
//     res.status(400).json({message:"No active session"});
//     return;
//   }
//   req.session.desrtroy()
    
//   } catch (error) {
//     res.status(500).json({message:"An error occured while logging out"});
//       return;
//   }
// },

  


//   getUsetById: (req, res) => {
//     try {
//       const id = parseInt(req.params.id);
 
//       const user = user.find((user) => user.id === id);
 
//       if (!user) {
//         res.status(404).json({ message: "user not found." }); // by default kur id naudojam naudoti sita eilute
//       }
 
//       res.status(200).json(user);
//     } catch (error) {
//       res
//         .status(500)
//         .json({ message: "An error occured while retrieving users by id" });
//     }
//   },
 
//   updateUser: async (req, res) => {
//     try {
//       const id = parseInt(req.params.id);
//       const updateUser = { ...req.body, id };
 
//       let userIndex = users.findIndex((user) => user.id === id);
//       if (userIndex === -1) {
//         res.status(404).json({ message: "user not found." });
//         return;
//       }
 
//       // mum reik issaugoti sukurimo datos ir vartotojo rezervacijos
 
//       updateUser.registered_on = users[userIndex].registered_on;
//       updateUser.reservation = users[userIndex].reservation;
 
//       users[userIndex] = updateUser;
 
//       res.status(200).json(updateUser);
//       await fs.promises.writeFile(
//         path.join(__dirname, "../db/users.json"),
//         JSON.stringify(users, null, 2)
//       );
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "ann error has occured " });
//     }
//   },
 
//   updateUserFields: async (req, res) => {
//     try {
//       const id = parseInt(req.params.id);
//       const updatedFields = req.body;
//       const updateUser = { ...req.body, id };
 
//       let userIndex = users.findIndex((user) => user.id === id);
//       if (userIndex === -1) {
//         res.status(404).json({ message: "user not found." });
//         return;
//       }
 
//       users[userIndex] = { ...users[userIndex], ...updatedFields };
 
//       await fs.promises.writeFile(
//         path.join(__dirname, "users.json"),
//         JSON.stringify(users, null, 2)
//       );
//       res.status(200).json(updateUser);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "ann error has occured " });
//     }
//   },
 
//   deleteUser: async (req, res) => {
//     try {
//       const id = parseInt(req.params.id);
//       let userIndex = users.findIndex((user) => user.id === id);
//       if (userIndex === -1) {
//         res.status(404).json({ message: "user not found." });
//         return;
//       }
 
//       users.splice(userIndex, 1);
//       await fs.promises.writeFile(
//         path.join(__dirname, "../db/users.json"),
//         JSON.stringify(users, null, 2)
//       );
 
//       res.status(204).json({ message: "user successfully deleted" });
//     } catch (error) {
//       res.status(500).json({ message: "An error occured deleting" });
//     }
//   },
 
//   getUserReservations: (req, res) => {
//     try {
//       const id = parseInt(req.params.id);
//       const user = users.find((user) => user.id === id);
 
//       if (!user) {
//         res.status(404).json({ message: "User not found" });
//         return;
//       }
 
//       const reservedBooks = books.filter((book) =>
//         user.reservation.includes(book.id)
//       );
 
//       const reservedBooksInfo = reservedBooks.map((book) => ({
//         id: book.id,
//         title: book.title,
//         author: book.Author,
//         published_on: book.published_on,
//       }));
//       res.status(200).json(reservedBooksInfo);
//     } catch (error) {
//       res
//         .status(500)
//         .json({
//           message:
//             "an error has occured while retrieving the user reservations",
//         });
//     }
//   },
 
//   createReservation: async (req, res) => {
//     try {

// if (!req.session.userId){
//   res.status(401).json({message: "Please log in"})
// }

//       const userId = parseInt(req.params.userId);
//       const bookId = parseInt(req.params.bookId);
 
//       const user = users.find((user) => user.id === userId);
//       const book = books.find((book) => book.id === bookId);
 
//       if (!user || !book) {
//         res.status(404).json({ message: "user or book not found" });
//         return;
//       }
 
//       if (user.reservation.includes(bookId)) {
//         res
//           .status(400)
//           .json({ message: "Book is already reserved by a user." });
//         return;
//       }
 
//       if (book.quantity === 0 || !book.available) {
//         res.status(400).json({ message: "Book is not available" });
//         return;
//       }
 
//       user.reservation.push(bookId);
 
//       // mano knygu kiekis turetu sumazeti, kai vartotojas ikelia pas save i rezervacija
 
//       book.quantity--;
 
//       if (book.quantity === 0) {
//         book.available = false;
//       }
 
//       await fs.promises.writeFile(
//         path.join(__dirname, "../db/users.json"),
//         JSON.stringify(users, null, 2)
//       );
//       await fs.promises.writeFile(
//         path.join(__dirname, "../db/books.json"),
//         JSON.stringify(books, null, 2)
//       );
 
//       res.status(200).json({ message: "Book successfully reserved" }); // status req 400 nes kliento puse arba 404
//     } catch (error) {
//       res
//         .status(500)
//         .json({ message: "an error occured while  creating a reservation" }); // serverio 500 status req
//     }
//   },
 
//   deleteReservation: async (req, res) => {
//     try {
//         const userId = parseInt(req.params.userId);
//     const bookId = parseInt(req.params.bookId);
 
//     const user = users.find((user) => user.id === userId);
//     const book = books.find((book) => book.id === bookId);
 
//     if (!user || !book) {
//       res.status(404).json({ message: "user or book not found" });
//       return;
//     }
 
//     const reservationIndex = user.reservation.indexOf(bookId)
//     if (reservationIndex === -1) {
//         res.status(400).json({message: "book is not reserved by the user"})
//         return;
//     }
//     user.reservation.splice(reservationIndex, 1)
 
//     book.quantity++
 
//     book.available = true
 
//     await fs.promises.writeFile(
//         path.join(__dirname, "../db/users.json"),
//         JSON.stringify(users, null, 2)
//       );
//       await fs.promises.writeFile(
//         path.join(__dirname, "../db/books.json"),
//         JSON.stringify(books, null, 2)
//       );
 
//     res.status(200).json({message: "book successfully unreserved"})
 
 
//     } catch (error) {
//         res.status(500).json({messge: ""})
//     }
//   },
};
export default userController;