import React from 'react'

const Search = ({loadHouses, searchTerm, setSearchTerm, currentPage, statusType, homeType, minPrice, maxPrice, rentMinPrice, rentMaxPrice, bedsMin, bedsMax, bathsMin, bathsMax}) => {
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
                            loadHouses(searchTerm, currentPage, statusType, homeType, minPrice, maxPrice, rentMinPrice, rentMaxPrice, bedsMin, bedsMax, bathsMin, bathsMax);
                        }
                    }}
                />
                <button 
                    onClick={() => {loadHouses(searchTerm, currentPage, statusType, homeType, minPrice, maxPrice, rentMinPrice, rentMaxPrice, bedsMin, bedsMax, bathsMin, bathsMax)}}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Search