//mongodb+srv://Vikram:Dbmongo@cluster0.dsmym.mongodb.net/
const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product')
const app = express()
app.use(express.json())

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoose.connect("mongodb+srv://Vikram:Dbmongo@cluster0.dsmym.mongodb.net/")
.then(()=>{
    console.log("mongodb connected succesfully")
})

app.post('/api/addproductdata', async (req, res) => {
    
try{
    const xyz = new Product(req.body);
    await xyz.save()
    res.send("data saved successfully")
}
catch(error){

    console.log(" adding product data failed")
}

})




