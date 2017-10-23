let usuario = {
    username: 'batman',
    password: 'Alfred1960KPO!',
};

function autenticarUsuario(usuario) {
    return (usuario.username === 'batman' && usuario.password === 'Alfred1960KPO!');
}

if (autenticarUsuario(usuario)) {
    console.log(usuario);
}
else {
    console.log('Usuario no autenticado');
}


