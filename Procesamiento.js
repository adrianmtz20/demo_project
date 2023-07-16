// __________________________GLOBAL___________________________
//  Codigo para quitar espacios en blanco en HTML
var el = document.querySelector('.country-IN');
el.innerHTML = el.innerHTML.replace(/&nbsp;/g,'');

// ______________________PAGINA ALIADOS____________________________
// Funcion para abrir en nueva ventana pagina de empresa
function redireccionar(elemento) {
    var url = elemento.getAttribute("empresa-url");
    window.open(url, "_blank");
}

// ____________________________BOTONES______________________________
// Funcion para botones iniciar proceso
function iniciarproceso(){
    window.location.href = "Flujo/Pregunta_1.html";
}

// ___________________PAGINA VERIFICAR CUENTA_________________________
// Funcion para aceptar solo numeros y solo 1 digito como entrada en input
function validarNumero(input) {
  input.value = input.value.replace(/[^0-9]/g, '');
}

function moverFoco(input, previousInputId, nextInputId) {
  if (input.value.length === 0) {
    const previousInput = document.getElementById(previousInputId);
    previousInput.focus();
  } else if (input.value.length === 1) {
    const nextInput = document.getElementById(nextInputId);
    nextInput.focus();
  }
}

function manejarTeclaPresionada(event, currentInputId, previousInputId, nextInputId) {
  const input = document.getElementById(currentInputId);

  if (event.key === 'ArrowLeft') {
    const previousInput = document.getElementById(previousInputId);
    previousInput.focus();
    
    // Mover el cursor al final del valor en el campo de entrada anterior
    if (previousInput.value.length > 0) {
      setTimeout(function() {
        previousInput.selectionStart = previousInput.value.length;
        previousInput.selectionEnd = previousInput.value.length;
      }, 0);
    }
  } else if (event.key === 'ArrowRight') {
    const nextInput = document.getElementById(nextInputId);
    nextInput.focus();
  }
}


// ________________________PAGINA DOCUMENTOS_____________________________

// Verificar porque se abre dos veces la pestaña de documentos
function abrirVentanaDocumentosDefuncion() {
    var inputDocumento = event.target.previousElementSibling;
    inputDocumento.click();
  }
  

function abrirVentanaDocumentosNacimiento() {
  var inputDocumento = event.target.previousElementSibling;
  inputDocumento.click();
}

function abrirVentanaDocumentosIne() {
  var inputDocumento = event.target.previousElementSibling;
  inputDocumento.click();
}

function mostrarNombreDocumentoActaDefuncion(event) {
  var input = event.target;
  var nombreDocumento = input.files[0].name;
  var elementoNombreDocumento = document.getElementById('nombre_documento_seleccionado_defuncion');
  elementoNombreDocumento.textContent = nombreDocumento;

  var fondoDocumento = document.getElementById('Fondo_documento_defuncion');
  fondoDocumento.style.backgroundColor = '#4578F6';
  fondoDocumento.style.color = '#ffffff';

  var imagenConfirmacion = input.parentElement.querySelector('.Ilustracion_confirmacion');
imagenConfirmacion.style.display = input.files.length > 0 ? 'block' : 'none';

}

function mostrarNombreDocumentoActaNacimiento(event) {
  var input = event.target;
  var nombreDocumento = input.files[0].name;
  var elementoNombreDocumento = document.getElementById('nombre_documento_seleccionado_nacimiento');
  elementoNombreDocumento.textContent = nombreDocumento;

  var fondoDocumento = document.getElementById('Fondo_documento_nacimiento');
  fondoDocumento.style.backgroundColor = '#4578F6';
  fondoDocumento.style.color = '#ffffff';

  var imagenConfirmacion = input.parentElement.querySelector('.Ilustracion_confirmacion');
imagenConfirmacion.style.display = input.files.length > 0 ? 'block' : 'none';

}

function mostrarNombreDocumentoIne(event) {
  var input = event.target;
  var nombreDocumento = input.files[0].name;
  var elementoNombreDocumento = document.getElementById('nombre_documento_seleccionado_ine');
  elementoNombreDocumento.textContent = nombreDocumento;

  var fondoDocumento = document.getElementById('Fondo_documento_ine');
  fondoDocumento.style.backgroundColor = '#4578F6';
  fondoDocumento.style.color = '#ffffff';

  var imagenConfirmacion = input.parentElement.querySelector('.Ilustracion_confirmacion');
imagenConfirmacion.style.display = input.files.length > 0 ? 'block' : 'none';
}


// ________________________PAGINA BENEFICIARIOS_____________________________
function toggleTexto() {
    var contenido = document.getElementById("contenidoTexto");
    contenido.classList.toggle("oculto");
    contenido.classList.toggle("mostrar");
  }


// _____________________________PAGINA MI CUENTA_____________________________
function redireccionarperfil() {
  window.location.href = "Cuenta.html";
}

function redireccionarajustes() {
  window.location.href = "Ajustes.html";
}

window.addEventListener('scroll', function() {
  var main = document.querySelector('main');
  var footer = document.querySelector('footer');
  var mainHeight = main.offsetHeight;
  var scrollPosition = window.innerHeight + window.pageYOffset;

  if (scrollPosition >= mainHeight) {
    footer.classList.add('sticky');
  } else {
    footer.classList.remove('sticky');
  }
});


// ________________________________PAGINA INICIAR SESION _______________________________
function iniciarSesion() {
  window.location.href = "Dashboard_perfil/Cuenta.html";
}

// ________________________________PAGINA MIS DATOS _______________________________
// var buttons = document.getElementsByClassName("my-button");

// // Agregar evento clic a cada botón
// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function() {
//     // Remover la clase 'active' de todos los botones
//     for (var j = 0; j < buttons.length; j++) {
//       buttons[j].classList.remove("active");
//     }
    
//     // Agregar la clase 'active' al botón actual
//     this.classList.add("active");
//   });
// }