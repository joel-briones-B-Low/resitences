
import { useState } from 'react'
import PWABadge from './PWABadge.jsx'
import SvgResistencia from './components/svg/svg_resistencia.jsx'
import SeleccionColorBanda from './components/color_banda/color_banda.jsx'
import TablaValoresResistencias from './components/tabla/tabla_valores_resistencias.jsx'

function App() {
  const calcularResistencia = () => {
    const value = parseInt(band1 + band2) * Math.pow(10, parseInt(band3));
    let unit = 'Ω';
    let displayValue = value;

    if (value >= 1000000) {
      displayValue = value / 1000000;
      unit = 'MΩ';
    } else if (value >= 1000) {
      displayValue = value / 1000;
      unit = 'KΩ';
    }

    return `${displayValue}${unit} ${band4}`;
  };

  const [band1, setBand1] = useState('4');
  const [band2, setBand2] = useState('7');
  const [band3, setBand3] = useState('2');
  const [band4, setBand4] = useState('±5%');

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-gray-900 dark:text-gray-100 tracking-tight">CALCULADORA DE RESISTENCIAS</h1>
        <div className="flex flex-col items-center justify-center mb-6">
          <SvgResistencia band1={band1} band2={band2} band3={band3} band4={band4} />
        </div>
        <TablaValoresResistencias />
        <div className="text-center text-xl my-6 p-4 bg-blue-50 border-2 border-blue-400 rounded-lg dark:bg-blue-900 dark:border-blue-600 dark:text-blue-100">
          Valor: <strong className="text-blue-700 dark:text-blue-300 text-2xl">{calcularResistencia()}</strong>
        </div>
        <div className="grid gap-4">
          <SeleccionColorBanda bandaName="Banda 1" bandaValue={band1} setBandaValue={setBand1} />
          <SeleccionColorBanda bandaName="Banda 2" bandaValue={band2} setBandaValue={setBand2} />
          <SeleccionColorBanda bandaName="Banda 3 (Multiplicador)" bandaValue={band3} setBandaValue={setBand3} />
          <SeleccionColorBanda bandaName="Banda 4 (Tolerancia)" bandaValue={band4} setBandaValue={setBand4} />
        </div>
        <div className="mt-8">
          <PWABadge />
        </div>
      </div>
    </div>
  )
}

export default App
