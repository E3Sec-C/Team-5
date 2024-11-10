import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://RAS:hx9zV07mxo10Ahqy@cluster0.13dib.mongodb.net/Restuarant-Automation').then(()=>console.log("Db connected"))
}