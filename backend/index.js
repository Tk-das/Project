require("dotenv").config();
const cors = require("cors")
const mongoose = require("mongoose")
const express = require("express")
const app = express()

const projectRouter = require("./routes/project.route.js")
const customerRouter = require("./routes/customer.route.js")
const itemRouter = require("./routes/item.route.js")

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use("/project",projectRouter)
app.use("/customer",customerRouter)
app.use("/item",itemRouter)




//Mongodb Connection
mongoose.connect(process.env.DB_URI)
    .then(()=>{
        console.log("mongodb connection sucsess")
        //Express setup in port
        app.listen(PORT,()=>{
            console.log(`server is running port: ${PORT}`)
        })
    })
    .catch((err)=>console.log("Mongodb connection faild",err.message))