import React, { useEffect, useState } from 'react'
import Search from './components/Search'
import { getHouses } from './helpers/apiCalls'
import HouseCard from './components/HouseCard'
import PageButtons from './components/PageButtons'
import { appStrings, statusTypes } from './config/config'
import Filter from './components/Filter'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState(appStrings.defaultSearchTerm);
    const [totalResultCount, setTotalResultCount] = useState(-1); // TODO: Temporary 'Too bad bro!'
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [houses, setHouses] = useState([]);

    // WISHLIST
    /*
        Caching
        Lazy loading
        Auth and accounts
    */

    // Filters O'Plenty
    // TODO: Create the filter component
    // TODO: Maybe move all of them to redux?

    /*
    Rule of Thumb:
    Start with useState for managing local component state. If you find yourself passing props down through many levels or if multiple unrelated components need to access and modify the same data, then consider introducing Redux (or another global state management solution).
    */
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [statusType, setStatusType] = useState('ForSale'); // ForSale, ForRent, RecentlySold
    const [homeType, setHomeType] = useState('Houses'); // Townhomes, Houses, Apartments_Condos_Co-ops, etc.
    // const [sort, setSort] = useState('Homes_for_You');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [rentMinPrice, setRentMinPrice] = useState(0);
    const [rentMaxPrice, setRentMaxPrice] = useState(0);
    const [bedsMin, setBedsMin] = useState(0);
    const [bedsMax, setBedsMax] = useState(0);
    const [bathroomsMin, setBathroomsMin] = useState(0);
    const [bathroomsMax, setBathroomsMax] = useState(0);

    // Hardcoded API vars!
    const resultsPerPage = 41;
    const maxPages = 20;

    useEffect(() => {
        loadHouses(searchTerm, currentPage, statusType, homeType);
    }, [currentPage])

    const loadHouses = async (searchTerm, currentPage, statusType, homeType) => {
        try {
            setIsLoading(true);
            const result = await getHouses(searchTerm, currentPage, statusType, homeType);
            setTotalResultCount(result.totalResultCount);
            setTotalPages(result.totalPages);
            setHouses(result.props);
        } catch (error) {
            console.error(`Error fetching houses: ${error}`);
        } finally {
            setIsLoading(false)
        }
    }

    const loadingScreen = (
        <div>
            Loading...
        </div>
    );

    const resultScreen = (
        <div>
            <>{totalResultCount} {totalPages} {currentPage}</>
            <PageButtons
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            {totalResultCount > resultsPerPage * maxPages ? // 820
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
        </div>
    ); 

    const noResultScreen = (
        <div>
            {appStrings.noResults}
        </div>
    );

    return (
        <main>
            <Header/>
            <Search 
                loadHouses={loadHouses}
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
                currentPage={currentPage}
                statusType={statusType}
                homeType={homeType}
            />
            <Filter
                // TODO: You really wanna move this to redux...
                isFilterOpen={isFilterOpen}
                setIsFilterOpen={setIsFilterOpen}
                statusType={statusType}
                setStatusType={setStatusType}
                homeType={homeType}
                setHomeType={setHomeType}
                minPrice={minPrice}
                maxPrice={maxPrice}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice} 
                rentMinPrice={rentMinPrice}
                rentMaxPrice={rentMaxPrice}
                setRentMinPrice={setRentMinPrice}
                setRentMaxPrice={setRentMaxPrice}
                bedsMin={bedsMin}
                bedsMax={bedsMax}
                setBedsMin={setBedsMin}
                setBedsMax={setBedsMax}
                bathroomsMin={bathroomsMin}
                bathroomsMax={bathroomsMax}
                setBathroomsMin={setBathroomsMin}
                setBathroomsMax={setBathroomsMax}          
            />
            <div>
                {isLoading ? loadingScreen : 
                totalResultCount > 0 ? resultScreen : noResultScreen}
            </div>
            <Footer/>
        </main>
    )
}

export default App