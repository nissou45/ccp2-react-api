import { useEffect, useState } from "react";
import { api } from "../api/api";

const Profile = () => {
  const [commandes, setCommandes] = useState([]);

  useEffect(() => {
    const fetchCommandes = async () => {
      try {
        const res = await api.get("/commandes/my-commandes");

        setCommandes(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCommandes();
  }, []);

  return (
    <div>
      <h1>Mon profil</h1>

      <h2>Mes commandes</h2>

      {commandes.length === 0 ? (
        <p>Aucune commande</p>
      ) : (
        commandes.map((commande) => (
          <div key={commande.id}>
            {commande.produit} - {commande.prix} €
          </div>
        ))
      )}
    </div>
  );
};

export default Profile;
