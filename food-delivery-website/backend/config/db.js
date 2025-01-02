import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sodhamitesh:840122@cluster0.bu2cj.mongodb.net/food-delivery-website').then(()=>console.log("DB Connected"))
}