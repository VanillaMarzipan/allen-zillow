import React, { useEffect, useState } from 'react'
import Search from './components/Search'
import { getTrendingHouses } from './helpers/apiCalls'
import HouseCard from './components/HouseCard'
import { limitNumbers } from './helpers/helpers'

const App = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [trendingHouses, setTrendingHouses] = useState([])

    // Load trending houses
    useEffect(() => {
        loadTrendingHouses(-118.504744, 34.01822, 0.5, true);
    }, [])

    const loadTrendingHouses = async (long, lat, d, includeSold) => {
        d = limitNumbers(d);
        try {
            setIsLoading(true);
            const houses = await getTrendingHouses(long, lat, d, includeSold)
            setTrendingHouses(houses);
            console.log("********************");
            console.log(houses);
        } catch (error) {
            console.error(`Error fetching trending houses: ${error}`);
        } finally {
            setIsLoading(false)
        }
      }

    return (
        <main>
            <div className='wrapper'>
                <header>
                    <h1>Allen's Zillow!</h1>
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                </header>

                <div>
                    {isLoading ? <div>
                        Loading...
                    </div> : 
                    trendingHouses.length > 0 ? <div>
                        <h1>{trendingHouses.length} houses found!</h1>
                        <ul>
                            {trendingHouses.map((house, index) => (
                                <HouseCard
                                    index={index + 1}
                                    zpid={house.property.zpid}
                                    streetAddress={house.property.address.streetAddress}
                                    city={house.property.address.city}
                                    state={house.property.address.state}
                                    zipcode={house.property.address.zipcode}
                                    imgSrc={house.property.imgSrc}
                                    bedrooms={house.property.bedrooms}
                                    bathrooms={house.property.bathrooms}
                                    status={house.property.homeStatus}
                                    price={house.property.price}
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