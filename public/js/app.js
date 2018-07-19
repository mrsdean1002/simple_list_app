// function getQuotes() {
//   return $.ajax('/api/quotes')
//     .then(res => {
//       console.log("Results from getFiles()", res);
//       return res;
//     })
//     .fail(err => {
//       console.error("Error in getFiles()", err);
//       throw err;
//     });
// }
var BOOKS = []

function getBooks() {
  return $.ajax('/api/booklist')
    .then(res => {
      console.log("someday I will get books()", res);
      return res;
    })
}

function renderFiles(files) {
  return files.map(file => `
    <li> 
      <span> ${file.title} </span>
      <button onclick="editBook('${file._id}')"> Edit </button>
    </li>
  `)
}

function editBook(id) {
  var BOOKTOUPDATE = BOOKS.find(book => book._id === id)
 
  /*
  1. Load the Book into the form
  2. When "Submit" is clicked, either update or submit a new one
  */
  fetch('/api/file/' + id, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({somedata: "newdata"}),
  })
}

function refreshFileList() {
  getBooks()
    .then(files => {
      BOOKS = files;
      const html = renderFiles(files);
      $('#list-container').html(html);
    });
}

function inspiresubmithandler(e){
  e.preventDefault()
  console.log("help your daughter Lord")
}
