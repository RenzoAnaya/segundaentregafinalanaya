import MongoClass from "../../contenedores/MongoClass.js";

export class MongoDBProducts extends MongoClass{
    constructor(){
        super('products',{
            productName: {type: String, required: true},
            description: {type: String},
            SKU: {type: Number, required: true},
            price: {type: Number, required: true},
            stock: {type: Number, required: true},
            photoURL: {type: String, required: true},
        })
    }
}