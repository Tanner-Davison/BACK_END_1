// MOCK DATABASE//

const inventory = ['greeting card', 'wagon','Computer','table','chair','milk','sailboat','conditioner','rusty nail']


///////////////////////////////////////////////////////
const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

//ENDPOINTS//


app.get('/api/inventory/:id',(req,res)=>{
    const {id} = req.params

    if(inventory[id]){
        res.status(200).send(inventory[+id])
    }else{
        res.status(200).send(`Request is invalid`)
    }

    //or you can do this with no if and then statement NOT FUTURE PROOFING ERRORS---
    res.status(200).send(inventory[+id])
})

app.get('/api/inventory',(req,res)=>{
    
    if(req.query.item){
        const filteredItem = inventory.filter(invItem => invItem.toLowerCase().includes(req.query.item.toLowerCase()))
        
        res.status(200).send(filteredItem)
    }else{
        res.status(200).send(`No item found`)
    }
   
})

app.listen(5050, ()=> console.log('Server is running on Port 5050'))
