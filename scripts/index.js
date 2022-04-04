const create = document.querySelector('.btn');
const display = document.querySelector('.display');

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
    document.getElementById('bookList').innerHTML = libraryBooks.map(book => 
        `<div>
            <p>Book: ${book.name} Author: ${book.author} Pages: ${book.pages} Read: ${book.read}</p>
            </div>`).join('');
}

create.addEventListener('click', () => {
    let book = document.querySelector('#createBook').value;
    let author = document.querySelector('#createAuthor').value;
    let pages = document.querySelector('#createPages').value;
    let read = document.querySelector('#didRead').value;
    addBookToLibrary(book, author, pages, read);
    console.log(libraryBooks);
});

display.addEventListener('click', () => {
    displayLibrary();
})