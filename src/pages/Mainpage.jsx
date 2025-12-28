import { useState } from "react";
import Search from "../components/Search";
import WebApi from "../components/WebApi";

function Mainpage() {
  const [query, setQuery] = useState('')

  WebApi();
  return (
    <div>
      <Search onSearch={setQuery}/>
      <p className="bg-[#3b3b3bff] text-xl text-center">Searching for: {query}</p>
    </div>
  );
}

export default Mainpage;
