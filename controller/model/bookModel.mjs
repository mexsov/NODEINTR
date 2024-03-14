import { pool } from "../../db/postgresConnection.mjs";

const bookModel = {

getBooks: async () =>{
    try {
        const result = await pool.query(`
        SELECT books.*, authros.name AS authors_name
        FROM books
        INNER JOIN authors ON books.author_id = authors.id
        `)

        return result.rows;
    } catch (error) {
        throw error;
    }
}

}

export default bookModel