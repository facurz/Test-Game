// No cambies los nombres de las funciones.

export function obtenerMayor(x, y) {
    if (x > y) return x;
    if (y > x) return y;
    if (x === y) return x;
}

export function mayoriaDeEdad(edad) {
    return edad >= 18 ? 'Allowed' : 'Not allowed';
}

export function conection(status) {
    switch (status) {
        case 1:
            return 'Online';
        case 2:
            return 'Away';
        case 3:
            return 'Offline';
        default:
            return 'Offline';
    }
}

export function saludo(idioma) {
    switch (idioma) {
        case 'aleman':
            return 'Guten Tag!';
        case 'ingles':
            return 'Hello!';
        case 'mandarin':
            return 'Ni Hao!';
        default:
            return 'Hola!';
    }
}

export function colors(color) {
    switch (color) {
        case 'blue':
            return 'This is blue';
        case 'red':
            return 'This is red';
        case 'green':
            return 'This is green';
        case 'orange':
            return 'This is orange';
        default:
            return 'Color not found';
    }
}

export function esDiezOCinco(numero) {
    return numero === 10 || numero === 5;
}

export function estaEnRango(numero) {
    return numero > 20 && numero < 50;
}

export function esEntero(numero) {
    return Number.isInteger(numero);
}

export function fizzBuzz(numero) {
    if (numero % 5 === 0 && numero % 3 === 0) return 'fizzbuzz';
    if (numero % 3 === 0) return 'fizz';
    if (numero % 5 === 0) return 'buzz';
    if (numero % 3 !== 0 && numero % 5 !== 0) return numero;
}

export function operadoresLogicos(num1, num2, num3) {
    if (num1 === 0 || num2 === 0 || num3 === 0) return 'Error';
    if (num1 < 0 || num2 < 0 || num3 < 0) return 'Hay negativos';
    if (Math.sign(num1) === 1 && num1 > num2 && num1 > num3)
        return 'Número 1 es mayor y positivo';
    if (num3 > num1 && num3 > num2) return num3 + num1;
    if (num1 || num2 || num3) return false;
}

export function esPrimo(numero) {
    if (numero === 1) return false;
    if (numero === 0) return false;

    let primo = true;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            primo = false;
            break;
        }
    }
    return primo;
}

export function esVerdadero(valor) {
    if (valor) return 'Soy verdadero';
    if (!valor) return 'Soy falso';
}

export function tablaDelSeis() {
    let tablaSeis = [];
    for (let i = 0; i < 11; i++) {
        tablaSeis = [...tablaSeis, i * 6];
    }
    return tablaSeis;
}

export function tieneTresDigitos(numero) {
    return numero.toString().length === 3;
}

export function doWhile(numero) {
    let resultado = numero;
    let i = 1;
    
    do {
      resultado = resultado + 5;
      i++;
    } while (i < 9);
    
    return resultado;
}
