import { useContext } from 'react';
import { FavoritesContext } from '../components/FavoritesContext';
import Card from '../components/UI/Card';

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-white mb-6">Your Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-400">No favorite songs yet!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map((song) => (
            <Card key={song.id} {...song} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;