import React from 'react'
import { filterDescriptions, homeTypes, statusTypes } from '../config/config'
import Options from './Options'
import InputBox from './InputBox'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterOpen } from '../actions/uiActions'

const Filter = ({
        statusType, setStatusType,
        homeType, setHomeType,
        minPrice, setMinPrice,
        maxPrice, setMaxPrice,
        rentMinPrice, setRentMinPrice,
        rentMaxPrice, setRentMaxPrice,
        bedsMin, setBedsMin,
        bedsMax, setBedsMax,
        bathsMin, setBathsMin,
        bathsMax, setBathsMax,
    }) => {
    
    const dispatch = useDispatch();
    const isFilterOpen = useSelector(state => state.uiData);
    
    return (
        <div>
            <button
                onClick={() => dispatch(setFilterOpen(!isFilterOpen))}
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
                        <InputBox
                            desc={filterDescriptions.minPrice}
                            variable={minPrice}
                            setVariable={setMinPrice}
                        />
                        <InputBox
                            desc={filterDescriptions.maxPrice}
                            variable={maxPrice}
                            setVariable={setMaxPrice}
                        />
                    </div> : 
                    <div>
                        <InputBox
                            desc={filterDescriptions.rentMinPrice}
                            type='number'
                            variable={rentMinPrice}
                            setVariable={setRentMinPrice}
                        />
                        <InputBox
                            desc={filterDescriptions.rentMaxPrice}
                            type='number'
                            variable={rentMaxPrice}
                            setVariable={setRentMaxPrice}
                        />
                    </div>
                }
                <div>
                    <InputBox
                        desc={filterDescriptions.bedsMin}
                        type='number'
                        variable={bedsMin}
                        setVariable={setBedsMin}
                    />
                    <InputBox
                        desc={filterDescriptions.bedsMax}
                        type='number'
                        variable={bedsMax}
                        setVariable={setBedsMax}
                    />
                </div>
                <div>
                    <InputBox
                        desc={filterDescriptions.bathsMin}
                        type='number'
                        variable={bathsMin}
                        setVariable={setBathsMin}
                    />
                    <InputBox
                        desc={filterDescriptions.bathsMax}
                        type='number'
                        variable={bathsMax}
                        setVariable={setBathsMax}
                    />
                </div>
            </div>
            }
        </div>
    )
}

export default Filter