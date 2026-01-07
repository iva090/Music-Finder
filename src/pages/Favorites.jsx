import { useContext } from "react";
import { FavoritesContext } from "../components/FavoritesContext";
import Card from "../components/UI/Card";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);


  return (
    <div className="p-8 bg-black text-white h-screen">
      <h1 className="text-2xl font-bold text-white mb-6">Your Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-400">No favorite songs yet!</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {favorites.map((track) => (
            <Card
              addOrRemove={false}
              key={track.id}
              id={track.id}
              image={track.image}
              name={track.name}
              artist={track.artist}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
