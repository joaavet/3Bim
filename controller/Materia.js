const Materia = require('../model/Materia')
//CRUD - CREATE - READ- UPDATE - DELETE
module.exports ={
    async index(req, res){    
      let materias = await Materia.find().sort({id:1})
        return res.json(materias)
    },

    async store(req,res){
        const {name} = req.body;
        const materia = await Materia.create({name})
        return res.json(materia)
      },

      async update(req,res){
        //recupera o Id que pela url query e guarda na variavel id
       
        //recupera as inf do post em 

        let materia = await Materia.findById(req.query.id);
        materia.name = req.body.name;
        materia = await Materia.updateOne({'_id': req.query.id} , materia)
    
        return res.json({messagem : 'Atualizar a materia ' + id +' com os dados do post '+ materia.name})
      },

    async delete(req,res){
    let materia = await Materia.findById(req.query.id);
    materia = await Materia.deleteOne(materia);
    return res.json(materia);
    
  },

  }

