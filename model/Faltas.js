const mongoose = require('mongoose')
const FaltasSchema = new mongoose.Schema({
    nome : String
    
})
module.exports = mongoose.model('Faltas',FaltasSchema)
