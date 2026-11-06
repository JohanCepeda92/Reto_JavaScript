const usuario = {
    nombre: "Maria",
    apellido: "Gomez",
    edad: 25,
    direccion: { calle: "Calle 126", ciudad: "Bogotá", pais: "Colombia" },
    presentarse() {
        return "Hola soy " + this.nombre;
    }

};

console.log (usuario.nombre, + usuario.apellido, + usuario.edad, usuario.direccion)