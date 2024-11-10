import express from "express"
import cors from "cors"
import { connectDB } from "./Config/db.js"
import foodRouter from "./routes/foodRoute.js"
//app config
const app=express()
const port=4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use('/api/food',foodRouter)

//http method to request data from server
app.get("/",(req,res)=>{
    res.send("API working")
})

//to run express server
app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})


//mongodb+srv://RAS:hx9zV07mxo10Ahqy@cluster0.13dib.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
