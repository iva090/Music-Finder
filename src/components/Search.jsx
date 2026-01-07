import { SearchIcon } from 'lucide-react';

function Search({ onSearch }) {

    const handleInputChange = (e) => {
        const valu = e.target.value;
        onSearch(valu);
    }

    return (
        <div className="sticky input-group h-10 w-full">
            <input className="text-xl ig-input text-center" placeholder='Enter a song' type="text" onChange={handleInputChange}/>
        </div>
    )
}

export default Search;