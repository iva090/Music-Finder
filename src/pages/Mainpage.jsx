import { useState } from "react";
import Search from "../components/Search";
import WebApi from "../components/WebApi";
import Card from "../components/UI/Card";

function Mainpage() {
  const [query, setQuery] = useState('');
  const [songs, setSongs] = useState([]);
  console.log(songs)

  return (
    <div className="min-h-screen bg-black text-white">
      <Search onSearch={setQuery}/>
      
      <p className="bg-[#3b3b3bff] text-xl text-center py-2">
        {query ? `Showing ${songs.length} results` : "_"}
      </p>

      <WebApi query={query} song={setSongs} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {songs.map((track) => (
          <Card id={track.id} image={track.album.images[0]?.url} name={track.name} artist={track.artists.map(a => a.name).join(', ')} />
        ))}
      </div>
    </div>
  );
}

export default Mainpage;