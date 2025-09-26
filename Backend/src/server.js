import express from "express";
import { connectDB } from "./config/db.js";
import notesRoutes from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import ratelimtter from "./middleware/ratelimitter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

app.use(express.json());

app.use(ratelimtter);

app.use("/api/notes", notesRoutes);
