import axios from 'axios';

export const toggleTicker = (ticker) => ({
  type: 'TOGGLE_TICKER',
  payload: ticker,
});

export const fetchResults = (tickers) => async (dispatch) => {
  if (tickers.length === 0) {
    alert('Selecciona al menos una acción');
    return;
  }

  dispatch({ type: 'FETCH_RESULTS_REQUEST' });

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/market/daily-signals`,
      {
        params: {
          tickers: tickers.join(','),
          interval: '1d',
        },
      }
    );
    dispatch({ type: 'FETCH_RESULTS_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Error fetching signals:', error);
    dispatch({ type: 'FETCH_RESULTS_FAILURE', payload: error.message });
    alert('Error al consultar las señales');
  }
};
