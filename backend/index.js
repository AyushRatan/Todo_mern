const express = require("express")

const app = express()

app.use(express.json())

app.get("/todos",function(req,res){
    res.send("Hi there")
    
})


app.post("/todo",function(req,res){

})


app.put("/completed",function(req,res){

})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})