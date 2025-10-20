import { useState } from 'react'

function SeleccionColorBanda({ bandaName, bandaValue, setBandaValue }) {

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
    <div className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 my-2">
      <label className="font-bold min-w-[140px] text-gray-700 dark:text-gray-200">{bandaName}:</label>
      <select
        value={bandaValue}
        onChange={(e) => setBandaValue(e.target.value)}
        className="flex-1 p-2 border-2 border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700"
      >
        {Object.keys(colorMap).map(key => (
          <option key={key} value={key}>
            {key} - {colorMap[key].name}
          </option>
        ))}
      </select>
      {bandaName == 'Banda 4 (Tolerancia)'
        ? <div className="w-8 h-8 border-2 border-black rounded bg-gray-200 dark:bg-gray-700" style={{ backgroundColor: toleranceColorMap[bandaValue]?.color }}></div>
        : <div className="w-8 h-8 border-2 border-black rounded" style={{ backgroundColor: colorMap[bandaValue]?.color }}></div>
      }
    </div>
  )
}

export default SeleccionColorBanda
