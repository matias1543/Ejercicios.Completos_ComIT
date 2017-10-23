function obtenerIDUsuario() {
    return 50;
}

function usuarioValido() {
    if (obtenerIDUsuario() > 30) {
        return false;
    }
    else {
        return true;
    }
}