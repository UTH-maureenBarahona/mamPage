function Login() {
  var done = 0;
  var usuario = document.login.user.value;
  var password = document.login.password.value;
  if (usuario == "u1@mam.com" && password == "123") {
    window.Location = "../page/userA.html";
  }
  if (usuario == "u2@mam.com" && password == "123") {
    window.Location = "../page/userB.html";
  }
  if (usuario == "u3@mam.com" && password == "123") {
    window.Location = "../page/userC.html";
  }

  if (usuario == "" && password == "") {
    alert("valores no pueden ser vacios");
  }
}
