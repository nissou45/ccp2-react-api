import "dotenv/config";
import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import commandeRoutes from "./routes/commande.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/commandes", commandeRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
