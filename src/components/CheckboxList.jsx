import React from 'react';

const CheckboxList = ({ title, tickers, selectedTickers, handleCheckboxChange }) => {
  return (
    <div className="checkbox-list">
      <h2>{title}</h2>
      <div className="checkbox-list__items">
        {tickers.map((ticker) => (
          <label key={ticker} className="checkbox-item">
            <input
              type="checkbox"
              value={ticker}
              checked={selectedTickers.includes(ticker)}
              onChange={() => handleCheckboxChange(ticker)}
            />
            {ticker}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxList;
