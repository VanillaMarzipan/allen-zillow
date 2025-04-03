import React from 'react'

const Options = ({options, desc, variable, setVariable}) => {
    console.log(options);

    return (
        <div>
            <label>{desc}</label>
            <select value={variable} onChange={(e) => setVariable(e.target.value)}>
                {options.map((option, _) => (
                    <option
                        key={option.key}
                        value={option.key}
                    >
                        {option.value}
                    </option>
                ))}    
            </select>    
        </div>
    )
}

export default Options