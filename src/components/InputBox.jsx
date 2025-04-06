import React from 'react'

const InputBox = ({desc, type, variable, setVariable}) => {
  return (
    <>
        <label>{desc}</label>
        <input
            type={type}
            value={variable}
            onChange={(e) => setVariable(e.target.value)}
        />
    </>
  )
}

export default InputBox