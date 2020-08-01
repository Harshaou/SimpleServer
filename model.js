const mongoose = require('mongoose')

let employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    picture: String,
    salery: String,
    position: String
})

mongoose.model('employeeModel', employeeSchema)