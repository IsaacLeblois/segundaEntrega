import config from '../config.js'

let dbswitch = "json"
let personasDao
let productosDao
let carritosDao

switch (dbswitch) {
    case 'json':
        const { default: PersonasDaoArchivo } = await import('./personas/PersonasDaoArchivo.js')
        const { default: ProductosDaoArchivo } = await import('./productos/ProductosDaoArchivo.js')
        const { default: CarritosDaoArchivo } = await import('./carritos/CarritosDaoArchivo.js')
        personasDao = new PersonasDaoArchivo(config.fileSystem.path)
        productosDao = new ProductosDaoArchivo(config.fileSystem.path)
        carritosDao = new CarritosDaoArchivo(config.fileSystem.path)
        console.log("Base de datos seleccionada: JSON")
        break
    case 'firebase':
        const { default: PersonasDaoFirebase } = await import('./personas/PersonasDaoFirebase.js')
        const { default: ProductosDaoFirebase } = await import('./productos/ProductosDaoFirebase.js')
        const { default: CarritosDaoFirebase } = await import('./carritos/CarritosDaoFirebase.js')
        personasDao = new PersonasDaoFirebase()
        productosDao = new ProductosDaoFirebase()
        carritosDao = new CarritosDaoFirebase()
        console.log("Base de datos seleccionada: Firebase")
        break
    case 'mongodb':
        const { default: PersonasDaoMongoDb } = await import('./personas/PersonasDaoMongoDb.js')
        // const { default: ProductosDaoMongoDb } = await import('./productos/ProductosDaoMongoDb.js')
        // const { default: CarritosDaoMongoDb } = await import('./carritos/CarritosDaoMongoDb.js')
        personasDao = new PersonasDaoMongoDb()
        // productosDao = new ProductosDaoMongoDb()
        // carritosDao = new CarritosDaoMongoDb()
        console.log("Base de datos seleccionada: Mongo DB")
        break
    default:
        const { default: PersonasDaoMem } = await import('./personas/PersonasDaoMem.js')
        const { default: ProductosDaoMem } = await import('./productos/ProductosDaoMem.js')
        const { default: CarritosDaoMem } = await import('./carritos/CarritosDaoMem.js')
        personasDao = new PersonasDaoMem()
        productosDao = new ProductosDaoMem()
        carritosDao = new CarritosDaoMem()
        console.log("No se seleccionó ninguna base de datos")
        break
}

export { personasDao, productosDao, carritosDao }