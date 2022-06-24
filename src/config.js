import 'dotenv/config'

const MONGODB_USER = process.env.MONGODB_USER;
const DB_PASSWORD = process.env.MONGODB_PASSWORD;
const DB_NAME = process.env.DB_NAME

export default {

    mongoDB:{
        URL:`mongodb+srv://${MONGODB_USER}:${DB_PASSWORD}@cluster0.tlxsh8c.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
        options:{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        }   
    },

    fireBase:{

    },




}