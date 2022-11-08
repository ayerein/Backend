class Usuario {
    constructor (nombre, apellido, libros = [], mascotas = []){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        console.log(`${this.nombre} ${this.apellido}`);
    }

    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota);
    }

    countMascotas(){
        console.log(this.mascotas.length)
    }

    addBook(nombre, autor){
        this.libros.push({
            nombre: nombre,
            autor: autor
        })
    }

    getBookNames(){
        let libros = []
        this.libros.forEach(libro => libros.push(libro.nombre))
        console.log(libros)
    }
}

let ayelen = new Usuario('Ayelen', 'Rein')

ayelen.getFullName();
ayelen.addMascota('Jacinta');
ayelen.addMascota('Simba');
ayelen.countMascotas();
ayelen.addBook('libro1', 'autor1');
ayelen.addBook('libro2', 'autor2');
ayelen.getBookNames();