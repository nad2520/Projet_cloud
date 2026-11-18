import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(helmet());
app.use(cors({origin: process.env.CLIENT_URL || "http://localhost:5173"}));
app.use(express.json({limit: "10kb"}));
if (process.env.NODE_ENV !== "production") app.use(morgan("dev")); 

app.get("/api/health", (req, res) => res.json({status: "ok"}));

export default app;