import React from 'react'

const Search = ({searchTerm, setSearchTerm, loadHouses}) => {
    return (
        <div className="search">
            <div>
                <img src="search.svg" alt="search" />        
                <input
                    type="text"
                    placeholder="Find your dream house!"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyUp={(e) => {
                        if (e.key === "Enter") {
                            loadHouses(searchTerm);
                        }
                    }}
                />
                <button onClick={() => {loadHouses(searchTerm)}}>Submit</button>
            </div>
        </div>
    )
}

export default Search