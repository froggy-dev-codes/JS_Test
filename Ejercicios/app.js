// crea una funcion declararVariable (no es necesario llamarla)
function declararVariable() {
    let x = 10;
    return x;
}

/* 
crea una funcion de cada operacion matematica (no es necesario llamarlas)
sumar
restar
multiplicar
dividir
y retorne su valor
*/
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
}

/* 
crea 2 funciones
concatenar
longitudCadena
*/
function concatenar(a, b) {
    return a + " " + b;
}

function longitudCadena(cadena) {
    return cadena.length;
}

/* 
crea 2 funciones 
esPar
esMayorQueCero
*/
function esPar(numero) {
    return numero % 2 === 0;
}

function esMayorQueCero(numero) {
    if (numero > 0) return "Positivo";
    if (numero < 0) return "Negativo";
    return "Cero";
}

// funciones de comparacion
function compararIgualdadEstricta(a, b) {
    return a === b;
}

function compararDesigualdadEstricta(a, b) {
    return a !== b;
}


function compararMayorQue(a, b) {
    return a > b;
}

function compararMenorQue(a, b) {
    return a < b;
}

function compararMayorOIgualQue(a, b) {
    return a >= b;
}

function compararMenorOIgualQue(a, b) {
    return a <= b;
}

function compararNullUndefined() {
    return null == undefined;
}

// no tocar el codigo siguiente 
module.exports = {
    declararVariable,
    sumar,
    restar,
    multiplicar,
    dividir,
    concatenar,
    longitudCadena,
    esPar,
    esMayorQueCero,
    compararIgualdadEstricta,
    compararDesigualdadEstricta,
    compararMayorQue,
    compararMenorQue,
    compararMayorOIgualQue,
    compararMenorOIgualQue,
    compararNullUndefined,
}
