import mongoose from "mongoose";

const connectDB=async()=> {
try {
    await mongoose.connect(process.env.MONGO_URL,{
        dbName:"NotesApp",
    })
    console.log("mongo_DB connected succefully")
} catch (error) {
    console.error("Error connecting to MongoDB:", error.message);   
}
}
export default connectDB;