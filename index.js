const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('./model')

app.use(bodyParser.json())
const Employee = mongoose.model('employeeModel')

  
  

const mongoUrl = 'mongodb+srv://Employeeapp:T8hbFgMUty6suJIJ@cluster0.8kitw.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'))


app.get('/', (req,res) => {
    Employee.find({})
    .then(data => res.send(data))
    .catch(err => console.log(err, 'Failed'))
})

app.post('/send', (req,res) => {
    const employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        salery: req.body.salery,
        phone: req.body.phone,
        picture: req.body.picture,
        position: req.body.position,
    })
    employee.save()
    .then(data => {
        console.log(data)
        res.send(data)
    })
    .catch(err => console.log(err, 'Failed'))
    
})

app.post('/delete', (req,res) => {
    Employee.findByIdAndRemove(req.body.id)
    .then(data => {
        console.log(data)
        res.send(data)
    })
    .catch(err => console.log(err, 'delete Failed'))
    
})

app.post('/update', (req,res) => {
    Employee.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        email: req.body.email,
        salery: req.body.salery,
        phone: req.body.phone,
        picture: req.body.picture,
        position: req.body.position,
    })
    .then(data => {
        console.log(data)
        res.send(data)
    })
    .catch(err => console.log(err, 'update Failed'))
    
})


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('server live on 5000'))