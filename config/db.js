const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'});
const conectarDB = async () => {
 try {
     await mongoose.connect(process.env.DB_MONGO, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useFindAndModify: false
     });
     console.log('Db Conectada');
     
 } catch (error) {
     console.log(error);
     process.exit(1)//Deneter la app
 }
}

module.exports = conectarDB;