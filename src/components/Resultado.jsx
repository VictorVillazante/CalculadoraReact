import React from 'react'
import PropTypes from 'prop-types'

const Resultado = (operacion,calculo) => {
  return (
    <div>
        <span>{operacion}: {calculo}</span><br />
    </div>
  )
}

Resultado.propTypes = {
    operacion:PropTypes.string,
    calculo:PropTypes.number

}

export default Resultado