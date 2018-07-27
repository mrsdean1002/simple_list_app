// function getQuotes() {
//   return $.ajax('/api/quotes')
//     .then(res => {
//       console.log("Results from getBooks()", res);
//       return res;
//     })
//     .fail(err => {
//       console.error("Error in getBooks()", err);
//       throw err;
//     });
// }
var Books = []

function getBooks() {
  return $.ajax('/api/booklist')
    .then(res => {
      console.log("someday I will get books()", res);
      return res;
    })
}

function renderBook(books) {
  const listItems = books.map(book => `  
    <li class="list-group-item"> 
      <strong>${book.title}</strong> - ${book.published}
      <span class="pull-right">
      <button type="button" class="btn btn-xs btn-default" onclick="handleEditBookClick(this)" data-book-id="${book._id}">Edit</button>
      <button type="button" class="btn btn-xs btn-danger" onclick="handleDeleteBookClick(this)" data-book-id="${book._id}">Del</button>
      </span>
    </li>`);
  const html = `<ul class="list-group">${listItems.join('')}</ul>`;

  return html;

}
function handleEditBookClick(element) {
  const bookId = element.getAttribute('data-book-id');

  const book = window.Books.find(book => book._id === bookId);
  if (book) {
    setForm(book);   
  }
}

function handleDeleteBookClick(element) {
  const bookId = element.getAttribute('data-book-id');

  if (confirm("Are you sure?")) {
    deleteBook(bookId);
  }
}

function deleteBook(bookId) {
  const url = '/api/book/' + bookId;

  fetch(url, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(response => {
      console.log("DOOOOOOOOOM!!!!!");
      refreshBookList();
    })
    .catch(err => {
      console.error("I'm not dead yet!", err);
    });
}

function setForm(data) {
  data = data || {};

  const book = {
    title: data.title || '',
    published: data.published || '',
    _id: data._id || '',
  };

  $('#book-title').val(book.title);
  $('#book-published').val(book.published);
  $('#book-id').val(book._id);

  if (book._id) {
    $('#form-label').text("Edit Book");
  } else {
    $('#form-label').text("Add Book");
  }
}


// function editBook(id) {
//   var BOOKTOUPDATE = Books.find(book => book._id === id)

  /*
  1. Load the Book into the form
  2. When "Submit" is clicked, either update or submit a new one
  */
  // fetch('/api/book/' + id, {
  //   method: "PUT",
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({somedata: "newdata"}),
  // })

function submitBookForm() {
  console.log("You clicked 'submit'. Congratulations.");
  
  const bookData = {
    title: $('#book-title').val(),
    published: $('#book-published').val(),
    _id: $('#book-id').val(),
  };

  let method, url;
  if (bookData._id) {
    method = 'PUT';
    url = '/api/book/' + bookData._id;
  } else {
    method = 'POST';
    url = '/api/book';
  }

  fetch(url, {
    method: method,
    body: JSON.stringify(bookData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(book => {
      console.log("we have updated the data", book);
      setForm();
      refreshBookList(); 
    })
    .catch(err => {
      console.error("A terrible thing has happened", err);
    })
  }
    

function cancelBookForm() {
  setForm();
}

function refreshBookList() {
  const template = $('#list-template').html();

  getBooks()
    .then(books => {

      window.Books = books;
      const data = {books: books};
      const html = renderBook(books);
      $('#list-container').html(html);
    });
}
