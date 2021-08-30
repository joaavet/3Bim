const mongoose = require('mongoose')
const NotasSchema = new mongoose.Schema({
    pbm : Number,
    sbm : Number,
    tbm : Number,
    qbm : Number,
    materia_id : String
})
module.exports = mongoose.model('Notas',NotasSchema)
