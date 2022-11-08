let fs = require('fs')

class Contenedor{
    constructor(archivo){
        this.archivo = archivo
    }

    async save(obj){
        let traerProductos = await this.getAll() 
        try {
            if (traerProductos.length === 0) {
                const productos = []
                obj.id = 1
                productos.push(obj)
                console.log(`Producto agregado! Id del producto: ${obj.id}`)
                return await fs.promises.writeFile(this.archivo, JSON.stringify(productos, null, 2))
            } else {
                let agregarProductos = JSON.parse(traerProductos)
                obj.id = agregarProductos.length + 1
                agregarProductos.push(obj)
                console.log(`Producto agregado! Id del producto: ${obj.id}`)
                return await fs.promises.writeFile(this.archivo, JSON.stringify(agregarProductos, null, 2))
            }
        } catch (error) {
            console.log(error)
        }
    }

    async getById(id){
        let traerProductos = await this.getAll()
        try {
            let producto = JSON.parse(traerProductos).filter(obj => obj.id === id)
            producto ? console.log(producto) : null
        } catch (error) {
            console.log(error)
        }
    }

    async getAll(){
        try {
            return await fs.promises.readFile(this.archivo, 'utf-8')
        } catch (error) {
            console.log(error)
        }

    }

    async deleteById(id){
        let traerProductos = await this.getAll()
        try {
            let nuevoArray = JSON.parse(traerProductos).filter(obj => obj.id != id)
            return await fs.promises.writeFile(this.archivo, JSON.stringify(nuevoArray))
        } catch (error) {
            console.log(error)
        }
    }

    async deleteAll(){
        try {
            return await fs.promises.writeFile(this.archivo, '')
        } catch (error) {
            console.log(error)
        }
    }

    
}

async function prueba(){
    let desafio = new Contenedor('./desafioClase4.txt')

    console.log('Prueba agregando un producto.')
    desafio.save({'title': 'jugo', 'price': 75, thumbnail:'URL de la imagen'}) 
    
    /* console.log('Prueba buscando producto por Id.')
    desafio.getById(1)  */
    
    /* console.log('Prueba traer todos los productos.')
    let traerProductos = await desafio.getAll()
    console.log(traerProductos) */

    /* console.log('Prueba eliminando un producto por id.')
    desafio.deleteById(2) */
    
    /* desafio.deleteAll() */
    
}

prueba()


