import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CheckboxList from '../components/CheckboxList';
import Results from '../components/Results';
import { toggleTicker, fetchResults } from '../redux/actions';
import { B3_ACTIONS, AMERICAN_ACTIONS } from '../constants';

const Signals = () => {
  const dispatch = useDispatch();
  const selectedTickers = useSelector((state) => state.tickers.selectedTickers);
  const { data: results, loading, error } = useSelector((state) => state.results);

  const handleCheckboxChange = (ticker) => {
    dispatch(toggleTicker(ticker));
  };

  const handleFetchSignals = () => {
    dispatch(fetchResults(selectedTickers));
  };

  return (
    <div className="signals">
      <h1>Consulta de Señales</h1>

      <CheckboxList
        title="Acciones de B3"
        tickers={B3_ACTIONS}
        selectedTickers={selectedTickers}
        handleCheckboxChange={handleCheckboxChange}
      />

      <CheckboxList
        title="Acciones Americanas"
        tickers={AMERICAN_ACTIONS}
        selectedTickers={selectedTickers}
        handleCheckboxChange={handleCheckboxChange}
      />

      <button onClick={handleFetchSignals} className="button button--primary">
        Consultar Señales
      </button>

      {loading && <p>Cargando resultados...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <Results results={results} />}
    </div>
  );
};

export default Signals;
