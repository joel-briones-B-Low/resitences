import { useState } from 'react'
import './/row_valor_resistencias.css';

function RowValorResistencia({ data, isSelected, onClick }) {


  return (
    <>
      <tr 
      className={`resistor-row ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      style={{ 
        backgroundColor: data.bgColor,
        color: data.textColor
      }}
    >
      <td className="color-name">{data.color}</td>
      <td>{data.value1}</td>
      <td>{data.value2}</td>
      <td>{data.value3}</td>
      <td>{data.multiplier}</td>
      <td>{data.tolerance}</td>
    </tr>
    </>
  )
}

export default RowValorResistencia
