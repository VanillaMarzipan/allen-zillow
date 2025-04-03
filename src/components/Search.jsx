import React from 'react'

const Search = ({loadHouses, searchTerm, setSearchTerm, currentPage, statusType, homeType}) => {
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
                            loadHouses(searchTerm, currentPage, statusType, homeType);
                        }
                    }}
                />
                <button 
                    onClick={() => {loadHouses(searchTerm, currentPage, statusType, homeType)}}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Search