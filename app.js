let numeroSereto = 0; //let es una forma de declarar
let intentos = 0;
let listaNumerosSorteados = []; //array para almacenar numeros que ya pasaron

function asignarTextoElemento(elemento, texto) // parametros que va recibir la funcion
{
    let elementoHTML = document.querySelector(elemento); //Sirve para seleccionar encabezados del archivo html
    elementoHTML.innerHTML = texto; //al ser tomada la seccion h1, en la variable titulo se puede colocar el texto
}

//DECLARACION DE LA FUNCION intentoDeUsuario
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario)); //sirve para mostrar el tipo de dato que es una variable
    console.log(numeroSereto);  //console.log imprime en la consola, lo encuentras dando click derecho e inspeccion
    console.log(numeroDeUsuario);

    console.log(intentos);
    //console.log(numeroDeUsuario === numeroSereto); //comparacion de ambos numeros, triple igual comparacion en valor y en tipo de dado
    if (numeroDeUsuario === numeroSereto){
        asignarTextoElemento('p', `Acertaste en el número en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);// se utiliza otro tipo de comilla para mostrar el valor de una variable
        document.getElementById ('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto
        if(numeroDeUsuario > numeroSereto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

//funcion para limpiar espacio cada que un usuario se equivoco
function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario'); //queryselector usado con busqueda por ID
    valorCaja.value = '';
}

function generarNumeroSecreto() {  //esta funcion retorna un numero aleatorio
    let numeroGenerado = Math.floor(Math.random()*10)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto;
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', 'Indica un numero del 1 al 10');
    numeroSereto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar nuevo numero y mostrarlo al jugador
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true'); //se deshabilita el boton de nuevo juego
}

condicionesIniciales();

function IMC(altura, peso){//altura en metros y peso en kilogramos
    let IndiceMasaCorporal = peso / (altura * altura)
} 

function factorial(n) {
    if (n < 0) {
        return undefined; // El factorial no está definido para números negativos
    } else if (n === 0 || n === 1) {
        return 1; // El factorial de 0 o 1 es 1
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }


}