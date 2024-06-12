// get all dialog id and show button
const dialog = document.querySelector("dialog");
const showButton = document.getElementById("showButton");

const closeButton = document.getElementById("closeButton");
const addButton = document.getElementById("addButton");

const bookName = document.getElementById("bookName");
const bookAuthor = document.getElementById("bookAuthor");
const bookPage = document.getElementById("bookPage");
const checkBoxRead = document.getElementById("checkBoxRead");

//get the book container
const bookContainer = document.getElementById("book-container");

//check box in dialog
let bookRead = false;
checkBoxRead.addEventListener("click", () => {
  if (bookRead == false) {
    bookRead = true;
  } else {
    bookRead = false;
  }
});

//show dialog
showButton.addEventListener("click", () => {
  dialog.showModal();
});

//close dialog
closeButton.addEventListener("click", (e) => {
  //prevent the buggy behaviour when sending a form
  e.preventDefault();
  dialog.close();
});

//object constructor in The Odin Project Object lesson
// function Book(bookName, bookAuthor, bookPage, bookRead) {
//   this.bookName = bookName;
//   this.bookAuthor = bookAuthor;
//   this.bookPage = bookPage;
//   this.bookRead = bookRead;
// }

//class book in The Odin Project Class Lesson
class Book {
  constructor(bookName, bookAuthor, bookPage, bookRead) {
    this.bookName = bookName;
    this.bookAuthor = bookAuthor;
    this.bookPage = bookPage;
    this.bookRead = bookRead;
  }
}

//make 3 object
const book1 = new Book(
  "Lord of the Mysteries",
  "Cuttlefish That Loves Diving",
  "1430",
  true
);
const book2 = new Book("The Rain in España", "Gwy Saludes", 40, false);
const book3 = new Book("The Alchemist", "Paulo Coelho", 208, true);

//make an empty array
const myLibrary = [];

//make a function that push the object to the myLibrary array
function addBookToLibrary(book) {
  myLibrary.push(book);
}

//push the 3 object to the myLibrary array
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

//add button in dialog
addButton.addEventListener("click", (e) => {
  //prevent the buggy behaviour when sending a form
  e.preventDefault();
  //check if the input is empty
  if (bookName.value == "" || bookAuthor.value == "" || bookPage.value == "") {
    console.log("Empty book name or book author or book pages");
  } else {
    //if input is not empty make the value of the input as a object
    const myBook = new Book(
      bookName.value,
      bookAuthor.value,
      bookPage.value,
      bookRead
    );
    //push the object to the myLibrary array
    addBookToLibrary(myBook);
    //console log the array
    console.log(myLibrary);
    //clear the book container to prevent the duplication of displayAllBook function
    bookContainer.innerHTML = "";
    //function that display all the book in book container
    displayAllBook();
  }
});

//use the function that display all book
displayAllBook();

//function that display all book
function displayAllBook() {
  //loop all item in myLibrary array
  for (let i = 0; i <= myLibrary.length - 1; i++) {
    //make all element in the book container
    const bookCard = document.createElement("div");
    const bookNameHeader = document.createElement("h3");
    const bookAuthorParagraph = document.createElement("p");
    const bookPageParagraph = document.createElement("p");
    const closeButtonCard = document.createElement("img");
    const readButton = document.createElement("button");

    //close button svg in book card
    closeButtonCard.src = "./svg/close.svg";

    //add design to all element in the book container
    bookCard.classList.add("book-design");
    bookNameHeader.classList.add("book-name");
    bookAuthorParagraph.classList.add("info-p");
    bookPageParagraph.classList.add("info-p");
    readButton.classList.add("read-button");
    closeButtonCard.classList.add("close-button-card");

    //display the text in the element
    bookNameHeader.innerText = myLibrary[i]["bookName"];
    bookAuthorParagraph.innerText = `Author: ${myLibrary[i]["bookAuthor"]}`;
    bookPageParagraph.innerText = `Pages: ${myLibrary[i]["bookPage"]}`;
    readButton.innerText = `Read: ${myLibrary[i]["bookRead"]}`;

    //append the element to book container
    bookContainer.appendChild(bookCard);
    bookCard.appendChild(bookNameHeader);
    bookCard.appendChild(bookAuthorParagraph);
    bookCard.appendChild(bookPageParagraph);
    bookCard.appendChild(closeButtonCard);
    bookCard.appendChild(readButton);

    //close button to the card
    closeButtonCard.addEventListener("click", () => {
      //remove from array
      myLibrary.splice(i, 1);
      //console log the myLibrary array
      console.log(myLibrary);
      //remove the element
      bookCard.remove();
    });

    //read button
    readButton.addEventListener("click", () => {
      //toggle the Read and change it
      if (myLibrary[i]["bookRead"] == true) {
        //change the object properties
        myLibrary[i]["bookRead"] = false;
        //change the text
        readButton.innerText = `Read: ${myLibrary[i]["bookRead"]}`;
      } else {
        //change the object properties
        myLibrary[i]["bookRead"] = true;
        //change the text
        readButton.innerText = `Read: ${myLibrary[i]["bookRead"]}`;
      }
    });
  }
}
