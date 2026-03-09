import { CommandeModel } from "../models/commande.model.js";

export const createCommande = async (req, res) => {
  try {
    console.log("Données reçues pour la commande :", req.body);
    console.log("Utilisateur connecté :", req.user);
    const { produit, prix } = req.body;

    const commandeId = await CommandeModel.createCommande({
      produit,
      prix,
      utilisateur_id: req.user.id,
    });

    res.status(201).json({
      message: "Commande créée",
      commandeId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Erreur lors de la création de la commande",
    });
  }
};
export const myCommandes = async (req, res) => {
  try {
    const commandes = await CommandeModel.findByUser(req.user.id);

    res.status(200).json(commandes);
  } catch (error) {
    console.error("Erreur récupération commandes :", error);

    res.status(500).json({
      message: "Erreur récupération commandes",
    });
  }
};

export const updateCommande = async (req, res) => {
  try {
    const { produit, prix } = req.body;
    const { id } = req.params;

    if (!produit || !prix) {
      return res.status(400).json({
        message: "Produit et prix obligatoires",
      });
    }

    const updated = await CommandeModel.updateCommande({
      id,
      produit,
      prix,
      utilisateur_id: req.user.id,
    });

    if (!updated) {
      return res.status(404).json({
        message: "Commande introuvable",
      });
    }

    res.status(200).json({
      message: "Commande mise à jour",
    });
  } catch (error) {
    console.error("Erreur mise à jour commande :", error);
    res.status(500).json({
      message: "Erreur mise à jour commande",
    });
  }
};

export const deleteCommande = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await CommandeModel.deleteCommande({
      id,
      utilisateur_id: req.user.id,
    });
    if (!deleted) {
      return res.status(404).json({
        message: "Commande introuvable",
      });
    }
    res.status(200).json({
      message: "Commande supprimée",
    });
  } catch (error) {
    console.error("Erreur suppression commande :", error);
    res.status(500).json({
      message: "Erreur suppression commande",
    });
  }
};
