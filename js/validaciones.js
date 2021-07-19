var names = document.getElementsByName("name[]");

function login() {
  var usuario = document.getElementById("usuario").value;
  var password = document.getElementById("clave").value;

  let text;

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

function AccionPais(){
  window.location.href = "../page/Paises.html";
}

//Solo permite introducir numeros.
function soloNumeros(e) {
  try {
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
      e.preventDefault();
    }
  } catch (error) {
    document.getElementById("error").innerHTML = err.message;
  }
}

function limpiarFormulario() {
  try {
    document.getElementById("rellenar").reset();
  } catch (error) {
    document.getElementById("error").innerHTML = err.message;
  }
}

function imprimir() {
  try {
    window.print();
  } catch (error) {
    document.getElementById("error").innerHTML = err.message;
  }
}

function InsertIntoTable() {
  try {
    var TableRow = "<tr></tr>";
    
    for (key = 0; key < names.length; key++) 
      TableRow = TableRow.substring(0, TableRow.length - 5) +"<td>" + names[key].value +"</td>" + TableRow.substring(TableRow.length - 5);
      var TrElement = document.createElement("tr");
      TrElement.innerHTML = TableRow;
      document.getElementById("TableBody").appendChild(TrElement);
    
  } catch (error) {
    document.getElementById("error").innerHTML = error.message;
  }
}