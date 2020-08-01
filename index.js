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
        user: req.body.user,
        email: req.body.email,
        picture: req.body.picture,
        salery: req.body.salery,
        position: req.body.position,
        phone: req.body.phone,
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
        user: req.body.user,
        email: req.body.email,
        picture: req.body.picture,
        salery: req.body.salery,
        position: req.body.position,
        phone: req.body.phone,
    })
    .then(data => {
        console.log(data)
        res.send(data)
    })
    .catch(err => console.log(err, 'update Failed'))
    
})


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('server live on 5000'))