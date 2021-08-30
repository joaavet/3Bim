const express = require('express')
const mongoose = require('mongoose')


const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://alunojoao:21252423@cluster0.i7q7c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})


app.use(express.json())   
app.use(routes)

app.listen(3030)

console.log("servidor rodando no end: http://localhost:3030")