import express from "express";
import { register, login, dashboard } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/dashboard", authMiddleware, dashboard);
router.get("/admin", authMiddleware, adminMiddleware, (req, res) => {
  res.json({ message: "Bienvenue dans la section admin 🤴🏻 !" });
});

export default router;
