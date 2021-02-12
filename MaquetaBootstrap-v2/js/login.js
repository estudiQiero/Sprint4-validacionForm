
// Abrir y cerrar botones de ventana modal
$(document).ready(function(){
  $("#login").click(function(){
    $(".colAcceso").collapse('show');
    $(".colRegistro").collapse('hide');
  });
  $("#registro").click(function(){
    $(".colRegistro").collapse('show');
    $(".colAcceso").collapse('hide');
  });
});

// LogIn
// Recogemos formulario
const loginForm = document.getElementById('loginForm');

// Recogemos campo email
const inputEmail = document.forms["accesoForm"]["emailLogin"];
// Recogemos campo password
const inputPassword = document.forms["accesoForm"]["passwordLogin"];

inputEmail.addEventListener("change", emailVerify);
inputPassword.addEventListener("change", passVerify);

// Suscripcion
// Recogemos formulario
const suscForm = document.getElementById('suscForm');

// Recogemos campo email
const inputEmailSusc = document.forms["suscForm"]["emailSuscrip"];

// Validacion email
// https://www.formget.com/regular-expression-for-email/
const mailValidacion = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

// Validacion password
const passwValidacion = /^(?=.*\d)(?=.*[A-Z])(?!.*\s).{8,}$/;

// Validacion
function loginValidate() {
  // Si el formulario tiene la clase is-invalid, eliminar
  loginForm.classList.remove('is-invalid');
  let validator = true;
  // Email
  if (inputEmail.value == "") {
    inputEmail.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent = "Campo obligatorio";
    validator = false;
  } else if (!mailValidacion.test(inputEmail.value)){
    // comprueba el mail con la expresion regular
    // Si no aprueba, se añade la calse is-invalid
		inputEmail.classList.add("is-invalid");
    //Error message
		document.getElementById("errorEmail").textContent = "Formato incorrecto";
		validator = false;
	} 
  //Password
  if (inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Campo obligatorio";
		validator = false;
	} else if (!passwValidacion.test(inputPassword.value)) {
    inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Mín 8 carácteres | mín 1 mayús. | mín 1 núm.";
    validator = false;
  }
  return validator;
}


function emailVerify() {
  let handlerValidator = false;
  //Test input Email with regular expression
  if (mailValidacion.test(inputEmail.value)){
    inputEmail.classList.add("is-valid");
    //If input email has class is-invalid, remove it
    inputEmail.classList.remove("is-invalid");
    document.getElementById("errorEmail").textContent ="";
    handlerValidator = true;
    } else {
      inputEmail.classList.add("is-invalid");
		   document.getElementById("errorEmail").textContent = "Formato incorrecto";
  }
}

function passVerify() {
  let handlerValidator = false;
  // Verifica el mail con la expresion regular
  if (passwValidacion.test(inputPassword.value)) {
    inputPassword.classList.add("is-valid");
    inputPassword.classList.remove("is-invalid");
    document.getElementById("errorPassword").textContent ="";
    handlerValidator = true;
  } else {
    inputPassword.classList.add("is-invalid");
    document.getElementById("errorPassword").textContent = "Mín. 8 caract. | mín 1 mayús. | mín 1 núm."; 
  }
  return handlerValidator;
}

// Validacion registro
const registreForm = document.getElementById('registreForm');
const emailRegistre = document.forms["registroDeForm"]["emailRegistre"];
const passwordRegistre = document.forms["registroDeForm"]["passwordRegistre"];
const passwordRepeat = document.forms["registroDeForm"]["passwordRepeat"];

// Event listeners
emailRegistre.addEventListener("change", emailRegistreVerify);
passwordRegistre.addEventListener("change", passRegistreVerify);
passwordRepeat.addEventListener("change", passRepeatVerify);

// Validacion
function registreValidate() {t
  registreForm.classList.remove('is-invalid');
  let validator = true;
  //Email
  if (emailRegistre.value == "") {
    emailRegistre.classList.add("is-invalid");
    document.getElementById("errorEmailReg").textContent = "Campo obligatorio";
    validator = false;
  } else if (!mailValidacion.test(emailRegistre.value)){
		emailRegistre.classList.add("is-invalid");
		document.getElementById("errorEmailReg").textContent = "Formato incorrecto";
		validator = false;
	}

  // Password
  if (passwordRegistre.value == "") {
		passwordRegistre.classList.add("is-invalid");
		document.getElementById("errorPassReg").textContent = "Campo obligatorio";
		validator = false;
	} else if (!passwValidacion.test(passwordRegistre.value)) {
    passwordRegistre.classList.add("is-invalid");
		document.getElementById("errorPassReg").textContent = "Mín 8 carácteres | mín 1 mayús. | mín 1 núm.";
    validator = false;
  }

  //Repetir password
  if ((passwordRegistre.value)!=(passwordRepeat.value) || passwordRepeat.value == "" ) {
    passwordRepeat.classList.add("is-invalid");
		document.getElementById("errorPassRepeat").textContent = "Campo obligatorio - No coincide";
		validator = false;

  }
  return validator;
}

function emailRegistreVerify() {
  let handlerValidator = false;
  if (mailValidacion.test(emailRegistre.value)){
    emailRegistre.classList.add("is-valid");
    emailRegistre.classList.remove("is-invalid");
    document.getElementById("errorEmailReg").textContent ="";
    handlerValidator = true;
    } else {
      emailRegistre.classList.add("is-invalid");
		  document.getElementById("errorEmailReg").textContent = "Formato incorrecto";
  }
}

function passRegistreVerify() {
  let handlerValidator = false;
  if (passwValidacion.test(passwordRegistre.value)) {
    passwordRegistre.classList.add("is-valid");
    passwordRegistre.classList.remove("is-invalid");
    document.getElementById("errorPassReg").textContent ="";
    handlerValidator = true;
  } else {
    passwordRegistre.classList.add("is-invalid");
    document.getElementById("errorPassReg").textContent = "Mín. 8 caract. | mín 1 mayús. | mín 1 núm."; 
  }
  return handlerValidator;
}

function passRepeatVerify() {
  let handlerValidator = false;
  // Compara passwords
  if ((passwordRegistre.value)==(passwordRepeat.value)) {
    passwordRepeat.classList.add("is-valid");
    passwordRepeat.classList.remove("is-invalid");
    document.getElementById("errorPassRepeat").textContent ="";
    handlerValidator = true;
  } else {
    passwordRepeat.classList.add("is-invalid");
    document.getElementById("errorPassRepeat").textContent = "Campo obligatorio - No coincide"; 
  }
  return handlerValidator;
}

// Busquedas

const limpiarBuscador = document.getElementById('contSearch');
limpiarBuscador.addEventListener('click', resetSearch);
const search = document.forms["buscador"]["search"];


function searchValidate() {
  let validator = true;
  if (search.value == "") {
    search.classList.add("is-invalid");
    document.getElementById("errorSearch").textContent = "Campo obligatorio"; 
    validator = false;
  }

  if ((search.value.length >= 1) && (search.value.length <= 3)) {
    search.classList.add("is-invalid");
    document.getElementById("errorSearch").textContent = "Escribe más de 3 letras, por favor"; 
    validator = false;
  }
  return validator
}

function resetSearch() {
  document.getElementById('busquedas').reset();
}
