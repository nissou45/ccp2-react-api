import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h3>Menu</h3>

      <ul>
        <li>
          <Link to="/profile">Mon Profil</Link>
        </li>

        <li>
          <Link to="/commandes">Mes Commandes</Link>
        </li>

        <li>
          <Link to="/register">S'inscrire</Link>
        </li>

        <li>
          <Link to="/login">Se connecter</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
