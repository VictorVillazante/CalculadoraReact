import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import Resultado from './Resultado'
import { funciones } from '../helper/funciones'
const NumberInput = () => {
  const [numeros, setNumeros] = useState({
    numero1:0,
    numero2:0,    
  });
  const {numero1,numero2}=numeros;

  const {handleChange,suma,resta,multiplicacion,division}=funciones(numeros, setNumeros);

  return (
    <>
        <label className='mx-2'>
            {"Numero 1"}: <input name="numero1" value={numero1} type="number" id="" onChange={handleChange}/>
        </label>
        <label className='mx-2'>
            {"Numero 2"}: <input name="numero2" value={numero2} type="number" id="" onChange={handleChange}/>
        </label>

        <Resultado operacion="Suma" calculo={suma()}/>
        <Resultado operacion="Resta" calculo={resta()}/>
        <Resultado operacion="Multiplicacion" calculo={multiplicacion()}/>
        <Resultado operacion="Division" calculo={division()}/>

    </>
  )
}

NumberInput.propTypes = {
    name: PropTypes.string,
}

export default NumberInput