import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 5555;
export const mongoDBURL = process.env.MONGO_DB_URL;
export const BASE_URL = process.env.REACT_APP_API_URL;


if (!mongoDBURL) {
    throw new Error("MONGO_DB_URL is not defined. Check your environment variables.");
}
if (!BASE_URL) {
    throw new Error("MONGO_DB_URL is not defined. Check your environment variables.");
}