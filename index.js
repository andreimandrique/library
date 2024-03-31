const dialog = document.querySelector("dialog");
const showButton = document.getElementById("showButton");

const closeButton = document.getElementById("closeButton");
const addButton = document.getElementById("addButton");

const bookName = document.getElementById("bookName");
const bookAuthor = document.getElementById("bookAuthor");
const bookPage = document.getElementById("bookPage");
const checkBoxRead = document.getElementById("checkBoxRead");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

let checkBoxBook = false;
checkBoxRead.addEventListener("click", ()=>{
  if(checkBoxBook == false ){
    checkBoxBook = true;
  }else{
    checkBoxBook = false;
  }
})

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(bookName.value);
  console.log(bookAuthor.value);
  console.log(bookPage.value);
  console.log(checkBoxBook);
});