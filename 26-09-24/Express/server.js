const express = require('express')
const app = express()
const port = 3000
const bodyparser =require("body-parser");
app.use(bodyparser.json());

//app.get('/', (req, res) => {
 // res.send('Hello World!')
 // res.sendStatus(404)
 // res.download("1.webp")
//})

app.post("/postuserinfo", (req,res) =>{
  const id=req.body.name;
  //const email=req.body,email;
  const phone=req.body.phone;
  res.send('data received sucessfully')
 // res.send(JSON.stringify(req.body);)


});

app.get("/product")

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})