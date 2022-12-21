const mongoose = require('mongoose')
const initMongoDB = async ()=> {
    const conn = await mongoose.connect[process.env.MONGODB_URI]
    console.log(conn)
}
module.exports = initMongoDB



// console.log(`MongoDB is running at ${conn?.connection.host}`)