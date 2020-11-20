import "./styles.css";

document.getElementById("submit-btn").addEventListener("click", function (e) {
  var pass = document.getElementById("password").value;
  var errorsArr = verifyPassword(pass);
  displayErrors(errorsArr);
});

function verifyPassword(pass) {
  return [];
}

function displayErrors(errorsArr) {
  return true;
}
