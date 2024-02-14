let myLibrary = [];
let htmlString = "";
let count = 0;

function Book(title, author, pages, read, id) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

function showBooks() {
  htmlString = "";
  myLibrary.forEach(
    (e) =>
      (htmlString += `<div class="book__card">
                <h2 class="card__item">Title: ${e.title}</h2>
                <p class="card__item">Author: ${e.author}</p>
                <p class="card__item">Pages: ${e.pages}</p>
                <p class="card__item">Read: ${e.read}</p>
                <p class="card__item">ID: ${e.id}</p>
                <button onclick="removeBooks(${e.id})">Remove</button>
              </div>`)
  );
  
  bookShowCase.innerHTML = htmlString;
}

function removeBooks(bookId) {
  console.log(`Removed book: ${bookId}`)
  myLibrary = myLibrary.filter(book => book.id !== bookId)
  console.log(myLibrary);
  showBooks();
}

function addBookToLibrary(title, author, pages, read, id) {
  // do stuff here
  const newBook = new Book(title, author, pages, read, id);
  myLibrary.push(newBook);
  showBooks();
  // myLibrary.map((e) => showBooks(e)).join("");
}

function getBooksFromUser(e) {
  e.preventDefault();
  title = e.target[1].value;
  author = e.target[2].value;
  pages = e.target[3].value;
  read = e.target[4].value;
  id = count++
  addBookToLibrary(title, author, pages, read, id);
}

const btnAddBook = document.querySelector(".form");
const bookShowCase = document.querySelector(".book__showcase");

btnAddBook.addEventListener("submit", (e) => getBooksFromUser(e));
