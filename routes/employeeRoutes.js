const express = require('express')
const router = express.Router()
const employeecontroller = require('../controllers/employecontrollers')
const Employee = require('../models/Employee')

router.post('/add-emp', employeecontroller.createEmployee)
router.get('/allemployees', employeecontroller.getEmployees)
router.get('/employee/:id', employeecontroller.singleEmployee)
router.put('/update/:id', employeecontroller.updateEmployee)
router.delete('/delete/:id', employeecontroller.deleteEmployee)

module.exports = router