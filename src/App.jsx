import './App.css';
import { Route, Routes } from 'react-router-dom';
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
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
    </FavoritesContext.Provider>
  )
}

export default App;