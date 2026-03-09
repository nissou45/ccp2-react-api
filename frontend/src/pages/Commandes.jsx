import { useState, useEffect } from "react";

function Commandes() {
  const [commandes, setCommandes] = useState([]);
  const [produit, setProduit] = useState("");
  const [prix, setPrix] = useState("");

  const token = localStorage.getItem("token");

  async function chargerCommandes() {
    const response = await fetch("http://localhost:3000/api/commandes", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    const data = await response.json();

    if (Array.isArray(data)) {
      setCommandes(data);
    }
  }

  useEffect(() => {
    chargerCommandes();
  }, []);

  async function ajouterCommande() {
    await fetch("http://localhost:3000/api/commandes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        produit: produit,
        prix: prix,
      }),
    });

    setProduit("");
    setPrix("");
    chargerCommandes();
  }

  async function supprimerCommande(id) {
    await fetch("http://localhost:3000/api/commandes/" + id, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    chargerCommandes();
  }

  async function modifierCommande(id) {
    await fetch("http://localhost:3000/api/commandes/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        produit: produit,
        prix: prix,
      }),
    });

    setProduit("");
    setPrix("");
    chargerCommandes();
  }

  return (
    <div>
      <h2>Mes commandes</h2>

      <input
        placeholder="produit"
        value={produit}
        onChange={(e) => setProduit(e.target.value)}
      />

      <input
        placeholder="prix"
        value={prix}
        onChange={(e) => setPrix(e.target.value)}
      />

      <button onClick={ajouterCommande}>Ajouter</button>

      {commandes.length === 0 ? (
        <p>Aucune commande</p>
      ) : (
        <ul>
          {commandes.map((commande) => (
            <li key={commande.id}>
              {commande.produit} - {commande.prix} €
              <button onClick={() => supprimerCommande(commande.id)}>
                Supprimer
              </button>
              <button onClick={() => modifierCommande(commande.id)}>
                Modifier
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Commandes;
