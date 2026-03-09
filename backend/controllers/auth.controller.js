import argon2 from "argon2"; //hash sécurisé des mots de passe
import jwt from "jsonwebtoken"; //créer un token pour l’authentification
import { UserModel } from "../models/utilisateur.model.js";
/* REGISTER */
export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Données reçues:", { email, password });

    const existingUser = await UserModel.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "Email déjà utilisé" });
    }

    const hashedPassword = await argon2.hash(password);

    const userId = await UserModel.create({
      email,
      password: hashedPassword,
    });

    return res.status(201).json({ message: "Utilisateur créé", userId });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur" });
  }
};

/* LOGIN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findByEmail(email);
    if (!user) {
      return res.status(400).json({ message: "Utilisateur introuvable" });
    }

    const isValid = await argon2.verify(user.password_hash, password);
    if (!isValid) {
      return res.status(401).json({ message: "Mot de passe incorrect" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    return res.json({ token });
  } catch {
    return res.status(500).json({ message: "Erreur serveur" });
  }
};

/* DASHBOARD */
export const dashboard = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        message: "Utilisateur introuvable",
      });
    }
    return res.json({ message: "Accès autorisé", user });
  } catch {
    return res.status(500).json({ message: "Erreur serveur" });
  }
};
