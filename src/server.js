import express from 'express';
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
const app = express();

app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);


const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`)
});