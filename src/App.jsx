import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom'; // Changed to HashRouter
import Mainpage from './pages/Mainpage';
import Favorites from './pages/Favorites';
import Header from './components/headers/Header'
import { FavoritesContext } from './components/FavoritesContext';
import { useState } from 'react';

function App() {
  const [favorites, setFavorites] = useState([])
  
  function addToFavorites(song){
    if (favorites.some((sg) => sg.id === song.id)){
      alert("Already in favorites")
    } else {
      setFavorites((prev) => [...prev, song]);
    }
  };

  function removeFromFavorites(id) {
    setFavorites((prev) => prev.filter((song) => song.id !== id));
  }

  return (
    <FavoritesContext.Provider value={{favorites, addToFavorites, removeFromFavorites}}>
      <HashRouter>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </HashRouter>
    </FavoritesContext.Provider>
  )
}

export default App;