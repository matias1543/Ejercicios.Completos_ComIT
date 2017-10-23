const usuario = {
    username: null,
    password: null,
    saludar: function() {
        if(this.username != null) {
            return `Hola, soy el usuario ${this.username}`;
        } else {
            return `El usuario no tiene username`;
        }
    },
    updatePassword: function(passwordDeUsuario) {
        return this.password = passwordDeUsuario;
    },
    updaterUsername: function(nombreDeUsuario) {
        return this.username = nombreDeUsuario;
    }
}


usuario.updaterUsername('Matias1543');
usuario.updatePassword(1234);

console.log(usuario.saludar());
console.log(usuario.username);
console.log(usuario.password);