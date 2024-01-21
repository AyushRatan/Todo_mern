const mongoose = require("mongoose")
const { boolean } = require("zod")

mongoose.connect("mongodb+srv://ayushratan974:oUSeTMiDG2MbZMld@cluster0.am4sgae.mongodb.net/todo_100xdev")

const todo_schema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model("todo",todo_schema)

module.exports = {
    todo
}