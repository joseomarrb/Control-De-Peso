//Variables
const main = document.querySelector("#main");
const btnMinimizar = document.querySelector("#minus");
const formulario = document.querySelector("#formulario")
const mensaje = document.querySelector("#message span");
const inputAltura = document.querySelector("#height");
const inputPeso = document.querySelector("#weight");
const inputMasculino = document.querySelector("#male");
const inputFemenino = document.querySelector("#female");
const btnCalcular = document.querySelector("#calculate");
const btnLimpiar = document.querySelector("#clear");
const contenedorAbrir = document.querySelector("#open-container");  
const btnAbrir = document.querySelector("#open");
const imagen = document.querySelector("#image");
let peso, altura, generoSeleccionado;

//Eventos
btnMinimizar.addEventListener("click", () => {
    main.style.display = "none";
    contenedorAbrir.style.display = "block";
});

btnAbrir.addEventListener("click", () => {
    main.style.display = "block";
    contenedorAbrir.style.display = "none";
});

inputMasculino.addEventListener("change", actualizarSeleccion)
inputFemenino.addEventListener("change", actualizarSeleccion)
inputAltura.addEventListener("input", convertirAltura);
inputPeso.addEventListener("input", convertirPeso);
formulario.addEventListener("submit", formularioEnviado);
btnLimpiar.addEventListener("click", limpiarFormulario);


//Funciones
function convertirAltura(e) {
    altura = parseFloat(e.target.value);
};

function convertirPeso(e) {
    peso = parseInt(e.target.value);
}

function formularioEnviado(e) {
    e.preventDefault();
    actualizarSeleccion();
    let formula = peso / altura ** 2;

    if (!generoSeleccionado) {
        mensaje.textContent = "Debes seleccionar tu género";
        imagen.src = "imgs/confundido.jfif";
        return;
    };

    if ( formula >= 25 && generoSeleccionado === "Masculino") {
        mensaje.textContent = "Puto gordo, quieres ser mi gymbro? 😤";
        imagen.src = "imgs/gordo.jpg";
        return; 
    } else if ( formula >= 25 && generoSeleccionado === "Femenino") {
        mensaje.textContent = "Estás gorda mi amor, vamos al gym 🤫";
        imagen.src = "imgs/gorda.jpg";
        return; 
    } else if ( formula >= 18.5 && formula <= 24.9 &&  generoSeleccionado === "Masculino") {
        mensaje.textContent = "Wuao, puedo ser tu gymbro🥵?";
        imagen.src = "imgs/hombreCuerpoIdeal.webp";
        return; 
    }  else if ( formula >= 18.5 && formula <= 24.9 && generoSeleccionado === "Femenino") {
        mensaje.textContent = "Que buen cuerpo tienes corazón 😍";
        imagen.src = "imgs/mujerCuerpoIdeal.jpg";
        return; 
    } else if (formula < 18.5 &&  generoSeleccionado === "Femenino") {
        mensaje.textContent = "Estás muy flaca, vamos al gym 🤓";
        imagen.src = "imgs/flaca.jpg";
        return; 
    } else if (formula < 18.5 &&  generoSeleccionado === "Masculino") {
        mensaje.textContent = "Estás flaco papi, cuidado con la brisa 🤮";
        imagen.src = "imgs/flaco.jpg";
        return; 
    };
};

function actualizarSeleccion() {
    if (inputMasculino.checked) {
        generoSeleccionado = "Masculino";
        return true;
    } else if (inputFemenino.checked) {
        generoSeleccionado = "Femenino";
        return true;
    }
    return false;
};

function limpiarFormulario() {
    mensaje.innerHTML = "";
    imagen.src = "";
    formulario.reset();
};

function unselect() {
    document.querySelectorAll('[name=radio]').forEach((x) => x.checked = false);
};