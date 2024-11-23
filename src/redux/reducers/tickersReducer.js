const initialState = {
    selectedTickers: [],
  };
  
  const tickersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_TICKER':
        const ticker = action.payload;
        return {
          ...state,
          selectedTickers: state.selectedTickers.includes(ticker)
            ? state.selectedTickers.filter((t) => t !== ticker)
            : [...state.selectedTickers, ticker],
        };
      default:
        return state;
    }
  };
  
  export default tickersReducer;
  