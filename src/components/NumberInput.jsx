import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

const NumberInput = (name) => {
  const [numeros, setNumeros] = useState({
    numero1:0,
    numero2:0
  })
  const handleChange=(e)=>{
    setNumeros(e.target.value);
  };
  return (
    <>
        <label>
            {name}: <input type="text" name="" id="" onChange={handleChange}/>
        </label>
    </>
  )
}

NumberInput.propTypes = {
    name: PropTypes.string,
}

export default NumberInput