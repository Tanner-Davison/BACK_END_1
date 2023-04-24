const express = require('express')
const cors = require('cors')
const ctrl = require('./ctrl')

const {getAllInventory, getInvById, getInvQuery} = ctrl;

const app = express()

//middleware
app.use(express.json())
app.use(cors())

//API
app.get('/api/inventory/all',getAllInventory)
app.get('/api/inventory/:id',getInvById)
app.get('/api/inventory/',getInvQuery)
app.listen(5051, ()=> console.log('Server is running on Port 5051'))
