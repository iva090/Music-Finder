import { SearchIcon } from 'lucide-react';

function Search({ onSearch }) {

    const handleInputChange = (e) => {
        const valu = e.target.value;
        onSearch(valu);
    }

    return (
        <div className="input-group grid-cols-[auto_1fr_auto]">
            <div className="ig-cell preset-tonal">
                <SearchIcon size={16} />
            </div>
            <input className="ig-input" type="text" placeholder="Search..." onChange={handleInputChange}/>
        </div>
    )
}

export default Search;