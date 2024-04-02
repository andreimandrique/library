const dialog = document.querySelector("dialog");
const showButton = document.getElementById("showButton");

const closeButton = document.getElementById("closeButton");
const addButton = document.getElementById("addButton");

const bookName = document.getElementById("bookName");
const bookAuthor = document.getElementById("bookAuthor");
const bookPage = document.getElementById("bookPage");
const checkBoxRead = document.getElementById("checkBoxRead");

let bookRead = false;
checkBoxRead.addEventListener("click", () => {
  if (bookRead == false) {
    bookRead = true;
  } else {
    bookRead = false;
  }
});

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

const myLibrary = [];

function Book(bookName, bookAuthor, bookPage, bookRead) {
  this.bookName = bookName;
  this.bookAuthor = bookAuthor;
  this.bookPage = bookPage;
  this.bookRead = bookRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  let bookNumber;
  if(bookName.value == "" || bookAuthor.value == "" || bookPage.value == ""){
    console.log("Empty book name or book author or book pages");
  }
  else{
    const myBook = new Book(
      bookName.value,
      bookAuthor.value,
      bookPage.value,
      bookRead
    );
    addBookToLibrary(myBook);
  }
});

const bookContainer = document.getElementById("book-container");

const book1 = new Book("The Alchemist", "Paulo Coelho", "154", true);
const book2 = new Book("One Piece", "Oda", 1564, false);
const book3 = new Book("Bible", "unknown", 4003, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

// myLibrary.splice(3, 1);
// console.log(myLibrary);

myLibrary.forEach(Book => {

  const bookCard = document.createElement("div");
  const bookNameElement = document.createElement("h3");

  bookCard.classList.add("book-design");

  bookNameElement.innerText = Book.bookName;
  console.log(Book);

  

  bookContainer.appendChild(bookCard);
  bookCard.appendChild(bookNameElement);
});