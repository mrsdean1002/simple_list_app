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
    <li class="list-group-item"> 
      <strong> ${file.title} </strong> - ${file.published}
      <span class="pull-right">
      <button type="button" class="btn btn-xs btn-default" onclick="handleEditFileClick(this)" data-file-id="${file._id}">Edit</button>
      </span>
    </li>`);
  const html = `<ul class="list-group">${listItems.join('')}</ul>`;

  return html;

}
function handleEditFileClick(element) {
  const fileId = element.getAttribute('data-file-id');

  const file = window.BOOKS.find(file => file._id === fileId);
  if (file) {
    setForm(file);   
  }
}


function setForm(data) {
  data = data || {};

  const file = {
    title: data.title || '',
    published: data.published || '',
    _id: data._id || '',
  };

  $('#file-title').val(file.title);
  $('#file-published').val(file.published);
  $('#file-id').val(file._id);

  if (file._id) {
    $('#form-label').text("Edit File");
  } else {
    $('#form-label').text("Add File");
  }
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
function submitFileForm() {
  console.log("You clicked 'submit'. Congratulations.");
  
  const fileData = {
    title: $('#file-title').val(),
    published: $('#file-description').val(),
    _id: $('#file-id').val(),
  };

  let method, url;
  if (fileData._id) {
    method = 'PUT';
    url = '/api/file/' + fileData._id;
  } else {
    method = 'POST';
    url = '/api/file';
  }

  fetch(url, {
    method: method,
    body: JSON.stringify(fileData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(file => {
      console.log("we have updated the data", file);
      setForm();
      refreshFileList(); 
    })
    .catch(err => {
      console.error("A terrible thing has happened", err);
    })
  }
    

function cancelFileForm() {
  setForm();
}

function refreshFileList() {
  getBooks()
    .then(files => {
      window.BOOKS = files;
      const html = renderFiles(files);
      $('#list-container').html(html);
    });
}
