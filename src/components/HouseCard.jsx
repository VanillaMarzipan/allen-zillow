import React from 'react'
import { formatNumber } from '../helpers/helpers'

const HouseCard = ({zpid, index, address, country, bathrooms, bedrooms, livingArea, lotAreaUnit, imgSrc, price, zestimate, currency}) => {

    return (
        <li key={index}>
            <>
                <h3>{index+1}: {address}, {country}</h3>
                <div>{bathrooms} Bathrooms, {bedrooms} Bedrooms, {livingArea} {lotAreaUnit}</div>
                <div>{formatNumber(price)}{zestimate ? (' ~ ') + formatNumber(zestimate) : ''} {currency}<br/><br/></div>
                <div></div>

                <img 
                    src={imgSrc} 
                    alt={zpid}
                />
            </>
        </li>
    )
}

export default HouseCard