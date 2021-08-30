const Faltas = require('../model/Faltas')

module.exports = {
  
  async index(req,res){
    let faltas = await Faltas.find()
    return res.json(faltas)
  },

  async store(req,res){
    let faltas = req.body;
    faltas = await Faltas.create(faltas)
    return res.json(faltas)
  },

  async update(req,res){        
    let faltas = req.body;
    faltas.atualizado_em = Date.now();
    faltas = await Faltas.updateOne({'_id': req.query.id} , faltas)
    return res.json(faltas)
  },
   
  async delete(req,res){    
    var id = req.query.id;
    let fatas = await Faltas.findById(id);
    faltas = await Faltas.deleteOne(Faltas);

    return res.json(faltas);
    
  }
}