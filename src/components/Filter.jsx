import React from 'react'
import { filterDescriptions, homeTypes, statusTypes } from '../config/config'
import Options from './Options'




const Filter = ({
        isFilterOpen, setIsFilterOpen, 
        statusType, setStatusType,
        homeType, setHomeType,
        minPrice, setMinPrice,
        maxPrice, setMaxPrice,
        rentMinPrice, setRentMinPrice,
        rentMaxPrice, setRentMaxPrice,
        bedsMin, setBedsMin,
        bedsMax, setBedsMax,
        bathroomsMin, setBathroomsMin,
        bathroomsMax, setBathroomsMax,
    }) => {
    
    return (
        <div>
            <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
                More options
            </button>

            {isFilterOpen && 
            <div>
                <Options
                    options={statusTypes}
                    desc={filterDescriptions.statusTypes}
                    variable={statusType}
                    setVariable={setStatusType}
                />
                <Options
                    options={homeTypes}
                    desc={filterDescriptions.homeTypes}
                    variable={homeType}
                    setVariable={setHomeType}
                />
                {
                    (statusType === 'ForSale' || statusType === 'RecentlySold') ?
                    <div>
                        <label>{filterDescriptions.minPrice}</label>
                        <input
                            type='number'
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                        />
                        <label>{filterDescriptions.maxPrice}</label>
                        <input
                            type='number'
                            placeholder={minPrice}
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                    </div> : 
                    <div>
                        <label>{filterDescriptions.rentMinPrice}</label>
                        <input
                            type='number'
                            value={rentMinPrice}
                            onChange={(e) => setRentMinPrice(e.target.value)}
                        />
                        <label>{filterDescriptions.rentMaxPrice}</label>
                        <input
                            type='number'
                            placeholder={rentMinPrice}
                            value={rentMaxPrice}
                            onChange={(e) => setRentMaxPrice(e.target.value)}
                        />
                    </div>
                }
                
            </div>
            }
        </div>
    )
}

export default Filter