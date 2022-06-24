import { Router } from "express";
import {productsDao as api} from "../daos/index.js";
const productRouter = new Router();


productRouter.get('/', async (req,res)=>{
    try {
        const allProducts = await api.getAll()
        res.json(allProducts)
    } catch (error) {
        throw new Error('Error router getAll', error)
    }
});

productRouter.get('/:id', async (req, res) => {
    try{
        const {id} = req.params
        const product = await api.getOne(id);
        res.json(product) 
    }
    catch (err){
        throw new Error('Error router getOne', error)
    }
});



productRouter.post('/', async (req,res)=>{
    try {
        const createProduct = await api.create(req.body)
        res.json(createProduct)
    } catch (error) {
        throw new Error('Error productRouter.post', error)
    }
});


productRouter.put('/:id', async (req, res) => {
    try{
        const {id} = req.params
        const updatedProduct = await api.update(id, req.body);
        res.json({
            message: 'Producto actualizado correctamente',
            id: updatedProduct._id
            });
    }catch (err){
        throw new Error('Error router al actualizar el producto', error)
    }
});

productRouter.delete('/:id', async(req,res)=>{
    try {
        const {id} = req.params
        const deleteProduct = await api.deleteById(id)
        res.json({
            message: 'Producto eliminado correctamente',
            id: deleteProduct._id
            });
    } catch (error) {
        throw new Error('Error router al borrar el producto', error)
    }
})





export default productRouter