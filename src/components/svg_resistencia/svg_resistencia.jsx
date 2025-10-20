
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

// Componente SVG de la resistencia
const SvgResistencia = ({ band1, band2, band3, band4 }) => {
  const color1 = colorMap[band1]?.color || '#000000';
  const color2 = colorMap[band2]?.color || '#000000';
  const color3 = colorMap[band3]?.color || '#000000';
  const color4 = toleranceColorMap[band4]?.color || '#FFD700';

  return (
    <svg viewBox="0 0 400 150" className="resistor-svg">
      {/* Cables de la resistencia */}
      <line x1="10" y1="75" x2="80" y2="75" stroke="#888" strokeWidth="4" />
      <line x1="320" y1="75" x2="390" y2="75" stroke="#888" strokeWidth="4" />
      
      {/* Cuerpo de la resistencia */}
      <rect x="80" y="50" width="240" height="50" fill="#D2B48C" stroke="#8B7355" strokeWidth="2" rx="5" />
      
      {/* Sombra del cuerpo */}
      <rect x="80" y="85" width="240" height="15" fill="#00000020" rx="5" />
      
      {/* Banda 1 */}
      <rect x="110" y="45" width="20" height="60" fill={color1} stroke="#000" strokeWidth="1" />
      
      {/* Banda 2 */}
      <rect x="160" y="45" width="20" height="60" fill={color2} stroke="#000" strokeWidth="1" />
      
      {/* Banda 3 (Multiplicador) */}
      <rect x="210" y="45" width="20" height="60" fill={color3} stroke="#000" strokeWidth="1" />
      
      {/* Banda 4 (Tolerancia)  */}
      <rect x="270" y="45" width="20" height="60" fill={color4} stroke="#000" strokeWidth="1" />
      
      {/* Brillo en el cuerpo */}
      <rect x="85" y="52" width="230" height="8" fill="#FFFFFF40" rx="3" />
    </svg>
  );
};

export default SvgResistencia;