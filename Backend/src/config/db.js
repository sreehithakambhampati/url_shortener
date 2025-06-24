import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config(); 



const connectDB = async () => {
    // console.log("DB URI from env:", process.env.MONGODB_URI);
    try {
        await mongoose.connect(process.env.MONGODB_URI
        );
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
    }
};

export default connectDB;
