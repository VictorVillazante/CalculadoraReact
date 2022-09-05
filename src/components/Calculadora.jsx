import React, { useState } from 'react'
import NumberInput from './NumberInput'
import Resultado from './Resultado'

const Calculadora = () => {

    //const [suma, setSuma] = useState(0);
  return (
    <div className='container text-center'>
        <h1>Calculadora- PWA</h1>
        <NumberInput name="Numero 1" />

    </div>
  )
}

export default Calculadora