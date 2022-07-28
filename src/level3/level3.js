// No cambies los nombres de las funciones.

export function devolverPrimerElemento(array) {
    return array[0];
}

export function devolverUltimoElemento(array) {
    return array[array.length - 1];
}

export function obtenerLargoDelArray(array) {
    return array.length;
}

export function incrementarPorUno(array) {
    return array.map(element => element + 1);
}

export function agregarItemAlFinalDelArray(array, elemento) {
    return [...array, elemento];
}

export function agregarItemAlComienzoDelArray(array, elemento) {
    return [elemento, ...array];
}

export function dePalabrasAFrase(palabras) {
    return palabras.join(' ');
}

export function arrayContiene(array, elemento) {
    return array.includes(elemento);
}

export function agregarNumeros(numeros) {
    return numeros.reduce(
        (previusValue, currentValue) => previusValue + currentValue
    );
}

export function promedioResultadosTest(resultadosTest) {
    const sumatoria = resultadosTest.reduce(
        (previusValue, currentValue) => previusValue + currentValue
    );
    return sumatoria / resultadosTest.length;
}

export function numeroMasGrande(numeros) {
    return Math.max(...numeros);
}

export function cuentoElementos(arreglo) {
    const array = arreglo.filter(element => element > 18);
    return array.length;
}

export function diaDeLaSemana(numeroDeDia) {
    return numeroDeDia === 7 || numeroDeDia === 1
        ? 'Es fin de semana'
        : 'Es dia Laboral';
}

export function empiezaConNueve(n) {
    const num = n.toString();
    return num.indexOf('9') === 0 ? true : false;
}

export function todosIguales(arreglo) {
    const array = arreglo.sort((a, b) => {
        return a - b;
    });
    return array[0] === array[array.length - 1] ? true : false;
}

export function mesesDelAño(array) {
    let meses = ['Marzo', 'Noviembre', 'Enero'];
    return array.includes('Marzo') && array.includes('Noviembre') && array.includes('Enero')
        ? meses
        : 'No se encontraron los meses pedidos';
}

export function mayorACien(array) {
    return array.filter(element => element > 100);
}

export function breakStatement(numero) {
    let numeros = [numero + 2];
    for (let i = 0; i < 9; i++) {
        numeros = [...numeros, numeros[numeros.length - 1] + 2];
        if (numeros[i] === 0) {
            numeros = 'Se interrumpió la ejecución';
            break;
        }
    }
    return numeros;
}

export function continueStatement(numero) {
    let numeros = [numero + 2];
    for (let i = 0; i < 9; i++) {
        if (i === 5) {
            continue;
        }
        numeros = [...numeros, numeros[numeros.length - 1] + 2];
    }
    return numeros;
}
