import bookModel from "./model/bookModel.mjs";


const booksController = {
    getBooks: async (req, res)=> {
        try {
            const books = await bookModel.getBooks();
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({message: 'Error appeard'})
        }
    },

searchBooksByTitle: async (req, res) =>{
    try {
        const bookTitle = req.query.bookTitle
        if (!bookTitle){
            res.status(400).json({message: "Title is required"});
            return;
        }
const books = await bookModel.searchBooksByTitle(bookTitle);

        if(books.length === 0){
            res.status(404)({message: "No books found"})
            return;
        }
        res.status(200).json(books);

    } catch (error) {
        console.error(error)
        
    }
},

    createBook: async(req, res) => {
        try {
            const book = await bookModel.createBook(req.body)
            res.status(201).json(books);
        } catch (error) {
            if (error.message === "Author not found"){
                res.status(404).json({message:"Author not found"});
                return;
            }
        }
        res.status(500).json({message: 'Error appeard while creating a book'})

    }
}
export default booksController;