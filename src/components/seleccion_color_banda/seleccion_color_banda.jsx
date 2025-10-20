import { useState } from 'react'
import './seleccion_color_banda.css'

function SeleccionColorBanda({bandaName, bandaValue, setBandaValue}) {

const colorMap = {
  '0': { name: 'NEGRO', color: '#000000' },
  '1': { name: 'MARRÓN', color: '#8B4513' },
  '2': { name: 'ROJO', color: '#FF0000' },
  '3': { name: 'NARANJA', color: '#FFA500' },
  '4': { name: 'AMARILLO', color: '#FFFF00' },
  '5': { name: 'VERDE', color: '#00FF00' },
  '6': { name: 'AZUL', color: '#0000FF' },
  '7': { name: 'VIOLETA', color: '#8B00FF' },
  '8': { name: 'GRIS', color: '#808080' },
  '9': { name: 'BLANCO', color: '#FFFFFF' }
};
const toleranceColorMap = {
  '±1%': { name: 'MARRÓN', color: '#8B4513' },
  '±2%': { name: 'ROJO', color: '#FF0000' },
  '±0.5%': { name: 'VERDE', color: '#00FF00' },
  '±0.25%': { name: 'AZUL', color: '#0000FF' },
  '±0.1%': { name: 'VIOLETA', color: '#8B00FF' },
  '±0.05%': { name: 'GRIS', color: '#808080' },
  '±5%': { name: 'ORO', color: '#FFD700' },
  '±10%': { name: 'PLATA', color: '#C0C0C0' }
};

  return (
    <>
        <div className="control-group">
          <label>{bandaName}:</label>
          <select value={bandaValue} onChange={(e) => setBandaValue(e.target.value)}>
            {Object.keys(colorMap).map(key => (
              <option key={key} value={key}>
                {key} - {colorMap[key].name}
              </option>
            ))}
          </select>
          {bandaName == 'Banda 4 (Tolerancia)' ? 
          <div className="color-preview" style={{ backgroundColor: toleranceColorMap[bandaValue]?.color }}></div>
          :
          <div className="color-preview" style={{ backgroundColor: colorMap[bandaValue]?.color, border: '1px solid #000' }}></div>
          }
        </div>
    </>
  )
}

export default SeleccionColorBanda
