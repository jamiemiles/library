let myLibrary = [];
// Saves data to local storage.
function saveLocalStorage() {
  localStorage.setItem("books", JSON.stringify(myLibrary));
}
// Returns value of key in storage
function restoreLocalStorage() {
  const storageData = JSON.parse(localStorage.getItem("books"));

  if (storageData) {
    myLibrary = [];
  }
  for (let i = 0; i < storageData.length; i++) {
    displayBookValues(storageData[i]);
  }
}

// Object Constructor.
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

// Loads addBookToLibrary once 'add new book' button is clicked.
const addBookBtn = document.querySelector(".add-new-book-btn");
const modal = document.getElementById("addBookForm");
const main = document.querySelector("main");
addBookBtn.addEventListener("click", () => {
  modal.classList.add("form-active");
  modal.classList.remove("form-disabled");
});

const closeFormBtn = document.getElementById("close-btn");
closeFormBtn.addEventListener("click", () => {
  modal.classList.remove("form-active");
  modal.classList.add("form-disabled");
});

const getBookFromInput = () => {
  bTitle = document.getElementById("title").value;
  bAuthor = document.getElementById("author").value;
  bPages = document.getElementById("pages").value;
  bRead = document.getElementById("isRead").checked;
  return new Book(bTitle, bAuthor, bPages, bRead);
};

// Appends constructor instance to myLibrary array and calls display function.
function submitForm() {
  const submitBookBtn = document.getElementById("submit-btn");
  submitBookBtn.addEventListener("click", (e) => {
    modal.classList.remove("form-active");
    modal.classList.add("form-disabled");

    e.preventDefault(); // Stops page from refreshing.
    const newBook = getBookFromInput();

    myLibrary.push(newBook);
    saveLocalStorage();
    displayBookValues(newBook);
  });
}

// This function takes the array items of each book and displays it on the web page.
function displayBookValues(newBook) {
  const container = document.querySelector(".container");
  const card = document.createElement("div");
  const bookTitle = document.createElement("h2");
  const bookAuthor = document.createElement("h2");
  const numberOfPages = document.createElement("h2");
  const beenRead = document.createElement("h2");
  const removeBookBtn = document.createElement("button");
  const readBookBtn = document.createElement("button");

  removeBookBtn.textContent = "Remove Book";

  card.classList.add("card");
  bookTitle.setAttribute("id", "bookTitle");
  bookAuthor.setAttribute("id", "bookAuthor");
  numberOfPages.setAttribute("id", "numberOfPages");
  beenRead.setAttribute("id", "beenRead");
  removeBookBtn.setAttribute("id", "remove-book-btn");
  readBookBtn.setAttribute("id", "read-book-btn");
  card.setAttribute("data-attribute", `${myLibrary.length - 1}`);
  removeBookBtn.setAttribute("data-attribute", `${myLibrary.length - 1}`);

  bookTitle.textContent = newBook.title;
  bookAuthor.textContent = newBook.author;
  numberOfPages.textContent = `${newBook.pages} Pages`;
  beenRead.textContent = newBook.read;

  container.appendChild(card);
  card.appendChild(bookTitle);
  card.appendChild(bookAuthor);
  card.appendChild(numberOfPages);
  card.appendChild(beenRead);
  card.appendChild(removeBookBtn);
  card.appendChild(readBookBtn);

  removeBookBtn.addEventListener(
    "click",
    removeBook(removeBookBtn, card, newBook)
  );
  readBookBtn.addEventListener("click", readStatus(readBookBtn));
}

// Removes book from array and ui.
function removeBook(deleteBookBtn, cardToDelete, newBook) {
  deleteBookBtn.addEventListener("click", () => {
    if (
      deleteBookBtn.getAttribute("data-attribute") ===
      cardToDelete.getAttribute("data-attribute")
    ) {
      const index = myLibrary.indexOf(newBook);
      myLibrary.splice(index, 1);
      cardToDelete.remove();
      saveLocalStorage();
    }
  });
}

// Allows user to toggle whether or not they have read the book.
function readStatus(readBookBtn) {
  readBookBtn.textContent = "Read";
  readBookBtn.addEventListener("click", () => {
    if (readBookBtn.textContent === "Read") {
      readBookBtn.textContent = "Not Read";
    } else {
      readBookBtn.textContent = "Read";
    }
  });
}

submitForm();
restoreLocalStorage();
