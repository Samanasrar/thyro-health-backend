import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.js";

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
  origin: [
    "https://thyro-health-frontend.vercel.app", 
    "http://localhost:5173"
  ],
  methods: ["GET", "POST"],
}));
app.use(express.json());


app.use("/api/contact", contactRoutes);


app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Start server
app.listen(PORT,"0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
