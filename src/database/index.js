const mongoose = require ('mongooose')



mongoose.connect('mongodb+srv://dbUser:<dbUser>@cluster0.ywhuy.mongodb.net/<dbUser>?retryWrites=true&w=majority', { useMongoClient: true })


mongoose.Promise = global.Promise

module.exports = mongoose

