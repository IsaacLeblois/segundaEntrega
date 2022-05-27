import { Router } from 'express';
import { carritosDao } from '../daos/index.js'

const carritosRouter = Router()

carritosRouter.get('/', async (req, res) => {
    const carritos = await carritosDao.listarAll()
    res.json(carritos)
})

carritosRouter.get('/:id', async (req, res) => {
    const carritos = await carritosDao.listar(req.params.id);
    res.json(carritos)
})

carritosRouter.post('/', async (req, res) => {
    const prodAgregado = await carritosDao.guardar(req.body);
    res.json(prodAgregado)
})

carritosRouter.put('/:id', async (req, res) => {
    const prodActualizado = await carritosDao.actualizar(req.body);
    res.json(prodActualizado)
})

carritosRouter.delete('/:id', async (req, res) => {
    const prodEliminado = await carritosDao.borrar(req.params.id);
    res.json(prodEliminado)
})

export { carritosRouter }