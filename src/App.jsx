import { useState } from 'react'
import appLogo from './assets/resistance.png'
import PWABadge from './PWABadge.jsx'
import './App.css'
import TablaValoresResistencias from './components/tabla_valores_resistencias/tabla_valores_resistencias.jsx'
import SvgResistencia from './components/svg_resistencia/svg_resistencia.jsx'
import SeleccionColorBanda from './components/color_banda/color_banda.jsx'

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
    <>
      <div>
        <h1 className="title">CALCULADORA DE RESISTENCIAS</h1>
        <SvgResistencia band1={band1} band2={band2} band3={band3} band4={band4} />
      </div>
      <TablaValoresResistencias />
      <div className="resistance-value">
        Valor: <strong>{calcularResistencia()}</strong>
      </div>
      <SeleccionColorBanda bandaName="Banda 1" bandaValue={band1} setBandaValue={setBand1} />
      <SeleccionColorBanda bandaName="Banda 2" bandaValue={band2} setBandaValue={setBand2} />
      <SeleccionColorBanda bandaName="Banda 3 (Multiplicador)" bandaValue={band3} setBandaValue={setBand3} />
      <SeleccionColorBanda bandaName="Banda 4 (Tolerancia)" bandaValue={band4} setBandaValue={setBand4} />
      <PWABadge />
    </>
  )
}

export default App
