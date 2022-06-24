import mongoose from "mongoose";
import config from "../config.js"



mongoose.connect(config.mongoDB.URL, config.mongoDB.options)

class MongoClass{

constructor(collectionName, docSchema){
    this.collection = mongoose.model(collectionName, docSchema)
}

async getAll(){
    try {
        const all = await this.collection.find({})
        return all
    } catch (error) {
        throw new Error('Error obteniendo ',error)
    }
};


async getOne(id) {
    try{
        const one = await this.collection.findById(id)
        return one
    }catch(err){
        throw new Error('Error al obtener ',error)
    }
}


async create(obj){
    try {
        const newDoc = await this.collection.create(obj)
        return newDoc
    } catch (error) {
        throw new Error ('Error al crear', error)
    }
}



async update(id, doc) {
    try{
        const updatedDoc = await this.collection.findByIdAndUpdate(id, doc)
        return updatedDoc
    }catch(err){
        throw new Error('Error al modificar',error)
    }
}



async deleteById(id){
    try {
        const deleteProduct = await this.collection.findByIdAndDelete({_id:id})
        return deleteProduct
    } catch (error) {
        throw new Error('Error al borrar', error)
        
    }
}


}


export default MongoClass