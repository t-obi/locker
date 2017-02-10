import React from 'react';

function NumberInput ({ onClick }) {
  
  const cellStyles = "f1 pa3 bb bw2 b--white tc self-end";

  return (
    <table className="w-100 flex-auto">
      <tbody>
        <tr>
          <td onClick={() => onClick(1)} className={cellStyles}>1</td>
          <td onClick={() => onClick(2)} className={cellStyles}>2</td>
          <td onClick={() => onClick(3)} className={cellStyles}>3</td>
        </tr>
        <tr>
          <td onClick={() => onClick(4)} className={cellStyles}>4</td>
          <td onClick={() => onClick(5)} className={cellStyles}>5</td>
          <td onClick={() => onClick(6)} className={cellStyles}>6</td>
        </tr>
        <tr>
          <td onClick={() => onClick(7)} className={cellStyles}>7</td>
          <td onClick={() => onClick(8)} className={cellStyles}>8</td>
          <td onClick={() => onClick(9)} className={cellStyles}>9</td>
        </tr>
        <tr>
          <td onClick={() => onClick('delete')} className={cellStyles}>{"<-"}</td>
          <td onClick={() => onClick(0)} className={cellStyles}>0</td>
          <td onClick={() => onClick('done')} className={`${cellStyles} f4`}>done</td>
        </tr>
      </tbody>
    </table>
  );
}

export default NumberInput;
