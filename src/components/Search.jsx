import React from 'react'

const Search = ({searchTerm, setSearchTerm, currentPage, loadHouses}) => {
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
                            console.log(searchTerm);
                            loadHouses(searchTerm, currentPage);
                        }
                    }}
                />
                <button 
                    onClick={() => {loadHouses(searchTerm, currentPage)}}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Search