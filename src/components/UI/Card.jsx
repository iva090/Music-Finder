import { useContext, useState } from "react";
import { Play, Plus, Trash, X } from "lucide-react";
import { FavoritesContext } from "../FavoritesContext";
import TooltipMarker from "./Tooltip";

function Card(props) {
  const [showPlayer, setShowPlayer] = useState(false);
  const addOrRemove = props.addOrRemove;

  const { addToFavorites, removeFromFavorites } = useContext(FavoritesContext);

  const embedUrl = `https://open.spotify.com/embed/track/${props.id}?utm_source=generator&theme=0`;

  return (
    <div className="p-5 bg-[#080b24] border border-[#330994] rounded-xl hover:bg-[#282828] transition-all relative group">
      <img
        src={props.image}
        alt={props.name}
        className="w-full aspect-square object-cover mb-3 rounded-lg shadow-lg"
      />

      {!showPlayer && (
        <button
          onClick={() => setShowPlayer(true)}
          className="absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 p-4 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Play fill="black" size={24} className="text-black" />
        </button>
      )}
      <div className="flex justify-between">
        <h3 className="font-bold text-2xl truncate text-white">{props.name}</h3>
        {addOrRemove ? (
          <button
            className="bg-green-900 border-none rounded-full w-10 h-10 flex items-center justify-center hover:bg-green-700 transition-all"
            onClick={() => addToFavorites(props)}
          >
            <TooltipMarker
              text={<Plus size={20} />}
              Tooltip={"add to favorites"}
            />
          </button>
        ) : (
          <button
            className="bg-red-900 border-none rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-700 transition-all"
            onClick={() => removeFromFavorites(props.id)}
          >
            <TooltipMarker
              text={<Trash size={20} />}
              Tooltip={"remove from favorites"}
            />
          </button>
        )}
      </div>
      <p className="text-lg text-gray-400 mb-2">{props.artist}</p>

      {showPlayer ? (
        <div className="mt-2 animate-in fade-in duration-300">
          <div className="flex justify-end mb-1">
            <button
              onClick={() => setShowPlayer(false)}
              className="text-xs text-gray-500 hover:text-white flex items-center gap-1"
            >
              <X size={12} /> Close Player
            </button>
          </div>
          <iframe
            style={{ borderRadius: "12px" }}
            src={embedUrl}
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      ) : (
        <div className="h-[80px] flex items-end">
          <p className="text-xs text-gray-600">Click play to listen</p>
        </div>
      )}
    </div>
  );
}

export default Card;
