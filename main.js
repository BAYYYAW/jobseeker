const scriptURL =
'https://script.google.com/macros/s/AKfycbz51Ay0bCQY6EIENO2POmGb-0o4hAOgW4ZBnMgx2pOvD_RCItTsvo1DNPcB9KXFBwT1lA/exec'
const form = document.forms['google-sheet'];

form.addEventListener("submit", e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){
      x.className = x.className.replace("show","")
    },3000)
    form.reset();
  })
  .catch(error => alert("Error"));
})
