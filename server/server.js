import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/connection.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(
        `API server running on port ${PORT} at http://localhost:${PORT}`
    );
});
