import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();


router.get("/", (req, res) => {
  res.json({ message: "Contact API is working ✅" });
});

// ✅ Contact form submission
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email address." });
    }

    const newContact = await prisma.contact.create({
      data: { name, email, message },
    });

    res.status(201).json({ message: "Message sent!", newContact });
  } catch (error) {
    console.error(" Error in /api/contact:", error);
    res.status(500).json({ error: "Something went wrong on the server." });
  }
});

export default router;
