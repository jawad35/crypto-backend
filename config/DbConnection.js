const mongoose = require('mongoose');

const localDb = "mongodb://cryptoAdmin:AtHp%262QE%5E4%24-(OP)@37.221.93.179:27017/"

 const db =()=>{ 
                try {
                    mongoose.connect(localDb)
                    console.log("DB CONNECTED")
                } catch (error) {
                    console.log({error, msg: "Error connecting to Mongo ". localDb})
                }    
}

module.exports = db;