function getQuotes() {
  return $.ajax('/api/quotes')
    .then(res => {
      console.log("Results from getFiles()", res);
      return res;
    })
    .fail(err => {
      console.error("Error in getFiles()", err);
      throw err;
    });
}
function getBooks() {
  return $.ajax('/api/booklist')
  .then(res => {
  console.log("someday I will get books()", res);
  return res;
})

function getFiles() {
  return fetch('/api/booklist')
    .then(response => response.json())
    .then(files => {
      console.log("Files, I got them:", files);
      return files;
    })
    .catch(error => console.error("GETFILES:", error));
}

function inspiresubmithandler(e){
  e.preventDefault()
  console.log("help your daughter Lord")
}}