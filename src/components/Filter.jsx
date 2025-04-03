import React from 'react'
import { filterDescriptions, homeTypes, statusTypes } from '../config/config'
import Options from './Options'

const Filter = ({
    isFilterOpen, setIsFilterOpen, 
    statusType, setStatusType,
    homeType, setHomeType,
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
        </div>
        }
    </div>
  )
}

export default Filter