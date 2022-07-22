// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

export function devolverString(str) {
    return str.toString();
}

export function suma(num1, num2) {
    return num1 + num2;
}

export function resta(num1, num2) {
    return num1 - num2;
}

export function multiplica(num1, num2) {
    return num1 * num2;
}

export function divide(num1, num2) {
    return num1 / num2;
}

export function sonIguales(num1, num2) {
    return num1 === num2;
}

export function tienenMismaLongitud(str1, str2) {
    return str1.toString().length === str2.toString().length;
}

export function menosQueNoventa(num) {
    return num < 90;
}

export function mayorQueCincuenta(num) {
    return num > 50;
}

export function obtenerResto(num1, num2) {
    return num1 % num2;
}

export function esPar(num) {
    return num % 2 === 0;
}

export function esImpar(num) {
    return num % 2 !== 0;
}

export function elevarAlCuadrado(num) {
    return num**2;
}

export function elevarAlCubo(num) {
    return num**3
}

export function elevar(num, exponent) {
    return num**exponent
}

export function redondearNumero(num) {
    return Math.round(num);
}

export function redondearHaciaArriba(num) {
    return Math.ceil(num);
}

export function numeroRandom() {
    return Math.random();
}

export function esPositivo(num) {
    if(num > 0) return 'Es positivo';
    if(num< 0) return 'Es negativo';
    if(num === 0) return false;
}

export function agregarSimboloExclamacion(str) {
    return `${str}!`;
}

export function combinarNombres(str1, str2) {
    return `${str1} ${str2}`;
}

export function obtenerSaludo(nombre) {
    return `Hola ${nombre}!`
}

export function obtenerAreaRectangulo(alto, ancho) {
    return alto * ancho;
}

export function retornarPerimetro(lado) {
    return lado * 4;
}

export function areaDelTriangulo(base, altura) {
    return (base * altura) / 2;
}

export function deEuroAdolar(euro) {
    return Number(euro) * 1.2;
}

export function esVocal(letra) {
    let vocales = ['a', 'e', 'i', 'o', 'u'];

    if(letra.length === 0) return 'Dato incorrecto';
    return (vocales.includes(letra)) ? 'Es vocal' : 'Dato incorrecto';

    
}
