import { useState } from "react";
import Search from "../components/Search";
import WebApi from "../components/WebApi";
import Card from "../components/UI/Card";

function Mainpage() {
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);
  console.log(songs);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="z-50 bg-black/95 backdrop-blur-sm">
        <Search onSearch={setQuery} />
        <p className="bg-[#1a1a1a] text-sm md:text-base text-gray-400 text-center py-2 border-b border-white/10">
          {query ? `Showing ${songs.length} results` : "_"}
        </p>
      </div>

      <WebApi query={query} song={setSongs} />

      <main className="px-4 py-6 md:px-8">
        {query ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {songs.map((track) => (
              <Card
                addOrRemove={true}
                key={track.id}
                id={track.id}
                image={track.album.images[0]?.url}
                name={track.name}
                artist={track.artists.map((a) => a.name).join(", ")}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[50vh] text-gray-500">
            <p className="text-lg">Start typing to discover songs</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Mainpage;
