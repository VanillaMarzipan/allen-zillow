import React from 'react'
import { formatNumber, formatString } from '../helpers/helpers'

const HouseCard = ({index, zpid, streetAddress, city, state, zipcode, imgSrc, bedrooms, bathrooms, status, price}) => {

    return (
        <li key={zpid}>
            <h2>{index}: {streetAddress}, {city}, {state} {zipcode}</h2>
            <h4>{bedrooms} Bedrooms, {bathrooms} Bathrooms. {formatString(status)} at {formatNumber(price)}</h4>
            <img src={imgSrc} alt={zpid}/>
        </li>
    )
}

export default HouseCard