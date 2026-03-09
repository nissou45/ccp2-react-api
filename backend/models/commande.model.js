import { db } from "../config/db.js";

export const CommandeModel = {
  async createCommande({ produit, prix, utilisateur_id }) {
    const [result] = await db.execute(
      "INSERT INTO commande (produit, prix, utilisateur_id) VALUES (?, ?, ?)",
      [produit, prix, utilisateur_id],
    );

    return result.insertId;
  },

  async findByUser(utilisateur_id) {
    const [rows] = await db.execute(
      "SELECT * FROM commande WHERE utilisateur_id = ?",
      [utilisateur_id],
    );

    return rows;
  },

  async updateCommande({ id, produit, prix, utilisateur_id }) {
    const [result] = await db.execute(
      "UPDATE commande SET produit = ?, prix = ? WHERE id = ? AND utilisateur_id = ?",
      [produit, prix, id, utilisateur_id],
    );

    return result.affectedRows > 0;
  },

  async deleteCommande({ id, utilisateur_id }) {
    const [result] = await db.execute(
      "DELETE FROM commande WHERE id = ? AND utilisateur_id = ?",
      [id, utilisateur_id],
    );

    return result.affectedRows > 0;
  },
};
