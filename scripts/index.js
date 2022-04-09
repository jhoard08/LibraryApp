const create = document.querySelector('.btn');
const display = document.querySelector('.display');

let libraryBooks = [];

class Book {
    constructor(){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    addBookToLibrary(name, author, pages, read) {
        let book = new Book(name, author, pages, read);
        return libraryBooks.push(book);
    }

    deleteBook(target) {
        if (target.classList.contains('delete')) {
            target.parentElement.parentElement.remove();
        }
    }

    displayLibrary(book) {
        document.getElementById('bookList').innerHTML = book.map(book =>
            `<tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td>${book.read}</td>
                <td><button type="button" class="btn btn-danger delete">X</button></td>
            </tr>
            `).join('');
    }
   
}

// Event: Remove book
document.querySelector('#bookList').addEventListener('click', (e) => {
    deleteBook(e.target);
})

create.addEventListener('click', () => {
    let book = document.querySelector('#createBook').value;
    let author = document.querySelector('#createAuthor').value;
    let pages = document.querySelector('#createPages').value;
    let read = document.querySelectorAll('input[name="yes/no"]');

    let yesOrNo;

    // checks the radio buttons value so it doesn't return the first ID it finds
    for (const answer of read) {
        if (answer.checked) {
            yesOrNo = answer.value;
            break
        }
    }
    // checks to see if any of the data is an empty string 
    if (book !== "" && author !== "" && pages !== "") {
        let newBook = new Book();
        newBook.addBookToLibrary(book, author, pages, yesOrNo);

        //resets form to clear 
        document.forms['form-container'].reset();
        return newBook.displayLibrary(libraryBooks);
        //console.log(libraryBooks);
    }
    return alert('Please fill out all the information!')
});
