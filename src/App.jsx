import React, { useEffect, useState } from 'react'
import Search from './components/Search'
import { getHouses } from './helpers/apiCalls'
import HouseCard from './components/HouseCard'

// TEST 123
const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Santa Monica, CA');
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(2);
    const [houses, setHouses] = useState([]);

    const resultsPerPage = 41;

    useEffect(() => {
        setCurrentPage(1);
    }, [])

    useEffect(() => {
        loadHouses(searchTerm, currentPage);
    }, [currentPage])

    const loadHouses = async (searchTerm, currentPage) => {
        try {
            setIsLoading(true);
            const result = await getHouses(searchTerm, currentPage);
            setCount(result.totalResultCount);
            setHouses(result.props);
        } catch (error) {
            console.error(`Error fetching houses: ${error}`);
        } finally {
            setIsLoading(false)
        }
      }

    return (
        <main>
            <div className='wrapper'>
                <header>
                    <h1>Allen's Zillow!</h1>
                    <Search 
                        searchTerm={searchTerm} 
                        setSearchTerm={setSearchTerm} 
                        loadHouses={loadHouses}
                    />
                </header>

                <div>
                    {isLoading ? <div>
                        Loading...
                    </div> : 
                    count > 0 ? <div>
                        <div>
                            {Array.from({length: count/resultsPerPage+1}, (_, index) => (
                                <button>{index + 1}</button>
                            ))}
                        </div>                        
                        <h1>{count} houses found!</h1>
                        <h4>Displaying houses {1+(currentPage-1)*resultsPerPage}~{Math.min(currentPage*resultsPerPage, count)}</h4>
                        <ul>
                            {houses.map((house, index) => (
                                <HouseCard
                                    id={house.zpid}
                                    index={index + (currentPage-1)*resultsPerPage}
                                    address={house.address}
                                    country={house.country}
                                    bathrooms={house.bathrooms}
                                    bedrooms={house.bedrooms}
                                    livingArea={house.livingArea}
                                    lotAreaUnit={house.lotAreaUnit}
                                    imgSrc={house.imgSrc}
                                    price={house.price}
                                    zestimate={house.zestimate}
                                    currency={house.currency}
                                />
                            ))}
                        </ul>
                    </div> : <div>
                        Too bad bro, we don't see any houses here!
                    </div>
                    }
                </div>
            </div>
        </main>
    )
}

export default App