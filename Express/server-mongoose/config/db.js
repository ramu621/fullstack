const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://ramu621:ramu@123_@in-aws.wasqo.mongodb.net/")

    const connection= mongoose.connect;

    connection.on('connected', ()=> (console.log(" DB Connected")))
    connection.on('error', () => (console.log("DB Error")))

    module.exports = mongoose