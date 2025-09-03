import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.js"; // ✅ correct path


const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // allow frontend requests
app.use(express.json()); // parse JSON bodies

// Routes
app.use("/api/contact", contactRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
