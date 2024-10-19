import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://pritamshakyawal6:sn2tWQ9h6vwoK3C2@cluster0.9bjcg.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}