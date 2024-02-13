const myLibrary = [];

function showBooks(book) {
  if (myLibrary.length > 0) {
    console.log(book.title);
    console.log(book.author);
  }

  return `<p>${book.title}</p>`;
}

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

function addBookToLibrary(title, author, pages, read) {
  // do stuff here
  const newBook = new Book("Hobbits", "JJ Rowling", 580, "Read");

  myLibrary.push(newBook);

  bookShowCase.innerHTML = myLibrary.forEach((e) => showBooks(e));
}

const btnAddBook = document.querySelector(".button__add");
const bookShowCase = document.querySelector(".book__showcase");

btnAddBook.addEventListener("click", addBookToLibrary);
