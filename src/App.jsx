import React, { useEffect, useState } from 'react'
import Search from './components/Search'
import { getTrendingHouses } from './apiCalls'

const App = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [trendingHouses, setTrendingHouses] = useState([])

    useEffect(() => {
        const houses = loadTrendingHouses()
    }, [])

    const loadTrendingHouses = async () => {
        try {
          const houses = await getTrendingHouses(-118.504744, 34.01822, 0.5, true)
          setTrendingHouses(houses);
        } catch (error) {
          console.error(`Error fetching trending houses: ${error}`);
        }
      }

    return (
        <main>
            <div className='wrapper'>
                <header>
                    <img src="public\logo192.png" alt="logo"/>
                    <h1>Allen's Zillow!</h1>
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                </header>


                <section></section>
            </div>
        </main>
    )
}

export default App