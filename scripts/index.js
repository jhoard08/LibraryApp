let libraryBooks = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary (name, author, pages, read) {
    let book = new Book(name, author, pages, read);
    return libraryBooks.push(book);
}

function displayLibrary() {
    const html = libraryBooks.map(book => console.log(book));
    document.getElementById('books').innerHTML = html;
}

addBookToLibrary("The Hobbit", "J.R.R Tolkien", "296", "Not read");
addBookToLibrary("The Hobbit", "J.R.R Tolkien", "296", "Not read");

displayLibrary();
