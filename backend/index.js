import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js"
import cors from 'cors';

const app = express();

app.use(cors({
    origin: [""],
    methods:["POST", "GET", "PUT", "DELETE"],
    credentials : true
}))

app.use(express.json());

app.use(cors());

app.get("/",(request,response) => {
    console.log(request)
    return response.status(234).send("It is a simple project")
})

app.use('/Book', booksRoute)

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App is connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening to the port: ${PORT}`);
        });
    })
    .catch((erroe) => {
        console.log(erroe)
    })