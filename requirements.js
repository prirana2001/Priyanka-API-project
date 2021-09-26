//requirement for our project
//we are a book management company

const { isBigInt64Array } = require("util/types");

//BOOKS
//ISBN, title, pub Date, language, num page, author[], category[]

//AUTHORS
//id, name,books[]

//PUBLICATIONS
//id, name, books[]

//we have to design and code an API over this

//1.BOOKS
//we nwwd an API :-
//To get all the books
//To get specific book
//To get a list of books based on category
//To get a list of books based on languages

//2. AUTHORS
//we need an API
//To get all the authors
//To get a list of authors based on books

//3.PUBLICATIONS
//We need an API :-
//To get all the publications
//To get a specific publication
//To get a list of publications based on a book

//POST REQUEST
//1. ADD NEW BOOK
//2. ADD NEW PUBLICATION
//3. ADD NEW AUTHOR

//put
//update book details if author is changed

//delete
//delete a book
//delete author from book
//delete author from book and related book from author
