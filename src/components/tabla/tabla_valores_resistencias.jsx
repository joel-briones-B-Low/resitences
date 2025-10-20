import { useState } from 'react'

import RowValorResistencia from './row/row_valor_resistencias';

function TablaValoresResistencias() {

  const resistorData = [
    {
      color: 'NEGRO',
      bgColor: '#000000',
      textColor: '#ffffff',
      value1: '0',
      value2: '0',
      value3: '0',
      multiplier: '1Ω',
      tolerance: '± 1%'
    },
    {
      color: 'MARRÓN',
      bgColor: '#8B4513',
      textColor: '#ffffff',
      value1: '1',
      value2: '1',
      value3: '1',
      multiplier: '10Ω',
      tolerance: '± 2%'
    },
    {
      color: 'ROJO',
      bgColor: '#FF0000',
      textColor: '#ffffff',
      value1: '2',
      value2: '2',
      value3: '2',
      multiplier: '100Ω',
      tolerance: ''
    },
    {
      color: 'NARANJA',
      bgColor: '#FFA500',
      textColor: '#000000',
      value1: '3',
      value2: '3',
      value3: '3',
      multiplier: '1KΩ',
      tolerance: ''
    },
    {
      color: 'AMARILLO',
      bgColor: '#FFFF00',
      textColor: '#000000',
      value1: '4',
      value2: '4',
      value3: '4',
      multiplier: '10KΩ',
      tolerance: ''
    },
    {
      color: 'VERDE',
      bgColor: '#00FF00',
      textColor: '#000000',
      value1: '5',
      value2: '5',
      value3: '5',
      multiplier: '100KΩ',
      tolerance: '± 0.5%'
    },
    {
      color: 'AZUL',
      bgColor: '#0000FF',
      textColor: '#ffffff',
      value1: '6',
      value2: '6',
      value3: '6',
      multiplier: '1MΩ',
      tolerance: '± 0.25%'
    },
    {
      color: 'VIOLETA',
      bgColor: '#8B00FF',
      textColor: '#ffffff',
      value1: '7',
      value2: '7',
      value3: '7',
      multiplier: '10MΩ',
      tolerance: '± 0.10%'
    },
    {
      color: 'GRIS',
      bgColor: '#808080',
      textColor: '#ffffff',
      value1: '8',
      value2: '8',
      value3: '8',
      multiplier: '',
      tolerance: '± 0.05%'
    },
    {
      color: 'BLANCO',
      bgColor: '#FFFFFF',
      textColor: '#000000',
      value1: '9',
      value2: '9',
      value3: '9',
      multiplier: '',
      tolerance: ''
    },
    {
      color: 'ORO',
      bgColor: '#FFD700',
      textColor: '#000000',
      value1: '',
      value2: '',
      value3: '',
      multiplier: '0.1Ω',
      tolerance: '± 5%'
    },
    {
      color: 'PLATA',
      bgColor: '#C0C0C0',
      textColor: '#000000',
      value1: '',
      value2: '',
      value3: '',
      multiplier: '0.01Ω',
      tolerance: '± 10%'
    }
  ];


  const [colorSelected, setColorSelected] = useState(null);

  return (
    <div className="max-w-5xl mx-auto p-4 font-sans">
      <div className="flex items-center justify-between p-4 border-2 border-black mb-0 bg-white gap-5 dark:bg-gray-900 dark:border-gray-700">
        <h4 className="text-2xl font-bold text-center flex-1 text-gray-900 dark:text-gray-100">Código de colores</h4>
      </div>
      <div className="overflow-x-auto border-2 border-black border-t-0 dark:border-gray-700">
        <table className="w-full border-collapse bg-white dark:bg-gray-900">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="px-3 py-2 text-center font-bold text-sm border border-black dark:border-gray-700 whitespace-nowrap">COLOR</th>
              <th className="px-3 py-2 text-center font-bold text-sm border border-black dark:border-gray-700 whitespace-nowrap">VALOR 1</th>
              <th className="px-3 py-2 text-center font-bold text-sm border border-black dark:border-gray-700 whitespace-nowrap">VALOR 2</th>
              <th className="px-3 py-2 text-center font-bold text-sm border border-black dark:border-gray-700 whitespace-nowrap">VALOR 3</th>
              <th className="px-3 py-2 text-center font-bold text-sm border border-black dark:border-gray-700 whitespace-nowrap">MULTIPLICADOR</th>
              <th className="px-3 py-2 text-center font-bold text-sm border border-black dark:border-gray-700 whitespace-nowrap">TOLERANCIA</th>
            </tr>
          </thead>
          <tbody>
            {resistorData.map((resistor, index) => (
              <RowValorResistencia
                key={index}
                data={resistor}
                isSelected={colorSelected === resistor.color}
                onClick={() => setColorSelected(resistor.color)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

}

export default TablaValoresResistencias
