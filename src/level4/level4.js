// No cambies los nombres de las funciones.

export function crearGato(nombre, edad) {
    const gato = {
        nombre,
        edad,
        meow() {
            return 'Meow!';
        },
    };
    return gato;
}

export function agregarPropiedad(objeto, property) {
    objeto[property] = null;
    return objeto;
}

export function invocarMetodo(objeto, metodo) {
    objeto[metodo]();
}

export function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
    let numero = Object.values(objetoMisterioso);
    return numero * 5;
}

export function eliminarPropiedad(objeto, unaPropiedad) {
    delete objeto[unaPropiedad];
    return objeto;
}

export function nuevoUsuario(nombre, email, password) {
    const user = {
        nombre,
        email,
        password,
    };
    return user;
}

export function tieneEmail(usuario) {
    if (usuario['email'] === null) return false;
    if (usuario.hasOwnProperty('email') !== true) return false;
    if (usuario['email'].length > 4) return true;
}

export function tienePropiedad(objeto, propiedad) {
    return objeto.hasOwnProperty(propiedad);
}

export function verificarPassword(usuario, password) {
    if (usuario.password === password) return true;
    if (usuario.password !== password) return false;
}

export function actualizarPassword(usuario, nuevaPassword) {
    usuario['password'] = nuevaPassword;
    return usuario;
}

export function agregarAmigo(usuario, nuevoAmigo) {
    usuario['amigos'] = [...usuario['amigos'], nuevoAmigo];
    return usuario;
}

export function pasarUsuarioAPremium(usuarios) {
    for (let usuario of usuarios) {
        usuario.esPremium = true;
    }
    return usuarios;
}

export function sumarLikesDeUsuario(usuario) {
    let sumatoria = 0;
    for (let i = 0; i < usuario['posts'].length; i++) {
        sumatoria += usuario['posts'][i]['likes'];
    }
    return sumatoria;
}

export function agregarMetodoCalculoDescuento(producto) {
    producto.calcularPrecioDescuento = function () {
        return (
            producto.precio - producto.precio * producto.porcentajeDeDescuento
        );
    };
    return producto;
}
