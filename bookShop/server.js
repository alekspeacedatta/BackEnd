const express = require("express");
const fs = require("fs");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

// Function to read books from JSON file
const getBooks = () => {
    const data = fs.readFileSync("books.json"); // Read JSON file
    return JSON.parse(data); // Convert to JS object
};

app.get('/', (req, res) => {
    res.render('index');
})
// Route to display all books
app.get("/books", (req, res) => {
    const books = getBooks();
    res.render("books", { books });
});

// Route to display a specific book
app.get("/books/:bookname/:bookid", (req, res) => {
    const books = getBooks();
    const book = books.find(b => b.id == req.params.bookid);

    if (!book) return res.status(404).send("Book not found");

    res.render("book", { book });
});

app.listen(3000, () => {
    console.log("Website is running on http://localhost:3000");
});
