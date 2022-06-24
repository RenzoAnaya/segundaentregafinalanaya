import { Router } from "express";
import { cartsDao as api} from "../daos/index.js";
const cartRouter = new Router();


cartRouter.get('/', async (req,res)=>{
    try {
        const allcarts = await api.getAll()
        res.json(allcarts)
    } catch (error) {
        throw new Error('Error router getAll', error)
    }
});

cartRouter.get('/:id', async (req, res) => {
    try{
        const {id} = req.params
        const cart = await api.getOne(id);
        res.json(cart) 
    }
    catch (err){
        throw new Error('Error router getOne', error)
    }
});



cartRouter.post('/', async (req,res)=>{
    try {
        const createCart = await api.create(req.body)
        res.json(createCart)
    } catch (error) {
        throw new Error('Error al crear carrito', error)
    }
});


cartRouter.get('/:id/productos', async (req, res) => {
    try {
        const {id} = req.params
        const cart = await api.getOne(id);
        res.json(cart.products) 
    } catch (err) {
        throw new Error('Error subir carrito', error)
    }
});


cartRouter.post('/:id/productos', async (req, res) => {
    try {
        const {id} = req.params
        const cart = await api.getOne(id);
        const products = req.body; 
        if (cart && products) {
            const updatedCart = await api.addProductos(cart, products);
            const newCart = await api.getOne(updatedCart._id);
            res.json({
                message: 'Productos agregados con éxito',
                cart: newCart});
        }
        if(!cart) {
            res.status(404).json({message: 'Carrito no encontrado. id: ' + id});
        }
        if(!products) {
            res.status(404).json({message: 'La lista de productos está vacía'});
        }
    } catch (err) {
        throw new Error('Error agregando productos al carrito', error)
    }
});



cartRouter.delete('/:id/productos/:productoId', async (req, res) => {
    try {
        const {id} = req.params
        const productId = req.params.productoId;
        const cart = await api.getOne(id);
        if (cart && productId) {
            const updatedCart = await api.deleteProduct(cart, productId);
            const newCart = await api.getOne(updatedCart._id);
            res.json({
                message: 'Producto eliminado con éxito',
                cart: newCart});
        }
         if(!cart) {
            res.status(404).json({message: 'Carrito no encontrado. id: ' + id});
        }
        if(!productId) {
            res.status(404).json({message: 'La lista de productos está vacía'});
        }
    } catch (err) {
        throw new Error('Error agregando productos al carrito', error)
    }
});



export default cartRouter;