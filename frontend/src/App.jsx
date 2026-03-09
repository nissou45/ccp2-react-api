import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import Sidebar from "./components/Sidebar";
import Commandes from "./pages/Commandes";
import "./styles/style.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />

        <Sidebar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/profile" element={<Profile />} />

            <Route path="/commandes" element={<Commandes />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
