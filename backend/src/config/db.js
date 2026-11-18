import mongoose from "mongoose";

export default async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connecté :", mongoose.connection.host);
    } catch (err) {
        console.error("Erreur de connexion à MongoDB :", err.message);
        process.exit(1);
    }
}