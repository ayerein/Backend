let fs = require('fs');
let moment = require('moment');

class ManejadorArchivos{

    constructor(url){
        this.url = url;
        this.fecha = moment().format('L');
        this.archivo = null;
    }

    /* leer(){
        try {
            fs.readFile(this.url, 'utf-8', (e, contenido)=>{
                if (e) {
                    
                } else {
                    this.archivo = JSON.parse(contenido);
                    const info = {
                        contstr: contenido,
                        contObj: this.archivo
                    }

                    fs.writeFile('./info.txt', JSON.stringify(info, null, 2), (e, contenido) => {})
                    console.log(info)
                }
            })
        } catch (error) {
            throw new Error(error);
        }
    } */

    async leer(){
        try {
            return await fs.promise.readFile(this.url, 'utf-8')
        } catch (error) {
            throw new Error(error);
        }
    }

    async escribir(url, contenido){
        try {
            await fs.promises.writeFile(url, contenido, 'utf-8')
        } catch (error) {
            console.log(error)
        }
    }

    eliminar(){
        try {
            
        } catch (error) {
            console.log(error)
        }
    }

    async init(){
        try {
            let archivo = await this.leer();
            let archivo_obj = JSON.parse(archivo);
            console.log(archivo_obj);
            archivo_obj.contObj.author = 'AyeRein';
            await this.escribir('./package.json.aye', JSON.stringify(archivo_obj, null, 2))
        } catch (error) {
            console.log(error)
        }
    }
}

/* let obj_uno = new ManejadorArchivos('./package.json') */
let obj_uno = new ManejadorArchivos('./info.txt');
obj_uno.init();

/* console.log(obj_uno.archivo) */