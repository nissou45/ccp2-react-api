import { db } from "../config/db.js";

export const UserModel = {
  async create({ email, password }) {
    const [result] = await db.execute(
      "INSERT INTO utilisateur (email, password_hash) VALUES (?, ?)",
      [email, password],
    );
    return result.insertId;
  },

  async findByEmail(email) {
    const [rows] = await db.execute(
      "SELECT id, email, password_hash, role FROM utilisateur WHERE email = ?",
      [email],
    );
    return rows[0];
  },

  async findById(id) {
    const [rows] = await db.execute(
      "SELECT id, email, role FROM utilisateur WHERE id = ?",
      [id],
    );
    return rows[0];
  },
};
