import React, { useEffect, useState } from 'react'
import Search from './components/Search'
import { getHouses } from './helpers/apiCalls'
import HouseCard from './components/HouseCard'
import PageButtons from './components/PageButtons'

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Santa Monica, CA');
    const [totalResultCount, setTotalResultCount] = useState(-1); // TODO: Temporary 'Too bad bro!'
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [houses, setHouses] = useState([]);

    // Hardcoded API vars!
    const resultsPerPage = 41;
    const maxPages = 20;

    useEffect(() => {
        loadHouses(searchTerm, currentPage);
    }, [currentPage])

    const loadHouses = async (searchTerm, currentPage) => {
        try {
            setIsLoading(true);
            const result = await getHouses(searchTerm, currentPage);
            setTotalResultCount(result.totalResultCount);
            setTotalPages(result.totalPages);
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
                        currentPage={currentPage}
                        loadHouses={loadHouses}
                    />
                </header>

                <div>
                    {isLoading ? 
                    <div>
                        Loading...
                    </div> : 
                    totalResultCount > 0 ? 
                    <div>
                        <>{totalResultCount} {totalPages} {currentPage}</>
                        <PageButtons
                            totalPages={totalPages}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                        {totalResultCount > resultsPerPage * maxPages ? 
                            <h1>Too many houses! Showing only the first {resultsPerPage * maxPages} results!</h1> : 
                            <h1>{totalResultCount} houses found!</h1>
                        }                    
                        <h4>
                            Displaying houses {1+(currentPage-1)*resultsPerPage}~
                            {Math.min(currentPage*resultsPerPage, Math.min(resultsPerPage * maxPages, totalResultCount))}
                        </h4>
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
                        <PageButtons
                            totalPages={totalPages}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div> : 
                    <div>
                        Too bad bro, we don't see any houses here!
                    </div>
                    }
                </div>
            </div>
        </main>
    )
}

export default App