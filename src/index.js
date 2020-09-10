const express = require('express')
const bodyParser = require('body-parser')


const app = express();

//Aqui indico o uso do Body-Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Aqui fica nossa rota 
require('./app/controllers/index')(app)


app.listen(3000)
