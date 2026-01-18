import "./App.css";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import Header from "./components/headers/Header";
import Contact from "./pages/Contact";
import { FavoritesContext } from "./components/FavoritesContext";
import { useEffect, useState } from "react";
import GoToTop from "./components/GoToTop";

function App() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favoriteSongs");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoriteSongs", JSON.stringify(favorites));
  }, [favorites]);

  function addToFavorites(song) {
    if (favorites.some((sg) => sg.id === song.id)) {
      alert("Already in favorites");
    } else {
      setFavorites((prev) => [...prev, song]);
    }
  }

  function removeFromFavorites(id) {
    setFavorites((prev) => prev.filter((song) => song.id !== id));
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <GoToTop />
    </FavoritesContext.Provider>
  );
}

export default App;
