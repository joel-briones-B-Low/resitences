

function RowValorResistencia({ data, isSelected, onClick }) {


  return (
    <tr
      onClick={onClick}
      className={`cursor-pointer transition-all relative ${isSelected ? 'outline outline-4 outline-blue-600 z-20 shadow-lg scale-105 dark:outline-blue-400' : 'hover:scale-105 hover:shadow-md z-10'} `}
      style={{ backgroundColor: data.bgColor, color: data.textColor }}
    >
      <td className="font-bold text-base" style={{ color: data.textColor }}>{data.color}</td>
      <td>{data.value1}</td>
      <td>{data.value2}</td>
      <td>{data.value3}</td>
      <td>{data.multiplier}</td>
      <td>{data.tolerance}</td>
    </tr>
  )
}

export default RowValorResistencia
