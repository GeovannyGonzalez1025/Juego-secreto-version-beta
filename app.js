let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
console.log (numeroSecreto)
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return
}

function verificarIntentos() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        }else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el nuemro generado esta en la lista. 
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    //si ya soltiamos todos los numero.
    if (listaNumeroSorteado.length == numeroMaximo) {
asignarTextoElemento ('p','Ya se sortiaron todos los nuemros posible')
    }else{
        if (listaNumeroSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    } 
}
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número Secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarElJuego() {
    //limpiar la caja 
    limpiarCaja();
    //indicar mensaje de inicio de intervalo del 1 a 10
    //mensajeIniciales 
    //generar numero aleatorio;
     //Generar el nuemero de intenros  
    condicionesIniciales();
    //Desabilitar el boton de nuevo juego
    let boton = document.querySelector('#reiniciar');
    boton.setAttribute('disabled','');

    /*let boton = document.getElementById('reiniciar');
    boton.addAttribute('disabled');*/

}
condicionesIniciales();