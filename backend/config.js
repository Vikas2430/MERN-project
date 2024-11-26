import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 5555;
export const mongoDBURL = process.env.MONGO_DB_URL;

if (!mongoDBURL) {
    throw new Error("MONGO_DB_URL is not defined. Check your environment variables.");
}