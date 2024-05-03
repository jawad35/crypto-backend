const mongoose = require('mongoose');

const localDb = "mongodb://127.0.0.1:27017/crypto_exchange"

 const db =()=>{ 
                try {
                    mongoose.connect(localDb)
                    console.log("DB CONNECTED")
                } catch (error) {
                    console.log({error, msg: "Error connecting to Mongo ". localDb})
                }    
}

module.exports = db;