import { useState } from 'react';
import { SearchIcon } from 'lucide-react';

function Search({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form 
            onSubmit={handleFormSubmit} 
            className="sticky input-group h-10 w-full flex items-center gap-2"
        >
            <div className="relative flex-1">
                <input 
                    className="text-xl pl-12  ig-input text-center w-full h-full" 
                    placeholder='Enter a song' 
                    type="text" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            
            <button 
                type="submit" 
                className="p-2 bg-purple-800 text-white rounded-md hover:bg-blue-600"
            >
                <SearchIcon size={20} />
            </button>
        </form>
    )
}

export default Search;