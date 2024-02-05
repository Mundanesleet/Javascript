//Variables 
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//Funcion para colocar texto en el html
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Funcion para verificar los intentos del usuario
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    //Si el usuario acerto en cierta cantidad de veces
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    //Instrucciones para saber que tan cerca esta del numero
    } else  {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor')
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

//Limpiando caja blanca donde colocamos los numeros
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

//Generar numero aleatorio
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;

    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        // si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

//Valores iniciales del juego
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto ');
    asignarTextoElemento('p', 'Indica un numero del 1 al 10')
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

//Reiniciar el juego
function reiniciarJuego(){
    //limpiar Caja
    limpiarCaja();
    //Iniciar condiciones
    condicionesIniciales();
    //Deshabiltar el boton del juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

//LLamado de la funciom
condicionesIniciales();











