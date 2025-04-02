import React from 'react'

const Checkbox = ({text, variable, setVariable}) => {
    return (
        <div>
            {text}
            <input
                type="checkbox"
                checked={variable}
                onClick={(e) => setVariable(e.target.checked)}
            />
        </div>
    )
}

export default Checkbox