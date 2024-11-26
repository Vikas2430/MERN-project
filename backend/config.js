import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 5555;
export const mongoDBURL = process.env.MONGO_DB_URL;


// export const PORT = process.env.PORT || 5555;

// export const mongoDBURL = "mongodb+srv://root:root@book-store-mern.4xyef.mongodb.net/book-collection?retryWrites=true&w=majority&appName=Book-store-MERN";