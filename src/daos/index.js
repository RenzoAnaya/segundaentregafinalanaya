import dotenv from 'dotenv';
dotenv.config();
let productsDao 
let cartsDao

switch (process.env.DB_CONNECTION) {
        case 'mongoDB':
            import('./products/MongoDBProducts.js').then(({MongoDBProducts})=>{
                productsDao = new MongoDBProducts();
            })
            import('./carts/MongoDBCarts.js').then(({MongoDBCarts})=>{
                cartsDao = new MongoDBCarts();
            });
            break;
        case 'firebase':
            import('./productos/FirebaseProducts.js').then(({FirebaseProducts})=>{
                productsDao = new FirebaseProducts();
            })
            import('./carts/FirebaseCarts.js').then(({FirebaseCarts})=>{
                cartsDao = new FirebaseCarts();
            })
            break;
        default:
            console.log('Default')
            break;
};


export {productsDao, cartsDao}



