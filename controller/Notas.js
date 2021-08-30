const Notas = require('../model/Notas')

module.exports = {
  
  async index(req,res){
    let notas = await Notas.findById(req_materia_id)
    return res.json(notas)
  },

  async store(req,res){
    let notas = req.body;
    notas = await Notas.create(notas)
    return res.json(notas)
  },

  async update(req,res){        
    let notas = req.body;
    notas.atualizado_em = Date.now();
    notas = await Notas.updateOne({'_id': req.query.id} , notas)
    return res.json(notas)
  },
   
  async delete(req,res){    
    var id = req.query.id;
    let notas = await Notas.findById(id);
    notas = await Notas.deleteOne(Notas);

    return res.json(notas);
    
  }
}