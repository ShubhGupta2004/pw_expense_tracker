const mongoose = require('mongoose');
const db = async() => {
    try{
        mongoose.set('strictQuery',false)
        console.log('db connected')
        await mongoose.connect(process.env.MONGO_URL)
    }catch(error){
        console.log.apply('DB connection error')
    }
}

module.exports = {db}