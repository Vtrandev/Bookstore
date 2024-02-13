const myLibrary = [];
let htmlString = "";

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

function showBooks(book) {
  htmlString = "";
  myLibrary.forEach(
    (e) =>
      (htmlString += `<div class="book__card">
                <h2>Title: ${e.title}</h2>
                <p>Author: ${e.author}</p>
                <p>Pages: ${e.pages}</p>
                <p>Read: ${e.read}</p>
              </div>`)
  );
  return htmlString;
}

function addBookToLibrary(title, author, pages, read) {
  // do stuff here
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  showBooks(myLibrary);
  bookShowCase.innerHTML = htmlString;
  // myLibrary.map((e) => showBooks(e)).join("");
}

function getBooksFromUser(e) {
  e.preventDefault();
  title = e.target[1].value;
  author = e.target[2].value;
  pages = e.target[3].value;
  read = e.target[4].value;
  addBookToLibrary(title, author, pages, read);
}

const btnAddBook = document.querySelector(".form");
const bookShowCase = document.querySelector(".book__showcase");

btnAddBook.addEventListener("submit", (e) => getBooksFromUser(e));
