import React from 'react'
import { appStrings } from '../config/config'

const Header = () => {
  return (
    <div>
        <h1>{appStrings.appTitle}</h1>
    </div>
  )
}

export default Header