import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

const app = express();

app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: 'https://mern-project-1zr5.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  console.log("Request received at /");
  res.set("Cache-Control", "no-store");
  return res.status(200).send("It is a simple project");
});

app.use('/Book', booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App is connected to the database");
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
    process.exit(1);
  });
