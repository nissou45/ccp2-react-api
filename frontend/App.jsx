import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import "./style.css";
import "./App.css";
import Commandes from "./pages/Commandes";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
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
