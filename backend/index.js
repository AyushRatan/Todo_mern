const express = require("express")
const { createTodo, updateTodo } = require("./types")
const { todo } = require("./db")

const app = express()

app.use(express.json())

app.get("/todos",async function(req,res){
    
    const all_todo = await todo.find({})
    res.json({
        all_todo
    })
})


app.post("/todo",async function(req,res){
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success){
        return res.status(411).json({
            message:"Wrong Inputs"
        })
    }
    
    await todo.create({
      title : createPayload.title,
      description: createPayload.description,
      completed: false
    })

    res.json({
        message:"todo item inserted successfully"
    })
})


app.put("/completed",async function(req,res){
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)

    if(!parsedPayload.success){
        return res.status(411).json({
            message:"wrong inputs"
        })

    }
    // mongoDB update code here
    await todo.updateOne({
        _id:req.body.id
    },{
        completed:true
    })

    res.json({
        message:"updated complete status"
    })

})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})