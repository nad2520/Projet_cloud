import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

const PORT = process.env.PORT || 5000;

if (!process.env.JWT_SECRET) {
  console.error("JWT_SECRET manquant dans le fichier .env");
  process.exit(1);
}
await connectDB();
app.listen(PORT, () => console.log('API démarrée sur http://localhost:${PORT}'));