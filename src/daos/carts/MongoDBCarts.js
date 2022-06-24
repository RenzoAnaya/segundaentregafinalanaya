import MongoClass from "../../contenedores/MongoClass.js";
import mongoose from "mongoose";

export class MongoDBCarts extends MongoClass{
    constructor() {
        super("carts",{
            products:[   
                {
                    product: {type: mongoose.Schema.Types.ObjectId, ref: "products"},
                    quantity: {type: Number, required:true, default:1}
                }
            ],
        })
    }
    async addProducts(cart, products) {
        products.forEach(product => {

           const cartProduct = cart.products.find(p => p._id == product._id);
              if (cartProduct) {
                    cartProduct.cantidad ++;
            }else { 
              cart.products.push(product);
            }
        });
        const updatedCart = await this.collection.findByIdAndUpdate(cart._id, {products: cart.products});
        return updatedCart;
    }

    async deleteProduct(cart, productId) {
        const cartProduct = cart.products.find(p => p._id == productId);
        if (cartProduct) {
            cartProduct.cantidad > 1? cartProduct.cantidad --: cart.products = cart.products.filter(p => p._id != productId);
        }else{
            throw new Error("El producto no esta en el carrito");
        }
        const updatedCart = await this.collection.findByIdAndUpdate(cart._id, {products: cart.products});
        return updatedCart;
    }
}