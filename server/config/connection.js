import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/chatDB")
        console.log("connected to DB");
    } catch(error) {
        console.log("error connecting to DB", error.message);
    }
}

export default connectDB;
