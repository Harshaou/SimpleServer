const mongoose = require('mongoose')

let employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    picture: String,
    salery: String,
    position: String
})

mongoose.model('employeeModel', employeeSchema)