import React from 'react';

const Results = ({ results }) => {
  return (
    <div className="results">
      <h2>Resultados</h2>
      {results.map(({ ticker, buy, sell, currentPrice }) => (
        <div key={ticker} className="result-item">
          <strong>{ticker}</strong>: {buy ? 'Compra' : sell ? 'Venta' : 'Sin señal'} - Precio: {currentPrice}
        </div>
      ))}
    </div>
  );
};

export default Results;
