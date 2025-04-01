import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {


    return (
        <div className="search">
            <div>
                <img src="search.svg" alt="search" />        
                <input
                    type="text"
                    placeholder="Find your dream house!"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Search