import React from 'react';

function NumberDisplay ({ number, onClick }) {

  return (
    <div className="flex-auto flex justify-center flex-column w5 overflow-scroll">
      <div onClick={onClick} className="f1 pa2 bb w--white bw2 fw7 tracked">
        {number}
      </div>
    </div>
  );
}

export default NumberDisplay;
