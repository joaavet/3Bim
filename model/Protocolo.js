const mongoose = require('mongoose')

const ProtocoloSchema = new mongoose.Schema({
  prot : String,

})

module.exports = mongoose.model('Protocolo', ProtocoloSchema);