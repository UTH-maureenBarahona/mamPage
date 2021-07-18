function login() {
  var usuario = document.getElementById("usuario").value;
  var password = document.getElementById("clave").value;

  let text;

  console.log(usuario);
  console.log(password);
  if (usuario == "u1@mam.com" && password == "123") {
    window.location.href = "../page/userA.html";
  }
  if (usuario == "u2@mam.com" && password == "123") {
    window.location.href = "../page/userB.html";
  }
  if (usuario == "u3@mam.com" && password == "123") {
    window.location.href = "../page/userC.html";
  }

  if (usuario == "" && password == "") {
    text = "valores no pueden ser vacios";
  } else {
    text = "datos erroneos";
  }
  document.getElementById("mensaje").innerHTML = text;
}
