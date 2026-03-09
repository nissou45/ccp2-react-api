import express from "express";
import { register, login, dashboard } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";
import {
  createCommande,
  myCommandes,
  updateCommande,
  deleteCommande,
} from "../controllers/commande.controller.js";

const router = express.Router();

/* Créer une commande */
router.post("/", authMiddleware, createCommande);

/* Récupérer les commandes de l'utilisateur connecté */
router.get("/", authMiddleware, myCommandes);

/* Modifier une commande */
router.put("/:id", authMiddleware, updateCommande);

/* Supprimer une commande */
router.delete("/:id", authMiddleware, deleteCommande);

export default router;
