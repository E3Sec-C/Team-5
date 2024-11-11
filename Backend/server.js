import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { connectDB } from "./Config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";

// Load environment variables
dotenv.config();

// App config
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// API endpoints
app.use('/api/food', foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);

// Test API endpoint
app.get("/", (req, res) => {
    res.send("API working");
});

// Start express server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});



//mongodb+srv://RAS:hx9zV07mxo10Ahqy@cluster0.13dib.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
