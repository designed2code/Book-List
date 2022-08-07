// Book Constructor

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor

function UI() {}

// Add book to List
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');
  // Create tr element
  const row = document.createElement('tr');
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
  `;
  list.appendChild(row);
};
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};
UI.prototype.showAlert = function (message, className) {
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  // Get Parent
  const container = document.querySelector('.container');
  // Get Form
  const form = document.querySelector('#book-form');
  // Insert Alert
  container.insertBefore(div, form);
  // Timeout after 3 sec
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000);
};

UI.prototype.deleteBook = function (target) {
  if (target.className == 'delete') {
    target.parentElement.parentElement.remove();
    return true;
  }
};

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
  // Get Form Values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  //   Instantiate Book
  const book = new Book(title, author, isbn);
  //   Instantiate UI
  const ui = new UI();
  if (title == '' || author == '' || isbn == '') {
    ui.showAlert('Please Fill All the details', 'error');
  } else {
    ui.addBookToList(book);
    ui.showAlert('Book has been added successfully', 'success');
    ui.clearFields();
  }
  e.preventDefault();
});

// Event Listener for Delte
document.getElementById('book-list').addEventListener('click', function (e) {
  const ui = new UI();
  const bookDeleted = ui.deleteBook(e.target);
  if (bookDeleted) {
    ui.showAlert('Book Removed', 'success');
  }
  e.preventDefault();
});

// Step 1 Create a Book Constructor
// Step 2 Create an event listener on the submit button
// Step 3 Get each form fields
// Step 4 Instantiate the book constructor
// Step 5 Instantiate the UI constructor
// Step 6 add a method to the ui object
// Step 7 add prototype method to the ui object
