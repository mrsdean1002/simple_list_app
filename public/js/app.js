
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

function inspiresubmithandler(e){
  e.preventDefault()
  console.log("help your daughter Lord")
}
