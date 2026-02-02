import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// allow multiple users (CORS + JSON)
app.use(cors());
app.use(express.json());

// auth routes
app.use("/api/auth", authRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Server running for multiple users");
});

// connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
