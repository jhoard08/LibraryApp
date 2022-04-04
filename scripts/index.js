const create = document.querySelector('.btn');
const display = document.querySelector('.display');

let libraryBooks = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(name, author, pages, read) {
    let book = new Book(name, author, pages, read);
    return libraryBooks.push(book);
}

function displayLibrary(book) {
    document.getElementById('bookList').innerHTML = book.map(book =>
        `<div>
            <p>Book: ${book.name} Author: ${book.author} Pages: ${book.pages} Read: ${book.read}</p>
        </div>`).join('');
}

create.addEventListener('click', () => {
    let book = document.querySelector('#createBook').value;
    let author = document.querySelector('#createAuthor').value;
    let pages = document.querySelector('#createPages').value;
    let read = document.querySelectorAll('input[name="yes/no"]');

    let yesOrNo;

    for (const answer of read) {
        if (answer.checked) {
            yesOrNo = answer.value;
            break
        }
    }

    if (book !== "" && author !== "" && pages !== "") {
        addBookToLibrary(book, author, pages, yesOrNo);
        document.forms['form-container'].reset();
        return displayLibrary(libraryBooks);
        //console.log(libraryBooks);
    }
    return alert('Please fill out all the information!')
});
