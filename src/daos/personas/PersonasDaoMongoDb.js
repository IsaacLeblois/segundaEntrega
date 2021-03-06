import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js"

class PersonasDaoMongoDb extends ContenedorMongoDb {

    constructor() {
        super('personas', {
            id: { type: String, required: true },
            nombre: { type: String, required: true },
            apellido: { type: Number, required: true }
        })
    }
}

export default PersonasDaoMongoDb
