const inventory = require('./db.json') // array of objects
const inventoryArr = Object.values(inventory) //converts objects into arrays
const invArr = inventoryArr.map((i)=> i.item) // gives me the objects in the DB as an array of strings

let id = 7;

module.exports={

    getAllInventory: (req,res)=>{
        res.status(200).send(invArr)
    },
    getInvById: (req,res)=>{
       const {id} = req.params
        
       if(id){
        const sendInv = inventoryArr.find((inv)=> inv.id == id).item
        console.log("sendInv:", sendInv);
        res.status(200).send(sendInv)
       }else{
        console.log(`not working bud`)
       }
    },
    getInvQuery: (req, res) => {
        const {item} = req.query;

        if (item.length > 2  ) {
          let invItem = 
          invArr.filter((inv) =>
          inv.toLowerCase().includes(item.toLowerCase())
          )
          res.status(200).send(invItem);
        } else {
          res.status(400).send(`not working`)
          console.log("not working");
        }
      }}