const mongoose = require('mongoose')



mongoose.connect('mongodb+srv://dbUser:dbUser@cluster0.ywhuy.mongodb.net/mongodb?retryWrites=true&w=majority', { useNewUrlParser: true })



mongoose.Promise = global.Promise

module.exports = mongoose

